'use client'

import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import HeroSlideshow from '@/components/HeroSlideshow'
import { useEffect, useRef, useState } from 'react'

/* ---------- Scroll-reveal hook ---------- */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [threshold])

  return { ref, visible }
}

/* ---------- Animated counter ---------- */
function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const { ref, visible } = useInView(0.5)

  useEffect(() => {
    if (!visible) return
    let start = 0
    const step = Math.ceil(target / 40)
    const id = setInterval(() => {
      start += step
      if (start >= target) { setCount(target); clearInterval(id) }
      else setCount(start)
    }, 30)
    return () => clearInterval(id)
  }, [visible, target])

  return (
    <div ref={ref} className="stat-value">
      {count}{suffix}
    </div>
  )
}

/* ---------- Reveal wrapper ---------- */
function Reveal({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useInView()
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

/* ---------- Typewriter ---------- */
function TypeWriter({ words, speed = 90 }: { words: string[]; speed?: number }) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = words[wordIdx]
    const delay = deleting ? speed / 2 : speed

    const t = setTimeout(() => {
      if (!deleting) {
        if (charIdx < current.length) {
          setText(current.slice(0, charIdx + 1))
          setCharIdx(c => c + 1)
        } else {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        if (charIdx > 0) {
          setText(current.slice(0, charIdx - 1))
          setCharIdx(c => c - 1)
        } else {
          setDeleting(false)
          setWordIdx(w => (w + 1) % words.length)
        }
      }
    }, delay)

    return () => clearTimeout(t)
  }, [charIdx, deleting, wordIdx, words, speed])

  return (
    <span>
      {text}
      <span
        className="inline-block w-0.5 h-[0.85em] ml-[2px] bg-[#00B5E2] align-middle"
        style={{ animation: 'blink-cursor 1s step-end infinite' }}
      />
    </span>
  )
}

/* ---------- Marquee ticker ---------- */
const TICKER_ITEMS = [
  'IEEE BVIMR Student Branch',
  'Advancing Technology for Humanity',
  'IEEE Region 10 — Asia Pacific',
  'Innovation • Leadership • Excellence',
  'Bharati Vidyapeeth Institute of Management and Research',
]

