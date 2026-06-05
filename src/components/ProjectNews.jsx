import { useContent } from "../context/ContentContext.jsx";
import { formatAdminDate } from "../cms/contentStore.js";

export default function ProjectNews({ section }) {
  const { publishedPosts } = useContent();

  if (!publishedPosts.length) return null;

  return (
    <section className="section section-light" id="news">
      <div className="section-inner">
        <div className="section-heading" data-animate>
          <p className="eyebrow">{section.eyebrow}</p>
          <h2>{section.heading}</h2>
        </div>
        <div className="news-grid">
          {publishedPosts.slice(0, 3).map((post, idx) => (
            <article className="news-card" key={post.id} data-animate>
              <span className="news-card-meta">
                <span className="news-card-date">{formatAdminDate(post.updatedAt)}</span>
                <span className="news-card-index">{String(idx + 1).padStart(2, "0")}</span>
              </span>
              <h3 className="news-card-title">{post.title}</h3>
              <p className="news-card-excerpt">{post.excerpt}</p>
              <span className="news-card-cta" aria-hidden="true">
                Read update
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}