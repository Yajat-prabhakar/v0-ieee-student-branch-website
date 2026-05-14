'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { MapPin, ArrowRight, Clock, Users } from 'lucide-react'

type FilterType = 'all' | 'upcoming' | 'past'

interface Event {
  id: number
  date: string
  month: string
  day: string
  year: string
  title: string
  description: string
  location: string
  category: string
  status: 'upcoming' | 'past'
  attendees: string
  cta: string
  tag: string
}

const events: Event[] = [
  {
    id: 1,
    date: "March 15, 2026",
    month: "MAR",
    day: "15",
    year: "2026",
    title: "Tech Talk: AI in Industry",
    description: "Industry experts discuss the latest trends and applications of artificial intelligence in enterprise solutions and real-world use cases.",
    location: "BVIMR Campus, Auditorium",
    category: "Seminar",
    status: "upcoming",
    attendees: "200+",
    cta: "Register Now",
    tag: "AI & ML",
  },
  {
    id: 2,
    date: "March 22, 2026",
    month: "MAR",
    day: "22",
    year: "2026",
    title: "Women in Tech Networking Dinner",
    description: "A networking event celebrating women in technology and engineering fields, with mentorship and career guidance opportunities.",
    location: "BVIMR Campus, Conference Hall",
    category: "Networking",
    status: "upcoming",
    attendees: "80+",
    cta: "Register Now",
    tag: "WIE",
  },
  {
    id: 3,
    date: "April 5, 2026",
    month: "APR",
    day: "05",
    year: "2026",
    title: "Robotics Workshop",
    description: "Hands-on workshop on robotics fundamentals, automation systems, and intelligent design — no prior experience needed.",
    location: "BVIMR Campus, Lab 3",
    category: "Workshop",
    status: "upcoming",
    attendees: "50+",
    cta: "Register Now",
    tag: "Robotics",
  },
  {
    id: 4,
    date: "April 12, 2026",
    month: "APR",
    day: "12",
    year: "2026",
    title: "Career Development Seminar",
    description: "Resume writing, interview preparation, and career advancement strategies from experienced HR professionals and alumni.",
    location: "BVIMR Campus, Auditorium",
    category: "Seminar",
    status: "upcoming",
    attendees: "150+",
    cta: "Register Now",
    tag: "Career",
  },
  {
    id: 5,
    date: "May 3, 2026",
    month: "MAY",
    day: "03",
    year: "2026",
    title: "IEEE Student Leadership Summit",
    description: "Annual summit bringing together student leaders from across Region 10 to share experiences and learn leadership skills.",
    location: "BVIMR Campus, Auditorium",
    category: "Summit",
    status: "upcoming",
    attendees: "300+",
    cta: "Register Now",
    tag: "Leadership",
  },
  {
    id: 6,
    date: "February 28, 2026",
    month: "FEB",
    day: "28",
    year: "2026",
    title: "Orientation: Welcome to IEEE BVIMR",
    description: "Introduction to our branch, affinity groups, and the opportunities available for all members across disciplines.",
    location: "BVIMR Campus, Auditorium",
    category: "Orientation",
    status: "past",
    attendees: "120",
    cta: "View Recap",
    tag: "Orientation",
  },
  {
    id: 7,
    date: "February 15, 2026",
    month: "FEB",
    day: "15",
    year: "2026",
    title: "Code Jam 2026",
    description: "Competitive programming event where students showcased their coding skills and problem-solving abilities across multiple rounds.",
    location: "BVIMR Campus, Computer Lab",
    category: "Competition",
    status: "past",
    attendees: "90",
    cta: "View Results",
    tag: "Coding",
  },
  {
    id: 8,
    date: "January 25, 2026",
    month: "JAN",
    day: "25",
    year: "2026",
    title: "Annual General Meeting",
    description: "Branch AGM with election of new leadership council and the presentation of the annual report.",
    location: "BVIMR Campus, Main Hall",
    category: "Official",
    status: "past",
    attendees: "75",
    cta: "View Recap",
    tag: "Official",
  },
  {
    id: 9,
    date: "December 10, 2025",
    month: "DEC",
    day: "10",
    year: "2025",
    title: "Tech Expo 2025",
    description: "Showcase of student projects and innovations across technical domains including AI, IoT, and renewable energy.",
    location: "BVIMR Campus, Exhibition Hall",
    category: "Expo",
    status: "past",
    attendees: "250",
    cta: "View Gallery",
    tag: "Innovation",
  },
  {
    id: 10,
    date: "October 15, 2025",
    month: "OCT",
    day: "15",
    year: "2025",
    title: "IEEE Foundation Talk",
    description: "Interactive session on IEEE's global mission and its profound impact on technology, standards, and society worldwide.",
    location: "BVIMR Campus, Conference Hall",
    category: "Talk",
    status: "past",
    attendees: "100",
    cta: "View Recap",
    tag: "IEEE",
  },
]

// Scroll-reveal hook
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

