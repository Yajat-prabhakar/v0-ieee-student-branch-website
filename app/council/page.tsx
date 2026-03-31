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
  banner?: string
  objectPosition?: string
  projects?: Project[]
}

const coreTeam: Member[] = [
  {
    name: 'Kanav Gupta',
    role: 'Chairperson',
    team: 'Core Team',
    initials: 'KG',
    image: '/members/kanav-gupta.jpg',
    banner: '/members/kanav-banner.png',
    objectPosition: 'center 30%',
    about: 'Leading the IEEE BVIMR Student Branch with a vision to foster innovation and technical excellence across the campus community.',
    linkedin: '#',
    email: 'kanav@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#002147]',
  },
  {
    name: 'Herman Kaur',
    role: 'Vice Chairperson',
    team: 'Core Team',
    initials: 'HK',
    image: '/members/herman-kaur.jpg',
    banner: '/members/herman-banner.png',
    objectPosition: 'center 35%',
    about: 'Supporting branch operations and driving member engagement through collaborative initiatives and impactful programs.',
    linkedin: '#',
    email: 'herman@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#002147] to-[#004080]',
  },
  {
    name: 'Ginim Narang',
    role: 'Secretary',
    team: 'Core Team',
    initials: 'GN',
    image: '/members/ginim-narang.jpg',
    banner: '/members/ginim.png',
    objectPosition: 'center 5%',
    about: 'Technology enthusiast and aspiring developer passionate about software development, web technologies, and problem-solving. Skilled in HTML, CSS, Java, Python, C, C++, and modern development tools. Actively engaged in technical communities and leadership initiatives, fostering collaborative and innovative environments.',
    linkedin: '#',
    email: 'ginim654@gmail.com',
    github: 'https://github.com/Ginim654',
    avatarColor: 'from-[#00629B] to-[#00B5E2]',
    projects: [
      { title: 'SmartCity AI Platform', description: 'An intelligent urban management platform leveraging AI to optimize city services and analyze real-time data across traffic, utilities, and public safety.', tech: 'AI / Python', link: 'https://github.com/Ginim654' },
      { title: 'Chat App', description: 'A real-time messaging application with a clean, responsive interface enabling seamless one-on-one and group conversations across devices.', tech: 'TypeScript', link: 'https://github.com/Ginim654' },
      { title: 'Attendance Module', description: 'A student attendance management system for tracking, recording, and generating reports — reducing administrative overhead and improving record accuracy.', tech: 'TypeScript', link: 'https://github.com/Ginim654' },
      { title: 'Portfolio', description: 'A personal developer portfolio showcasing skills, projects, and experience in a clean and modern layout designed to impress employers and collaborators.', tech: 'TypeScript', link: 'https://github.com/Ginim654' },
    ],
  },
  {
    name: 'Ipshita Sethi',
    role: 'Treasurer',
    team: 'Core Team',
    initials: 'IS',
    image: '/members/ipshita-sethi.jpg',
    banner: '/members/ipshita-banner.png',
    objectPosition: 'center 40%',
    about: 'Overseeing financial planning, budget management, and resource allocation for branch events and activities.',
    linkedin: '#',
    email: 'ipshita@ieeebvimr.org',
    github: '#',
    avatarColor: 'from-[#004080] to-[#00629B]',
  },
  {
    name: 'Yajat Prabhakar',
    role: 'Webmaster',
    team: 'Core Team',
    initials: 'YP',
    image: '/members/yajat-prabhakar.jpg',
    banner: '/members/yajat-banner.png',
    objectPosition: 'center 25%',
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
    email: '#',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#004080]',
  },
  {
    name: 'Mandeep Singh',
    role: 'Tech Advisor',
    team: 'Tech Team',
    initials: 'MS',
    image: '/members/mandeep-singh.jpg',
    banner: '/members/mandeep-banner.png',
    objectPosition: 'center 40%',
    about: 'BCA student at Bharati Vidyapeeth (CGPA: 9) with 2 years of experience in technology. Currently serving as Technical Advisor at QuantaLoop — the Technical Society of BVIMR. Passionate about engineering, digital platforms, and supporting technical initiatives that drive community growth.',
    linkedin: 'https://www.linkedin.com/in/mandeep-singh-11768821a',
    email: 'mandeep.sembhi69@gmail.com',
    github: 'https://github.com/Mandeep-Singh-Sembhi',
    avatarColor: 'from-[#002147] to-[#00B5E2]',
  },
  {
    name: 'Yash Sehgal',
    role: 'Tech Advisor',
    team: 'Tech Team',
    initials: 'YS',
    about: 'Supporting technical initiatives and helping members develop practical engineering skills through hands-on projects.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#004080] to-[#002147]',
  },
  {
    name: 'Aarav Goyal',
    role: 'Tech Advisor',
    team: 'Tech Team',
    initials: 'AG',
    about: 'Contributing technical expertise and mentoring junior members across engineering and development initiatives.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00629B]',
  },
  {
    name: 'Raunaq Adlakha',
    role: 'Tech Advisor',
    team: 'Tech Team',
    initials: 'RA',
    about: 'Bridging technical knowledge with practical application to support branch members in their engineering journey.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00B5E2] to-[#00629B]',
  },
]

