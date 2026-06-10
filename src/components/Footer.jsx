import { Link } from "react-router-dom";
import { useContent } from "../context/ContentContext.jsx";

export default function Footer() {
  const { content } = useContent();
  const site = content.site ?? {};
  const logo = site.logo || "/assets/docx-media/image6.png";
  const socialLinks = Array.isArray(site.socialLinks) ? site.socialLinks : [];

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <Link className="brand brand-footer" to="/" aria-label="Dirre Seniors Home Facilitation home">
            <img src={logo} alt={site.logoAlt || "Dirre Seniors Home Facilitation logo"} />
            <span>
              <strong>Dirre Seniors Home</strong>
              <small>Elders: Our Pillars of Respect</small>
            </span>
          </Link>
          <p>
            A community care project offering shelter, daily support, and dignity for elders affected by hardship in
            Borana.
          </p>
        </div>
        <div className="footer-col">
          <strong>Quick Links</strong>
          <ul className="footer-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/founder">Founder</Link>
            </li>
            <li>
              <Link to="/care-center">Care Center</Link>
            </li>
            <li>
              <Link to="/gallery">Gallery</Link>
            </li>
            <li>
              <Link to="/support">Support</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <strong>Contact</strong>
          <ul className="footer-links footer-contact-list">
            <li className="contact-person"><strong>Samuel Galgalo</strong></li>
            <li className="contact-position">Founder & Executive Director</li>
            <li className="contact-phone">
              <a href="tel:+251954729300">+251 954 72 93 00</a>
            </li>
            <li className="contact-email">
              <a href="mailto:dirreseniorhomefacilitation@gmail.com">dirreseniorhomefacilitation@gmail.com</a>
            </li>
            <li className="contact-address">P.O. Box 220 Yaballo, Ethiopia</li>
          </ul>
          <div className="footer-social-list" aria-label="Follow us on social media">
            {socialLinks.length ? (
              socialLinks.map((link) => (
                <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              ))
            ) : (
              <span className="footer-social-empty">Add social links in Admin Settings</span>
            )}
          </div>
        </div>
        <div className="footer-col footer-cta-col">
          <strong>Partner With Us</strong>
          <p>Help expand respectful elder care through shelter, meals, and community support.</p>
          <Link className="button button-primary" to="/support">
            Support Options
          </Link>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Dirre Seniors Home Facilitation</p>
        <p>Elders: Our Pillars of Respect</p>
      </div>
    </footer>
  );
}
