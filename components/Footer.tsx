'use client'

export default function Footer() {
  return (
    <footer
      id="contato"
      style={{
        padding: '10vh 8vw',
        borderTop: '1px solid var(--border)',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'end',
        gap: '4rem',
      }}
    >
      <div>
        <span
          data-reveal
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: '#999',
            display: 'block',
            marginBottom: '1.5rem',
          }}
        >
          03 / CONTATO
        </span>
        <a
          data-reveal
          href="mailto:voideternaldubs@gmail.com"
          style={{
            fontSize: 'clamp(1.8rem, 4vw, 4rem)',
            fontWeight: 300,
            letterSpacing: '-0.02em',
            display: 'block',
            transition: 'opacity 0.3s',
          }}
          onMouseEnter={(e) => ((e.target as HTMLElement).style.opacity = '0.4')}
          onMouseLeave={(e) => ((e.target as HTMLElement).style.opacity = '1')}
        >
          Vamos falar.
        </a>
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'flex-end',
          gap: '2.5rem',
          paddingBottom: '0.5rem',
        }}
      >
        {['GitHub', 'Twitter', 'LinkedIn'].map((social) => (
          <a
            key={social}
            href="#"
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: '#bbb',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0a0a0a')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#bbb')}
          >
            {social.toUpperCase()}
          </a>
        ))}
      </div>

      <div
        style={{
          gridColumn: '1 / -1',
          borderTop: '1px solid var(--border)',
          paddingTop: '1.5rem',
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '2rem',
        }}
      >
        <span style={{ fontSize: '0.65rem', color: '#ccc' }}>© 2024 KIYOTAKA</span>
        <span style={{ fontSize: '0.65rem', color: '#ccc' }}>CREATIVE DEVELOPER</span>
      </div>
    </footer>
  )
}
