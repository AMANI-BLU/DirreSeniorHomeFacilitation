import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/admin.css";
import { usePageMeta } from "../hooks/usePageMeta.js";

const titles = {
  dashboard: "Dashboard",
  posts: "Posts",
  pages: "Pages",
};

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  usePageMeta({
    title: "Admin | Dirre Senior Home",
    description: "Content admin UI preview for Dirre Senior Home Facilitation.",
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
            <span>Content admin (UI preview)</span>
          </div>
          <nav className="admin-nav" aria-label="Admin sections">
            {Object.keys(titles).map((tab) => (
              <button
                key={tab}
                type="button"
                className={activeTab === tab ? "is-active" : ""}
                onClick={() => setActiveTab(tab)}
              >
                {titles[tab]}
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
              <span className="admin-badge">UI only — not connected</span>
              <button type="button" className="button button-primary">
                Save changes
              </button>
            </div>
          </header>

          <div className="admin-content">
            <section className={`admin-panel${activeTab === "dashboard" ? " is-active" : ""}`} hidden={activeTab !== "dashboard"}>
              <div className="admin-stats">
                <div className="admin-stat">
                  <span>Posts</span>
                  <strong>6</strong>
                </div>
                <div className="admin-stat">
                  <span>Pages</span>
                  <strong>6</strong>
                </div>
                <div className="admin-stat">
                  <span>Published</span>
                  <strong>10</strong>
                </div>
                <div className="admin-stat">
                  <span>Drafts</span>
                  <strong>2</strong>
                </div>
              </div>
              <div className="admin-card">
                <table className="admin-table">
                  <thead>
                    <tr>
                      <th scope="col">Recent updates</th>
                      <th scope="col">Type</th>
                      <th scope="col">Status</th>
                      <th scope="col">Updated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Why This Home Matters</td>
                      <td>Page section</td>
                      <td>
                        <span className="status-pill status-pill--published">Published</span>
                      </td>
                      <td>Jun 1, 2026</td>
                    </tr>
                    <tr>
                      <td>Founder Story</td>
                      <td>Page</td>
                      <td>
                        <span className="status-pill status-pill--published">Published</span>
                      </td>
                      <td>May 28, 2026</td>
                    </tr>
                    <tr>
                      <td>May 2026 Launch Workshop</td>
                      <td>Post</td>
                      <td>
                        <span className="status-pill status-pill--draft">Draft</span>
                      </td>
                      <td>May 20, 2026</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className={`admin-panel${activeTab === "posts" ? " is-active" : ""}`} hidden={activeTab !== "posts"}>
              <div className="admin-toolbar">
                <label className="admin-search">
                  <span className="visually-hidden">Search posts</span>
                  <input type="search" placeholder="Search posts…" aria-label="Search posts" />
                </label>
                <button type="button" className="button button-primary">
                  + New post
                </button>
              </div>
              <div className="admin-layout-split">
                <div className="admin-card">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th scope="col">Title</th>
                        <th scope="col">Author</th>
                        <th scope="col">Status</th>
                        <th scope="col">Date</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>May 2026 Launch Workshop</td>
                        <td>Admin</td>
                        <td>
                          <span className="status-pill status-pill--draft">Draft</span>
                        </td>
                        <td>May 20, 2026</td>
                        <td>
                          <div className="admin-row-actions">
                            <button type="button">Edit</button>
                            <button type="button">View</button>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>First Elders Welcomed Home</td>
                        <td>Admin</td>
                        <td>
                          <span className="status-pill status-pill--published">Published</span>
                        </td>
                        <td>Apr 12, 2026</td>
                        <td>
                          <div className="admin-row-actions">
                            <button type="button">Edit</button>
                            <button type="button">View</button>
                          </div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <form className="admin-form" aria-label="Edit post (preview)">
                  <p className="admin-form-hint">Edit form preview — saving requires a backend later.</p>
                  <label>
                    Title
                    <input type="text" defaultValue="May 2026 Launch Workshop" />
                  </label>
                  <label>
                    Slug
                    <input type="text" defaultValue="may-2026-launch-workshop" />
                  </label>
                  <label>
                    Status
                    <select defaultValue="Published">
                      <option>Draft</option>
                      <option>Published</option>
                    </select>
                  </label>
                  <label>
                    Excerpt
                    <textarea rows={3} defaultValue="Inauguration program and Dubuluk Care Center workshop at Dambalaa Waaccuu." />
                  </label>
                  <div className="admin-form-actions">
                    <button type="button" className="button button-primary">
                      Publish
                    </button>
                    <button type="button" className="button button-ghost">
                      Save draft
                    </button>
                  </div>
                </form>
              </div>
            </section>

            <section className={`admin-panel${activeTab === "pages" ? " is-active" : ""}`} hidden={activeTab !== "pages"}>
              <div className="admin-toolbar">
                <label className="admin-search">
                  <span className="visually-hidden">Search pages</span>
                  <input type="search" placeholder="Search pages…" aria-label="Search pages" />
                </label>
              </div>
              <div className="admin-layout-split">
                <div className="admin-card">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th scope="col">Page</th>
                        <th scope="col">URL</th>
                        <th scope="col">Status</th>
                        <th scope="col">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ["Home", "/"],
                        ["About", "/about"],
                        ["Founder", "/founder"],
                        ["Care Center", "/care-center"],
                        ["Gallery", "/gallery"],
                        ["Support", "/support"],
                      ].map(([name, url]) => (
                        <tr key={url}>
                          <td>{name}</td>
                          <td>{url}</td>
                          <td>
                            <span className="status-pill status-pill--published">Published</span>
                          </td>
                          <td>
                            <div className="admin-row-actions">
                              <button type="button">Edit</button>
                              <Link to={url}>View</Link>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <form className="admin-form" aria-label="Edit page section (preview)">
                  <p className="admin-form-hint">Edit homepage “Why This Home Matters” section (preview).</p>
                  <label>
                    Page
                    <select defaultValue="Home">
                      <option>Home</option>
                      <option>About</option>
                      <option>Founder</option>
                      <option>Care Center</option>
                      <option>Gallery</option>
                      <option>Support</option>
                    </select>
                  </label>
                  <label>
                    Section eyebrow
                    <input type="text" defaultValue="Why This Home Matters" />
                  </label>
                  <label>
                    Heading
                    <input type="text" defaultValue="Built from a lasting responsibility to elders." />
                  </label>
                  <div className="admin-form-actions">
                    <button type="button" className="button button-primary">
                      Update section
                    </button>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
  );
}
