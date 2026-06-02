import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { createEmptyPost, defaultContent } from "../cms/defaultContent.js";
import { exportContentJson, importContentJson, loadContent, resetContent, saveContent, slugify } from "../cms/contentStore.js";

const ContentContext = createContext(null);

export function ContentProvider({ children }) {
  const [content, setContent] = useState(() => loadContent());
  const [saveMessage, setSaveMessage] = useState("");

  const refresh = useCallback(() => {
    setContent(loadContent());
  }, []);

  useEffect(() => {
    const onUpdate = () => refresh();
    window.addEventListener("dirre-content-updated", onUpdate);
    window.addEventListener("storage", onUpdate);
    return () => {
      window.removeEventListener("dirre-content-updated", onUpdate);
      window.removeEventListener("storage", onUpdate);
    };
  }, [refresh]);

  const persist = useCallback((next) => {
    setContent(next);
    saveContent(next);
    setSaveMessage("Changes saved.");
    window.setTimeout(() => setSaveMessage(""), 2400);
  }, []);

  const getPage = useCallback((key) => content.pages[key] ?? defaultContent.pages[key], [content]);

  const publishedPosts = useMemo(
    () =>
      [...content.posts]
        .filter((post) => post.status === "published")
        .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)),
    [content.posts],
  );

  const recentActivity = useMemo(() => {
    const postItems = content.posts.map((post) => ({
      id: post.id,
      title: post.title,
      type: "Post",
      status: post.status,
      updatedAt: post.updatedAt,
    }));

    const sectionItems = [
      { id: "home-about", title: content.pages.home?.about?.heading ?? "Why This Home Matters", type: "Page section", status: "published", updatedAt: content.posts[0]?.updatedAt },
    ];

    return [...postItems, ...sectionItems].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt)).slice(0, 8);
  }, [content]);

  const updatePage = useCallback(
    (pageKey, patch) => {
      persist({
        ...content,
        pages: {
          ...content.pages,
          [pageKey]: {
            ...content.pages[pageKey],
            ...patch,
          },
        },
      });
    },
    [content, persist],
  );

  const updatePageSection = useCallback(
    (pageKey, sectionKey, patch) => {
      persist({
        ...content,
        pages: {
          ...content.pages,
          [pageKey]: {
            ...content.pages[pageKey],
            [sectionKey]: {
              ...content.pages[pageKey]?.[sectionKey],
              ...patch,
            },
          },
        },
      });
    },
    [content, persist],
  );

  const updatePost = useCallback(
    (postId, patch) => {
      persist({
        ...content,
        posts: content.posts.map((post) =>
          post.id === postId ? { ...post, ...patch, updatedAt: new Date().toISOString() } : post,
        ),
      });
    },
    [content, persist],
  );

  const addPost = useCallback(() => {
    const post = createEmptyPost();
    const next = {
      ...content,
      posts: [post, ...content.posts],
    };
    persist(next);
    return post;
  }, [content, persist]);

  const deletePost = useCallback(
    (postId) => {
      persist({
        ...content,
        posts: content.posts.filter((post) => post.id !== postId),
      });
    },
    [content, persist],
  );

  const value = useMemo(
    () => ({
      content,
      saveMessage,
      getPage,
      publishedPosts,
      recentActivity,
      updatePage,
      updatePageSection,
      updatePost,
      addPost,
      deletePost,
      slugify,
      resetAll: () => {
        const next = resetContent();
        setContent(next);
        setSaveMessage("Content reset to defaults.");
      },
      exportJson: () => exportContentJson(content),
      importJson: async (file) => {
        const next = await importContentJson(file);
        setContent(next);
        setSaveMessage("Content imported.");
      },
    }),
    [
      content,
      saveMessage,
      getPage,
      publishedPosts,
      recentActivity,
      updatePage,
      updatePageSection,
      updatePost,
      addPost,
      deletePost,
    ],
  );

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
}

export function useContent() {
  const context = useContext(ContentContext);
  if (!context) {
    throw new Error("useContent must be used within ContentProvider");
  }
  return context;
}
