import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function SupportPage() {
  usePageMeta({
    title: "Support | Dirre Senior Home Facilitation",
    description: "Support options for Dirre Senior Home Facilitation and elder care in Borana, Ethiopia.",
  });

  return (
    <main>
      <PageHero
        image="/assets/photos/photo-03.jpg"
        imageAlt="Outdoor seating area at the care center"
        eyebrow="Support the Mission"
        title="Support the mission"
        deck="Partnership support helps the care center meet basic needs and welcome more elders into a safe, respectful environment."
      />

      <section className="section section-light">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">Ways to Help</p>
            <h2>Support can be practical, local, and deeply human.</h2>
          </div>
          <div className="support-grid">
            <article className="support-card" data-animate>
              <h3>Daily Needs</h3>
              <p>Help provide food, bedding, clothing, hygiene supplies, and other essentials for elders.</p>
            </article>
            <article className="support-card" data-animate>
              <h3>Care Center Growth</h3>
              <p>Support room improvements, maintenance, furniture, and safe gathering spaces.</p>
            </article>
            <article className="support-card" data-animate>
              <h3>Community Partnership</h3>
              <p>Connect the project with local leaders, diaspora groups, health workers, and elder care allies.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-event">
        <div className="section-inner content-grid">
          <div className="content-panel" data-animate>
            <p className="eyebrow">Partnership Priorities</p>
            <h2>What support makes possible.</h2>
            <p>
              The project is young, visible, and grounded in a clear community need. Support helps turn a launch moment
              into a dependable care system for elders in Borana.
            </p>
            <ul className="check-list">
              <li>More consistent daily care for residents.</li>
              <li>Better prepared rooms and outdoor gathering areas.</li>
              <li>More community awareness around elder dignity.</li>
              <li>A stronger base for future care partnerships.</li>
            </ul>
          </div>
          <aside className="aside-panel" data-animate>
            <h3>Project Identity</h3>
            <ul>
              <li>Dirre Senior Home Facilitation.</li>
              <li>Dubuluk Care Center.</li>
              <li>Dambalaa Waaccuu, Borana, Ethiopia.</li>
              <li>Elders: Our Pillars of Respect.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-inner two-column">
          <figure className="feature-media" data-animate>
            <img src="/assets/photos/photo-06.jpg" alt="Dubuluk Care Center sign at Dambalaa Waaccuu" />
            <figcaption>Public project sign for the care center.</figcaption>
          </figure>
          <div className="section-copy" data-animate>
            <p className="eyebrow">Next Step</p>
            <h2>Use the project team's current contact channels to begin a partnership conversation.</h2>
            <p>
              This website is ready for a phone number, email address, donation link, or partner form whenever those
              details are finalized for public use.
            </p>
            <Link className="button button-primary" to="/gallery">
              See Project Photos
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
