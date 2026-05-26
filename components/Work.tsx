'use client'

import { useRef } from 'react'
import gsap from 'gsap'

const projects = [
  { num: '01', name: 'Portal Ayslla', tags: 'WebGL · 3D · React', year: '2024' },
  { num: '02', name: 'Landing Imersiva', tags: 'Three.js · GSAP · Shader', year: '2024' },
  { num: '03', name: 'UI Motion System', tags: 'Framer Motion · Next.js', year: '2024' },
  { num: '04', name: 'WebGL Shader FX', tags: 'GLSL · Canvas · GPU', year: '2024' },
]

function ProjectRow({ project }: { project: typeof projects[0] }) {
  const rowRef = useRef<HTMLDivElement>(null)

  const onEnter = () => {
    gsap.to(rowRef.current, { x: 8, duration: 0.3, ease: 'expo.out' })
  }
  const onLeave = () => {
    gsap.to(rowRef.current, { x: 0, duration: 0.4, ease: 'expo.out' })
  }

  return (
    <div
      ref={rowRef}
      data-reveal
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        display: 'grid',
        gridTemplateColumns: '4rem 1fr auto auto',
        alignItems: 'center',
        padding: '1.8rem 0',
        borderBottom: '1px solid var(--border)',
        cursor: 'pointer',
        gap: '2rem',
      }}
    >
      <span style={{ fontSize: '0.65rem', color: '#bbb', letterSpacing: '0.1em' }}>
        {project.num}
      </span>
      <span
        style={{
          fontSize: 'clamp(1.4rem, 3.5vw, 2.8rem)',
          fontWeight: 300,
          letterSpacing: '-0.01em',
        }}
      >
        {project.name}
      </span>
      <span style={{ fontSize: '0.7rem', color: '#bbb', letterSpacing: '0.08em' }}>
        {project.tags}
      </span>
      <span style={{ fontSize: '0.7rem', color: '#ccc' }}>{project.year}</span>
    </div>
  )
}

export default function Work() {
  return (
    <section id="projetos" style={{ padding: '16vh 8vw' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline',
          marginBottom: '3rem',
          paddingBottom: '1.5rem',
          borderBottom: '1px solid var(--border)',
        }}
      >
        <span
          data-reveal
          style={{ fontSize: '0.65rem', letterSpacing: '0.25em', color: '#999' }}
        >
          02 / PROJETOS
        </span>
        <span style={{ fontSize: '0.65rem', color: '#ccc' }}>( {projects.length} )</span>
      </div>

      {projects.map((p) => (
        <ProjectRow key={p.num} project={p} />
      ))}
    </section>
  )
}
