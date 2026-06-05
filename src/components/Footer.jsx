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
              <a href="mailto:dirreseniorhomefacilitation@gmail.com">dirreseniorhomefacilitation@gmail.com</a>
            </li>
            <li className="contact-address">P.O. Box 220 Yaballo, Ethiopia</li>
          </ul>
          <div className="footer-social" aria-label="Follow us on social media">
            <span className="footer-social-label">Follow us</span>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer" 
              aria-label="Follow Dirre Seniors Home on Facebook"
              className="footer-social-facebook"
            >
              <svg
                className="footer-social-facebook-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <span className="footer-social-facebook-text">
                <span className="footer-social-facebook-name">Facebook</span>
                <span className="footer-social-facebook-handle">@dirreseniorhome</span>
              </span>
            </a>
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
