import { Link } from "react-router-dom";
import GalleryGrid from "../components/GalleryGrid.jsx";
import { galleryItems } from "../data/gallery.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function HomePage() {
  usePageMeta({
    title: "Dirre Senior Home Facilitation",
    description:
      "Dirre Senior Home Facilitation supports elders in Borana, Ethiopia through a respectful home and community care project.",
  });

  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero-bg"
          src="/assets/photos/photo-11.jpg"
          alt="Elders seated together during a community gathering"
        />
        <div className="hero-overlay"></div>
        <div className="section-inner hero-inner" data-animate>
          <p className="eyebrow">Dhaabbata Kunuunsa Maangudoota Dirree</p>
          <h1 id="hero-title">Dirre Senior Home Facilitation</h1>
          <p className="hero-lead">
            A community care project in Borana, Ethiopia—creating a safe, respectful home for elders affected by
            drought, hardship, and displacement.
          </p>
          <ul className="hero-meta" aria-label="Project at a glance">
            <li>Borana, Ethiopia</li>
            <li>May 2026 workshop</li>
            <li>Dignity-first elder care</li>
          </ul>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button button-primary" to="/about">
              Explore the Project
            </Link>
            <Link className="button button-ghost" to="/support">
              Support the Mission
            </Link>
          </div>
          <p className="hero-motto">Elders: Our Pillars of Respect · Dambalaa Waaccuu, Borana</p>
        </div>
      </section>

      <section className="quick-facts" aria-label="Project highlights">
        <Link className="fact" to="/founder" data-animate>
          <span>Founder</span>
          <strong>Samuel Galgalo Dadacha</strong>
        </Link>
        <Link className="fact" to="/about" data-animate>
          <span>Location</span>
          <strong>Borana, Ethiopia</strong>
        </Link>
        <Link className="fact" to="/care-center" data-animate>
          <span>Launch</span>
          <strong>May 2026 Workshop</strong>
        </Link>
        <Link className="fact" to="/support" data-animate>
          <span>Focus</span>
          <strong>Respectful elder care</strong>
        </Link>
      </section>

      <section className="section section-light section-brand" id="about">
        <div className="section-inner two-column">
          <div className="section-copy" data-animate>
            <p className="eyebrow">Why This Home Matters</p>
            <h2>Built from a lasting responsibility to elders.</h2>
            <p>
              Dirre Senior Home Facilitation was established by Samuel Galgalo Dadacha, a local resident who later
              became a refugee in the United States and worked as a professional social worker. His connection to his
              homeland shaped a practical mission: help elders who have been overlooked and left to meet basic needs on
              their own.
            </p>
            <p>
              The Borana region is primarily pastoralist, and drought from 2020 to 2023 severely affected livelihoods.
              As many families lost livestock, older community members became especially vulnerable. The Senior Citizens
              Home Project responds with shelter, daily support, dignity, and a shared culture of compassion across
              generations.
            </p>
            <div className="section-actions">
              <Link className="button button-primary" to="/about">
                Read the full story
              </Link>
              <Link className="button button-ghost" to="/support">
                See how to support
              </Link>
            </div>
          </div>
          <figure className="feature-media" data-animate>
            <img src="/assets/photos/photo-12.jpg" alt="An elder sitting on a bed inside the care center" />
            <figcaption>Simple care spaces designed around dignity, rest, and human attention.</figcaption>
          </figure>
        </div>
      </section>

      <section className="section founder-preview">
        <div className="section-inner founder-preview-grid">
          <figure className="founder-media" data-animate>
            <img src="/assets/photos/founder-samuel.png" alt="Samuel Galgalo Dadacha, founder" />
          </figure>
          <div className="section-copy" data-animate>
            <p className="eyebrow">Founder</p>
            <h2>Samuel Galgalo Dadacha connects social work with homeland responsibility.</h2>
            <p>
              Samuel was raised with the values of Borana community life, later resettled in the United States as a
              refugee, and worked as a professional social worker. His experience shaped a practical belief: elders need
              care systems that protect dignity while responding to real daily needs.
            </p>
            <Link className="button button-primary" to="/founder">
              Founder Story
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light section-care" id="care">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">Dubuluk Care Center</p>
            <h2 className="section-title">
              A place for shelter, gathering, and belonging.
              <Link className="title-accent" to="/care-center">
                See the care center
              </Link>
            </h2>
          </div>
          <div className="care-grid">
            <article className="care-card" data-animate>
              <div className="care-card-media">
                <img src="/assets/photos/photo-01.jpg" alt="Single bed prepared inside the care center" />
                <span className="card-tag">Safe Rest</span>
              </div>
              <div className="care-card-body">
                <h3>Safe Rest</h3>
                <p>Prepared rooms give elders a clean, calm place to sleep and recover.</p>
                <Link className="button button-ghost" to="/care-center">
                  Learn More
                </Link>
              </div>
            </article>
            <article className="care-card" data-animate>
              <div className="care-card-media">
                <img src="/assets/photos/photo-02.jpg" alt="Care center room with beds and a window" />
                <span className="card-tag">Daily Support</span>
              </div>
              <div className="care-card-body">
                <h3>Daily Support</h3>
                <p>The project focuses on the basic needs of elders who have been left without dependable support.</p>
                <Link className="button button-ghost" to="/care-center">
                  Learn More
                </Link>
              </div>
            </article>
            <article className="care-card" data-animate>
              <div className="care-card-media">
                <img src="/assets/photos/photo-03.jpg" alt="Outdoor seating area with chairs around a blue table" />
                <span className="card-tag">Community</span>
              </div>
              <div className="care-card-body">
                <h3>Community Space</h3>
                <p>Outdoor gathering areas help elders and visitors share conversation, shade, and companionship.</p>
                <Link className="button button-ghost" to="/care-center">
                  Learn More
                </Link>
              </div>
            </article>
          </div>
          <div className="section-action" data-animate>
            <Link className="button button-ghost" to="/care-center">
              Visit the Care Center Page
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light" id="elders">
        <div className="section-inner">
          <div className="section-heading compact-heading" data-animate>
            <p className="eyebrow">First Batch Elders</p>
            <h2 className="section-title">
              Care begins with the people already welcomed home.
              <Link className="title-accent" to="/about">
                Read their story
              </Link>
            </h2>
          </div>
          <div className="elder-story-grid">
            <figure data-animate>
              <img src="/assets/photos/photo-10.jpg" alt="Elder seated on a bed inside the care center" />
              <figcaption>Residents are welcomed into a respectful space for rest and care.</figcaption>
            </figure>
            <figure data-animate>
              <img src="/assets/photos/photo-12.jpg" alt="Elder wrapped in white seated on a bed" />
              <figcaption>The project honors elders as pillars of community memory and identity.</figcaption>
            </figure>
            <figure data-animate>
              <img src="/assets/photos/photo-09.jpg" alt="Elder woman at the project gathering" />
              <figcaption>Community gatherings connect families, local leaders, and supporters.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section section-event">
        <div className="section-inner two-column event-layout">
          <div className="event-image-stack" data-animate>
            <img src="/assets/photos/photo-04.jpg" alt="Inauguration program banner for Dirre Senior Home Facilitation" />
            <img src="/assets/photos/photo-06.jpg" alt="Dubuluk Care Center site sign" />
          </div>
          <div className="section-copy" data-animate>
            <p className="eyebrow">Project Launch</p>
            <h2>Inauguration program and Dubuluk Care Center workshop.</h2>
            <p>
              The May 2026 launch workshop at Dambalaa Waaccuu introduced the Senior Home Facilitation and Dubuluk Care
              Center project to the community. The banners carry the project identity in Afaan Oromo and English,
              emphasizing local ownership and the shared responsibility of caring for elders.
            </p>
            <p>
              The message is direct: elders deserve safety, attention, and respect from the generations they helped
              raise.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light" id="gallery">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">Photo Gallery</p>
            <h2 className="section-title">
              Facilities, gatherings, and community moments.
              <Link className="title-accent" to="/gallery">
                Open full gallery
              </Link>
            </h2>
            <p className="gallery-intro">Click any image to view it larger.</p>
          </div>
          <GalleryGrid items={galleryItems} />
          <div className="section-action" data-animate>
            <Link className="button button-primary" to="/gallery">
              Open Full Gallery
            </Link>
          </div>
        </div>
      </section>

      <section className="support-band" id="support">
        <div className="support-inner" data-animate>
          <img src="/assets/docx-media/image6.png" alt="" aria-hidden="true" />
          <div>
            <p className="eyebrow">Support the Mission</p>
            <h2>Help expand respectful care for elders in Borana.</h2>
            <p>
              The project is built on compassion, responsibility, and practical care. Partnership support can help the
              home continue meeting elders' basic needs while strengthening a culture of respect across generations.
            </p>
          </div>
          <Link className="button button-primary" to="/support">
            Support Options
          </Link>
        </div>
      </section>
    </main>
  );
}