const eventTeam: Member[] = [
  {
    name: 'Aanjanay',
    role: 'Event Lead',
    team: 'Event Team',
    initials: 'AJ',
    about: 'Leading event planning and execution for IEEE BVIMR, ensuring every event delivers value and engagement to members.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#002147]',
  },
  {
    name: 'Manika Sharma',
    role: 'Event Lead',
    team: 'Event Team',
    initials: 'MS',
    about: 'Co-leading the event team with a focus on seamless coordination and high-impact technical and cultural events.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00B5E2]',
  },
  {
    name: 'Kashvi Atreja',
    role: 'Event Co-Lead',
    team: 'Event Team',
    initials: 'KA',
    about: 'Assisting in organising and managing events, coordinating teams to deliver memorable member experiences.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00B5E2] to-[#004080]',
  },
  {
    name: 'Daegna Mangu',
    role: 'Event Co-Lead',
    team: 'Event Team',
    initials: 'DM',
    about: 'Supporting event management operations and ensuring smooth logistics for all branch activities.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#004080] to-[#00629B]',
  },
]

const operationsTeam: Member[] = [
  {
    name: 'Parth Sethi',
    role: 'Operations Lead',
    team: 'Operations Team',
    initials: 'PS',
    image: '/members/parth-sethi.jpg',
    banner: '/members/parth-banner.png',
    objectPosition: 'center 15%',
    about: 'Motivated student with a strong interest in technology and software development. Skilled in HTML, CSS, Java, C, SQL, and Python with a focus on data structures and problem-solving. Currently serving as Operations Lead at IEEE BVIMR, ensuring smooth execution across all branch departments.',
    linkedin: '#',
    email: 'parthsethi1511@gmail.com',
    github: 'https://github.com/Gojodatebayo',
    avatarColor: 'from-[#00629B] to-[#002147]',
  },
  {
    name: 'Aarav Goyal',
    role: 'Operations Lead',
    team: 'Operations Team',
    initials: 'AG',
    about: 'Driving operational excellence and coordinating cross-team collaboration for seamless branch functioning.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00629B]',
  },
  {
    name: 'Prabhjot Singh',
    role: 'Operations Co-Lead',
    team: 'Operations Team',
    initials: 'PS',
    about: 'Supporting operational workflows and helping streamline processes to keep branch activities running smoothly.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#004080] to-[#00B5E2]',
  },
  {
    name: 'Daksh Jindal',
    role: 'Operations Co-Lead',
    team: 'Operations Team',
    initials: 'DJ',
    about: 'Assisting in managing operational tasks and ensuring resources are available for every branch initiative.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00B5E2] to-[#00629B]',
  },
]

