import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/founder", label: "Founder" },
  { to: "/care-center", label: "Care Center" },
  { to: "/gallery", label: "Gallery" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const closeNav = () => {
    setNavOpen(false);
    document.body.classList.remove("no-scroll");
  };

  const toggleNav = () => {
    setNavOpen((open) => {
      const next = !open;
      document.body.classList.toggle("no-scroll", next);
      return next;
    });
  };

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape" && navOpen) {
        closeNav();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [navOpen]);

  useEffect(() => {
    const updateScrolled = () => {
      setIsScrolled(window.scrollY > 18);
    };

    updateScrolled();
    window.addEventListener("scroll", updateScrolled, { passive: true });
    return () => window.removeEventListener("scroll", updateScrolled);
  }, []);

  return (
    <div className={`header-stack${isScrolled ? " is-scrolled" : ""}${navOpen ? " is-nav-open" : ""}`}>
      <div className="top-bar">
        <div className="top-bar-inner">
          <p className="top-bar-location">Borana, Ethiopia</p>
          <div className="top-bar-actions">
            <Link to="/care-center">Care Center</Link>
            <Link to="/gallery">Photos</Link>
            <Link className="top-bar-cta" to="/support">
              Support the Mission
            </Link>
          </div>
        </div>
      </div>
      <header className="site-header" data-header>
        <Link className="brand" to="/" aria-label="Dirre Seniors Home Facilitation home" onClick={closeNav}>
          <img src="/assets/docx-media/image6.png" alt="Dirre Seniors Home Facilitation logo" />
          <span>
            <strong>Dirre Seniors Home</strong>
            <small>Elders: Our Pillars of Respect</small>
          </span>
        </Link>

        <button
          className="nav-toggle"
          type="button"
          aria-label={navOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={navOpen}
          data-nav-toggle
          onClick={toggleNav}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`site-nav${navOpen ? " is-open" : ""}`} data-nav>
          {navItems.map(({ to, label, end }) => (
            <NavLink key={to} to={to} end={end} onClick={closeNav}>
              {label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/support" onClick={closeNav}>
            Support
          </NavLink>
        </nav>
      </header>
    </div>
  );
}
