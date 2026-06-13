import { useEffect, useRef, useState } from "react";
import { useContent } from "../context/ContentContext.jsx";
import MessageDialog from "../components/MessageDialog.jsx";

export default function AdminSettings() {
  const { content, updateSite, resetAll, exportJson, importJson } = useContent();
  const site = content.site ?? {};
  const [siteDraft, setSiteDraft] = useState({ ...site });
  const [logoPreviewSrc, setLogoPreviewSrc] = useState(site.logo ?? "");
  const [selectedLogoFile, setSelectedLogoFile] = useState(null);
  const [showResetDialog, setShowResetDialog] = useState(false);
  const [dialog, setDialog] = useState({
    open: false,
    type: "info",
    title: "",
    message: "",
    confirmText: "OK",
    cancelText: null,
  });
  const logoFileRef = useRef(null);
  const fileRef = useRef(null);

  useEffect(() => {
    setSiteDraft({ ...site });
    setSelectedLogoFile(null);
  }, [site]);

  useEffect(() => {
    if (selectedLogoFile) {
      const objectUrl = URL.createObjectURL(selectedLogoFile);
      setLogoPreviewSrc(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
    setLogoPreviewSrc(siteDraft.logo ?? "");
  }, [selectedLogoFile, siteDraft.logo]);

  const setSiteField = (field, value) => {
    setSiteDraft((current) => ({ ...current, [field]: value }));
    if (field === "logo") {
      setSelectedLogoFile(null);
    }
  };

  const setSocialField = (index, field, value) => {
    setSiteDraft((current) => {
      const links = Array.isArray(current.socialLinks) ? [...current.socialLinks] : [];
      links[index] = { ...links[index], [field]: value };
      return { ...current, socialLinks: links };
    });
  };

  const addSocialLink = () => {
    setSiteDraft((current) => ({
      ...current,
      socialLinks: [...(current.socialLinks ?? []), { name: "", url: "" }],
    }));
  };

  const removeSocialLink = (index) => {
    setSiteDraft((current) => {
      const links = [...(current.socialLinks ?? [])];
      links.splice(index, 1);
      return { ...current, socialLinks: links };
    });
  };

  const openDialog = (options) => {
    setDialog({
      open: true,
      type: options.type ?? "info",
      title: options.title,
      message: options.message,
      confirmText: options.confirmText ?? "OK",
      cancelText: options.cancelText ?? null,
      onConfirm: options.onConfirm,
      onClose: () => setDialog((current) => ({ ...current, open: false })),
    });
  };

  const saveSite = () => {
    updateSite(siteDraft);
    openDialog({
      type: "success",
      title: "Saved",
      message: "Site identity changes were saved successfully.",
    });
  };

  const handleLogoFileChange = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setSelectedLogoFile(file);
    event.target.value = "";
  };

  const handleImportFile = async (file) => {
    if (!file) return;
    try {
      await importJson(file);
      openDialog({
        type: "success",
        title: "Import complete",
        message: "Your JSON backup was imported successfully.",
      });
    } catch (error) {
      openDialog({
        type: "error",
        title: "Import failed",
        message: "Could not import that file. Please use a valid JSON backup.",
      });
    }
  };

  return (
    <>
      <div className="admin-settings-grid">
        <section className="admin-card admin-settings-card">
          <div className="admin-card-header">
            <div>
              <strong>Site identity</strong>
              <p>Update the site logo and social links used across the site.</p>
            </div>
          </div>
          <div className="admin-form admin-settings-form">
            <label>
              Logo image upload
              <div className="admin-file-input">
                <button
                  type="button"
                  onClick={() => logoFileRef.current?.click()}
                >
                  Select logo file
                </button>
                <span>
                  {selectedLogoFile?.name || siteDraft.logo || "No logo selected yet"}
                </span>
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  ref={logoFileRef}
                  onChange={handleLogoFileChange}
                />
              </div>
            </label>
            <label>
              Logo image path
              <input
                type="text"
                value={siteDraft.logo ?? ""}
                onChange={(event) => setSiteField("logo", event.target.value)}
                placeholder="/assets/docx-media/image6.png"
              />
            </label>
            {logoPreviewSrc ? (
              <div className="admin-image-preview">
                <strong>Logo preview</strong>
                <img
                  src={logoPreviewSrc}
                  alt={siteDraft.logoAlt ?? "Logo preview"}
                />
              </div>
            ) : null}
            <label>
              Logo alt text
              <input
                type="text"
                value={siteDraft.logoAlt ?? ""}
                onChange={(event) => setSiteField("logoAlt", event.target.value)}
                placeholder="Dirre Seniors Home Facilitation logo"
              />
            </label>
            <fieldset className="admin-fieldset">
              <legend>Social media links</legend>
              {(siteDraft.socialLinks ?? []).map((link, index) => (
                <div key={index} className="social-link-row">
                  <label>
                    Platform
                    <input
                      type="text"
                      value={link.name ?? ""}
                      onChange={(event) => setSocialField(index, "name", event.target.value)}
                      placeholder="Facebook"
                    />
                  </label>
                  <label>
                    URL
                    <input
                      type="url"
                      value={link.url ?? ""}
                      onChange={(event) => setSocialField(index, "url", event.target.value)}
                      placeholder="https://facebook.com/yourpage"
                    />
                  </label>
                  <button type="button" className="button button-ghost button-small" onClick={() => removeSocialLink(index)}>
                    Remove
                  </button>
                </div>
              ))}
              <button type="button" className="button button-primary button-small" onClick={addSocialLink}>
                + Add link
              </button>
            </fieldset>
            <div className="admin-form-actions admin-settings-actions">
              <button type="button" className="button button-primary" onClick={saveSite}>
                Save site identity
              </button>
            </div>
          </div>
        </section>

        <section className="admin-card admin-settings-card">
          <div className="admin-card-header">
            <div>
              <strong>Content and backup</strong>
              <p>Export, import, or reset your website content safely.</p>
            </div>
          </div>
          <div className="admin-form admin-settings-form">
            <p className="admin-form-hint">
              Export a JSON backup before making major changes. Use import to restore content from another browser or device.
            </p>
            <div className="admin-form-actions admin-settings-actions">
              <button
                type="button"
                className="button button-primary"
                onClick={() => {
                  exportJson();
                  openDialog({
                    type: "success",
                    title: "Export ready",
                    message: "A JSON backup has been downloaded for safekeeping.",
                  });
                }}
              >
                Export JSON
              </button>
              <button type="button" className="button button-ghost" onClick={() => fileRef.current?.click()}>
                Import JSON
              </button>
            </div>
            <input
              ref={fileRef}
              type="file"
              accept="application/json,.json"
              hidden
              onChange={async (event) => {
                const file = event.target.files?.[0];
                if (!file) return;
                await handleImportFile(file);
                event.target.value = "";
              }}
            />
            <div className="admin-form-actions admin-settings-actions">
              <button type="button" className="admin-danger-btn" onClick={() => setShowResetDialog(true)}>
                Reset to defaults
              </button>
            </div>
            <p className="admin-form-hint">
              For a shared live site later, continue using Supabase and a secure backend to protect admin access.
            </p>
          </div>
        </section>
      </div>

      <MessageDialog
        open={showResetDialog}
        title="Reset all content"
        message="Resetting content will restore the site to defaults and remove any unpublished changes. Make sure you have exported a backup first."
        type="confirm"
        confirmText="Reset content"
        cancelText="Cancel"
        onConfirm={() => {
          resetAll();
          setShowResetDialog(false);
          openDialog({
            type: "success",
            title: "Content reset",
            message: "The site has been restored to its default content.",
          });
        }}
        onClose={() => setShowResetDialog(false)}
      />
      <MessageDialog {...dialog} />
    </>
  );
}
