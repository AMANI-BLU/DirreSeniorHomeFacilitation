import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useContent } from "../context/ContentContext.jsx";

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/founder", label: "Founder" },
  { to: "/care-center", label: "Care Center" },
  { to: "/gallery", label: "Gallery" },
];

export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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

  /* Close mobile nav on route change. */
  useEffect(() => {
    closeNav();
    /* closeNav is stable (only setState + classList) — no deps needed. */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    let rafId = null;

    const apply = () => {
      rafId = null;
      setScrolled(window.scrollY > 12);
    };

    const onScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(apply);
      }
    };

    apply();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  const { content } = useContent();
  const site = content.site ?? {};
  const logo = site.logo || "/assets/docx-media/image6.png";
  const logoAlt = site.logoAlt || "Dirre Seniors Home Facilitation logo";

  return (
    <div className={`header-stack${scrolled ? " is-scrolled" : ""}${navOpen ? " is-nav-open" : ""}`}>
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
          <img src={logo} alt={logoAlt} />
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