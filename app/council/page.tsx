'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { X, Linkedin, Mail, Github, Users } from 'lucide-react'

interface Member {
  name: string
  role: string
  team: string
  initials: string
  about: string
  linkedin?: string
  email?: string
  github?: string
  avatarColor: string
  image?: string
}

const coreTeam: Member[] = [
  {
    name: 'Kanav Gupta',
    role: 'Chairperson',
    team: 'Core Team',
    initials: 'KG',
    about: 'Leading the IEEE BVIMR Student Branch with a vision to foster innovation and technical excellence across the campus community.',
    linkedin: '#',
    email: 'kanav@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#002147]',
    image: '/members/kanav-gupta.jpg',
  },
  {
    name: 'Herman Kaur',
    role: 'Vice Chairperson',
    team: 'Core Team',
    initials: 'HK',
    about: 'Supporting branch operations and driving member engagement through collaborative initiatives and impactful programs.',
    linkedin: '#',
    email: 'herman@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#002147] to-[#004080]',
    image: '/members/herman-kaur.jpg',
  },
  {
    name: 'Ginim Narang',
    role: 'Secretary',
    team: 'Core Team',
    initials: 'GN',
    about: 'Managing communications, maintaining records, and ensuring smooth coordination across all branch activities.',
    linkedin: '#',
    email: 'ginim@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#00B5E2]',
    image: '/members/ginim-narang.jpg',
  },
  {
    name: 'Ipshita Sethi',
    role: 'Treasurer',
    team: 'Core Team',
    initials: 'IS',
    about: 'Overseeing financial planning, budget management, and resource allocation for branch events and activities.',
    linkedin: '#',
    email: 'ipshita@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#004080] to-[#00629B]',
    image: '/members/ipshita-sethi.jpg',
  },
  {
    name: 'Yajat Prabhakar',
    role: 'Webmaster',
    team: 'Core Team',
    initials: 'YP',
    image: '/members/yajat-prabhakar.jpg',
    about: 'Building and maintaining the branch website, digital infrastructure, and online presence for IEEE BVIMR.',
    linkedin: '#',
    email: 'yajat@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00629B]',
  },
]

const techTeam: Member[] = [
  {
    name: 'Avani Tiwari',
    role: 'Tech Advisor',
    team: 'Tech Team',
    initials: 'AT',
    about: 'Providing technical guidance and mentorship to members pursuing projects in engineering and technology.',
    linkedin: '#',
    email: 'avani@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#004080]',
  },
  {
    name: 'Yash',
    role: 'Tech Advisor',
    team: 'Tech Team',
    initials: 'YS',
    about: 'Supporting technical initiatives and helping members develop practical engineering skills through hands-on projects.',
    linkedin: '#',
    email: 'yash@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#004080] to-[#002147]',
  },
  {
    name: 'Mandeep Singh',
    role: 'Tech Advisor',
    team: 'Tech Team',
    initials: 'MS',
    about: 'Guiding the technical direction of branch projects and fostering a culture of continuous learning.',
    linkedin: '#',
    email: 'mandeep@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00B5E2]',
  },
]

const upcomingTeams = [
  { name: 'Social Media Team', icon: '📢', desc: 'Managing online presence and community engagement.' },
  { name: 'Publicity Team', icon: '📣', desc: 'Promoting events and increasing branch visibility.' },
  { name: 'Membership Drive Team', icon: '🤝', desc: 'Recruiting new members and growing the community.' },
  { name: 'Event Management Team', icon: '🗓', desc: 'Planning and executing all branch events.' },
  { name: 'Operational Team', icon: '⚙️', desc: 'Handling day-to-day operations and logistics.' },
]

// Scroll reveal hook
function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect() } },
      { threshold: 0.1 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, visible }
}

function RevealSection({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(32px)',
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}

function MemberCard({ member, onClick }: { member: Member; onClick: (m: Member) => void }) {
  return (
    <button
      onClick={() => onClick(member)}
      className="w-full text-left group focus:outline-none"
      aria-label={`View profile of ${member.name}`}
    >
      <div className="bg-white border border-border rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center cursor-pointer h-full">
        {/* Avatar */}
        <div className="w-20 h-20 rounded-full mb-4 shadow-md group-hover:scale-105 transition-transform duration-300 overflow-hidden flex-shrink-0">
          {member.image ? (
            <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover object-top" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${member.avatarColor} flex items-center justify-center`}>
              <span className="text-2xl font-black text-white tracking-wide">{member.initials}</span>
            </div>
          )}
        </div>
        {/* Info */}
        <h3 className="font-bold text-base text-foreground mb-1 group-hover:text-primary transition-colors">{member.name}</h3>
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full">{member.role}</span>
        <p className="text-xs text-muted-foreground mt-3 line-clamp-2">{member.about}</p>
        <span className="mt-4 text-xs text-primary font-semibold opacity-0 group-hover:opacity-100 transition-opacity">View Profile →</span>
      </div>
    </button>
  )
}

function MemberModal({ member, onClose }: { member: Member; onClose: () => void }) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      style={{ animation: 'fade-in 0.2s ease' }}
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md z-10 overflow-hidden"
        style={{ animation: 'scale-in 0.25s ease' }}
      >
        {/* Header strip */}
        <div className={`bg-gradient-to-r ${member.avatarColor} p-8 flex flex-col items-center`}>
          <div className="w-24 h-24 rounded-full border-4 border-white mb-3 shadow-lg overflow-hidden flex-shrink-0">
            {member.image ? (
              <Image src={member.image} alt={member.name} width={96} height={96} className="w-full h-full object-cover object-top" />
            ) : (
              <div className="w-full h-full bg-white/20 flex items-center justify-center">
                <span className="text-3xl font-black text-white">{member.initials}</span>
              </div>
            )}
          </div>
          <h2 className="text-xl font-black text-white">{member.name}</h2>
          <span className="text-sm text-white/80 font-medium mt-1">{member.role}</span>
          <span className="text-xs text-white/60 mt-0.5">{member.team}</span>
        </div>

        {/* Body */}
        <div className="p-6">
          <p className="text-sm text-muted-foreground leading-relaxed mb-6">{member.about}</p>

          {/* Links */}
          <div className="flex flex-col gap-3">
            {member.email && (
              <a href={`mailto:${member.email}`} className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Mail size={16} className="text-muted-foreground group-hover:text-primary" />
                </div>
                <span>{member.email}</span>
              </a>
            )}
            {member.linkedin && member.linkedin !== '#' && (
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Linkedin size={16} className="text-muted-foreground group-hover:text-primary" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            )}
            {member.github && member.github !== '#' && (
              <a href={member.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-foreground hover:text-primary transition-colors group">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <Github size={16} className="text-muted-foreground group-hover:text-primary" />
                </div>
                <span>GitHub Profile</span>
              </a>
            )}
          </div>
        </div>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  )
}

