export default function PageHero({ image, imageAlt, eyebrow, title, deck, className = "" }) {
  return (
    <section className={`page-hero page-hero--compact ${className}`.trim()}>
      <img src={image} alt={imageAlt} />
      <div className="page-hero-content" data-animate>
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        {deck ? <p className="page-hero-deck">{deck}</p> : null}
      </div>
    </section>
  );
}
