import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function CareCenterPage() {
  const page = useContent().getPage("careCenter");
  usePageMeta(page.meta);

  return (
    <main>
      <PageHero {...page.hero} />

      <section className="section section-light">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">Inside the Center</p>
            <h2 className="section-title">
              Simple spaces with a serious purpose.
              <Link className="title-accent" to="/gallery">
                View photos
              </Link>
            </h2>
          </div>
          <div className="care-grid">
            <article className="care-card" data-animate>
              <div className="care-card-media">
                <img src="/assets/photos/photo-01.jpg" alt="Single bed prepared inside the care center" />
                <span className="card-tag">Rooms</span>
              </div>
              <div className="care-card-body">
                <h3>Prepared Rooms</h3>
                <p>Clean beds and quiet rooms create a safer base for elders who need rest and care.</p>
                <Link className="button button-ghost" to="/gallery">
                  Learn More
                </Link>
              </div>
            </article>
            <article className="care-card" data-animate>
              <div className="care-card-media">
                <img src="/assets/photos/photo-18.jpg" alt="Elders gathered outdoors at the care center" />
                <span className="card-tag">Gathering</span>
              </div>
              <div className="care-card-body">
                <h3>Outdoor Gathering</h3>
                <p>Shared seating areas support conversation, visitors, and community connection.</p>
                <Link className="button button-ghost" to="/gallery">
                  Learn More
                </Link>
              </div>
            </article>
            <article className="care-card" data-animate>
              <div className="care-card-media">
                <img src="/assets/photos/photo-19.jpg" alt="Elders seated near the living quarters at the care center" />
                <span className="card-tag">Site</span>
              </div>
              <div className="care-card-body">
                <h3>Local Site</h3>
                <p>The visible entrance and project signs help make elder care a shared community priority.</p>
                <Link className="button button-ghost" to="/support">
                  Learn More
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section-deep">
        <div className="section-inner content-grid">
          <div className="content-panel" data-animate>
            <p className="eyebrow">Care Approach</p>
            <h2>Meeting basic needs while protecting dignity.</h2>
            <p>
              The project focuses on the everyday things that make care real: a place to sleep, attention from others,
              safe surroundings, and a community that recognizes elders as deserving of respect.
            </p>
            <p>
              As the project grows, the care center can become a base for stronger partnerships around food, health,
              clothing, bedding, and daily assistance.
            </p>
          </div>
          <aside className="aside-panel" data-animate>
            <h3>Care Elements</h3>
            <ul>
              <li>Safe sleeping spaces.</li>
              <li>Companionship and community visits.</li>
              <li>Basic daily support.</li>
              <li>Respectful treatment of residents.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">First Elders</p>
            <h2>The first residents show why this project matters.</h2>
          </div>
          <div className="media-strip">
            <img src="/assets/photos/photo-18.jpg" alt="Elders gathered outdoors at the care center" data-animate />
            <img src="/assets/photos/photo-20.jpg" alt="Elders seated together outside the living quarters" data-animate />
            <img src="/assets/photos/photo-21.jpg" alt="Residents seated together by the care center wall" data-animate />
          </div>
        </div>
      </section>

      <section className="section section-event">
        <div className="section-inner two-column">
          <div className="section-copy" data-animate>
            <p className="eyebrow">Launch Workshop</p>
            <h2>Introduced publicly in May 2026.</h2>
            <p>
              The inauguration program and Dubuluk Care Center project launching workshop presented the work to the
              community in Afaan Oromo and English, strengthening local recognition of the care center.
            </p>
            <Link className="button button-primary" to="/gallery">
              View Launch Photos
            </Link>
          </div>
          <figure className="feature-media" data-animate>
            <img src="/assets/photos/photo-22.jpg" alt="Community leaders seated at the May 2026 launch workshop" />
            <figcaption>Community leaders and guests at the May 2026 launch workshop.</figcaption>
          </figure>
        </div>
      </section>
    </main>
  );
}