function TeamSection({ title, subtitle, members, onSelect, delay = 0 }: {
  title: string
  subtitle: string
  members: Member[]
  onSelect: (m: Member) => void
  delay?: number
}) {
  return (
    <RevealSection delay={delay}>
      <div className="mb-16">
        <div className="flex items-center gap-4 mb-2">
          <div className="w-1 h-8 bg-primary rounded-full" />
          <h2 className="text-2xl font-bold text-foreground">{title}</h2>
        </div>
        <p className="text-muted-foreground text-sm mb-8 pl-5">{subtitle}</p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {members.map((member, idx) => (
            <div
              key={member.name}
              style={{
                animation: `scale-in 0.4s ease ${idx * 80}ms both`,
              }}
            >
              <MemberCard member={member} onClick={onSelect} />
            </div>
          ))}
        </div>
      </div>
    </RevealSection>
  )
}

export default function Council() {
  const [selected, setSelected] = useState<Member | null>(null)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero */}
        <section className="bg-gradient-to-r from-[#002147] via-[#00629B] to-[#00629B] text-white py-24 md:py-32">
          <div className="container-ieee">
            <RevealSection>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white mb-6">
                <Users size={14} />
                IEEE BVIMR — Our People
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Meet the Council
              </h1>
              <p className="text-lg text-white/80 max-w-2xl">
                The passionate individuals driving innovation, technical excellence, and community at IEEE BVIMR Student Branch.
              </p>
            </RevealSection>
          </div>
        </section>

        {/* Stats bar */}
        <div className="bg-[#002147] text-white">
          <div className="container-ieee py-6">
            <RevealSection>
              <div className="flex flex-wrap gap-8 justify-center md:justify-start">
                {[
                  { value: '8', label: 'Council Members' },
                  { value: '2', label: 'Teams Active' },
                  { value: '5', label: 'Teams Coming Soon' },
                  { value: '2026', label: 'Founded' },
                ].map(stat => (
                  <div key={stat.label} className="text-center md:text-left">
                    <div className="text-3xl font-black text-white">{stat.value}</div>
                    <div className="text-xs text-white/60 uppercase tracking-widest font-semibold">{stat.label}</div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </div>

        {/* Teams */}
        <section className="py-20">
          <div className="container-ieee">
            <TeamSection
              title="Core Team"
              subtitle="The executive leadership driving the branch vision and operations."
              members={coreTeam}
              onSelect={setSelected}
              delay={0}
            />
            <TeamSection
              title="Tech Team"
              subtitle="Technical advisors mentoring members and leading engineering initiatives."
              members={techTeam}
              onSelect={setSelected}
              delay={100}
            />
          </div>
        </section>

        {/* Upcoming Teams */}
        <section className="py-20 bg-secondary border-t border-border">
          <div className="container-ieee">
            <RevealSection>
              <div className="flex items-center gap-4 mb-2">
                <div className="w-1 h-8 bg-accent rounded-full" />
                <h2 className="text-2xl font-bold text-foreground">Upcoming Teams</h2>
              </div>
              <p className="text-muted-foreground text-sm mb-10 pl-5">
                We are actively building these teams. Interested in joining? Reach out to us.
              </p>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {upcomingTeams.map((team, idx) => (
                  <div
                    key={team.name}
                    style={{ animation: `scale-in 0.4s ease ${idx * 80}ms both` }}
                    className="bg-white border border-dashed border-primary/30 rounded-xl p-6 flex gap-4 items-start hover:border-primary hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 text-lg">
                      {team.icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-sm text-foreground">{team.name}</h3>
                        <span className="text-[10px] font-bold uppercase tracking-wide text-primary bg-primary/10 px-2 py-0.5 rounded-full">Soon</span>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{team.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* Join CTA */}
        <section className="py-20 bg-gradient-to-r from-[#002147] via-[#00629B] to-[#00629B] text-white">
          <div className="container-ieee text-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-black mb-4">Want to Join Our Team?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
                We are always looking for passionate individuals to contribute to IEEE BVIMR.
              </p>
              <a href="/contact" className="btn-ieee-primary">
                Get in Touch
              </a>
            </RevealSection>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selected && <MemberModal member={selected} onClose={() => setSelected(null)} />}

      <Footer />
    </>
  )
}
