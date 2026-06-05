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
          <span className="gallery-item-media">
            <img src={item.src} alt={item.alt} loading="lazy" />
            {item.category ? (
              <span className="gallery-item-tag">{item.category}</span>
            ) : null}
          </span>
          <span className="gallery-item-body">
            {item.title ? <h3 className="gallery-item-title">{item.title}</h3> : null}
            {item.caption ? <p className="gallery-item-caption">{item.caption}</p> : null}
            <span className="gallery-item-cta" aria-hidden="true">
              View Photo
            </span>
          </span>
        </button>
      ))}
    </div>
  );
}