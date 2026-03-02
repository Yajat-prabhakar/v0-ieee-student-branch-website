'use client'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import CouncilCard from '@/components/CouncilCard'

export default function Council() {
  const councilMembers = [
    { name: "Aditya Kumar", role: "Branch Chair" },
    { name: "Neha Singh", role: "Vice Chair" },
    { name: "Rohan Gupta", role: "Secretary" },
    { name: "Divya Sharma", role: "Treasurer" },
    { name: "Raj Patel", role: "WIE Chairperson" },
    { name: "Ananya Verma", role: "YP Chairperson" },
    { name: "Vikram Rao", role: "PES Chairperson" },
    { name: "Shreya Mishra", role: "CS Chairperson" },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="ieee-blue text-white py-20 md:py-24">
          <div className="container-ieee">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Executive Council</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Meet the dedicated members leading our branch and its various committees.
            </p>
          </div>
        </section>

        {/* Council Grid */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title">Council Members</h2>
            <p className="section-subtitle">Leadership team and society chairs</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {councilMembers.map((member) => (
                <CouncilCard key={member.name} {...member} />
              ))}
            </div>
          </div>
        </section>

        {/* Responsibilities Section */}
        <section className="py-20 bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title">Council Roles & Responsibilities</h2>
            <p className="section-subtitle">Understanding our organizational structure</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-4">Leadership Core</h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Branch Chair:</strong> Overall leadership and vision</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Vice Chair:</strong> Operations and event coordination</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Secretary:</strong> Communications and records</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Treasurer:</strong> Financial management</span>
                  </li>
                </ul>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-primary mb-4">Society Leadership</h3>
                <ul className="space-y-3 text-sm text-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Society Chairs:</strong> Lead specialized technical groups</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Event Organizers:</strong> Plan and execute programs</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Volunteers:</strong> Support all initiatives</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span><strong>Mentors:</strong> Guide junior members</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title">How to Get Involved</h2>
            <p className="section-subtitle">Join our leadership or attend events</p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">1</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Attend Events</h3>
                <p className="text-sm text-muted-foreground">
                  Participate in our workshops, seminars, and networking events to meet members.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">2</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Volunteer</h3>
                <p className="text-sm text-muted-foreground">
                  Help organize events and support our initiatives. Gain valuable experience.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">3</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Lead</h3>
                <p className="text-sm text-muted-foreground">
                  Apply for leadership positions and help shape the future of our branch.
                </p>
              </div>
            </div>

            <div className="text-center mt-12">
              <button className="btn-ieee-primary">
                Contact Us to Get Involved
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
