import { Link } from "react-router-dom";
import GalleryGrid from "../components/GalleryGrid.jsx";
import ProjectNews from "../components/ProjectNews.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { galleryItems } from "../data/gallery.js";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function HomePage() {
  const { getPage } = useContent();
  const page = getPage("home");
  const { hero, visionMission, about, founderPreview, care, supportBand, news } = page;

  usePageMeta(page.meta);

  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-bg" src={hero.image} alt={hero.imageAlt} />
        <div className="hero-overlay"></div>
        <div className="section-inner hero-inner" data-animate>
          <p className="eyebrow">{hero.eyebrow}</p>
          <h1 id="hero-title">{hero.title}</h1>
          <p className="hero-lead">{hero.lead}</p>
          <ul className="hero-meta" aria-label="Project at a glance">
            {hero.metaTags.map((tag, idx) => {
              let icon;
              if (idx === 0) {
                // Borana, Ethiopia -> Map Pin
                icon = (
                  <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                );
              } else if (idx === 1) {
                // May 2026 workshop -> Calendar
                icon = (
                  <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                );
              } else {
                // Dignity-first elder care -> Heart
                icon = (
                  <svg className="hero-meta-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                );
              }
              return (
                <li key={tag} className="hero-meta-chip">
                  {icon}
                  <span>{tag}</span>
                </li>
              );
            })}
          </ul>
          <div className="hero-actions" aria-label="Primary actions">
            <Link className="button button-primary" to="/about">
              Explore the Project
            </Link>
            <Link className="button button-ghost" to="/support">
              Support the Mission
            </Link>
          </div>
          <p className="hero-motto">{hero.motto}</p>
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

      {visionMission ? (
        <section className="section section-purpose" aria-labelledby="purpose-heading">
          <div className="section-inner purpose-layout">
            <div className="purpose-intro" data-animate>
              <p className="eyebrow">{visionMission.eyebrow || "Our Foundation"}</p>
              <h2 id="purpose-heading">{visionMission.heading || "Vision & Mission"}</h2>
              <p className="purpose-deck">
                Guiding our efforts toward a future where Ethiopian seniors thrive with dignity, care, and security.
              </p>
            </div>
            <div className="purpose-content">
              <div className="purpose-item" data-animate>
                <div className="purpose-icon-wrapper">
                  <svg className="purpose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                    <circle cx="12" cy="12" r="3" />
                  </svg>
                </div>
                <div className="purpose-text">
                  <span className="purpose-tag">01 / Vision</span>
                  <h3>{visionMission.visionTitle || "Our Vision"}</h3>
                  <p>{visionMission.vision}</p>
                </div>
              </div>
              <div className="purpose-item" data-animate>
                <div className="purpose-icon-wrapper">
                  <svg className="purpose-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <circle cx="12" cy="12" r="6" />
                    <circle cx="12" cy="12" r="2" />
                  </svg>
                </div>
                <div className="purpose-text">
                  <span className="purpose-tag">02 / Mission</span>
                  <h3>{visionMission.missionTitle || "Our Mission"}</h3>
                  <p>{visionMission.mission}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-light section-brand" id="about">
        <div className="section-inner two-column">
          <div className="section-copy" data-animate>
            <p className="eyebrow">{about.eyebrow}</p>
            <h2>{about.heading}</h2>
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 32)}>{paragraph}</p>
            ))}
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
            <img src={about.image} alt={about.imageAlt} />
            <figcaption>{about.figcaption}</figcaption>
          </figure>
        </div>
      </section>

      <section className="section founder-preview">
        <div className="section-inner founder-preview-grid">
          <figure className="founder-media" data-animate>
            <img src={founderPreview.image} alt="Samuel Galgalo Dadacha, founder" />
          </figure>
          <div className="section-copy" data-animate>
            <p className="eyebrow">{founderPreview.eyebrow}</p>
            <h2>{founderPreview.heading}</h2>
            <p>{founderPreview.body}</p>
            <Link className="button button-primary" to="/founder">
              Founder Story
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-light section-care" id="care">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">{care.eyebrow}</p>
            <h2 className="section-title">
              {care.heading}
              <Link className="title-accent" to="/care-center">
                {care.accentLabel}
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
            <img src="/assets/photos/photo-04.jpg" alt="Inauguration program banner for Dirre Seniors Home Facilitation" />
            <img src="/assets/photos/photo-06.jpg" alt="Dubuluk Care Center site sign" />
          </div>
          <div className="section-copy" data-animate>
            <p className="eyebrow">Project Launch</p>
            <h2>Inauguration program and Dubuluk Care Center workshop.</h2>
            <p>
              The May 2026 launch workshop introduced the Dirre Seniors Home Facilitation and Dubuluk Care
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

      <ProjectNews section={news} />

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
            <p className="eyebrow">{supportBand.eyebrow}</p>
            <h2>{supportBand.heading}</h2>
            <p>{supportBand.body}</p>
          </div>
          <Link className="button button-primary" to="/support">
            Support Options
          </Link>
        </div>
      </section>
    </main>
  );
}
