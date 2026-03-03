import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocietyCard from '@/components/SocietyCard'

export default function Societies() {
  const societies = [
    {
      id: 1,
      name: "Women in Engineering (WIE)",
      description: "Empowering women in science, technology, engineering, and mathematics through networking, mentorship, and professional development.",
      fullDescription: "IEEE Women in Engineering (WIE) is dedicated to promoting women engineers and scientists. Our chapter focuses on professional development, mentorship, and creating inclusive networking opportunities.",
      color: "bg-rose-100",
    },
    {
      id: 2,
      name: "Young Professionals (YP)",
      description: "Connecting early-career professionals with industry experts, career development workshops, and networking events.",
      fullDescription: "IEEE Young Professionals supports students transitioning into careers and early-career professionals. We provide career guidance, industry connections, and professional growth opportunities.",
      color: "bg-blue-100",
    },
    {
      id: 3,
      name: "Power & Energy Society (PES)",
      description: "Advancing innovation in power systems, renewable energy, and sustainable technologies for a better future.",
      fullDescription: "IEEE Power & Energy Society focuses on research, education, and innovation in power systems. Our members work on sustainable energy solutions and advanced grid technologies.",
      color: "bg-amber-100",
    },
    {
      id: 4,
      name: "Computer Society (CS)",
      description: "Promoting computing education, research, and professional development in computer science and IT.",
      fullDescription: "IEEE Computer Society is the world's leading computing organization. We focus on computing education, research, and fostering innovation in computer science and technology.",
      color: "bg-purple-100",
    },
    {
      id: 5,
      name: "Communications Society (ComSoc)",
      description: "Fostering innovation in communication systems, signal processing, and information theory.",
      fullDescription: "IEEE Communications Society promotes innovation and excellence in communications technology. We focus on emerging technologies, research, and professional development in the communications field.",
      color: "bg-emerald-100",
    },
    {
      id: 6,
      name: "Robotics & Automation Society (RAS)",
      description: "Exploring robotics, automation, and intelligent systems to advance technology and innovation.",
      fullDescription: "IEEE Robotics and Automation Society is dedicated to advancing robotics and automation. We promote research, innovation, and education in robotics and related technologies.",
      color: "bg-cyan-100",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-[#00629B] text-white py-20 md:py-24">
          <div className="container-ieee">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">IEEE Societies</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Explore our six specialized societies, each focused on different domains of engineering and technology.
            </p>
          </div>
        </section>

        {/* Societies Grid */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title text-center">Our Societies</h2>
            <p className="section-subtitle text-center mb-12">Specialized groups for technical excellence</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {societies.map((society) => (
                <SocietyCard key={society.id} name={society.name} description={society.description} color={society.color} />
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Society Information */}
        <section className="py-20 bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title">About Our Societies</h2>

            <div className="space-y-12">
              {societies.map((society) => (
                <div key={society.id} className="card-ieee">
                  <div className={`w-full h-24 rounded-t-lg ${society.color} -mx-6 -mt-6 mb-6`}></div>
                  <h3 className="font-bold text-2xl text-foreground mb-3">{society.name}</h3>
                  <p className="text-lg text-foreground leading-relaxed mb-4">
                    {society.fullDescription}
                  </p>
                  <div className="pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-3">
                      <strong>What We Do:</strong>
                    </p>
                    <ul className="space-y-2 text-sm text-foreground">
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Organize technical workshops and seminars</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Facilitate networking with industry professionals</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Support career development and mentorship</span>
                      </li>
                      <li className="flex gap-2">
                        <span className="text-primary font-bold">✓</span>
                        <span>Promote research and innovation in our field</span>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Join */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title text-center">Why Join a Society?</h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="card-ieee text-center">
                <div className="text-5xl mb-4">🎓</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Learn</h3>
                <p className="text-sm text-muted-foreground">
                  Expand your knowledge through technical sessions and expert-led workshops.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-5xl mb-4">🤝</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Network</h3>
                <p className="text-sm text-muted-foreground">
                  Connect with peers, professionals, and industry leaders in your field.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-5xl mb-4">💼</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Grow</h3>
                <p className="text-sm text-muted-foreground">
                  Develop leadership and professional skills through active involvement.
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Innovate</h3>
                <p className="text-sm text-muted-foreground">
                  Collaborate on projects and push the boundaries of your field.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00629B] text-white py-20">
          <div className="container-ieee text-center">
            <h2 className="text-4xl font-bold mb-4">Ready to Get Involved?</h2>
            <p className="text-xl opacity-90 mb-8">
              Join any of our societies and start your journey of professional development
            </p>
            <button className="btn-ieee-primary bg-white text-primary hover:bg-gray-100">
              Explore Opportunities
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
