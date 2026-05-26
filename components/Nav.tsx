'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const links = ['Sobre', 'Projetos', 'Contato']

export default function Nav() {
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'expo.out', delay: 1 }
    )
  }, [])

  return (
    <nav
      ref={navRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '1.75rem 8vw',
      }}
    >
      <span
        style={{
          fontSize: '0.7rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          color: '#0a0a0a',
        }}
      >
        KIYOTAKA
      </span>
      <div style={{ display: 'flex', gap: '2.5rem' }}>
        {links.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            style={{
              fontSize: '0.7rem',
              letterSpacing: '0.12em',
              color: '#999',
              transition: 'color 0.3s',
            }}
            onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0a0a0a')}
            onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#999')}
          >
            {item.toUpperCase()}
          </a>
        ))}
      </div>
    </nav>
  )
}
