'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProfileModal from '@/components/ProfileModal'
import { Linkedin, Mail, Github, Users } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech?: string
  link?: string
}

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
  projects?: Project[]
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
    about: 'Second-year BCA student passionate about programming, problem-solving, and building real-world technology solutions. Serving as Webmaster of BVIMR IEEE Student Branch and Technical Head at QuantaLoop. Interested in AI, DevOps, and Site Reliability Engineering (SRE).',
    linkedin: 'https://www.linkedin.com/in/yajat-prabhakar-6a3aa6321/',
    email: 'yajat@ieeebvimr.org',
    github: 'https://github.com/Yajat-prabhakar',
    avatarColor: 'from-[#002147] to-[#00629B]',
    projects: [
      { title: 'Aetherion', description: 'AI Space Guardian for Astronauts — intelligent monitoring and safety system built in Python.', tech: 'Python', link: 'https://github.com/Yajat-prabhakar/Aetherion' },
      { title: 'CertBot2', description: 'Automated certificate generation and distribution tool built with JavaScript.', tech: 'JavaScript', link: 'https://github.com/Yajat-prabhakar/CertBot2' },
      { title: 'CODE-RUNNER', description: 'A TypeScript-based code execution environment for running and testing code snippets.', tech: 'TypeScript', link: 'https://github.com/Yajat-prabhakar/CODE-RUNNER' },
      { title: 'IEEE Student Branch Website', description: 'Official website for the BVIMR IEEE Student Branch — managing digital presence and member resources.', tech: 'Next.js', link: 'https://github.com/Yajat-prabhakar/Ieee-Student-branch' },
    ],
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

      {/* Profile Modal */}
      {selected && (
        <ProfileModal 
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          profile={{
          name: selected.name,
          role: selected.role,
          team: selected.team,
          about: selected.about,
          image: selected.image,
          email: selected.email,
          linkedin: selected.linkedin,
          github: selected.github,
          projects: selected.projects,
          }}
        />
      )}

      <Footer />
    </>
  )
}
