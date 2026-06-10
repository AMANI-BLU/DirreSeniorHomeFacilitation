import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { useContent } from "../context/ContentContext.jsx";
import { usePageMeta } from "../hooks/usePageMeta.js";
import "../styles/admin.css";

export default function AdminLogin() {
  const { isAuthenticated, login } = useAuth();
  const { content } = useContent();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  usePageMeta({
    title: "Admin Login | Dirre Seniors Home",
    description: "Sign in to manage Dirre Seniors Home content.",
  });

  if (isAuthenticated) {
    return <Navigate to="/admin" replace />;
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    const result = await login(email.trim(), password);
    setLoading(false);

    if (result.error) {
      setError(result.error.message || "Sign-in failed. Check your email and password.");
      return;
    }

    navigate("/admin", { replace: true });
  };

  return (
    <main className="admin-login-page">
      <section className="admin-login-panel">
        <div className="admin-login-header">
          <img
            src={content.site?.logo || "/assets/docx-media/image6.png"}
            alt={content.site?.logoAlt || "Dirre Seniors Home Facilitation logo"}
            className="admin-login-logo"
          />
          <h1>Admin login</h1>
          <p>Sign in to manage the website content and published posts.</p>
        </div>
        <form className="admin-form" onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
            />
          </label>
          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
            />
          </label>
          {error ? <p className="admin-form-error">{error}</p> : null}
          <div className="admin-form-actions">
            <button type="submit" className="button button-primary" disabled={loading}>
              {loading ? "Signing in..." : "Sign in"}
            </button>
            <Link className="button button-ghost" to="/">
              Back to site
            </Link>
          </div>
        </form>
        <p className="admin-form-hint">
          Use a Supabase Auth admin account. Create a user in Supabase Auth if needed.
        </p>
      </section>
    </main>
  );
}
