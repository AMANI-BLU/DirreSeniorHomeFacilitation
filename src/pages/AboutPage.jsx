import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function AboutPage() {
  const page = useContent().getPage("about");
  usePageMeta(page.meta);

  return (
    <main>
      <PageHero {...page.hero} />

      {page.visionMission ? (
        <section className="section section-purpose" aria-labelledby="purpose-heading">
          <div className="section-inner purpose-layout">
            <div className="purpose-intro" data-animate>
              <p className="eyebrow">{page.visionMission.eyebrow || "Our Foundation"}</p>
              <h2 id="purpose-heading">{page.visionMission.heading || "Vision & Mission"}</h2>
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
                  <h3>{page.visionMission.visionTitle || "Our Vision"}</h3>
                  <p>{page.visionMission.vision}</p>
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
                  <h3>{page.visionMission.missionTitle || "Our Mission"}</h3>
                  <p>{page.visionMission.mission}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : null}

      <section className="section section-light">
        <div className="section-inner content-grid">
          <div className="content-panel" data-animate>
            <p className="eyebrow">Origin</p>
            <h2>Created from a direct connection to home.</h2>
            <p>
              The project was established by Samuel Galgalo Dadacha, a local resident who later became a refugee in the
              United States and worked as a professional social worker. Samuel has remained deeply connected to his
              homeland and passionate about helping elders who have been overlooked.
            </p>
            <p>
              Many elderly people in the region have been left to meet their basic needs alone. Dirre Seniors Home
              Facilitation exists to answer that reality with practical care, community responsibility, and respect.
            </p>
          </div>
          <aside className="aside-panel" data-animate>
            <h3>Project Priorities</h3>
            <ul>
              <li>Provide safe rest and daily support for elders.</li>
              <li>Honor elders as pillars of family and community life.</li>
              <li>Build compassion across younger and older generations.</li>
              <li>Strengthen local ownership around elder care.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-event">
        <div className="section-inner two-column">
          <figure className="feature-media" data-animate>
            <img src="/assets/photos/photo-18.jpg" alt="Elders gathered outdoors at the Dirre Seniors Home site" />
            <figcaption>Elders gathered outdoors at the care center site.</figcaption>
          </figure>
          <div className="section-copy" data-animate>
            <p className="eyebrow">Context</p>
            <h2>Drought made an existing elder care gap more urgent.</h2>
            <p>
              The Borana region is primarily inhabited by pastoralists. From 2020 to 2023, drought conditions severely
              affected livelihoods, and many pastoralists lost livestock. The loss of livestock also meant the loss of
              income, food security, and traditional support systems.
            </p>
            <p>
              Older community members became especially vulnerable. The Senior Citizens Home Project was created to
              build a safer, more supportive environment where elders can receive the care and attention they need.
            </p>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">Values</p>
            <h2 className="section-title">
              Our core values guide the decisions, conduct, and culture of our organization.
              <Link className="title-accent" to="/care-center">
                See the care center
              </Link>
            </h2>
          </div>
          <div className="values-grid values-grid--five">
            <article className="info-card" data-animate>
              <span className="card-number">01</span>
              <h3>Dignity</h3>
              <p>We hold the sacred worth of every senior as paramount. This means ensuring unwavering respect for their individual autonomy, privacy, and personal history, and consistently honouring their choices in every care decision.</p>
            </article>
            <article className="info-card" data-animate>
              <span className="card-number">02</span>
              <h3>Compassion</h3>
              <p>We approach every interaction with deep empathy and heart-driven kindness, creating a profoundly nurturing and healing environment. Our care is holistic, proactively addressing the complex physical, emotional, and psychological needs of our residents.</p>
            </article>
            <article className="info-card" data-animate>
              <span className="card-number">03</span>
              <h3>Integrity</h3>
              <p>We operate with absolute moral fortitude and transparency. Our commitment to the highest standards of ethical conduct, fiscal accountability, and honest communication is the cornerstone of trust with our residents, their families, and our stakeholders.</p>
            </article>
            <article className="info-card" data-animate>
              <span className="card-number">04</span>
              <h3>Community</h3>
              <p>We are dedicated to building a vibrant, inclusive family. We actively cultivate a strong sense of belonging through purposeful engagement, fostering meaningful intergenerational bonds that celebrate seniors' wisdom and actively combat isolation.</p>
            </article>
            <article className="info-card" data-animate>
              <span className="card-number">05</span>
              <h3>Excellence</h3>
              <p>We are driven by a culture of continuous innovation and superior service delivery. We relentlessly strive to exceed benchmarks in care standards, operational effectiveness, and program quality to ensure the most positive and life-affirming outcomes for our seniors.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="support-band">
        <div className="support-inner" data-animate>
          <img src="/assets/docx-media/image6.png" alt="" aria-hidden="true" />
          <div>
            <p className="eyebrow">Next</p>
            <h2>Meet the founder behind the mission.</h2>
          </div>
          <Link className="button button-primary" to="/founder">
            Founder Story
          </Link>
        </div>
      </section>
    </main>
  );
}
