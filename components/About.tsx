'use client'

export default function About() {
  return (
    <section
      id="sobre"
      style={{
        padding: '16vh 8vw',
        borderTop: '1px solid var(--border)',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '200px 1fr',
          gap: '4rem',
          alignItems: 'start',
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
              marginTop: '0.5rem',
            }}
          >
            01 / SOBRE
          </span>
        </div>

        <div>
          <p
            data-reveal
            style={{
              fontSize: 'clamp(1.6rem, 3vw, 2.8rem)',
              fontWeight: 300,
              lineHeight: 1.35,
              letterSpacing: '-0.01em',
              marginBottom: '3rem',
            }}
          >
            Design que vive entre código e arte. Sites que respondem. Interfaces que respiram.
          </p>

          <div
            data-reveal
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '2rem',
              borderTop: '1px solid var(--border)',
              paddingTop: '2rem',
            }}
          >
            {[
              ['Stack', 'Three.js · GSAP · Next.js · WebGL'],
              ['Foco', 'Creative Dev · Motion · 3D'],
              ['Modo', 'Projetos sob medida'],
              ['Base', 'Brasil — Remoto'],
            ].map(([label, value]) => (
              <div key={label}>
                <span
                  style={{
                    fontSize: '0.65rem',
                    letterSpacing: '0.2em',
                    color: '#bbb',
                    display: 'block',
                    marginBottom: '0.5rem',
                  }}
                >
                  {label.toUpperCase()}
                </span>
                <span style={{ fontSize: '0.85rem', color: '#555', lineHeight: 1.6 }}>
                  {value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
