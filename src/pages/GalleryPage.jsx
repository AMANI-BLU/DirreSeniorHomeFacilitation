import { Link } from "react-router-dom";
import GalleryGrid from "../components/GalleryGrid.jsx";
import PageHero from "../components/PageHero.jsx";
import { galleryItems } from "../data/gallery.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function GalleryPage() {
  usePageMeta({
    title: "Gallery | Dirre Senior Home Facilitation",
    description:
      "Photo gallery for Dirre Senior Home Facilitation, Dubuluk Care Center, project launch, and first elders.",
  });

  return (
    <main>
      <PageHero
        image="/assets/photos/photo-11.jpg"
        imageAlt="Elders seated together during the project gathering"
        eyebrow="Gallery"
        title="Project photo gallery"
        deck="Facilities, launch moments, and elder care in action across the site, care center, and community gatherings."
      />

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
