import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { pageList } from "../cms/defaultContent.js";
import { useContent } from "../context/ContentContext.jsx";

const editableSections = {
  home: [
    { key: "meta", label: "Page settings" },
    { key: "hero", label: "Hero banner" },
    { key: "visionMission", label: "Vision & Mission" },
    { key: "about", label: "Why This Home Matters" },
    { key: "founderPreview", label: "Founder preview" },
    { key: "care", label: "Care center heading" },
    { key: "supportBand", label: "Support band" },
    { key: "news", label: "News section heading" },
  ],
  about: [
    { key: "meta", label: "Page settings" },
    { key: "hero", label: "Page hero" },
    { key: "visionMission", label: "Vision & Mission" },
  ],
  founder: [
    { key: "meta", label: "Page settings" },
    { key: "hero", label: "Page hero" },
  ],
  careCenter: [
    { key: "meta", label: "Page settings" },
    { key: "hero", label: "Page hero" },
  ],
  gallery: [
    { key: "meta", label: "Page settings" },
    { key: "hero", label: "Page hero" },
  ],
  support: [
    { key: "meta", label: "Page settings" },
    { key: "hero", label: "Page hero" },
    { key: "contact", label: "Contact details" },
  ],
};

export default function AdminPages() {
  const { content, getPage, updatePageSection } = useContent();
  const [pageKey, setPageKey] = useState("home");
  const [sectionKey, setSectionKey] = useState("hero");
  const [draft, setDraft] = useState(null);

  const page = getPage(pageKey);
  const sections = editableSections[pageKey] ?? [{ key: "hero", label: "Page hero" }];
  const section = page?.[sectionKey];

  useEffect(() => {
    const current = content.pages[pageKey]?.[sectionKey];
    if (current) {
      setDraft(JSON.parse(JSON.stringify(current)));
    }
  }, [pageKey, sectionKey, content]);

  const saveSection = () => {
    if (!draft) return;

    updatePageSection(pageKey, sectionKey, draft);
  };

  const updateField = (field, value) => {
    setDraft((current) => ({ ...current, [field]: value }));
  };

  const updateParagraph = (index, value) => {
    setDraft((current) => {
      const paragraphs = [...(current.paragraphs ?? [])];
      paragraphs[index] = value;
      return { ...current, paragraphs };
    });
  };

  const updateMetaTag = (index, value) => {
    setDraft((current) => {
      const metaTags = [...(current.metaTags ?? [])];
      metaTags[index] = value;
      return { ...current, metaTags };
    });
  };

  if (!draft) return null;

  const pageInfo = pageList.find((item) => item.key === pageKey);

  return (
    <>
      <div className="admin-toolbar admin-page-toolbar">
        <div>
          <strong>Edit page:</strong> {pageInfo?.name}
          <span className="admin-page-path">{pageInfo?.path}</span>
        </div>
        <div className="admin-toolbar-actions">
          <label className="admin-search admin-select-group">
            <span className="visually-hidden">Select page</span>
            <select className="admin-select" value={pageKey} onChange={(event) => setPageKey(event.target.value)} aria-label="Select page">
              {pageList.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>
          <label className="admin-search admin-select-group">
            <span className="visually-hidden">Select section</span>
            <select className="admin-select" value={sectionKey} onChange={(event) => setSectionKey(event.target.value)} aria-label="Select section">
              {sections.map((item) => (
                <option key={item.key} value={item.key}>
                  {item.label}
                </option>
              ))}
            </select>
          </label>
          {pageInfo ? (
            <Link className="button button-ghost" to={pageInfo.path} target="_blank" rel="noreferrer">
              View page
            </Link>
          ) : null}
        </div>
      </div>
      <div className="admin-layout-split">
        <div className="admin-card">
          <table className="admin-table">
            <thead>
              <tr>
                <th scope="col">Page</th>
                <th scope="col">URL</th>
                <th scope="col">Sections</th>
              </tr>
            </thead>
            <tbody>
              {pageList.map((item) => (
                <tr key={item.key} className={item.key === pageKey ? "is-selected" : ""}>
                  <td>
                    <button type="button" className="admin-link-btn" onClick={() => setPageKey(item.key)}>
                      {item.name}
                    </button>
                  </td>
                  <td>{item.path}</td>
                  <td>{(editableSections[item.key] ?? []).length}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <form
          className="admin-form"
          aria-label="Edit page section"
          onSubmit={(event) => {
            event.preventDefault();
            saveSection();
          }}
        >
          <p className="admin-form-hint">
            Editing <strong>{pageInfo?.name}</strong> — {sections.find((item) => item.key === sectionKey)?.label}
          </p>

          {"eyebrow" in draft ? (
            <label>
              Eyebrow
              <input type="text" value={draft.eyebrow ?? ""} onChange={(event) => updateField("eyebrow", event.target.value)} />
            </label>
          ) : null}

          {"title" in draft ? (
            <label>
              Title
              <input type="text" value={draft.title ?? ""} onChange={(event) => updateField("title", event.target.value)} />
            </label>
          ) : null}

          {"heading" in draft ? (
            <label>
              Heading
              <input type="text" value={draft.heading ?? ""} onChange={(event) => updateField("heading", event.target.value)} />
            </label>
          ) : null}

          {"lead" in draft ? (
            <label>
              Lead
              <textarea rows={3} value={draft.lead ?? ""} onChange={(event) => updateField("lead", event.target.value)} />
            </label>
          ) : null}

          {"deck" in draft ? (
            <label>
              Intro
              <textarea rows={3} value={draft.deck ?? ""} onChange={(event) => updateField("deck", event.target.value)} />
            </label>
          ) : null}

          {"body" in draft ? (
            <label>
              Body
              <textarea rows={4} value={draft.body ?? ""} onChange={(event) => updateField("body", event.target.value)} />
            </label>
          ) : null}

          {"visionTitle" in draft ? (
            <label>
              Vision Title
              <input type="text" value={draft.visionTitle ?? ""} onChange={(event) => updateField("visionTitle", event.target.value)} />
            </label>
          ) : null}

          {"vision" in draft ? (
            <label>
              Vision Content
              <textarea rows={4} value={draft.vision ?? ""} onChange={(event) => updateField("vision", event.target.value)} />
            </label>
          ) : null}

          {"missionTitle" in draft ? (
            <label>
              Mission Title
              <input type="text" value={draft.missionTitle ?? ""} onChange={(event) => updateField("missionTitle", event.target.value)} />
            </label>
          ) : null}

          {"mission" in draft ? (
            <label>
              Mission Content
              <textarea rows={4} value={draft.mission ?? ""} onChange={(event) => updateField("mission", event.target.value)} />
            </label>
          ) : null}

          {"motto" in draft ? (
            <label>
              Motto
              <input type="text" value={draft.motto ?? ""} onChange={(event) => updateField("motto", event.target.value)} />
            </label>
          ) : null}

          {"accentLabel" in draft ? (
            <label>
              Accent link label
              <input type="text" value={draft.accentLabel ?? ""} onChange={(event) => updateField("accentLabel", event.target.value)} />
            </label>
          ) : null}

          {Array.isArray(draft.paragraphs)
            ? draft.paragraphs.map((paragraph, index) => (
                <label key={index}>
                  Paragraph {index + 1}
                  <textarea rows={4} value={paragraph} onChange={(event) => updateParagraph(index, event.target.value)} />
                </label>
              ))
            : null}

          {Array.isArray(draft.metaTags)
            ? draft.metaTags.map((tag, index) => (
                <label key={index}>
                  Hero tag {index + 1}
                  <input type="text" value={tag} onChange={(event) => updateMetaTag(index, event.target.value)} />
                </label>
              ))
            : null}

          {"image" in draft ? (
            <label>
              Image path
              <input type="text" value={draft.image ?? ""} onChange={(event) => updateField("image", event.target.value)} />
            </label>
          ) : null}

          {"imageAlt" in draft ? (
            <label>
              Image alt text
              <input type="text" value={draft.imageAlt ?? ""} onChange={(event) => updateField("imageAlt", event.target.value)} />
            </label>
          ) : null}

          {"figcaption" in draft ? (
            <label>
              Image caption
              <input type="text" value={draft.figcaption ?? ""} onChange={(event) => updateField("figcaption", event.target.value)} />
            </label>
          ) : null}

          {"person" in draft ? (
            <label>
              Contact name
              <input type="text" value={draft.person ?? ""} onChange={(event) => updateField("person", event.target.value)} />
            </label>
          ) : null}

          {"position" in draft ? (
            <label>
              Contact role
              <input type="text" value={draft.position ?? ""} onChange={(event) => updateField("position", event.target.value)} />
            </label>
          ) : null}

          {"address" in draft ? (
            <label>
              Address
              <input type="text" value={draft.address ?? ""} onChange={(event) => updateField("address", event.target.value)} />
            </label>
          ) : null}

          {"tel" in draft ? (
            <label>
              Phone number
              <input type="text" value={draft.tel ?? ""} onChange={(event) => updateField("tel", event.target.value)} />
            </label>
          ) : null}

          {"email" in draft ? (
            <label>
              Email address
              <input type="email" value={draft.email ?? ""} onChange={(event) => updateField("email", event.target.value)} />
            </label>
          ) : null}

          {"description" in draft ? (
            <label>
              Meta description
              <textarea rows={3} value={draft.description ?? ""} onChange={(event) => updateField("description", event.target.value)} />
            </label>
          ) : null}
          <div className="admin-preview">
            <h2>Section preview</h2>
            <p>
              <strong>Section:</strong> {sections.find((item) => item.key === sectionKey)?.label}
            </p>
            {draft.title ? <p><strong>Title:</strong> {draft.title}</p> : null}
            {draft.heading ? <p><strong>Heading:</strong> {draft.heading}</p> : null}
            {draft.lead ? <p>{draft.lead}</p> : null}
            {draft.body ? <p>{draft.body}</p> : null}
            {draft.image ? <p><strong>Image path:</strong> {draft.image}</p> : null}
            {draft.imageAlt ? <p><strong>Alt text:</strong> {draft.imageAlt}</p> : null}
            {draft.figcaption ? <p><strong>Caption:</strong> {draft.figcaption}</p> : null}
          </div>

          {"image" in draft ? (
            <label>
              Image path
              <input type="text" value={draft.image ?? ""} onChange={(event) => updateField("image", event.target.value)} />
            </label>
          ) : null}

          {"imageAlt" in draft ? (
            <label>
              Image alt text
              <input type="text" value={draft.imageAlt ?? ""} onChange={(event) => updateField("imageAlt", event.target.value)} />
            </label>
          ) : null}

          {"figcaption" in draft ? (
            <label>
              Caption
              <input type="text" value={draft.figcaption ?? ""} onChange={(event) => updateField("figcaption", event.target.value)} />
            </label>
          ) : null}

          <div className="admin-form-actions">
            <button type="submit" className="button button-primary">
              Save section
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