const creativeTeam: Member[] = [
  {
    name: 'Gargi Sharma',
    role: 'Creative Lead',
    team: 'Creative Team',
    initials: 'GS',
    image: '/members/gargi-sharma.jpg',
    banner: '/members/gargi-banner.png',
    objectPosition: 'center 25%',
    about: 'A motivated student who enjoys learning new things and taking part in different activities. Passionate about working with people, organizing events, and contributing to community initiatives. Believes in continuous improvement and exploring opportunities for personal and professional growth.',
    linkedin: 'https://www.linkedin.com/in/gargi-sharma-54109130a',
    email: 'sharmagargi572@gmail.com',
    github: 'https://github.com/Garshul',
    avatarColor: 'from-[#00629B] to-[#00B5E2]',
  },
  {
    name: 'Teena Kachroo',
    role: 'Creative Lead',
    team: 'Creative Team',
    initials: 'TK',
    about: 'Shaping the visual and creative direction of branch communications, posters, and digital content.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#004080]',
  },
  {
    name: 'Sakshi Makhija',
    role: 'Creative Co-Lead',
    team: 'Creative Team',
    initials: 'SM',
    about: 'Supporting creative production and collaborating with the design team to maintain a consistent visual identity.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#004080] to-[#00629B]',
  },
]

const publicityTeam: Member[] = [
  {
    name: 'Rishabh N Bhatnagar',
    role: 'Publicity Lead',
    team: 'Publicity Team',
    initials: 'RB',
    about: 'Driving awareness and visibility for IEEE BVIMR through strategic outreach, campaigns, and promotional efforts.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#002147]',
  },
]

const mediaTeam: Member[] = [
  {
    name: 'Hemant Kumar',
    role: 'Media Team',
    team: 'Media Team',
    initials: 'HK',
    about: 'Capturing and producing high-quality media content that tells the story of IEEE BVIMR events and milestones.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#00B5E2]',
  },
  {
    name: 'Saurav Thakur',
    role: 'Media Team',
    team: 'Media Team',
    initials: 'ST',
    about: 'Contributing to media production, photography, and visual storytelling for IEEE BVIMR events and activities.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00629B]',
  },
  {
    name: 'Yash Garg',
    role: 'Media Team',
    team: 'Media Team',
    initials: 'YG',
    about: 'Contributing to the media team through content creation, editing, and digital storytelling for branch activities.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#004080] to-[#002147]',
  },
]

const reportingTeam: Member[] = [
  {
    name: 'Ishita Bhatt',
    role: 'Event Reporting Lead',
    team: 'Event Reporting Team',
    initials: 'IB',
    about: 'Producing detailed event reports and write-ups that highlight key takeaways and outcomes from branch activities.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00B5E2]',
  },
  {
    name: 'Gargi Sharma',
    role: 'Event Reporting Lead',
    team: 'Event Reporting Team',
    initials: 'GS',
    image: '/members/gargi-sharma.jpg',
    banner: '/members/gargi-banner.png',
    objectPosition: 'center 25%',
    about: 'A motivated student who enjoys learning new things and taking part in different activities. Passionate about working with people, organizing events, and contributing to community initiatives. Believes in continuous improvement and exploring opportunities for personal and professional growth.',
    linkedin: 'https://www.linkedin.com/in/gargi-sharma-54109130a',
    email: 'sharmagargi572@gmail.com',
    github: 'https://github.com/Garshul',
    avatarColor: 'from-[#00B5E2] to-[#00629B]',
  },
  {
    name: 'Anjali Garg',
    role: 'Event Reporting Lead',
    team: 'Event Reporting Team',
    initials: 'AG',
    about: 'Documenting and reporting on branch events, ensuring accurate and timely records of all IEEE BVIMR activities.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#004080]',
  },
]

const outreachTeam: Member[] = [
  {
    name: 'Aniket Kukreja',
    role: 'Outreach Lead',
    team: 'Outreach Team',
    initials: 'AK',
    about: 'Leading outreach efforts to connect IEEE BVIMR with students, industry professionals, and partner institutions.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#002147]',
  },
  {
    name: 'Hitesh',
    role: 'Outreach Lead',
    team: 'Outreach Team',
    initials: 'HT',
    about: 'Expanding the branch network and building relationships that create opportunities for members.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#004080]',
  },
  {
    name: 'Raunaq Adlakha',
    role: 'Outreach Co-Lead',
    team: 'Outreach Team',
    initials: 'RA',
    about: 'Supporting outreach strategies and helping forge new partnerships and collaborations for the branch.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#004080] to-[#00629B]',
  },
  {
    name: 'Sahil Rohilla',
    role: 'Outreach Co-Lead',
    team: 'Outreach Team',
    initials: 'SR',
    about: 'Helping drive outreach and community engagement across the institution and beyond.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00B5E2] to-[#002147]',
  },
]

