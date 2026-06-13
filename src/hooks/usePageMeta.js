import { useEffect } from "react";

function ensureMeta(selector, create) {
  let element = document.querySelector(selector);
  if (!element) {
    element = create();
    document.head.appendChild(element);
  }
  return element;
}

function setMetaName(name, content) {
  if (!content) return;
  const meta = ensureMeta(`meta[name=\"${name}\"]`, () => {
    const tag = document.createElement("meta");
    tag.setAttribute("name", name);
    return tag;
  });
  meta.setAttribute("content", content);
}

function setMetaProperty(property, content) {
  if (!content) return;
  const meta = ensureMeta(`meta[property=\"${property}\"]`, () => {
    const tag = document.createElement("meta");
    tag.setAttribute("property", property);
    return tag;
  });
  meta.setAttribute("content", content);
}

function setCanonical(url) {
  if (!url) return;
  const link = ensureMeta("link[rel=\"canonical\"]", () => {
    const element = document.createElement("link");
    element.setAttribute("rel", "canonical");
    return element;
  });
  link.setAttribute("href", url);
}

export function usePageMeta({ title, description, image, url, keywords } = {}) {
  useEffect(() => {
    if (title) {
      document.title = title;
      setMetaName("twitter:title", title);
      setMetaProperty("og:title", title);
    }

    if (description) {
      setMetaName("description", description);
      setMetaName("twitter:description", description);
      setMetaProperty("og:description", description);
    }

    setMetaProperty("og:type", "website");
    setMetaProperty("og:site_name", "Dirre Seniors Home Facilitation");

    const pageUrl = url || `${window.location.origin}${window.location.pathname}`;
    setMetaProperty("og:url", pageUrl);
    setCanonical(pageUrl);

    if (image) {
      setMetaProperty("og:image", image);
      setMetaName("twitter:image", image);
    }

    setMetaName("twitter:card", "summary_large_image");

    if (Array.isArray(keywords) && keywords.length > 0) {
      setMetaName("keywords", keywords.join(", "));
    }
  }, [title, description, image, url, keywords]);
}
