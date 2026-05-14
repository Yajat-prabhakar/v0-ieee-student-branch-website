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
    banner: '/members/avani-banner.png',
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
    banner: '/members/yash-banner.png',
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
    banner: '/members/aarav-banner.png',
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
    banner: '/members/raunaq-banner.png',
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
    banner: '/members/aanjanay-banner.png',
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
    banner: '/members/manika-banner.png',
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
    banner: '/members/kashvi-banner.png',
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
    banner: '/members/daegna-banner.png',
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
    banner: '/members/aarav-banner.png',
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
    banner: '/members/prabhjot-banner.png',
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
    banner: '/members/daksh-banner.png',
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
    banner: '/members/teena-banner.png',
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
    banner: '/members/sakshi-banner.png',
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
    banner: '/members/rishabh-banner.png',
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
    banner: '/members/hemant-banner.png',
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
    banner: '/members/saurav-banner.png',
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
    banner: '/members/yash-banner.png',
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
    banner: '/members/ishita-banner.png',
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
    banner: '/members/anjali-banner.png',
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
    banner: '/members/aniket-banner.png',
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
    banner: '/members/hitesh-banner.png',
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
    banner: '/members/raunaq-banner.png',
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
    banner: '/members/sahil-banner.png',
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
    banner: '/members/dhaarana-banner.png',
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
    banner: '/members/sharvi-banner.png',
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
    banner: '/members/daegna-banner.png',
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
    banner: '/members/lavanya-banner.png',
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
    banner: '/members/hitesh-banner.png',
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
      <main className="min-h-screen bg-white">
        <section className="mb-16 text-center max-w-6xl mx-auto px-6 pt-16">
          <span className="font-label-caps text-amber-700 mb-3 inline-block">Leadership 2024-25</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Student Council</h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Dedicated professionals bridging the gap between student innovation and technical excellence. Meet the visionaries driving IEEE Student Branch BVIMR forward.
          </p>
        </section>

        <nav className="flex flex-wrap justify-center gap-2 mb-12 px-6">
          {[
            'All Teams',
            'Core',
            'Tech',
            'Event',
            'Operations',
            'Creative',
            'Media',
            'Publicity',
            'Outreach',
            'Reporting',
            'Membership Dev',
          ].map((label, index) => (
            <button
              key={label}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-widest transition-all ${
                index === 0
                  ? 'bg-primary text-white shadow-sm'
                  : 'bg-slate-100 text-slate-500 hover:bg-blue-50 hover:text-primary'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...coreTeam, ...techTeam, ...eventTeam, ...operationsTeam, ...creativeTeam].slice(0, 6).map((member) => (
              <div key={member.name} className="perspective group card-hover h-[420px]">
                <div className="card-inner relative w-full h-full">
                  <div className="card-front absolute inset-0 bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                    <div className="w-full h-2/3 bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                      Member Portrait
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-primary mb-1">{member.name}</h3>
                      <p className="font-label-caps text-amber-700">{member.role}</p>
                    </div>
                  </div>
                  <div className="card-back absolute inset-0 bg-primary text-white p-6 rounded-xl flex flex-col justify-center items-center text-center shadow-xl">
                    <span className="material-symbols-outlined text-4xl mb-4">stars</span>
                    <h4 className="text-xl font-semibold mb-2">Leadership</h4>
                    <p className="text-sm text-blue-100 mb-4">{member.about}</p>
                    <div className="flex gap-3">
                      <button type="button" className="text-white/80 hover:text-white" aria-label="LinkedIn">
                        <Linkedin size={18} />
                      </button>
                      <button type="button" className="text-white/80 hover:text-white" aria-label="Email">
                        <Mail size={18} />
                      </button>
                      <button type="button" className="text-white/80 hover:text-white" aria-label="GitHub">
                        <Github size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button
              type="button"
              className="border-2 border-dashed border-slate-200 rounded-xl h-[420px] flex flex-col items-center justify-center text-slate-400 hover:border-sky-300 hover:text-sky-300 transition-colors"
            >
              <span className="material-symbols-outlined text-5xl mb-3">add_circle</span>
              <span className="font-label-caps">Load More Members</span>
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <h2 className="text-3xl font-semibold text-slate-900 mb-8">Functional Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 md:h-[560px]">
            <div className="md:col-span-2 md:row-span-2 bg-slate-50 rounded-xl p-8 border border-slate-200 relative overflow-hidden">
              <span className="material-symbols-outlined text-primary text-5xl mb-4">rocket_launch</span>
              <h3 className="text-2xl font-semibold text-primary mb-3">Technical & R&D</h3>
              <p className="text-slate-500">
                Our core engine driving workshops, hackathons, and technical projects. Focused on IEEE standards and emerging tech research.
              </p>
              <div className="mt-6 flex -space-x-2">
                {[0, 1, 2].map((item) => (
                  <div key={item} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs">+12</div>
              </div>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <span className="material-symbols-outlined text-amber-700 text-3xl mb-2">event_available</span>
              <h4 className="text-lg font-semibold text-primary">Event Ops</h4>
              <p className="text-sm text-slate-500 mt-2">Precision logistics for every branch gathering.</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm">
              <span className="material-symbols-outlined text-amber-700 text-3xl mb-2">palette</span>
              <h4 className="text-lg font-semibold text-primary">Creative</h4>
              <p className="text-sm text-slate-500 mt-2">Visual identity and brand storytelling.</p>
            </div>
            <div className="md:col-span-2 bg-blue-50 rounded-xl p-6 border border-slate-200 flex items-center justify-between">
              <div>
                <h4 className="text-xl font-semibold text-primary">Outreach & Media</h4>
                <p className="text-blue-700/80">Expanding our footprint across the global IEEE network.</p>
              </div>
              <span className="material-symbols-outlined text-primary text-6xl opacity-20">public</span>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-r from-[#002147] via-[#00629B] to-[#00629B] text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <RevealSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Join Our Team?</h2>
              <p className="text-white/80 text-lg mb-8">
                We are always looking for passionate individuals to contribute to IEEE BVIMR.
              </p>
              <a href="/contact" className="bg-white text-primary px-8 py-3 rounded-full font-semibold">
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
