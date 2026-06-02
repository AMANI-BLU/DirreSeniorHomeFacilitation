import { useRef } from "react";
import { useContent } from "../context/ContentContext.jsx";

export default function AdminSettings() {
  const { resetAll, exportJson, importJson } = useContent();
  const fileRef = useRef(null);

  return (
    <div className="admin-card admin-settings">
      <h2>Content backup</h2>
      <p>
        Content is saved in this browser&apos;s local storage. Export a JSON backup before clearing site data, or import
        a backup on another device.
      </p>
      <div className="admin-form-actions">
        <button type="button" className="button button-primary" onClick={exportJson}>
          Export JSON
        </button>
        <button type="button" className="button button-ghost" onClick={() => fileRef.current?.click()}>
          Import JSON
        </button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          hidden
          onChange={async (event) => {
            const file = event.target.files?.[0];
            if (!file) return;
            try {
              await importJson(file);
            } catch {
              window.alert("Could not import that file. Check that it is valid JSON.");
            }
            event.target.value = "";
          }}
        />
        <button
          type="button"
          className="admin-danger-btn"
          onClick={() => {
            if (window.confirm("Reset all content to the original defaults? This cannot be undone unless you have a backup.")) {
              resetAll();
            }
          }}
        >
          Reset to defaults
        </button>
      </div>
      <p className="admin-form-hint">
        For a shared live site later, connect this admin to a hosted API (Supabase, Firebase, or a small Node backend).
      </p>
    </div>
  );
}
