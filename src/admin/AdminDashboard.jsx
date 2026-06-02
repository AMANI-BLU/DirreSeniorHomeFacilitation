import { formatAdminDate } from "../cms/contentStore.js";
import { useContent } from "../context/ContentContext.jsx";

export default function AdminDashboard() {
  const { content, publishedPosts, recentActivity } = useContent();
  const draftCount = content.posts.filter((post) => post.status === "draft").length;

  return (
    <>
      <div className="admin-stats">
        <div className="admin-stat">
          <span>Posts</span>
          <strong>{content.posts.length}</strong>
        </div>
        <div className="admin-stat">
          <span>Pages</span>
          <strong>{Object.keys(content.pages).length}</strong>
        </div>
        <div className="admin-stat">
          <span>Published</span>
          <strong>{publishedPosts.length}</strong>
        </div>
        <div className="admin-stat">
          <span>Drafts</span>
          <strong>{draftCount}</strong>
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
            {recentActivity.map((item) => (
              <tr key={item.id}>
                <td>{item.title}</td>
                <td>{item.type}</td>
                <td>
                  <span className={`status-pill status-pill--${item.status === "published" ? "published" : "draft"}`}>
                    {item.status === "published" ? "Published" : "Draft"}
                  </span>
                </td>
                <td>{formatAdminDate(item.updatedAt)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
