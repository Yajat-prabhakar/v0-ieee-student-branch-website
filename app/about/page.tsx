'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Lenis from '@studio-freight/lenis'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProfileModal from '@/components/ProfileModal'

const EVENTS = [
  {
    id: '01',
    date: 'January 2026',
    title: 'Inauguration',
    description:
      'IEEE BVIMR Student Branch was officially established at Bharati Vidyapeeth Institute of Management and Research, New Delhi, under IEEE Region 10 (Asia Pacific) — inaugurated in a ceremony attended by faculty, Delhi Section members, and the founding student council.',
    images: [
      '/images/inauguration/inauguration-1.jpg',
      '/images/inauguration/inauguration-2.jpg',
      '/images/inauguration/inauguration-3.jpg',
      '/images/inauguration/inauguration-4.jpg',
      '/images/inauguration/inauguration-5.jpg',
      '/images/inauguration/inauguration-6.png',
      'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=1280&q=75',
    ],
  },
  {
    id: '02',
    date: 'January 2026',
    title: 'Membership Drive',
    description:
      'With the branch newly established, we launched our first membership drive — welcoming students from across BVIMR into the IEEE family and sparking conversations about engineering, technology, and the power of a global professional network.',
    images: [
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
  {
    id: '03',
    date: "February 2026",
    title: "DSSYWLC'25",
    description:
      'Our members debuted on the IEEE stage at the Delhi Section Student, Young Professionals, WIE & Life Members Congress — representing BVIMR alongside students and professionals from across the Delhi Section.',
    images: [
      'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1431540015161-0bf868a2d407?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1560439514-4e9645039924?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
  {
    id: '04',
    date: 'February 2026',
    title: 'India AI Expo Summit',
    description:
      'IEEE BVIMR members attended the India AI Expo Summit — from live demos to expert panels on cutting-edge AI — returning inspired to build, experiment, and innovate at the intersection of technology and real-world impact.',
    images: [
      'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
  {
    id: '05',
    date: 'March 2026',
    title: 'WIE Sub-Society Officialized',
    description:
      'A landmark moment — the IEEE Women in Engineering Affinity Group was officially recognized under our branch, providing a dedicated platform for women to lead, connect, and inspire the next generation of engineers in tech.',
    images: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&h=800&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1488716820095-cbe80883c496?w=1280&h=720&fit=crop&auto=format&q=75',
      'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=800&h=800&fit=crop&auto=format&q=75',
    ],
  },
]

const IMAGE_POSITIONS = [
  '',
  '[&>div]:!-top-[30vh] [&>div]:!left-[5vw] [&>div]:!h-[30vh] [&>div]:!w-[35vw]',
  '[&>div]:!-top-[10vh] [&>div]:!-left-[25vw] [&>div]:!h-[45vh] [&>div]:!w-[20vw]',
  '[&>div]:!left-[27.5vw] [&>div]:!h-[25vh] [&>div]:!w-[25vw]',
  '[&>div]:!top-[27.5vh] [&>div]:!left-[5vw] [&>div]:!h-[25vh] [&>div]:!w-[20vw]',
  '[&>div]:!top-[27.5vh] [&>div]:!-left-[22.5vw] [&>div]:!h-[25vh] [&>div]:!w-[30vw]',
  '[&>div]:!top-[22.5vh] [&>div]:!left-[25vw] [&>div]:!h-[15vh] [&>div]:!w-[15vw]',
]

const SCALES_MAX = [4, 5, 6, 5, 6, 8, 9]

function EventSection({ event }: { event: typeof EVENTS[number] }) {
  const container = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end'],
  })

  const scales = SCALES_MAX.map((max) => useTransform(scrollYProgress, [0, 1], [1, max]))
  const chapterOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0])
  const overlayOpacity = useTransform(scrollYProgress, [0.35, 0.58], [0, 1])
  const textOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1])
  const textY = useTransform(scrollYProgress, [0.5, 0.7], [20, 0])

  return (
    <div ref={container} className="relative h-[300vh]">
      <div className="sticky top-0 h-screen overflow-hidden bg-slate-100">
        <motion.div
          style={{ opacity: chapterOpacity }}
          className="pointer-events-none absolute inset-0 z-[2] flex items-center justify-center select-none"
        >
          <span className="w-full text-center text-[32vw] font-black leading-none text-slate-900/5">
            {event.id}
          </span>
        </motion.div>

        <motion.div
          style={{ opacity: chapterOpacity }}
          className="absolute top-5 left-5 z-[70] flex items-center gap-2"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-full border border-blue-200 bg-blue-50 text-[8px] font-bold text-blue-700">
            {event.id}
          </div>
          <span className="text-[8px] tracking-[0.22em] uppercase text-slate-400">
            {event.date}
          </span>
        </motion.div>

        {event.images.map((src, i) => (
          <motion.div
            key={i}
            style={{ scale: scales[i % scales.length] }}
            className={`absolute inset-0 flex h-full w-full items-center justify-center ${IMAGE_POSITIONS[i] ?? ''}`}
          >
            <div className="relative h-[25vh] w-[25vw] overflow-hidden rounded-xl shadow-xl">
              <img
                src={src}
                alt={`${event.title} ${i + 1}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>
        ))}

        <motion.div
          className="pointer-events-none absolute inset-0 z-50"
          style={{
            opacity: overlayOpacity,
            background:
              'linear-gradient(to top, rgba(15,23,42,0.92) 0%, rgba(15,23,42,0.55) 38%, transparent 65%)',
          }}
        />

        <motion.div
          style={{ opacity: textOpacity, y: textY }}
          className="absolute bottom-0 left-0 right-0 z-[60] px-10 pb-10 md:px-16 md:pb-12"
        >
          <p className="mb-2 text-[9px] font-semibold tracking-[0.28em] uppercase text-blue-200">
            {event.date}
          </p>
          <h2 className="mb-3 text-4xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            {event.title}
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-white/50">
            {event.description}
          </p>
        </motion.div>
      </div>
    </div>
  )
}

function OurJourneyStory() {
  useEffect(() => {
    const lenis = new Lenis()
    let raf = 0
    const loop = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(loop)
    }
    raf = requestAnimationFrame(loop)
    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return (
    <section className="bg-white">
      <div className="flex h-screen flex-col items-center justify-center text-center px-6">
        <p className="mb-3 text-[10px] tracking-[0.32em] uppercase text-blue-600">
          IEEE BVIMR Student Branch
        </p>
        <h1 className="mb-4 text-5xl md:text-6xl font-black tracking-tight text-slate-900">
          Our <span className="text-primary">Journey</span>
        </h1>
        <p className="max-w-md text-sm leading-relaxed text-slate-500">
          From inauguration to impact — the milestones that defined us.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 text-slate-400 text-xs">
          <span>Scroll to explore</span>
          <motion.div
            className="h-12 w-px bg-slate-300"
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
            style={{ originY: 0.5 }}
          />
        </div>
      </div>

      {EVENTS.map((ev) => (
        <EventSection key={ev.id} event={ev} />
      ))}

      <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center bg-slate-50">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-200 px-4 py-1.5 text-[10px] tracking-[0.22em] uppercase text-blue-600">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-600" />
          What lies ahead
        </div>
        <h2 className="mb-3 text-4xl md:text-5xl font-black tracking-tight text-slate-900">
          Building Tomorrow
        </h2>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-slate-500">
          With a growing council, planned technical workshops, and upcoming chapters in WIE and Computer Society, IEEE BVIMR is charting an ambitious roadmap to become a leading student branch in the Delhi Section.
        </p>
        <div className="flex flex-wrap justify-center gap-2">
          {['Technical Workshops', 'WIE Affinity Group', 'Computer Society', 'Global Connections', 'Hackathons'].map((c) => (
            <span
              key={c}
              className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-600"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function About() {
  type LeaderMember = { name: string; role: string; image?: string; banner?: string; objectPosition?: string; linkedin?: string; email?: string; github?: string; about?: string; team?: string; projects?: { title: string; description: string; tech?: string; link?: string }[] }
  const [selectedMember, setSelectedMember] = useState<LeaderMember | null>(null)
  const leadership: LeaderMember[] = [
    {
      name: "Kanav Gupta",
      role: "Chairperson",
      image: "/members/kanav-gupta.jpg",
      banner: '/members/kanav-banner.png',
      objectPosition: 'center 30%',
      linkedin: "#",
      email: "kanav@ieeebvimr.org",
      github: "#",
      about: "Leading the IEEE BVIMR Student Branch with a vision to foster innovation and technical excellence across the campus community.",
      team: "Core Team"
    },
    {
      name: "Herman Kaur",
      role: "Vice Chairperson",
      image: "/members/herman-kaur.jpg",
      banner: '/members/herman-banner.png',
      objectPosition: 'center 35%',
      linkedin: "#",
      email: "herman@ieeebvimr.org",
      github: "#",
      about: "Supporting branch operations and driving member engagement through collaborative initiatives and impactful programs.",
      team: "Core Team"
    },
    {
      name: "Ginim Narang",
      role: "Secretary",
      image: "/members/ginim-narang.jpg",
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
    {
      name: "Ipshita Sethi",
      role: "Treasurer",
      image: "/members/ipshita-sethi.jpg",
      banner: '/members/ipshita-banner.png',
      objectPosition: 'center 40%',
      linkedin: "#",
      email: "ipshita@ieeebvimr.org",
      github: "#",
      about: "Overseeing financial planning, budget management, and resource allocation for branch events and activities.",
      team: "Core Team"
    },
    {
      name: "Yajat Prabhakar",
      role: "Webmaster",
      image: "/members/yajat-prabhakar.jpg",
      banner: '/members/yajat-banner.png',
      objectPosition: 'center 25%',
      linkedin: "https://www.linkedin.com/in/yajat-prabhakar-6a3aa6321/",
      email: "yajatprabhakar@gmail.com",
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

        <section className="relative py-16 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="font-label-caps text-amber-700 mb-4 block">ESTABLISHED 2026</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Pioneering Progress in Technology.</h1>
              <p className="text-lg text-slate-500 mb-8 max-w-xl">Learn about our mission, values, and the leadership team driving our branch forward.</p>
              <div className="flex gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg">Explore Initiative</button>
                <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold">Our Charter</button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-full overflow-hidden border-[10px] border-slate-100 shadow-2xl bg-slate-200 flex items-center justify-center text-slate-400">
                Campus Spotlight
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white/70 backdrop-blur-md p-6 rounded-2xl shadow-xl border border-white/40">
                <span className="text-3xl font-bold text-primary block">Region 10</span>
                <span className="text-xs font-label-caps text-slate-500">Active Global Network</span>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { value: '40+', label: 'Active Members' },
                { value: '10+', label: 'Annual Events' },
                { value: '5+', label: 'Industry Partners' },
                { value: '100%', label: 'Student Focused' },
              ].map((stat) => (
                <div key={stat.label} className="bg-white rounded-2xl p-6 shadow-sm">
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="font-label-caps text-slate-500 mt-2">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-200">
              <div className="bg-white p-10 lg:p-14">
                <span className="font-label-caps text-primary mb-4 block">OUR MISSION</span>
                <h2 className="text-3xl font-semibold mb-4">Empowering Future Technologists.</h2>
                <p className="text-lg text-slate-500">To foster innovation, professional development, and leadership among students and young professionals in engineering and technology. We aim to create a community where members can collaborate, learn, and contribute to advancing technology for humanity.</p>
                <div className="w-12 h-1 bg-primary rounded-full mt-6"></div>
              </div>
              <div className="bg-white p-10 lg:p-14">
                <span className="font-label-caps text-amber-700 mb-4 block">OUR VISION</span>
                <h2 className="text-3xl font-semibold mb-4">Advancing Tech for Humanity.</h2>
                <p className="text-lg text-slate-500">To be a leading student branch in Region 10 that bridges academia and industry, fostering excellence in technical knowledge, ethical practices, and global collaboration.</p>
                <div className="w-12 h-1 bg-amber-600 rounded-full mt-6"></div>
              </div>
            </div>
          </div>
        </section>

        <OurJourneyStory />

        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <div className="bg-blue-50 rounded-3xl p-10 lg:p-16 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">Ready to shape the future?</h2>
              <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto">
                Join the IEEE BVIMR community today and gain access to a global network of technical resources, research papers, and professional development opportunities.
              </p>
              <button className="bg-white text-primary px-10 py-4 rounded-full font-bold text-lg shadow-xl">Become a Member</button>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-semibold text-slate-900 mb-8">Branch Leadership</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadership.map((member) => (
                <button
                  key={member.name}
                  onClick={() => setSelectedMember(member)}
                  className="text-left bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 text-primary font-bold flex items-center justify-center mb-4">
                    {member.name.split(' ').map((word) => word[0]).join('')}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">{member.name}</h3>
                  <p className="text-sm text-slate-500">{member.role}</p>
                  <p className="text-xs text-slate-400 mt-3 line-clamp-2">{member.about}</p>
                </button>
              ))}
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
            banner: selectedMember.banner,
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
