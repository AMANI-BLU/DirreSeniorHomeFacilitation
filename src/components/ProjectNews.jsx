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
          {publishedPosts.slice(0, 3).map((post) => (
            <article className="info-card" key={post.id} data-animate>
              <p className="news-date">{formatAdminDate(post.updatedAt)}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
