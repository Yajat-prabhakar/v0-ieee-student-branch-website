'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { TestimonialSection } from '@/components/ui/testimonials'

const HERO_IMAGES = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
  '/hero/hero-4.jpg',
  '/hero/hero-5.jpg',
  '/hero/hero-6.jpg',
]

const TICKER_ITEMS = [
  'IEEE BVIMR Student Branch',
  'Advancing Technology for Humanity',
  'IEEE Region 10 — Asia Pacific',
  'Innovation • Leadership • Excellence',
  'Bharati Vidyapeeth Institute of Management and Research',
]

const SLIDE_DURATION = 9_000

type Benefit = {
  num: string
  title: string
  desc: string
  statValue: number
  statSuffix: string
  statLabel: string
  image: string
}

function useSlideIndex(length: number) {
  const [index, setIndex] = useState(0)
  useEffect(() => {
    if (length <= 1) return
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % length)
    }, SLIDE_DURATION)
    return () => clearInterval(id)
  }, [length])
  return index
}

function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let current = 0
    const duration = 1200
    const start = performance.now()
    let raf = 0

    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(target * eased))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [target])

  return (
    <div className="text-4xl md:text-5xl font-black text-white">
      {count}{suffix}
    </div>
  )
}

function StatCounter({ value, suffix, label, active }: { value: number; suffix: string; label: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) {
      setCount(0)
      return
    }
    const duration = 1200
    const start = performance.now()
    let raf = 0
    const animate = (time: number) => {
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(value * eased))
      if (progress < 1) raf = requestAnimationFrame(animate)
    }
    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [active, value])

  return (
    <div>
      <div className="text-3xl md:text-4xl font-black text-blue-800">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-widest text-slate-500 mt-2">{label}</div>
    </div>
  )
}

export function WhyJoinSection() {
  const slides: Benefit[] = [
    {
      num: '01',
      title: 'Global Network',
      desc: 'Connect with 400,000+ IEEE members across 160 countries and access a worldwide community of innovators.',
      statValue: 400,
      statSuffix: 'K+',
      statLabel: 'Members Worldwide',
      image: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '02',
      title: 'Technical Excellence',
      desc: 'Gain hands-on experience through cutting-edge workshops, seminars, and real-world technical projects.',
      statValue: 50,
      statSuffix: '+',
      statLabel: 'Workshops Annually',
      image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '03',
      title: 'Career Acceleration',
      desc: 'Access mentorship programs, industry connections, and fast-track your professional development.',
      statValue: 95,
      statSuffix: '%',
      statLabel: 'Placement Success',
      image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80',
    },
    {
      num: '04',
      title: 'Innovation Hub',
      desc: 'Collaborate on groundbreaking projects and participate in competitions and hackathons.',
      statValue: 25,
      statSuffix: '+',
      statLabel: 'Active Projects',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=1200&q=80',
    },
  ]

  const sectionRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionInView = useInView(sectionRef, { margin: '-20% 0px' })
  const [resetKey, setResetKey] = useState(0)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const onScroll = () => {
      const rect = section.getBoundingClientRect()
      const scrollTop = Math.max(0, -rect.top)
      const stepHeight = window.innerHeight
      const nextIndex = Math.min(slides.length - 1, Math.max(0, Math.floor(scrollTop / stepHeight)))
      setActiveIndex(nextIndex)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slides.length])

  useEffect(() => {
    if (!sectionInView) {
      setResetKey((prev) => prev + 1)
      setActiveIndex(0)
    }
  }, [sectionInView])

