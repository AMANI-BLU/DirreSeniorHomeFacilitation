import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function AboutPage() {
  usePageMeta({
    title: "About | Dirre Senior Home Facilitation",
    description: "Learn why Dirre Senior Home Facilitation was created to support elders in Borana, Ethiopia.",
  });

  return (
    <main>
      <PageHero
        image="/assets/photos/photo-07.jpg"
        imageAlt="Entrance to the Dirre Senior Home Facilitation site"
        eyebrow="About the Project"
        title="About Dirre Senior Home"
        deck="Respectful care for elders in Borana—shelter, basic support, and dignity for community members affected by drought and hardship."
      />

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
              Many elderly people in the region have been left to meet their basic needs alone. Dirre Senior Home
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
            <img src="/assets/photos/photo-11.jpg" alt="Elders seated together during a community gathering" />
            <figcaption>Community gathering during the project launch period.</figcaption>
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
              A care model shaped by dignity, compassion, and responsibility.
              <Link className="title-accent" to="/care-center">
                See the care center
              </Link>
            </h2>
          </div>
          <div className="values-grid">
            <article className="info-card" data-animate>
              <h3>Dignity</h3>
              <p>Elders are treated as respected members of the community, not as a burden.</p>
            </article>
            <article className="info-card" data-animate>
              <h3>Protection</h3>
              <p>The home offers safe spaces for rest, recovery, and reliable daily support.</p>
            </article>
            <article className="info-card" data-animate>
              <h3>Community</h3>
              <p>The project invites families, local leaders, and partners to share responsibility for elder care.</p>
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
