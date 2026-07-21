import { useState, useMemo } from 'react'
import { stopMusic, startMusic, isMusicEnabled } from '../utils/sound.js'

const ADS = ['/pub1.mp4', '/pub2.mp4', '/pub3.mp4']

export default function AdModal({ onClose }) {
  const [ended, setEnded] = useState(false)
  const wasMusicOn = isMusicEnabled()
  const adSrc = useMemo(() => ADS[Math.floor(Math.random() * ADS.length)], [])

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
        src={adSrc}
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
