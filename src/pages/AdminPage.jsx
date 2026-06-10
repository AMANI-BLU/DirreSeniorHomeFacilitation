import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard.jsx";
import AdminPages from "../admin/AdminPages.jsx";
import AdminPosts from "../admin/AdminPosts.jsx";
import AdminSettings from "../admin/AdminSettings.jsx";
import MessageDialog from "../components/MessageDialog.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";
import "../styles/admin.css";

const navItems = [
  { key: "dashboard", label: "Dashboard", icon: "dashboard" },
  { key: "posts", label: "Posts", icon: "posts" },
  { key: "pages", label: "Pages", icon: "pages" },
  { key: "settings", label: "Settings", icon: "settings" },
];

function NavIcon({ type }) {
  switch (type) {
    case "dashboard":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M4 4h7v7H4V4zm9 0h7v4h-7V4zm0 6h7v8h-7V10zm-9 9h7v-7H4v7z" fill="currentColor" />
        </svg>
      );
    case "posts":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M4 5h16v2H4V5zm0 5h16v2H4v-2zm0 5h10v2H4v-2zm14 0h2v2h-2v-2z" fill="currentColor" />
        </svg>
      );
    case "pages":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M6 4h9l5 5v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1zm9 1.5V9h3.5L15 5.5z" fill="currentColor" />
        </svg>
      );
    case "settings":
      return (
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" focusable="false">
          <path d="M12 8.5a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7zm8.94 2.5a7.9 7.9 0 0 0-.54-1.5l2.1-1.65-2-3.46-2.48 1a7.94 7.94 0 0 0-1.3-.75L14.5 2h-5l-.12 2.59a7.94 7.94 0 0 0-1.3.75l-2.48-1-2 3.46 2.1 1.65a7.9 7.9 0 0 0-.54 1.5L2 12l2.59.12a7.9 7.9 0 0 0 .54 1.5l-2.1 1.65 2 3.46 2.48-1c.4.28.83.52 1.3.75L9.5 22h5l.12-2.59c.47-.23.9-.47 1.3-.75l2.48 1 2-3.46-2.1-1.65a7.9 7.9 0 0 0 .54-1.5L22 12l-1.06-.5z" fill="currentColor" />
        </svg>
      );
    default:
      return null;
  }
}

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);
  const { content, saveMessage } = useContent();
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/admin/login");
  };

  usePageMeta({
    title: "Admin | Dirre Seniors Home",
    description: "Content admin for Dirre Seniors Home Facilitation.",
  });

  useEffect(() => {
    document.body.classList.add("admin-body");

    let meta = document.querySelector('meta[name="robots"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "robots");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", "noindex, nofollow");

    return () => {
      document.body.classList.remove("admin-body");
    };
  }, []);

  const activeItem = navItems.find((item) => item.key === activeTab);

  const logo = content.site?.logo || "/assets/docx-media/image6.png";
  const logoAlt = content.site?.logoAlt || "Dirre Seniors Home Facilitation logo";

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <img src={logo} alt={logoAlt} className="admin-brand-logo" />
          <strong>Dirre Seniors Home</strong>
          <span>Content admin</span>
        </div>
        <nav className="admin-nav" aria-label="Admin sections">
          {navItems.map(({ key, label, icon }) => (
            <button
              key={key}
              type="button"
              className={activeTab === key ? "is-active" : ""}
              onClick={() => setActiveTab(key)}
            >
              <span className="admin-nav-icon" aria-hidden="true">
                <NavIcon type={icon} />
              </span>
              {label}
            </button>
          ))}
        </nav>
        <div className="admin-sidebar-footer">
          <Link to="/">← Back to website</Link>
        </div>
      </aside>

      <div className="admin-main">
        <header className="admin-topbar">
          <h1>{activeItem?.label ?? "Admin"}</h1>
          <div className="admin-topbar-actions">
            <span className="admin-badge admin-badge--live">Saved locally and pushed to Supabase</span>
            {saveMessage ? <span className="admin-toast">{saveMessage}</span> : null}
            <button type="button" className="button button-ghost" onClick={() => setShowLogoutDialog(true)}>
              Sign out
            </button>
          </div>
        </header>

        <div className="admin-content">
          {activeTab === "dashboard" ? <AdminDashboard /> : null}
          {activeTab === "posts" ? <AdminPosts /> : null}
          {activeTab === "pages" ? <AdminPages /> : null}
          {activeTab === "settings" ? <AdminSettings /> : null}
        </div>
      </div>
      <MessageDialog
        open={showLogoutDialog}
        title="Sign out"
        message="Are you sure you want to sign out of the admin panel?"
        type="confirm"
        confirmText="Sign out"
        cancelText="Cancel"
        onConfirm={() => {
          handleLogout();
          setShowLogoutDialog(false);
        }}
        onClose={() => setShowLogoutDialog(false)}
      />
    </div>
  );
}