function Marquee() {
  const items = [...TICKER_ITEMS, ...TICKER_ITEMS] // duplicate for seamless loop
  return (
    <div className="overflow-hidden bg-[#002147] border-y border-white/10 py-3 select-none">
      <div
        className="flex gap-12 whitespace-nowrap"
        style={{ animation: 'marquee 30s linear infinite' }}
      >
        {items.map((item, i) => (
          <span key={i} className="text-sm font-semibold text-white/70 uppercase tracking-widest flex-shrink-0">
            {item}
            <span className="ml-12 text-white/30">•</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ========== PAGE ========== */
export default function Home() {
  const testimonials = [
    {
      quote: "Being part of IEEE BVIMR has been transformative. The events and networking opportunities have shaped my career path.",
      name: "Rahul Kumar",
      role: "Final Year, Computer Science",
    },
    {
      quote: "The workshops organized by the branch are incredibly valuable. I've learned so much about emerging technologies.",
      name: "Priya Sharma",
      role: "Second Year, Electronics Engineering",
    },
    {
      quote: "The leadership program and mentor network have been invaluable for my personal and professional growth.",
      name: "Arjun Patel",
      role: "Alumni, 2022",
    },
  ]

  const benefits = [
    {
      num: '01',
      title: 'Global Network',
      desc: 'Connect with 400,000+ IEEE members across 160 countries and access a worldwide community of innovators.',
      stat: '400K+',
      statLabel: 'Members worldwide',
    },
    {
      num: '02',
      title: 'Technical Excellence',
      desc: 'Gain hands-on experience through cutting-edge workshops, seminars, and real-world technical projects.',
      stat: '50+',
      statLabel: 'Workshops annually',
    },
    {
      num: '03',
      title: 'Career Acceleration',
      desc: 'Access mentorship programs, industry connections, and fast-track your professional development.',
      stat: '95%',
      statLabel: 'Placement success',
    },
    {
      num: '04',
      title: 'Innovation Hub',
      desc: 'Collaborate on groundbreaking projects and participate in competitions and hackathons.',
      stat: '25+',
      statLabel: 'Active projects',
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* ── Hero ── */}
        <section className="bg-[#001830] text-white py-24 md:py-36 relative overflow-hidden min-h-[600px]">
          {/* Background photo slideshow */}
          <HeroSlideshow />

          {/* Dot-grid circuit overlay (sits between photos and dark overlay) */}
          <div
            className="absolute inset-0 bg-dots pointer-events-none"
            style={{ zIndex: 11, opacity: 0.25 }}
          />

          {/* Floating glow orbs */}
          <div
            className="absolute top-1/4 left-1/5 w-[420px] h-[420px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,98,155,0.45) 0%, transparent 70%)',
              filter: 'blur(55px)',
              zIndex: 12,
              animation: 'float-orb-1 9s ease-in-out infinite',
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/5 w-[360px] h-[360px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,181,226,0.3) 0%, transparent 70%)',
              filter: 'blur(60px)',
              zIndex: 12,
              animation: 'float-orb-2 11s ease-in-out infinite',
            }}
          />
          <div
            className="absolute top-3/4 left-3/5 w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,55,90,0.5) 0%, transparent 70%)',
              filter: 'blur(45px)',
              zIndex: 12,
              animation: 'float-orb-3 7s ease-in-out infinite',
            }}
          />

          {/* Content */}
          <div className="container-ieee text-center relative z-20">
            {/* Badge with pulsing ring */}
            <div
              className="inline-block mb-6 relative"
              style={{ animation: 'fade-in 0.8s ease both' }}
            >
              {/* Pulsing outer ring */}
              <div
                className="absolute inset-0 rounded-full border border-[#00B5E2]/40 pointer-events-none"
                style={{ animation: 'glow-ring 2.5s ease-out infinite' }}
              />
              <div className="px-5 py-2 backdrop-blur-md bg-white/15 border border-white/25 rounded-full">
                <span className="text-xs font-bold uppercase tracking-widest text-white">IEEE Region 10 — Asia Pacific</span>
              </div>
            </div>

            {/* Typewriter accent line */}
            <p
              className="text-sm md:text-base font-bold uppercase tracking-widest mb-4 min-h-[1.6em]"
              style={{ color: '#00B5E2', animation: 'slide-up 0.8s ease 0.08s both' }}
            >
              <TypeWriter words={['Innovate', 'Lead', 'Connect', 'Advance', 'Inspire']} />
            </p>

            <h1
              className="text-5xl sm:text-6xl md:text-7xl font-black mb-5 leading-tight text-pretty"
              style={{ animation: 'slide-up 0.8s ease 0.15s both' }}
            >
              <span className="text-gradient-white">IEEE BVIMR</span>
              <br />
              Student Branch
            </h1>

            <p
              className="text-xl md:text-2xl opacity-80 mb-4 max-w-2xl mx-auto font-light"
              style={{ animation: 'slide-up 0.8s ease 0.25s both' }}
            >
              Advancing Technology for Humanity
            </p>
            <p
              className="text-base md:text-lg opacity-60 mb-12 max-w-3xl mx-auto"
              style={{ animation: 'slide-up 0.8s ease 0.35s both' }}
            >
              Join our vibrant community of 40+ passionate students and young professionals dedicated to innovation, leadership, and technical excellence.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-4 justify-center mb-20"
              style={{ animation: 'slide-up 0.8s ease 0.45s both' }}
            >
              <Link
                href="/contact"
                className="btn-ieee-primary relative overflow-hidden group"
              >
                <span className="relative z-10">Join Us Today</span>
                <span
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                  aria-hidden="true"
                />
              </Link>
              <Link href="/about" className="btn-ieee-secondary">Learn More →</Link>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 gap-8 pt-10 border-t border-white/20"
              style={{ animation: 'slide-up 0.8s ease 0.55s both' }}
            >
              <div>
                <Counter target={40} suffix="+" />
                <p className="stat-label">Active Members</p>
              </div>
              <div>
                <Counter target={10} suffix="+" />
                <p className="stat-label">Events Hosted</p>
              </div>
              <div>
                <Counter target={1} suffix="" />
                <p className="stat-label">Student Branch</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Marquee ticker ── */}
        <Marquee />

        {/* ── About Teaser ── */}
        <section className="py-24">
          <div className="container-ieee">
            <Reveal>
              <h2 className="section-title">About the Branch</h2>
              <p className="section-subtitle">Discover who we are and what we stand for</p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-14 items-center mt-4">
              <Reveal delay={100}>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  IEEE BVIMR Student Branch is dedicated to advancing technology for humanity. We bring together passionate students, professionals, and leaders to foster innovation, collaboration, and continuous learning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Through events, workshops, and mentorship programs, we create opportunities for members to grow professionally and personally within the world's largest technical professional organisation.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-4 transition-all duration-300">
                  Read Full Story
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </Reveal>

              <Reveal delay={200}>
                <div className="bg-[#002147] rounded-2xl p-8 text-white grid grid-cols-2 gap-6 border border-white/10 relative overflow-hidden">
                  {/* subtle glow accent */}
                  <div
                    className="absolute -top-10 -right-10 w-40 h-40 rounded-full pointer-events-none"
                    style={{ background: 'radial-gradient(circle, rgba(0,181,226,0.2) 0%, transparent 70%)', filter: 'blur(20px)' }}
                  />
                  {[
                    { val: '40+', label: 'Active Members' },
                    { val: '10+', label: 'Events Hosted' },
                    { val: '2026', label: 'Founded' },
                    { val: 'R10', label: 'IEEE Region' },
                  ].map(({ val, label }) => (
                    <div key={label} className="text-center group relative z-10">
                      <div className="text-3xl font-black text-[#00B5E2] mb-1 group-hover:drop-shadow-[0_0_12px_rgba(0,181,226,0.8)] transition-all duration-300">{val}</div>
                      <div className="text-xs uppercase tracking-widest text-white/60">{label}</div>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── Why IEEE — dark KIIT-style glowing numbered cards ── */}
        <section className="py-24 bg-[#002147] relative overflow-hidden">
          {/* Background glow accent */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(0,98,155,0.35) 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-0 bg-dots pointer-events-none"
            style={{ opacity: 0.15 }}
          />

          <div className="container-ieee relative z-10">
            <Reveal>
              <h2 className="section-title text-center text-white">Why Join IEEE?</h2>
              <p className="section-subtitle text-center text-white/60">Unlock opportunities, build your network, and shape the future of technology</p>
            </Reveal>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
              {benefits.map((b, i) => (
                <Reveal key={b.num} delay={i * 100}>
                  <div className="card-dark-glow group p-6 h-full flex flex-col rounded-xl">
                    {/* Scan-line on hover */}
                    <div className="relative overflow-hidden mb-3">
                      <div className="text-5xl font-black text-white/10 group-hover:text-[#00B5E2]/40 transition-colors duration-300 leading-none">{b.num}</div>
                      <div
                        className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-white/15 to-transparent opacity-0 group-hover:opacity-100 -skew-x-12"
                        style={{ animation: 'none', left: '-2rem', transition: 'none' }}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2">{b.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed mb-4 flex-1">{b.desc}</p>
                    <div className="pt-4 border-t border-white/15">
                      <div className="text-2xl font-black text-[#00B5E2]">{b.stat}</div>
                      <div className="text-xs uppercase tracking-widest text-white/40">{b.statLabel}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Societies — Coming Soon ── */}
        <section className="py-24">
          <div className="container-ieee">
            <Reveal>
              <h2 className="section-title">IEEE Societies</h2>
              <p className="section-subtitle">Specialized technical communities within our branch</p>
            </Reveal>

            <Reveal delay={150}>
              <div className="relative rounded-2xl overflow-hidden border border-border">
                {/* background */}
                <div className="absolute inset-0 bg-[#002147]" />
                <div
                  className="absolute inset-0"
                  style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0,98,155,0.5) 0%, transparent 70%)' }}
                />
                <div
                  className="absolute inset-0 bg-dots pointer-events-none"
                  style={{ opacity: 0.12 }}
                />
                <div className="relative z-10 flex flex-col items-center justify-center py-24 px-6 text-center text-white">
                  {/* Animated ring icon */}
                  <div className="w-16 h-16 relative flex items-center justify-center mb-6">
                    <div
                      className="absolute inset-0 rounded-full border border-[#00B5E2]/30"
                      style={{ animation: 'slow-spin 8s linear infinite' }}
                    />
                    <div
                      className="absolute inset-2 rounded-full border border-dashed border-[#00B5E2]/20"
                      style={{ animation: 'slow-spin-rev 6s linear infinite' }}
                    />
                    <div className="w-10 h-10 rounded-full border-2 border-white/30 flex items-center justify-center backdrop-blur-sm bg-white/10">
                      <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-3xl md:text-4xl font-black mb-3">Coming Soon</h3>
                  <p className="text-lg text-white/70 max-w-xl mb-8">
                    We are currently setting up our IEEE Societies. Stay tuned — exciting technical communities dedicated to different domains of engineering are on the way.
                  </p>
                  <Link href="/contact" className="btn-ieee-primary">
                    Get Notified
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Testimonials ── */}
        <section className="py-24 bg-secondary">
          <div className="container-ieee">
            <Reveal>
              <h2 className="section-title text-center">Member Voices</h2>
              <p className="section-subtitle text-center">What our members are saying</p>
            </Reveal>
            <Reveal delay={150}>
              <TestimonialCarousel testimonials={testimonials} />
            </Reveal>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="bg-animated-gradient text-white py-24 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(0,98,155,0.4) 0%, transparent 70%)' }}
          />
          <div
            className="absolute inset-0 bg-dots pointer-events-none"
            style={{ opacity: 0.1 }}
          />
          {/* Decorative floating orb */}
          <div
            className="absolute -top-20 -right-20 w-80 h-80 rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(0,181,226,0.25) 0%, transparent 70%)',
              filter: 'blur(50px)',
              animation: 'float-orb-2 10s ease-in-out infinite',
            }}
          />
          <div className="container-ieee text-center relative z-10">
            <Reveal>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the IEEE Community</h2>
              <p className="text-xl opacity-80 mb-8 max-w-2xl mx-auto font-light">
                Become part of a global community of engineers, technologists, and innovators
              </p>
              <Link
                href="/contact"
                className="btn-ieee-primary relative overflow-hidden group inline-block"
              >
                <span className="relative z-10">Get Started</span>
                <span
                  className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-0 transition-transform duration-300 ease-out"
                  aria-hidden="true"
                />
              </Link>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
