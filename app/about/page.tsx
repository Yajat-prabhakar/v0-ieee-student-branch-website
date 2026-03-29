'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadershipCard from '@/components/LeadershipCard'
import ProfileModal from '@/components/ProfileModal'
import { OurJourney } from '@/components/OurJourney'

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
        <OurJourney />

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
                <h3 className="font-bold text-lg text-primary mb-2">Affinity Groups</h3>
                <p className="text-muted-foreground">WIE is our first officially recognized affinity group, with more communities being established to serve diverse interests.</p>
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
                <div className="text-5xl font-bold text-primary mb-2">1</div>
                <p className="text-foreground font-semibold">Affinity Group</p>
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
