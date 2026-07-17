export default function AdModal({ onClose }) {
  return (
    <div className="ad-modal-overlay">
      <div className="ad-modal">
        <video
          src="/pub-premium.mp4"
          controls
          autoPlay
          className="ad-modal__video"
          onEnded={onClose}
        />
        <button className="btn-outline ad-modal__close" onClick={onClose}>
          Fermer
        </button>
      </div>
    </div>
  )
}
