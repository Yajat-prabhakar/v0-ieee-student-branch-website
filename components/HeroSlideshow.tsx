'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

const SLIDES = [
  { src: '/hero/hero-1.jpg', alt: 'IEEE BVIMR Inauguration Ceremony — panel session' },
  { src: '/hero/hero-2.jpg', alt: 'DSSYWLC 2025 — group photo with IEEE Delhi Section' },
  { src: '/hero/hero-3.jpg', alt: 'Award ceremony at BVIMR campus' },
  { src: '/hero/hero-4.jpg', alt: 'IEEE Student Branch inauguration award' },
  { src: '/hero/hero-5.jpg', alt: 'IEEE BVIMR Student Branch inaugural group photo' },
  { src: '/hero/hero-6.jpg', alt: 'DSSYWLC 2025 at Poornima Institute' },
]

const INTERVAL = 4500 // ms between slides

export default function HeroSlideshow() {
  const [current, setCurrent] = useState(0)
  const [prev, setPrev]       = useState<number | null>(null)
  const [fading, setFading]   = useState(false)

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(current)
      setFading(true)
      setCurrent((c) => (c + 1) % SLIDES.length)
    }, INTERVAL)
    return () => clearInterval(id)
  }, [current])

  // clear the "prev" layer after transition completes
  useEffect(() => {
    if (!fading) return
    const t = setTimeout(() => { setPrev(null); setFading(false) }, 900)
    return () => clearTimeout(t)
  }, [fading])

  return (
    /* full-bleed container — position absolute so Hero text sits on top */
    <div className="absolute inset-0 overflow-hidden" aria-hidden="true">

      {/* previous slide fades out */}
      {prev !== null && (
        <Image
          key={`prev-${prev}`}
          src={SLIDES[prev].src}
          alt={SLIDES[prev].alt}
          fill
          priority
          className="object-cover object-center"
          style={{ opacity: 0, transition: 'opacity 900ms ease' }}
        />
      )}

      {/* current slide fades in */}
      {SLIDES.map((slide, idx) => (
        <Image
          key={`slide-${idx}`}
          src={slide.src}
          alt={slide.alt}
          fill
          priority={idx === 0}
          className="object-cover object-center"
          style={{
            opacity: idx === current ? 1 : 0,
            transition: 'opacity 900ms ease',
            zIndex: idx === current ? 1 : 0,
          }}
        />
      ))}

      {/* Dark overlay — keeps text readable over any photo */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,21,47,0.72) 0%, rgba(0,33,71,0.80) 60%, rgba(0,21,47,0.92) 100%)',
          zIndex: 10,
        }}
      />

      {/* Dot indicators */}
      <div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
        style={{ zIndex: 20 }}
      >
        {SLIDES.map((_, idx) => (
          <button
            key={idx}
            onClick={() => { setPrev(current); setCurrent(idx); setFading(true) }}
            aria-label={`Go to slide ${idx + 1}`}
            className="rounded-full transition-all duration-300"
            style={{
              width:  idx === current ? '24px' : '8px',
              height: '8px',
              background: idx === current ? '#fff' : 'rgba(255,255,255,0.35)',
            }}
          />
        ))}
      </div>
    </div>
  )
}