const membershipTeam: Member[] = [
  {
    name: 'Dhaarana Taneja',
    role: 'Membership Dev. Lead',
    team: 'Membership Dev. Team',
    initials: 'DT',
    about: 'Leading membership development initiatives to grow the IEEE BVIMR community and enhance member experience.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00629B] to-[#002147]',
  },
  {
    name: 'Sharvi',
    role: 'Membership Dev. Team',
    team: 'Membership Dev. Team',
    initials: 'SV',
    about: 'Engaging prospective members and supporting onboarding processes to strengthen the IEEE community.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#00B5E2] to-[#004080]',
  },
  {
    name: 'Daegna Mangu',
    role: 'Membership Dev. Team',
    team: 'Membership Dev. Team',
    initials: 'DM',
    about: 'Supporting membership growth activities and fostering an inclusive and welcoming branch environment.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#004080] to-[#00B5E2]',
  },
  {
    name: 'Lavanya',
    role: 'Membership Dev. Team',
    team: 'Membership Dev. Team',
    initials: 'LV',
    about: 'Contributing to membership drives and helping new students discover the value of IEEE BVIMR.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00629B]',
  },
  {
    name: 'Hitesh',
    role: 'Membership Dev. Team',
    team: 'Membership Dev. Team',
    initials: 'HT',
    about: 'Working to expand the branch membership base and connect students with engineering opportunities.',
    linkedin: '#',
    email: '#',
    github: '#',
    avatarColor: 'from-[#002147] to-[#00B5E2]',
  },
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
            <Image src={member.image} alt={member.name} width={80} height={80} className="w-full h-full object-cover" style={{ objectPosition: member.objectPosition ?? 'center 40%' }} />
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
                  { value: '40+', label: 'Council Members' },
                  { value: '10', label: 'Teams Active' },
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
            <TeamSection
              title="Event Team"
              subtitle="Planning and executing impactful technical and cultural events for the branch."
              members={eventTeam}
              onSelect={setSelected}
              delay={200}
            />
            <TeamSection
              title="Operations Team"
              subtitle="Ensuring smooth day-to-day functioning and logistics across all branch activities."
              members={operationsTeam}
              onSelect={setSelected}
              delay={300}
            />
            <TeamSection
              title="Creative Team"
              subtitle="Crafting the visual identity and creative content that represents IEEE BVIMR."
              members={creativeTeam}
              onSelect={setSelected}
              delay={400}
            />
            <TeamSection
              title="Publicity Team"
              subtitle="Driving awareness and promoting the branch through strategic outreach campaigns."
              members={publicityTeam}
              onSelect={setSelected}
              delay={500}
            />
            <TeamSection
              title="Media Team"
              subtitle="Documenting events through photography, videography, and digital storytelling."
              members={mediaTeam}
              onSelect={setSelected}
              delay={600}
            />
            <TeamSection
              title="Event Reporting Team"
              subtitle="Producing accurate records and detailed write-ups of all branch events."
              members={reportingTeam}
              onSelect={setSelected}
              delay={700}
            />
            <TeamSection
              title="Outreach Team"
              subtitle="Connecting the branch with students, industry professionals, and partner institutions."
              members={outreachTeam}
              onSelect={setSelected}
              delay={800}
            />
            <TeamSection
              title="Membership Development Team"
              subtitle="Growing the IEEE BVIMR community and enhancing the member experience."
              members={membershipTeam}
              onSelect={setSelected}
              delay={900}
            />
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
  banner: selected.banner,
  objectPosition: selected.objectPosition,
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
