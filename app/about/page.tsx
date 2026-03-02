'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import LeadershipCard from '@/components/LeadershipCard'

export default function About() {
  const leadership = [
    {
      name: "Aditya Kumar",
      role: "Branch Chair",
      linkedin: "#",
    },
    {
      name: "Neha Singh",
      role: "Vice Chair",
      linkedin: "#",
    },
    {
      name: "Rohan Gupta",
      role: "Secretary",
      linkedin: "#",
    },
    {
      name: "Divya Sharma",
      role: "Treasurer",
      linkedin: "#",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="ieee-blue text-white py-20 md:py-24">
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
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  To foster innovation, professional development, and leadership among students and young professionals in engineering and technology. We aim to create a community where members can collaborate, learn, and contribute to advancing technology for humanity.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Vision</h3>
                <p className="text-lg text-foreground leading-relaxed mb-6">
                  To be a leading student branch in Region 10 that bridges academia and industry, fostering excellence in technical knowledge, ethical practices, and global collaboration.
                </p>
              </div>
            </div>

            <div className="bg-secondary p-8 rounded-lg border border-border">
              <h3 className="text-2xl font-bold text-foreground mb-6">Our Values</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">Excellence</h4>
                  <p className="text-muted-foreground">
                    Striving for the highest standards in technical knowledge and professional conduct.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">Collaboration</h4>
                  <p className="text-muted-foreground">
                    Building a community where diverse perspectives contribute to collective growth.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-lg text-primary mb-2">Innovation</h4>
                  <p className="text-muted-foreground">
                    Encouraging creative thinking and pushing the boundaries of technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="section-padding bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title">Branch Leadership</h2>
            <p className="section-subtitle">Meet the team leading our branch</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {leadership.map((member) => (
                <LeadershipCard key={member.name} {...member} />
              ))}
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
                <h3 className="font-bold text-lg text-primary mb-2">✓ 40+ Active Members</h3>
                <p className="text-muted-foreground">
                  Growing community of passionate students and professionals engaged in technical and professional development.
                </p>
              </div>
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-2">✓ 10+ Events Held</h3>
                <p className="text-muted-foreground">
                  Diverse range of workshops, seminars, and networking events throughout the academic year.
                </p>
              </div>
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-2">✓ 6 Active Societies</h3>
                <p className="text-muted-foreground">
                  Specialized groups focusing on WIE, YP, PES, CS, ComSoc, and RAS to serve diverse interests.
                </p>
              </div>
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-2">✓ Industry Partnerships</h3>
                <p className="text-muted-foreground">
                  Collaborations with leading tech companies and organizations to provide real-world learning opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Statistics Section */}
        <section className="section-padding bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title text-center">By The Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
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
                <p className="text-foreground font-semibold">Societies</p>
              </div>
              <div>
                <div className="text-5xl font-bold text-primary mb-2">100%</div>
                <p className="text-foreground font-semibold">Engaged</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
