'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadershipCard from '@/components/LeadershipCard'
import ProfileModal from '@/components/ProfileModal'

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

function ProgressTrack() {
  const barRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = barRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.width = '100%'
          observer.unobserve(el)
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const steps = ['Jan 2026', 'Feb 2026', 'Future']
  return (
    <div className="w-full">
      {/* Bar */}
      <div className="relative h-1.5 bg-white/15 rounded-full">
        <div
          ref={barRef}
          className="absolute left-0 top-0 h-full bg-gradient-to-r from-[#00629B] to-[#00B5E2] rounded-full transition-[width] duration-[1800ms] ease-out"
          style={{ width: '0%' }}
        />
        {/* Step markers */}
        {steps.map((_, i) => (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full bg-[#00B5E2] border-2 border-[#002147] shadow-[0_0_6px_rgba(0,181,226,0.7)]"
            style={{
              left: `${(i / (steps.length - 1)) * 100}%`,
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      {/* Labels */}
      <div className="flex justify-between mt-2">
        {steps.map((s) => (
          <span key={s} className="text-[11px] font-bold text-[#00B5E2] uppercase tracking-wider">{s}</span>
        ))}
      </div>
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
  type LeaderMember = { name: string; role: string; image?: string; linkedin?: string; email?: string; github?: string; about?: string; team?: string; projects?: { title: string; description: string; tech?: string; link?: string }[] }
  const [selectedMember, setSelectedMember] = useState<LeaderMember | null>(null)
  const leadership: LeaderMember[] = [
    { name: "Kanav Gupta", role: "Chairperson", image: "/members/kanav-gupta.jpg", linkedin: "#", email: "kanav@ieeebvimr.org", github: "#", about: "Leading the IEEE BVIMR Student Branch with a vision to foster innovation and technical excellence across the campus community.", team: "Core Team" },
    { name: "Herman Kaur", role: "Vice Chairperson", image: "/members/herman-kaur.jpg", linkedin: "#", email: "herman@ieeebvimr.org", github: "#", about: "Supporting branch operations and driving member engagement through collaborative initiatives and impactful programs.", team: "Core Team" },
    {
      name: "Ginim Narang", role: "Secretary", image: "/members/ginim-narang.jpg",
      banner: '/members/ginim.png',
      objectPosition: 'center 5%',
      linkedin: "#",
      email: "ginim654@gmail.com",
      github: "https://github.com/Ginim654",
      about: "Technology enthusiast and aspiring developer passionate about software development, web technologies, and problem-solving. Skilled in HTML, CSS, Java, Python, C, C++, and modern development tools. Actively engaged in technical communities and leadership initiatives, fostering collaborative and innovative environments.",
      team: "Core Team",
      projects: [
        { title: "SmartCity AI Platform", description: "An intelligent urban management platform leveraging AI to optimize city services and analyze real-time data across traffic, utilities, and public safety.", tech: "AI / Python", link: "https://github.com/Ginim654" },
        { title: "Chat App", description: "A real-time messaging application with a clean, responsive interface enabling seamless one-on-one and group conversations across devices.", tech: "TypeScript", link: "https://github.com/Ginim654" },
        { title: "Attendance Module", description: "A student attendance management system for tracking, recording, and generating reports — reducing administrative overhead and improving record accuracy.", tech: "TypeScript", link: "https://github.com/Ginim654" },
        { title: "Portfolio", description: "A personal developer portfolio showcasing skills, projects, and experience in a clean and modern layout.", tech: "TypeScript", link: "https://github.com/Ginim654" },
      ],
    },
    { name: "Ipshita Sethi", role: "Treasurer", image: "/members/ipshita-sethi.jpg", linkedin: "#", email: "ipshita@ieeebvimr.org", github: "#", about: "Overseeing financial planning, budget management, and resource allocation for branch events and activities.", team: "Core Team" },
    {
      name: "Yajat Prabhakar", role: "Webmaster", image: "/members/yajat-prabhakar.jpg",
      linkedin: "https://www.linkedin.com/in/yajat-prabhakar-6a3aa6321/",
      email: "yajat@ieeebvimr.org",
      github: "https://github.com/Yajat-prabhakar",
      about: "Second-year BCA student passionate about programming, problem-solving, and building real-world technology solutions. Serving as Webmaster of BVIMR IEEE Student Branch and Technical Head at QuantaLoop. Interested in AI, DevOps, and Site Reliability Engineering (SRE).",
      team: "Core Team",
      projects: [
        { title: "Aetherion", description: "AI Space Guardian for Astronauts — intelligent monitoring and safety system.", tech: "Python", link: "https://github.com/Yajat-prabhakar/Aetherion" },
        { title: "CertBot2", description: "Automated certificate generation and distribution tool.", tech: "JavaScript", link: "https://github.com/Yajat-prabhakar/CertBot2" },
        { title: "CODE-RUNNER", description: "A TypeScript-based code execution environment for running and testing code snippets.", tech: "TypeScript", link: "https://github.com/Yajat-prabhakar/CODE-RUNNER" },
        { title: "IEEE Student Branch Website", description: "Official website for the BVIMR IEEE Student Branch.", tech: "Next.js", link: "https://github.com/Yajat-prabhakar/Ieee-Student-branch" },
      ],
    },
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
                <LeadershipCard 
                  key={member.name} 
                  {...member} 
                  onViewProfile={() => setSelectedMember(member)}
                />
              ))}
            </div>
            {/* Row 2: last 2 members centered */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {leadership.slice(3).map((member) => (
                <LeadershipCard 
                  key={member.name} 
                  {...member} 
                  onViewProfile={() => setSelectedMember(member)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey */}
        <section className="py-16 bg-[#002147] text-white overflow-hidden">
          <div className="container-ieee">

            <RevealOnScroll>
              <h2 className="section-title text-white">Our Journey</h2>
              <p className="section-subtitle text-white/70">Milestones that shaped our growth and community impact.</p>
              <div className="mt-4 flex justify-center">
                <Link
                  href="/journey"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[#00B5E2] text-white font-semibold hover:bg-[#00B5E2]/80 transition-colors duration-300"
                >
                  Explore Full Journey
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </RevealOnScroll>

            {/* Pillars — KIIT-style animated numbered cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8 mb-12">
              {[
                { num: '01', label: 'Student Branch', sub: 'A student-led community focused on engineering excellence and professional growth.' },
                { num: '02', label: 'Programs & Events', sub: 'Workshops and events that translate classroom learning into meaningful outcomes.' },
                { num: '03', label: 'Student Growth', sub: 'Leadership programs and peer learning that build confidence and impact.' },
              ].map((p, i) => (
                <RevealOnScroll key={p.num} delay={i * 120}>
                  <div className="border border-white/20 rounded-xl p-5 hover:border-[#00B5E2]/60 hover:bg-white/5 transition-all duration-300 group">
                    <span className="text-4xl font-black text-white/15 group-hover:text-[#00B5E2]/40 transition-colors duration-300 leading-none block mb-3">{p.num}</span>
                    <h4 className="font-bold text-white text-base mb-1">{p.label}</h4>
                    <p className="text-white/55 text-sm leading-relaxed">{p.sub}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>

            {/* Animated progress bar */}
            <RevealOnScroll delay={100}>
              <ProgressTrack />
            </RevealOnScroll>

            {/* Left-aligned vertical timeline */}
            <div className="relative mt-10">
              {/* Single continuous spine — runs from centre of first node to centre of last */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-white/20" style={{ transform: 'translateX(-50%)' }} />

              <div className="space-y-6">
                {milestones.map((m, i) => (
                  <RevealOnScroll key={m.title} delay={i * 140}>
                    <div className="flex gap-4 items-start">
                      {/* Node */}
                      <div className="w-8 h-8 rounded-full bg-[#00629B] border-2 border-[#00B5E2] flex items-center justify-center shadow-[0_0_8px_rgba(0,181,226,0.5)] z-10 flex-shrink-0">
                        <span className="text-[9px] font-black text-white">{m.icon}</span>
                      </div>
                      {/* Card */}
                      <div className="flex-1">
                        <div className="bg-white/5 border border-white/15 rounded-xl p-5 hover:bg-white/10 hover:border-white/30 transition-all duration-300">
                          <span className="text-xs font-bold uppercase tracking-widest text-[#00B5E2] block mb-1">{m.date}</span>
                          <h3 className="text-lg font-black text-white mb-2">{m.title}</h3>
                          <p className="text-white/65 text-sm leading-relaxed">{m.description}</p>
                        </div>
                      </div>
                    </div>
                  </RevealOnScroll>
                ))}
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
                <h3 className="font-bold text-lg text-primary mb-2">6 Upcoming Societies</h3>
                <p className="text-muted-foreground">Specialized groups covering WIE, YP, PES, CS, ComSoc, and RAS — currently being established to serve diverse interests.</p>
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
                <p className="text-foreground font-semibold">Upcoming Societies</p>
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

      {/* Profile Modal */}
      {selectedMember && (
        <ProfileModal
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
          profile={{
            name: selectedMember.name,
            role: selectedMember.role,
            team: selectedMember.team,
            about: selectedMember.about,
            image: selectedMember.image,
            email: selectedMember.email,
            linkedin: selectedMember.linkedin,
            github: selectedMember.github,
            projects: selectedMember.projects,
          }}
        />
      )}
    </>
  )
}
