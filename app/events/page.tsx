'use client'

import { useState, useEffect, useRef } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Calendar, MapPin, ArrowRight, Clock, Users, Tag } from 'lucide-react'

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

const categoryColors: Record<string, string> = {
  Workshop:    'bg-blue-100 text-blue-700',
  Seminar:     'bg-purple-100 text-purple-700',
  Competition: 'bg-orange-100 text-orange-700',
  Networking:  'bg-pink-100 text-pink-700',
  Summit:      'bg-emerald-100 text-emerald-700',
  Orientation: 'bg-cyan-100 text-cyan-700',
  Official:    'bg-gray-100 text-gray-700',
  Expo:        'bg-amber-100 text-amber-700',
  Talk:        'bg-indigo-100 text-indigo-700',
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

        {/* Hero */}
        <section className="bg-gradient-to-r from-[#002147] via-[#00629B] to-[#00629B] text-white py-24 md:py-32 overflow-hidden relative">
          <div className="container-ieee relative z-10">
            <p className="text-xs font-bold uppercase tracking-widest text-white/60 mb-4">Events & Initiatives</p>
            <h1 className="text-5xl md:text-6xl font-black mb-6 text-pretty">All Events</h1>
            <p className="text-xl text-white/80 max-w-2xl font-light">
              Technical workshops, seminars, and competitions crafted to elevate your engineering journey.
            </p>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/20">
              <div>
                <div className="text-3xl font-black">{upcoming}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">Upcoming</div>
              </div>
              <div>
                <div className="text-3xl font-black">{past}</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">Past Events</div>
              </div>
              <div>
                <div className="text-3xl font-black">10+</div>
                <div className="text-xs uppercase tracking-widest text-white/60 mt-1">Total Held</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filter Tabs + Grid */}
        <section className="py-20">
          <div className="container-ieee">

            {/* Tab bar */}
            <div className="flex flex-wrap gap-2 mb-12">
              {tabs.map(tab => (
                <button
                  key={tab.key}
                  onClick={() => setFilter(tab.key)}
                  className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                    filter === tab.key
                      ? 'bg-primary text-white shadow-md'
                      : 'bg-secondary text-muted-foreground hover:bg-muted hover:text-foreground'
                  }`}
                >
                  {tab.label}
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded-full ${
                    filter === tab.key ? 'bg-white/20 text-white' : 'bg-border text-muted-foreground'
                  }`}>
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            {/* Cards grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filtered.map((event, idx) => (
                <RevealCard key={event.id} delay={idx * 60}>
                  <div className="group bg-card border border-border rounded-xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">

                    {/* Colour header strip with date */}
                    <div className="bg-gradient-to-r from-[#002147] to-[#00629B] px-6 pt-6 pb-4 flex items-start justify-between">
                      <div className="text-center bg-white rounded-lg px-4 py-2 shadow-sm">
                        <div className="text-xs font-bold text-primary uppercase tracking-widest">{event.month}</div>
                        <div className="text-3xl font-black text-foreground leading-none">{event.day}</div>
                        <div className="text-xs text-muted-foreground">{event.year}</div>
                      </div>

                      <div className="flex flex-col items-end gap-2">
                        {/* Status badge */}
                        <span className={`text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                          event.status === 'upcoming'
                            ? 'bg-emerald-400/20 text-emerald-300 border border-emerald-400/30'
                            : 'bg-white/10 text-white/60 border border-white/20'
                        }`}>
                          {event.status === 'upcoming' ? 'Upcoming' : 'Completed'}
                        </span>
                        {/* Category */}
                        <span className="text-xs text-white/60">{event.category}</span>
                      </div>
                    </div>

                    {/* Body */}
                    <div className="p-6 flex flex-col flex-1">
                      {/* Tag */}
                      <span className={`inline-block text-xs font-semibold px-2 py-1 rounded-md mb-3 w-fit ${categoryColors[event.category] ?? 'bg-gray-100 text-gray-700'}`}>
                        {event.tag}
                      </span>

                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                        {event.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                        {event.description}
                      </p>

                      {/* Meta */}
                      <div className="space-y-2 mb-5">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <MapPin size={13} className="text-primary shrink-0" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <Users size={13} className="text-primary shrink-0" />
                          <span>{event.attendees} attendees</span>
                        </div>
                      </div>

                      {/* CTA */}
                      <button className={`w-full py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 transition-all duration-200 ${
                        event.status === 'upcoming'
                          ? 'bg-primary text-white hover:bg-[#004B75]'
                          : 'bg-secondary text-foreground hover:bg-muted border border-border'
                      }`}>
                        {event.cta}
                        <ArrowRight size={14} />
                      </button>
                    </div>

                  </div>
                </RevealCard>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="text-center py-20 text-muted-foreground">
                <Clock size={48} className="mx-auto mb-4 opacity-30" />
                <p className="text-lg font-semibold">No events in this category yet.</p>
              </div>
            )}
          </div>
        </section>

        {/* Event types strip */}
        <section className="py-20 bg-secondary border-t border-border">
          <div className="container-ieee">
            <RevealCard>
              <h2 className="section-title">Types of Events We Organise</h2>
              <p className="section-subtitle">Diverse opportunities for learning and networking</p>
            </RevealCard>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
              {[
                { icon: <Tag size={28} />, title: 'Technical Workshops', desc: 'Hands-on sessions on emerging technologies and practical skills.' },
                { icon: <Users size={28} />, title: 'Networking Events', desc: 'Meet industry professionals, alumni, and fellow members.' },
                { icon: <Calendar size={28} />, title: 'Seminars & Talks', desc: 'Insights from experts on career development and tech trends.' },
                { icon: <Clock size={28} />, title: 'Competitions', desc: 'Hackathons, coding contests, and innovation challenges.' },
              ].map((item, idx) => (
                <RevealCard key={idx} delay={idx * 80}>
                  <div className="card-ieee text-center group hover:border-primary">
                    <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      {item.icon}
                    </div>
                    <h3 className="font-bold text-base text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </RevealCard>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter */}
        <section className="py-20">
          <RevealCard>
            <div className="container-ieee max-w-2xl mx-auto text-center">
              <h2 className="section-title">Stay Updated</h2>
              <p className="section-subtitle">Get notified about upcoming events and announcements</p>
              <form className="flex flex-col sm:flex-row gap-3 mt-8" onSubmit={e => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-4 py-3 border border-border rounded-lg bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary text-sm"
                />
                <button type="submit" className="px-6 py-3 bg-primary text-white font-bold rounded-lg hover:bg-[#004B75] transition-colors text-sm whitespace-nowrap">
                  Subscribe
                </button>
              </form>
            </div>
          </RevealCard>
        </section>

      </main>
      <Footer />
    </>
  )
}