function RevealCard({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, visible } = useReveal()
  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(28px)',
        transition: `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}



export default function Events() {
  const [filter, setFilter] = useState<FilterType>('all')

  const filtered = filter === 'all'
    ? events
    : events.filter(e => e.status === filter)

  const upcoming = events.filter(e => e.status === 'upcoming').length
  const past     = events.filter(e => e.status === 'past').length

  const tabs: { key: FilterType; label: string; count: number }[] = [
    { key: 'all',      label: 'All Events',      count: events.length },
    { key: 'upcoming', label: 'Upcoming',         count: upcoming },
    { key: 'past',     label: 'Past',             count: past },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">

        <section className="max-w-6xl mx-auto px-6 pt-16 pb-10">
          <span className="font-label-caps text-amber-700 mb-3 block">EXPLORE OUR CALENDAR</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Shape the future through <span className="text-amber-700">Technical Excellence</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Join a community of innovators. From global jams to local workshops, our events are designed to bridge the gap between academic theory and industry reality.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-slate-200 pb-6 mb-10">
          <div className="flex bg-slate-100 p-1 rounded-full inline-flex">
            {tabs.map(tab => (
              <button
                key={tab.key}
                onClick={() => setFilter(tab.key)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                  filter === tab.key ? 'bg-primary text-white shadow-sm' : 'text-slate-500 hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            {['All Events', 'Seminars', 'Workshops', 'Competitions', 'Networking', 'Summits'].map((pill) => (
              <span
                key={pill}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border ${
                  pill === 'All Events'
                    ? 'border-primary bg-blue-50 text-primary'
                    : 'border-slate-200 text-slate-500'
                }`}
              >
                {pill}
              </span>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
          {filtered.map((event, idx) => (
            <RevealCard key={event.id} delay={idx * 60}>
              <div className="bg-white border border-slate-200 rounded-xl overflow-hidden card-hover-effect transition-all duration-500 flex flex-col relative group">
                <div className="aspect-video overflow-hidden bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                  Event Highlight
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-label-caps text-amber-700">{event.category}</span>
                    <div className="flex items-center text-slate-400 text-xs">
                      <span className="material-symbols-outlined text-sm mr-1">calendar_today</span>
                      {event.date}
                    </div>
                  </div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{event.title}</h3>
                  <p className="text-sm text-slate-500 mb-4 line-clamp-2">{event.description}</p>
                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center text-sm font-semibold text-primary">
                      <MapPin size={14} className="mr-2" />
                      {event.location}
                    </div>
                    <button className="text-primary font-bold text-sm flex items-center group-hover:translate-x-1 transition-transform">
                      {event.cta}
                      <ArrowRight size={14} className="ml-1" />
                    </button>
                  </div>
                  <div className="mt-3 flex items-center gap-2 text-xs text-slate-400">
                    <Users size={12} /> {event.attendees} attendees
                  </div>
                </div>
              </div>
            </RevealCard>
          ))}
          <div className="bg-primary text-white rounded-xl p-6 flex flex-col justify-center relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-28 h-28 bg-white/10 rounded-full -mr-14 -mt-14 group-hover:scale-125 transition-transform"></div>
            <span className="font-label-caps text-blue-100 mb-2 relative z-10">BEYOND THE BRANCH</span>
            <h3 className="text-xl font-semibold mb-3 relative z-10">Don&apos;t see what you&apos;re looking for?</h3>
            <p className="text-sm text-blue-100 mb-5 relative z-10">
              Suggest a workshop or seminar topic you&apos;d like to see in the upcoming semester. We&apos;re always listening to our members.
            </p>
            <button className="bg-white text-primary px-5 py-2 rounded-full font-bold text-sm w-fit relative z-10">
              Submit Proposal
            </button>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20 opacity-80">
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-2xl font-semibold text-slate-500">Archived Success</h2>
            <div className="h-px bg-slate-200 flex-grow"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {events.filter(e => e.status === 'past').slice(0, 2).map((event) => (
              <div key={event.id} className="flex gap-4 p-4 border border-slate-200 rounded-xl items-center hover:bg-slate-50 transition-colors">
                <div className="w-24 h-24 rounded-lg bg-slate-100 flex-shrink-0 flex flex-col items-center justify-center text-primary">
                  <span className="text-xl font-bold">{event.month}</span>
                  <span className="text-sm">{event.year}</span>
                </div>
                <div>
                  <span className="font-label-caps text-amber-700 mb-1 block">{event.category}</span>
                  <h4 className="text-lg font-semibold text-primary mb-1">{event.title}</h4>
                  <p className="text-sm text-slate-500">{event.description}</p>
                </div>
                <span className="material-symbols-outlined text-slate-300 ml-auto">arrow_outward</span>
              </div>
            ))}
          </div>
        </section>

        {filtered.length === 0 && (
          <div className="text-center pb-16 text-slate-400">
            <Clock size={48} className="mx-auto mb-4 opacity-30" />
            <p className="text-lg font-semibold">No events in this category yet.</p>
          </div>
        )}

        <section className="py-16 bg-slate-50">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold text-slate-900">Stay Updated</h2>
            <p className="text-slate-500 mt-2">Get notified about upcoming events and announcements</p>
            <form className="flex flex-col sm:flex-row gap-3 mt-8" onSubmit={e => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-slate-200 rounded-lg bg-white text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <button type="submit" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-[#004B75] transition-colors text-sm whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
