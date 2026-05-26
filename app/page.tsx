'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Work from '@/components/Work'
import Footer from '@/components/Footer'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const mainRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const lines = mainRef.current?.querySelectorAll('[data-reveal]')
    if (!lines) return

    lines.forEach((el) => {
      gsap.fromTo(
        el,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'expo.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
          },
        }
      )
    })
  }, [])

  return (
    <main ref={mainRef}>
      <Nav />
      <Hero />
      <About />
      <Work />
      <Footer />
    </main>
  )
}