return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: `${slides.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center">
        <div className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col justify-between min-h-[520px]">
            <div>
              <span className="font-label-caps text-orange-500 mb-6 block">OPPORTUNITIES</span>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-6">Why Join Our Community?</h2>
              <div className="flex items-center gap-2 mb-8">
                {slides.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-1 rounded-full transition-all duration-500 ${
                      idx === activeIndex
                        ? 'w-12 bg-blue-800'
                        : 'w-4 bg-slate-200'
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="space-y-4"
            >
              <div className="text-5xl font-black text-blue-800">{slides[activeIndex].num}</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">{slides[activeIndex].title}</h2>
              <p className="text-lg text-slate-500">{slides[activeIndex].desc}</p>
              <StatCounter
                key={`${resetKey}-${activeIndex}`}
                value={slides[activeIndex].statValue}
                suffix={slides[activeIndex].statSuffix}
                label={slides[activeIndex].statLabel}
                active={sectionInView}
              />
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-blue-800 text-white font-semibold px-6 py-3 rounded-md mt-2"
              >
                Learn More
              </Link>
            </motion.div>
          </div>
          <div className="relative">
            <div
              className="absolute inset-0 rounded-3xl"
              style={{
                backgroundImage:
                  'linear-gradient(to right, rgba(26, 75, 140, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(26, 75, 140, 0.08) 1px, transparent 1px)',
                backgroundSize: '28px 28px',
              }}
            ></div>
            <div className="relative h-[520px] overflow-hidden rounded-3xl border border-slate-200">
              <motion.div
                animate={{ y: `-${activeIndex * 100}%` }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="h-full"
              >
                {slides.map((slide) => (
                  <div key={slide.num} className="h-[520px] w-full">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ========== PAGE ========== */
export default function Home() {
  const slideIndex = useSlideIndex(HERO_IMAGES.length)
  const heroVariants = useMemo(() => ({
    hidden: { opacity: 0, y: 24 },
    show: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: 'easeOut', delay },
    }),
  }), [])

  return (
    <>
      <Header />
      <main className="min-h-screen">

        <section className="relative h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden bg-slate-900">
          <div className="absolute inset-0 z-0">
            <AnimatePresence mode="sync">
              <motion.img
                key={HERO_IMAGES[slideIndex]}
                src={HERO_IMAGES[slideIndex]}
                alt="IEEE BVIMR Hero"
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  opacity: { duration: 1.2 },
                }}
              />
            </AnimatePresence>
          </div>
          <div className="absolute inset-0 z-10 bg-[#0b2f5b]/70"></div>
          <div className="relative z-20 max-w-4xl mx-auto">
            <motion.div
              initial="hidden"
              animate="show"
              className="flex flex-col items-center"
            >
              <motion.span
                custom={0.1}
                variants={heroVariants}
                className="inline-block font-label-caps text-white/90 tracking-[0.25em] mb-6 px-4 py-2 rounded-full border border-white/30 bg-white/10"
              >
                IEEE REGION 10 — ASIA PACIFIC
              </motion.span>
              <motion.h1
                custom={0.2}
                variants={heroVariants}
                className="text-5xl md:text-6xl font-black text-white mb-4 tracking-tight"
              >
                IEEE BVIMR
                <br />
                Student Branch
              </motion.h1>
              <motion.p
                custom={0.3}
                variants={heroVariants}
                className="text-xl text-white/85 mb-3"
              >
                Advancing Technology for Humanity
              </motion.p>
              <motion.p
                custom={0.4}
                variants={heroVariants}
                className="text-base md:text-lg text-white/70 max-w-2xl mb-8"
              >
                Join our vibrant community of 40+ passionate students and young professionals dedicated to innovation, leadership, and technical excellence.
              </motion.p>
              <motion.div
                custom={0.5}
                variants={heroVariants}
                className="flex flex-wrap justify-center gap-4 mb-10"
              >
                <Link href="/contact" className="bg-white text-primary font-semibold px-6 py-3 rounded-md">
                  Join Us Today
                </Link>
                <Link href="/about" className="bg-transparent text-white border border-white/60 font-semibold px-6 py-3 rounded-md">
                  Learn More →
                </Link>
              </motion.div>
              <motion.div
                custom={0.6}
                variants={heroVariants}
                className="w-full max-w-3xl border-t border-white/30 pt-8"
              >
                <div className="grid grid-cols-3 gap-6">
                  <div>
                    <Counter target={40} suffix="+" />
                    <p className="text-xs uppercase tracking-widest text-white/70 mt-2">Active Members</p>
                  </div>
                  <div>
                    <Counter target={10} suffix="+" />
                    <p className="text-xs uppercase tracking-widest text-white/70 mt-2">Events Hosted</p>
                  </div>
                  <div>
                    <Counter target={1} />
                    <p className="text-xs uppercase tracking-widest text-white/70 mt-2">Student Branch</p>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        <section className="bg-[#002147] border-y border-white/10 py-3">
          <div className="marquee">
            {[0, 1].map((group) => (
              <div key={group} className="marquee-content">
                {TICKER_ITEMS.map((item) => (
                  <span key={`${group}-${item}`} className="text-xs font-semibold text-white/70 uppercase tracking-widest flex-shrink-0">
                    {item}
                    <span className="ml-10 text-white/30">•</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-2 p-6 border-r border-slate-100 last:border-none">
              <div className="text-3xl font-bold text-primary">40+</div>
              <p className="font-label-caps text-slate-500">Active Members</p>
            </div>
            <div className="space-y-2 p-6 border-r border-slate-100 last:border-none">
              <div className="text-3xl font-bold text-amber-700">10+</div>
              <p className="font-label-caps text-slate-500">Annual Events</p>
            </div>
            <div className="space-y-2 p-6 border-r border-slate-100 last:border-none">
              <div className="text-3xl font-bold text-primary">5+</div>
              <p className="font-label-caps text-slate-500">Tech Chapters</p>
            </div>
            <div className="space-y-2 p-6">
              <div className="text-3xl font-bold text-amber-700">15+</div>
              <p className="font-label-caps text-slate-500">Industry Mentors</p>
            </div>
          </div>
        </section>

        <WhyJoinSection />

        <section className="py-20 bg-slate-900 text-white">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-xl translate-x-4 translate-y-4"></div>
              <div className="relative z-10 rounded-xl shadow-2xl w-full h-[420px] bg-slate-800 flex items-center justify-center">
                <span className="text-slate-400 text-sm">WIE Spotlight Image</span>
              </div>
            </div>
            <div className="space-y-6">
              <span className="font-label-caps text-blue-200">SPOTLIGHT</span>
              <h2 className="text-3xl md:text-4xl font-semibold">Women In Engineering (WIE)</h2>
              <p className="text-lg text-slate-300">
                The IEEE Women in Engineering (WIE) is one of the largest international professional organizations dedicated to promoting women engineers and scientists, and inspiring girls around the world to follow their academic interests in a career in engineering and science.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Mentorship Programs',
                  'Leadership Awards',
                  'Technical Webinars',
                  'Advocacy Initiatives',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm">
                    <span className="material-symbols-outlined text-blue-200">check_circle</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link
                href="/affinity-groups"
                className="inline-flex items-center gap-2 border-2 border-blue-200 text-blue-200 hover:bg-blue-200 hover:text-slate-900 font-semibold px-6 py-3 rounded-full transition-all"
              >
                Discover WIE
              </Link>
            </div>
          </div>
        </section>

        <TestimonialSection
          title="Voice of Our Members"
          subtitle="What our members are saying"
          testimonials={[
            {
              id: 1,
              quote: "The global network is real. Through IEEE, I connected with mentors from Silicon Valley who guided my research project on AI Ethics.",
              name: "Rahul Verma",
              role: "Technical Lead",
              imageSrc: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=900&q=80",
            },
            {
              id: 2,
              quote: "Empowering women in STEM isn't just a goal here; it's our culture. The WIE community has been my second home.",
              name: "Mehak Puri",
              role: "WIE Coordinator",
              imageSrc: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80",
            },
            {
              id: 3,
              quote: "IEEE at BVIMR has been a transformative journey. It provided me with the platform to lead and the resources to excel technically.",
              name: "Ananya Sharma",
              role: "Chairperson, BVIMR SB",
              imageSrc: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
            },
          ]}
        />

        <section className="py-20 bg-white">
          <div className="max-w-3xl mx-auto px-6 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-semibold text-slate-900">Ready to Shape the Future?</h2>
            <p className="text-lg text-slate-500">
              Join the world's largest technical community today and unlock a world of professional possibilities.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-block bg-primary text-white font-semibold px-8 py-3 rounded-full hover:shadow-xl hover:-translate-y-0.5 transition-all"
              >
                Become a Member
              </Link>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
