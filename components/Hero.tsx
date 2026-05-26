'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import Scene from './Scene'

const title = 'KIYOTAKA'

export default function Hero() {
  const charsRef = useRef<(HTMLSpanElement | null)[]>([])
  const metaRef = useRef<HTMLSpanElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const lineRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.2 })

    tl.fromTo(
      charsRef.current,
      { y: 110, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.04, duration: 1.1, ease: 'expo.out' }
    )
      .fromTo(
        metaRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' },
        '-=0.5'
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'expo.out' },
        '-=0.5'
      )
      .fromTo(
        lineRef.current,
        { scaleX: 0, transformOrigin: 'left' },
        { scaleX: 1, duration: 1.2, ease: 'expo.inOut' },
        '-=0.8'
      )
  }, [])

  return (
    <section
      style={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      <Scene />

      <div
        style={{
          position: 'relative',
          zIndex: 1,
          padding: '0 8vw',
          maxWidth: '60%',
        }}
      >
        <span
          ref={metaRef}
          style={{
            fontSize: '0.65rem',
            letterSpacing: '0.25em',
            color: '#999',
            display: 'block',
            marginBottom: '2rem',
            opacity: 0,
          }}
        >
          CREATIVE DEVELOPER — 2024
        </span>

        <h1
          style={{
            fontSize: 'clamp(5rem, 11vw, 13rem)',
            fontWeight: 300,
            lineHeight: 0.88,
            letterSpacing: '-0.02em',
            overflow: 'hidden',
          }}
        >
          {title.split('').map((char, i) => (
            <span
              key={i}
              ref={(el) => { charsRef.current[i] = el }}
              style={{ display: 'inline-block', opacity: 0 }}
            >
              {char}
            </span>
          ))}
        </h1>

        <div
          ref={lineRef}
          style={{
            height: '1px',
            background: '#0a0a0a',
            margin: '2.5rem 0',
            width: '100%',
          }}
        />

        <p
          ref={subRef}
          style={{
            fontSize: '0.95rem',
            fontWeight: 300,
            color: '#777',
            lineHeight: 1.8,
            letterSpacing: '0.02em',
            opacity: 0,
          }}
        >
          Experiências digitais imersivas.
          <br />
          WebGL · Motion · 3D
        </p>
      </div>

      <div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '8vw',
          display: 'flex',
          alignItems: 'center',
          gap: '1rem',
        }}
      >
        <div
          style={{ width: 24, height: 1, background: '#bbb' }}
        />
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', color: '#bbb' }}>
          SCROLL
        </span>
      </div>
    </section>
  )
}
