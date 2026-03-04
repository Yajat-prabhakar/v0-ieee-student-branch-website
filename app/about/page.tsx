'use client'

import { useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadershipCard from '@/components/LeadershipCard'

function RevealOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationDelay = `${delay}ms`
          el.classList.add('visible')
          observer.unobserve(el)
        }
      },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [delay])
  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-6 transition-none [&.visible]:opacity-100 [&.visible]:translate-y-0 [&.visible]:transition-all [&.visible]:duration-700 [&.visible]:ease-out"
    >
      {children}
    </div>
  )
}

const milestones = [
  {
    date: 'January 2026',
    title: 'Foundation',
    description: 'IEEE BVIMR Student Branch was officially established at Bharati Vidyapeeth Institute of Management and Research, New Delhi, under IEEE Region 10 (Asia Pacific). The branch was inaugurated with a ceremony attended by faculty, IEEE Delhi Section members, and founding student council.',
    icon: '01',
  },
  {
    date: 'February 2026',
    title: 'First Event',
    description: 'The branch hosted its first event — DSSYWLC\'25 (Delhi Section Student, Young Professionals, WIE & Life Members Congress) — where our members represented BVIMR alongside students and professionals from across the Delhi Section, marking our debut on the IEEE stage.',
    icon: '02',
  },
  {
    date: 'Future Forward',
    title: 'Building Tomorrow',
    description: 'With a growing council, planned technical workshops, and upcoming society chapters in WIE, Computer Society, and more, IEEE BVIMR is charting an ambitious roadmap to become a leading student branch in the Delhi Section — empowering students to innovate, lead, and connect globally.',
    icon: '03',
  },
]

export default function About() {
  const leadership = [
    { name: "Kanav Gupta", role: "Chairperson", image: "/members/kanav-gupta.jpg", linkedin: "#" },
    { name: "Herman Kaur", role: "Vice Chairperson", image: "/members/herman-kaur.jpg", linkedin: "#" },
    { name: "Ginim Narang", role: "Secretary", image: "/members/ginim-narang.jpg", linkedin: "#" },
    { name: "Ipshita Sethi", role: "Treasurer", image: "/members/ipshita-sethi.jpg", linkedin: "#" },
    { name: "Yajat Prabhakar", role: "Webmaster", image: "/members/yajat-prabhakar.jpg", linkedin: "#" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-[#002147] text-white py-20 md:py-24">
          <div className="container-ieee">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About IEEE BVIMR</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Learn about our mission, values, and the leadership team driving our branch forward.
            </p>
          </div>
        </section>

        {/* Branch Overview */}
        <section className="section-padding">
          <div className="container-ieee">
            <h2 className="section-title">Our Story</h2>
            <p className="section-subtitle">Founded in 2026, Part of IEEE Region 10</p>

            <div className="grid md:grid-cols-2 gap-12 items-start mb-12">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Mission</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  To foster innovation, professional development, and leadership among students and young professionals in engineering and technology. We aim to create a community where members can collaborate, learn, and contribute to advancing technology for humanity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-lg text-foreground leading-relaxed">
                  To be a leading student branch in Region 10 that bridges academia and industry, fostering excellence in technical knowledge, ethical practices, and global collaboration.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-lg text-primary mb-2">Excellence</h4>
                  <p className="text-muted-foreground">Striving for the highest standards in technical knowledge and professional conduct.</p>
                </div>
                <div className="hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-lg text-primary mb-2">Collaboration</h4>
                  <p className="text-muted-foreground">Building a community where diverse perspectives contribute to collective growth.</p>
                </div>
                <div className="hover:scale-105 transition-transform duration-300">
                  <h4 className="font-bold text-lg text-primary mb-2">Innovation</h4>
                  <p className="text-muted-foreground">Encouraging creative thinking and pushing the boundaries of technology.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="section-padding bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title">Branch Leadership</h2>
            <p className="section-subtitle">Meet the team leading our branch</p>
            {/* Row 1: first 3 members */}
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              {leadership.slice(0, 3).map((member) => (
                <LeadershipCard key={member.name} {...member} />
              ))}
            </div>
            {/* Row 2: last 2 members centered */}
            <div className="flex justify-center gap-8">
              {leadership.slice(3).map((member) => (
                <div key={member.name} className="w-full max-w-[calc(33.333%-1rem)]">
                  <LeadershipCard {...member} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="section-padding bg-[#002147] text-white overflow-hidden">
          <div className="container-ieee">
            <RevealOnScroll>
              <h2 className="section-title text-white">Our Journey</h2>
              <p className="section-subtitle text-white/70 mb-16">Milestones that shaped our growth and community impact.</p>
            </RevealOnScroll>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical spine */}
              <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-0.5 bg-white/20 hidden md:block" />

              <div className="space-y-12 md:space-y-0">
                {milestones.map((m, i) => {
                  const isLeft = i % 2 === 0
                  return (
                    <RevealOnScroll key={m.title} delay={i * 150}>
                      <div className={`relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0 md:mb-16 ${isLeft ? '' : 'md:flex-row-reverse'}`}>

                        {/* Card */}
                        <div className={`w-full md:w-[45%] ${isLeft ? 'md:pr-12 md:text-right' : 'md:pl-12 md:text-left'}`}>
                          <div className="bg-white/10 border border-white/20 rounded-xl p-6 hover:bg-white/15 hover:border-white/40 hover:-translate-y-1 transition-all duration-300 group">
                            <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#00B5E2] mb-2">{m.date}</span>
                            <h3 className="text-xl font-black text-white mb-3">{m.title}</h3>
                            <p className="text-white/70 text-sm leading-relaxed">{m.description}</p>
                          </div>
                        </div>

                        {/* Centre dot */}
                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#00629B] border-4 border-[#002147] items-center justify-center shadow-lg z-10 font-black text-white text-sm">
                          {m.icon}
                        </div>

                        {/* Spacer */}
                        <div className="hidden md:block w-[45%]" />
                      </div>
                    </RevealOnScroll>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Key Achievements */}
        <section className="section-padding">
          <div className="container-ieee">
            <h2 className="section-title">Key Achievements</h2>
            <p className="section-subtitle">Milestones and highlights</p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-2">40+ Active Members</h3>
                <p className="text-muted-foreground">Growing community of passionate students and professionals engaged in technical and professional development.</p>
              </div>
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-2">10+ Events Held</h3>
                <p className="text-muted-foreground">Diverse range of workshops, seminars, and networking events throughout the academic year.</p>
              </div>
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-2">6 Active Societies</h3>
                <p className="text-muted-foreground">Specialized groups focusing on WIE, YP, PES, CS, ComSoc, and RAS to serve diverse interests.</p>
              </div>
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-2">Industry Partnerships</h3>
                <p className="text-muted-foreground">Collaborations with leading tech companies and organizations to provide real-world learning opportunities.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="section-padding bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title text-center">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mt-8">
              <div>
                <div className="text-5xl font-bold text-primary mb-2">40+</div>
                <p className="text-foreground font-semibold">Members</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">10+</div>
                <p className="text-foreground font-semibold">Events</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">6</div>
                <p className="text-foreground font-semibold">Societies</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">2026</div>
                <p className="text-foreground font-semibold">Founded</p>
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
