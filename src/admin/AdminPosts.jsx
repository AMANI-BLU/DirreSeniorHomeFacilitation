import { useEffect, useMemo, useState } from "react";
import { formatAdminDate } from "../cms/contentStore.js";
import { useContent } from "../context/ContentContext.jsx";

export default function AdminPosts() {
  const { content, updatePost, addPost, deletePost, slugify } = useContent();
  const [search, setSearch] = useState("");
  const [selectedId, setSelectedId] = useState(content.posts[0]?.id ?? "");
  const [draft, setDraft] = useState(null);

  const filtered = useMemo(() => {
    const query = search.trim().toLowerCase();
    if (!query) return content.posts;
    return content.posts.filter(
      (post) =>
        post.title.toLowerCase().includes(query) ||
        post.slug.toLowerCase().includes(query) ||
        post.excerpt.toLowerCase().includes(query),
    );
  }, [content.posts, search]);

  const selected = content.posts.find((post) => post.id === selectedId);
  const form = draft ?? selected;

  useEffect(() => {
    if (!selectedId && content.posts[0]) {
      setSelectedId(content.posts[0].id);
    }
  }, [content.posts, selectedId]);

  useEffect(() => {
    const post = content.posts.find((item) => item.id === selectedId);
    if (post) {
      setDraft({ ...post });
    }
  }, [selectedId, content.posts]);

  const savePost = (status) => {
    if (!selectedId || !form) return;
    updatePost(selectedId, {
      title: form.title,
      slug: slugify(form.slug || form.title),
      status,
      author: form.author,
      excerpt: form.excerpt,
      content: form.content,
    });
  };

  const handleNew = () => {
    const post = addPost();
    setSelectedId(post.id);
    setDraft({ ...post });
  };

  const removePost = () => {
    if (!selectedId || !window.confirm("Delete this post?")) return;
    deletePost(selectedId);
    setSelectedId("");
    setDraft(null);
  };

  if (!form) {
    return (
      <div className="admin-card admin-empty">
        <p>No posts yet.</p>
        <button type="button" className="button button-primary" onClick={handleNew}>
          + New post
        </button>
      </div>
    );
  }

  return (
    <>
      <div className="admin-toolbar">
        <label className="admin-search">
          <span className="visually-hidden">Search posts</span>
          <input
            type="search"
            placeholder="Search posts…"
            aria-label="Search posts"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
        </label>
        <button type="button" className="button button-primary" onClick={handleNew}>
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
              {filtered.map((post) => (
                <tr key={post.id} className={post.id === selectedId ? "is-selected" : ""}>
                  <td>{post.title}</td>
                  <td>{post.author}</td>
                  <td>
                    <span className={`status-pill status-pill--${post.status === "published" ? "published" : "draft"}`}>
                      {post.status === "published" ? "Published" : "Draft"}
                    </span>
                  </td>
                  <td>{formatAdminDate(post.updatedAt)}</td>
                  <td>
                    <div className="admin-row-actions">
                      <button type="button" onClick={() => setSelectedId(post.id)}>
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form
          className="admin-form"
          aria-label="Edit post"
          onSubmit={(event) => {
            event.preventDefault();
            savePost(form.status);
          }}
        >
          <p className="admin-form-hint">Published posts appear in the Project News section on the homepage.</p>
          <label>
            Title
            <input type="text" value={form.title} onChange={(event) => setDraft({ ...form, title: event.target.value })} />
          </label>
          <label>
            Slug
            <input type="text" value={form.slug} onChange={(event) => setDraft({ ...form, slug: event.target.value })} />
          </label>
          <label>
            Status
            <select value={form.status} onChange={(event) => setDraft({ ...form, status: event.target.value })}>
              <option value="draft">Draft</option>
              <option value="published">Published</option>
            </select>
          </label>
          <label>
            Excerpt
            <textarea rows={3} value={form.excerpt} onChange={(event) => setDraft({ ...form, excerpt: event.target.value })} />
          </label>
          <label>
            Content
            <textarea rows={8} value={form.content} onChange={(event) => setDraft({ ...form, content: event.target.value })} />
          </label>
          <div className="admin-form-actions">
            <button type="button" className="button button-primary" onClick={() => savePost("published")}>
              Publish
            </button>
            <button type="button" className="button button-ghost" onClick={() => savePost("draft")}>
              Save draft
            </button>
            <button type="submit" className="button button-ghost">
              Save
            </button>
            <button type="button" className="admin-danger-btn" onClick={removePost}>
              Delete
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
