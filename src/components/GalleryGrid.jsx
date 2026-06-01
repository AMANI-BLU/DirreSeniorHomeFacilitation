import { useLightbox } from "../context/LightboxContext.jsx";

export default function GalleryGrid({ items }) {
  const { openLightbox } = useLightbox();

  return (
    <div className="gallery-grid">
      {items.map((item) => (
        <button
          key={item.src}
          className={`gallery-item${item.wide ? " wide" : ""}`}
          type="button"
          onClick={() => openLightbox({ src: item.src, alt: item.alt, caption: item.caption })}
        >
          <img src={item.src} alt={item.alt} />
          <span className="gallery-label">
            <span className="gallery-label-category">{item.category}</span>
            <span className="gallery-label-title">{item.title}</span>
          </span>
        </button>
      ))}
    </div>
  );
}
