import { Link } from "react-router-dom";
import GalleryGrid from "../components/GalleryGrid.jsx";
import PageHero from "../components/PageHero.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { galleryItems } from "../data/gallery.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function GalleryPage() {
  const page = useContent().getPage("gallery");
  usePageMeta(page.meta);

  return (
    <main>
      <PageHero {...page.hero} />

      <section className="section section-light">
        <div className="section-inner">
          <p className="gallery-intro" data-animate>
            Click any image to view it larger.
          </p>
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="support-band">
        <div className="support-inner" data-animate>
          <img src="/assets/docx-media/image6.png" alt="" aria-hidden="true" />
          <div>
            <p className="eyebrow">Next</p>
            <h2>Help turn these first steps into lasting care.</h2>
          </div>
          <Link className="button button-primary" to="/support">
            Support Options
          </Link>
        </div>
      </section>
    </main>
  );
}
