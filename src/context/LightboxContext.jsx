import { createContext, useCallback, useContext, useEffect, useState } from "react";

const LightboxContext = createContext(null);
const BLANK_IMAGE = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==";

export function LightboxProvider({ children }) {
  const [state, setState] = useState({ open: false, src: "", alt: "", caption: "" });

  const openLightbox = useCallback(({ src, alt = "", caption = "" }) => {
    setState({ open: true, src, alt, caption });
    document.body.classList.add("no-scroll");
  }, []);

  const closeLightbox = useCallback(() => {
    setState({ open: false, src: BLANK_IMAGE, alt: "", caption: "" });
    document.body.classList.remove("no-scroll");
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && state.open) {
        closeLightbox();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [state.open, closeLightbox]);

  return (
    <LightboxContext.Provider value={{ openLightbox, closeLightbox }}>
      {children}
      <div
        className="lightbox"
        data-lightbox
        hidden={!state.open}
        onClick={(event) => {
          if (event.target === event.currentTarget) {
            closeLightbox();
          }
        }}
      >
        <button
          className="lightbox-close"
          type="button"
          aria-label="Close image"
          data-lightbox-close
          onClick={closeLightbox}
        >
          &times;
        </button>
        <img src={state.open ? state.src : BLANK_IMAGE} alt={state.alt} data-lightbox-image />
        <p data-lightbox-caption>{state.caption}</p>
      </div>
    </LightboxContext.Provider>
  );
}

export function useLightbox() {
  const context = useContext(LightboxContext);
  if (!context) {
    throw new Error("useLightbox must be used within LightboxProvider");
  }
  return context;
}
