'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import EventCard from '@/components/EventCard'

export default function Events() {
  const [activeTab, setActiveTab] = useState<'upcoming' | 'past'>('upcoming')

  const upcomingEvents = [
    {
      date: "March 15, 2026",
      title: "Tech Talk: AI in Industry",
      description: "Industry experts discuss the latest trends and applications of artificial intelligence in enterprise solutions.",
      location: "BVIMR Campus, Auditorium",
      cta: "Register",
    },
    {
      date: "March 22, 2026",
      title: "Women in Tech Networking Dinner",
      description: "A networking event celebrating women in technology and engineering fields. Mentorship opportunities included.",
      location: "BVIMR Campus, Conference Hall",
      cta: "Register",
    },
    {
      date: "April 5, 2026",
      title: "Robotics Workshop",
      description: "Hands-on workshop on robotics fundamentals, automation, and intelligent systems design.",
      location: "BVIMR Campus, Lab 3",
      cta: "Register",
    },
    {
      date: "April 12, 2026",
      title: "Career Development Seminar",
      description: "Learn resume writing, interview preparation, and career advancement strategies from HR professionals.",
      location: "BVIMR Campus, Auditorium",
      cta: "Register",
    },
    {
      date: "April 20, 2026",
      title: "Power & Energy Conference",
      description: "Explore renewable energy, smart grids, and sustainable power systems for the future.",
      location: "BVIMR Campus, Main Hall",
      cta: "Register",
    },
    {
      date: "May 3, 2026",
      title: "IEEE Student Leadership Summit",
      description: "Annual summit bringing together student leaders from across Region 10 to share experiences and learn.",
      location: "BVIMR Campus, Auditorium",
      cta: "Register",
    },
  ]

  const pastEvents = [
    {
      date: "February 28, 2026",
      title: "Orientation: Welcome to IEEE BVIMR",
      description: "Introduction to our branch, societies, and opportunities available for all members.",
      location: "BVIMR Campus, Auditorium",
      cta: "View Photos",
    },
    {
      date: "February 15, 2026",
      title: "Code Jam 2026",
      description: "Competitive programming event where students showcased their coding skills and problem-solving abilities.",
      location: "BVIMR Campus, Computer Lab",
      cta: "View Photos",
    },
    {
      date: "January 25, 2026",
      title: "Annual General Meeting",
      description: "Branch AGM with election of new leadership council and annual report presentation.",
      location: "BVIMR Campus, Main Hall",
      cta: "View Results",
    },
    {
      date: "December 10, 2025",
      title: "Tech Expo 2025",
      description: "Showcase of student projects and innovations in various technical domains.",
      location: "BVIMR Campus, Exhibition Hall",
      cta: "View Photos",
    },
    {
      date: "November 30, 2025",
      title: "Industry Recruitment Drive",
      description: "Campus recruitment event with major tech companies and corporations.",
      location: "BVIMR Campus, Multiple Venues",
      cta: "Learn More",
    },
    {
      date: "October 15, 2025",
      title: "Foundation: IEEE History & Vision",
      description: "Interactive session on IEEE's global mission and its impact on technology and society.",
      location: "BVIMR Campus, Conference Hall",
      cta: "View Photos",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#00629B] text-white py-20 md:py-24">
          <div className="container-ieee">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Events</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Discover our upcoming events, workshops, and networking opportunities.
            </p>
          </div>
        </section>

        {/* Events Tabs */}
        <section className="py-20">
          <div className="container-ieee">
            {/* Tab Navigation */}
            <div className="flex gap-4 mb-12 border-b border-border">
              <button
                onClick={() => setActiveTab('upcoming')}
                className={`px-6 py-3 font-semibold transition-all border-b-2 ${
                  activeTab === 'upcoming'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Upcoming Events ({upcomingEvents.length})
              </button>
              <button
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 font-semibold transition-all border-b-2 ${
                  activeTab === 'past'
                    ? 'border-primary text-primary'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                Past Events ({pastEvents.length})
              </button>
            </div>

            {/* Upcoming Events */}
            {activeTab === 'upcoming' && (
              <div className="space-y-6">
                <h2 className="section-title">Upcoming Events</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event, idx) => (
                    <EventCard key={idx} {...event} />
                  ))}
                </div>
              </div>
            )}

            {/* Past Events */}
            {activeTab === 'past' && (
              <div className="space-y-6">
                <h2 className="section-title">Past Events</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {pastEvents.map((event, idx) => (
                    <EventCard key={idx} {...event} />
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Event Categories */}
        <section className="py-20 bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title">Types of Events We Organize</h2>
            <p className="section-subtitle">Diverse opportunities for learning and networking</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">🎓</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Technical Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Hands-on learning sessions on emerging technologies and technical skills.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Networking Events</h3>
                <p className="text-sm text-muted-foreground">
                  Meet industry professionals, alumni, and fellow members in casual settings.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Seminars & Talks</h3>
                <p className="text-sm text-muted-foreground">
                  Insights from industry experts on career development and technology trends.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Competitions</h3>
                <p className="text-sm text-muted-foreground">
                  Coding contests, hackathons, and innovation challenges for all skill levels.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-20">
          <div className="container-ieee max-w-2xl mx-auto text-center">
            <h2 className="section-title">Stay Updated</h2>
            <p className="section-subtitle mb-8">Subscribe to our newsletter for event updates and announcements</p>

            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-border rounded-lg bg-card text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button type="submit" className="btn-ieee-primary">
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
