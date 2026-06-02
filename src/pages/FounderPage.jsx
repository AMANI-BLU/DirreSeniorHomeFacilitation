import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function FounderPage() {
  const page = useContent().getPage("founder");
  usePageMeta(page.meta);

  return (
    <main>
      <PageHero {...page.hero} />

      <section className="section section-light">
        <div className="section-inner founder-profile">
          <figure className="founder-portrait" data-animate>
            <img src="/assets/photos/founder-samuel.png" alt="Portrait of Samuel Galgalo Dadacha" />
            <figcaption>Samuel Galgalo Dadacha, founder of Dirre Senior Home Facilitation.</figcaption>
          </figure>
          <div className="section-copy" data-animate>
            <p className="eyebrow">A Personal Mission</p>
            <h2>From social work experience to elder care action.</h2>
            <p>
              Samuel Galgalo Dadacha was born from the community this project serves. After becoming a refugee in the
              United States, he built professional experience as a social worker while keeping a strong connection to
              his homeland.
            </p>
            <p>
              That combination of local memory and social work practice led him to focus on elderly people who have
              been overlooked, especially those left without enough support to meet basic needs.
            </p>
          </div>
        </div>
      </section>

      <section
        className="quote-band quote-band-photo"
        style={{
          backgroundImage:
            "linear-gradient(rgba(35, 52, 42, 0.88), rgba(35, 52, 42, 0.88)), url('/assets/photos/photo-11.jpg')",
        }}
      >
        <p className="quote-text" data-animate>
          The project's guiding idea is simple: elders are the pillars who carried the community before us.
        </p>
      </section>

      <section className="section section-event">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">Leadership Focus</p>
            <h2>Samuel's work is centered on practical dignity.</h2>
          </div>
          <div className="timeline-grid">
            <article className="timeline-card" data-animate>
              <h3>Local Roots</h3>
              <p>His commitment begins with a lasting relationship to Borana community life and its elders.</p>
            </article>
            <article className="timeline-card" data-animate>
              <h3>Social Work</h3>
              <p>Professional social work shaped his attention to safety, support systems, and daily human needs.</p>
            </article>
            <article className="timeline-card" data-animate>
              <h3>Home Building</h3>
              <p>The project turns concern into shelter, gathering space, and a care model the community can grow.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-inner two-column">
          <div className="section-copy" data-animate>
            <p className="eyebrow">What He Started</p>
            <h2>A home that asks every generation to share responsibility.</h2>
            <p>
              Dirre Senior Home Facilitation is more than a building. It is a public reminder that elders deserve food,
              shelter, companionship, and respect. The project invites local leaders, families, and supporters to make
              elder care visible and dependable.
            </p>
            <Link className="button button-primary" to="/care-center">
              See the Care Center
            </Link>
          </div>
          <figure className="feature-media" data-animate>
            <img src="/assets/photos/photo-04.jpg" alt="Inauguration program banner for Dirre Senior Home Facilitation" />
            <figcaption>Project launch workshop banner, May 2026.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
