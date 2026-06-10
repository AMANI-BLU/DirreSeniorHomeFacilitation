export default function MessageDialog({
  open,
  title,
  message,
  type = "info",
  confirmText = "OK",
  cancelText,
  onConfirm,
  onClose,
}) {
  if (!open) return null;

  const handleConfirm = () => {
    if (onConfirm) {
      onConfirm();
    }
    if (!cancelText && onClose) {
      onClose();
    }
  };

  return (
    <div className="dialog-backdrop" role="dialog" aria-modal="true">
      <div className={`dialog-panel dialog-panel--${type}`}>
        <div className="dialog-header">
          <div className={`dialog-icon dialog-icon--${type}`} aria-hidden="true" />
          <div>
            <h3>{title}</h3>
          </div>
        </div>
        <p className="dialog-message">{message}</p>
        <div className="dialog-actions">
          {cancelText ? (
            <button type="button" className="button button-ghost" onClick={onClose}>
              {cancelText}
            </button>
          ) : null}
          <button type="button" className="button button-primary" onClick={handleConfirm}>
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
