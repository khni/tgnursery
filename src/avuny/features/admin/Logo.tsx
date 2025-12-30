import React from 'react'

export default function AdminLogo() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        fontWeight: 700,
        fontSize: '18px',
        letterSpacing: '-0.3px',
      }}
    >
      {/* Optional icon */}
      <div
        style={{
          width: 28,
          height: 28,
          borderRadius: 6,
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontSize: 14,
        }}
      >
        TG
      </div>

      <span>Topo Gigio</span>
    </div>
  )
}
