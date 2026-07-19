import { useState } from 'react'
import { stopMusic, startMusic, isMusicEnabled } from '../utils/sound.js'

export default function AdModal({ onClose }) {
  const [ended, setEnded] = useState(false)
  const wasMusicOn = isMusicEnabled()

  useState(() => {
    stopMusic()
  })

  function handleClose() {
    if (wasMusicOn) startMusic()
    onClose()
  }

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        background: '#000',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <video
        src="/pub-premium.mp4"
        autoPlay
        playsInline
        onEnded={() => setEnded(true)}
        style={{
          width: '100vw',
          height: '100vh',
          objectFit: 'cover'
        }}
      />
      {ended && (
        <button
          className="btn-outline"
          onClick={handleClose}
          style={{
            position: 'absolute',
            top: '16px',
            right: '16px',
            zIndex: 10000
          }}
        >
          ✕ Fermer
        </button>
      )}
    </div>
  )
}
