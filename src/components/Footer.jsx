import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <Link className="brand brand-footer" to="/" aria-label="Dirre Seniors Home Facilitation home">
            <img src="/assets/docx-media/image6.png" alt="" />
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
              <a href="mailto:Boranaseniorhome@gmail.com">Boranaseniorhome@gmail.com</a>
            </li>
            <li className="contact-address">P.O. Box 220 Yaballo, Ethiopia</li>
          </ul>
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
