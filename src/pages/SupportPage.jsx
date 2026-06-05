import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";

export default function SupportPage() {
  const page = useContent().getPage("support");
  usePageMeta(page.meta);

  return (
    <main>
      <PageHero {...page.hero} />

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
              <li>Dirre Seniors Home Facilitation.</li>
              <li>Dubuluk Care Center.</li>
              <li>Borana, Ethiopia.</li>
              <li>Elders: Our Pillars of Respect.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section-light" id="gift-form">
        <div className="section-inner">
          <div className="section-heading" data-animate>
            <p className="eyebrow">Contribute</p>
            <h2>Gift Commitment Form</h2>
          </div>
          <div className="gift-form-card" data-animate>
            <div className="gift-form-content">
              <h3>Ready to support the mission?</h3>
              <p>
                Download our official Gift Commitment Form to declare your support — whether through
                cash donation, in-kind contribution, or property and equipment. Print, fill out,
                and submit the form to our office or email it to our team.
              </p>
              <div className="gift-form-actions">
                <a
                  className="button button-primary"
                  href="/assets/gift-commitment-form.html"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: 8 }}>
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  Open & Print Form
                </a>
                <a
                  className="button button-ghost"
                  href={`mailto:${page.contact?.email || "dirreseniorhomefacilitation@gmail.com"}?subject=Gift Commitment Form`}
                >
                  Email Completed Form
                </a>
              </div>
            </div>
            <div className="gift-form-details">
              <p><strong>Submit to:</strong></p>
              <p>Dirre Senior Home Facilitation</p>
              <p>P.O. Box 220 Yaballo, Ethiopia</p>
              <p>Tel: +251 954 72 93 00</p>
              <p>{page.contact?.email || "dirreseniorhomefacilitation@gmail.com"}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" id="contact">
        <div className="section-inner two-column">
          <figure className="feature-media" data-animate>
            <img src="/assets/photos/photo-22.jpg" alt="Community leaders seated at the May 2026 launch workshop" />
            <figcaption>May 2026 launch workshop for the care center project.</figcaption>
          </figure>
          <div className="section-copy contact-card-wrapper" data-animate>
            <p className="eyebrow">Get in Touch</p>
            <h2>Contact Us</h2>
            <p className="contact-intro">
              Use the channels below to reach out, ask questions, or begin a partnership conversation with our team.
            </p>
            
            <div className="contact-details-box">
              <div className="contact-item-row">
                <div className="contact-icon-frame">
                  <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Contact Person</span>
                  <strong className="contact-value">{page.contact?.person || "Samuel Galgalo"}</strong>
                  <span className="contact-subvalue">{page.contact?.position || "Founder & Executive Director"}</span>
                </div>
              </div>
              
              <div className="contact-item-row">
                <div className="contact-icon-frame">
                  <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Address</span>
                  <span className="contact-value">{page.contact?.address || "P.O. Box 220 Yaballo, Ethiopia"}</span>
                </div>
              </div>
              
              <div className="contact-item-row">
                <div className="contact-icon-frame">
                  <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Phone</span>
                  <a href={`tel:${(page.contact?.tel || "+251954729300").replace(/\s+/g, "")}`} className="contact-link">
                    {page.contact?.tel || "+251 954 72 93 00"}
                  </a>
                </div>
              </div>
              
              <div className="contact-item-row">
                <div className="contact-icon-frame">
                  <svg className="contact-svg-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div className="contact-item-content">
                  <span className="contact-label">Email</span>
                  <a href={`mailto:${page.contact?.email || "dirreseniorhomefacilitation@gmail.com"}`} className="contact-link">
                    {page.contact?.email || "dirreseniorhomefacilitation@gmail.com"}
                  </a>
                </div>
              </div>
            </div>
            
            <div className="contact-actions">
              <a href={`mailto:${page.contact?.email || "dirreseniorhomefacilitation@gmail.com"}`} className="button button-primary">
                Email Our Team
              </a>
              <a href={`tel:${(page.contact?.tel || "+251954729300").replace(/\s+/g, "")}`} className="button button-ghost">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
