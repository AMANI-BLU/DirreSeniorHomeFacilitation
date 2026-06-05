import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";

/* A 404 page that keeps the same design language as the rest of the
   site: serif headline, eyebrow, paper background, plain (non-gradient)
   cards. The "404" numeral is rendered as oversized text and the rest
   of the layout centers a friendly explanation with a primary action
   (back to home) and a small list of pages to try. */
export default function NotFoundPage() {
  usePageMeta({
    title: "Page not found · Dirre Seniors Home Facilitation",
    description:
      "The page you were looking for could not be found. Return to the home page or explore the care center, founder, and gallery.",
  });

  return (
    <main className="not-found-page">
      <section className="section section-light not-found-section" aria-labelledby="not-found-heading">
        <div className="section-inner not-found-inner">
          <p className="eyebrow" data-animate>
            404 · Page not found
          </p>
          <h1 id="not-found-heading" data-animate>
            We couldn’t find that page.
          </h1>
          <p className="not-found-deck" data-animate>
            The link may be outdated, or the page may have been moved. The
            project’s home, founder story, care center, and gallery are still
            here — pick one below to keep exploring.
          </p>

          <div className="not-found-actions" data-animate>
            <Link className="button button-primary" to="/">
              Return Home
            </Link>
            <Link className="button button-ghost" to="/support">
              Support the Mission
            </Link>
          </div>

          <div className="not-found-suggest" data-animate>
            <span className="not-found-suggest-label">Or visit</span>
            <ul className="not-found-suggest-list">
              <li>
                <Link to="/about">About the Project</Link>
              </li>
              <li>
                <Link to="/founder">Founder Story</Link>
              </li>
              <li>
                <Link to="/care-center">Care Center</Link>
              </li>
              <li>
                <Link to="/gallery">Photo Gallery</Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="not-found-glyph" aria-hidden="true">
          <span className="not-found-glyph-numeral">404</span>
          <span className="not-found-glyph-ring not-found-glyph-ring--lg" />
          <span className="not-found-glyph-ring not-found-glyph-ring--md" />
          <span className="not-found-glyph-ring not-found-glyph-ring--sm" />
        </div>
      </section>
    </main>
  );
}