import { defaultContent } from "./defaultContent.js";
import { supabase } from "../lib/supabaseClient.js";

const STORAGE_KEY = "dirre-senior-home-cms";

function clone(value) {
  return JSON.parse(JSON.stringify(value));
}

export function loadContent() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return clone(defaultContent);

    const parsed = JSON.parse(raw);
    return mergeContent(parsed);
  } catch {
    return clone(defaultContent);
  }
}

export function saveContent(content) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(content));
  window.dispatchEvent(new CustomEvent("dirre-content-updated"));
}

export async function loadRemoteContent() {
  try {
    const { data, error } = await supabase
      .from("site_content")
      .select("data")
      .eq("id", "site-content")
      .single();

    if (error) {
      if (error.code === "PGRST116" || String(error.details).includes("Result contains no rows")) {
        return null;
      }
      console.error("Supabase load error:", error);
      return null;
    }

    return mergeContent(data?.data ?? null);
  } catch (error) {
    console.error("Supabase load failed:", error);
    return null;
  }
}

export async function saveRemoteContent(content) {
  try {
    const { error } = await supabase
      .from("site_content")
      .upsert({ id: "site-content", data: content }, { onConflict: "id" });

    if (error) {
      console.error("Supabase save error:", error);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Supabase save failed:", error);
    return false;
  }
}

export function resetContent() {
  localStorage.removeItem(STORAGE_KEY);
  window.dispatchEvent(new CustomEvent("dirre-content-updated"));
  return clone(defaultContent);
}

export function exportContentJson(content) {
  const blob = new Blob([JSON.stringify(content, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");
  anchor.href = url;
  anchor.download = `dirre-senior-home-content-${new Date().toISOString().slice(0, 10)}.json`;
  anchor.click();
  URL.revokeObjectURL(url);
}

export function importContentJson(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result));
        const merged = mergeContent(parsed);
        saveContent(merged);
        resolve(merged);
      } catch (error) {
        reject(error);
      }
    };
    reader.onerror = () => reject(reader.error);
    reader.readAsText(file);
  });
}

function mergeContent(parsed) {
  const base = clone(defaultContent);
  if (!parsed || typeof parsed !== "object") return base;

  // Upgrade version migration
  if ((parsed.version || 0) < base.version) {
    // If the saved version is older, reset pages content to pick up the new layout/text structures
    // but preserve any user-created posts.
    return {
      ...base,
      posts: Array.isArray(parsed.posts) ? parsed.posts : base.posts,
    };
  }

  return {
    version: parsed.version ?? base.version,
    site: parsed.site ?? base.site,
    posts: Array.isArray(parsed.posts) ? parsed.posts : base.posts,
    pages: {
      ...base.pages,
      ...(parsed.pages ?? {}),
    },
  };
}

export function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

export function formatAdminDate(iso) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
