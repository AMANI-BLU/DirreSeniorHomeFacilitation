import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard.jsx";
import AdminPages from "../admin/AdminPages.jsx";
import AdminPosts from "../admin/AdminPosts.jsx";
import AdminSettings from "../admin/AdminSettings.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";
import "../styles/admin.css";

const titles = {
  dashboard: "Dashboard",
  posts: "Posts",
  pages: "Pages",
  settings: "Settings",
};

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");
  const { saveMessage } = useContent();

  usePageMeta({
    title: "Admin | Dirre Senior Home",
    description: "Content admin for Dirre Senior Home Facilitation.",
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

  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <div className="admin-brand">
          <strong>Dirre Senior Home</strong>
          <span>Content admin</span>
        </div>
        <nav className="admin-nav" aria-label="Admin sections">
          {Object.entries(titles).map(([tab, label]) => (
            <button
              key={tab}
              type="button"
              className={activeTab === tab ? "is-active" : ""}
              onClick={() => setActiveTab(tab)}
            >
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
          <h1>{titles[activeTab]}</h1>
          <div className="admin-topbar-actions">
            <span className="admin-badge admin-badge--live">Saved in browser</span>
            {saveMessage ? <span className="admin-toast">{saveMessage}</span> : null}
          </div>
        </header>

        <div className="admin-content">
          {activeTab === "dashboard" ? <AdminDashboard /> : null}
          {activeTab === "posts" ? <AdminPosts /> : null}
          {activeTab === "pages" ? <AdminPages /> : null}
          {activeTab === "settings" ? <AdminSettings /> : null}
        </div>
      </div>
    </div>
  );
}
