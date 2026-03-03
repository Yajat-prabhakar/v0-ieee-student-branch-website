import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import SocietyCard from '@/components/SocietyCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'

export default function Home() {

  const testimonials = [
    {
      quote: "Being part of IEEE BVIMR has been transformative. The societies, events, and networking opportunities have shaped my career path.",
      name: "Rahul Kumar",
      role: "Final Year, Computer Science",
    },
    {
      quote: "The events and workshops organized by the branch are incredibly valuable. I've learned so much about emerging technologies.",
      name: "Priya Sharma",
      role: "Second Year, Electronics Engineering",
    },
    {
      quote: "The leadership program and mentor network have been invaluable for my personal and professional growth.",
      name: "Arjun Patel",
      role: "Alumni, 2022",
    },
  ]

  const societies = [
    {
      name: "Women in Engineering (WIE)",
      description: "Empowering women in science, technology, engineering, and mathematics through networking, mentorship, and professional development.",
      color: "bg-blue-100",
    },
    {
      name: "Young Professionals (YP)",
      description: "Connecting early-career professionals with industry experts, career development workshops, and networking events.",
      color: "bg-purple-100",
    },
    {
      name: "Power & Energy Society (PES)",
      description: "Advancing innovation in power systems, renewable energy, and sustainable technologies for a better future.",
      color: "bg-amber-100",
    },
    {
      name: "Computer Society (CS)",
      description: "Promoting computing education, research, and professional development in computer science and IT.",
      color: "bg-emerald-100",
    },
    {
      name: "Communications Society (ComSoc)",
      description: "Fostering innovation in communication systems, signal processing, and information theory.",
      color: "bg-rose-100",
    },
    {
      name: "Robotics & Automation Society (RAS)",
      description: "Exploring robotics, automation, and intelligent systems to advance technology and innovation.",
      color: "bg-cyan-100",
    },
  ]

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section with Gradient */}
        <section className="bg-gradient-to-r from-[#002147] via-[#00629B] to-[#00629B] text-white py-20 md:py-32 relative overflow-hidden">
          {/* Radial gradient overlay for depth */}
          <div className="absolute inset-0 bg-radial-gradient opacity-10"></div>
          
          <div className="container-ieee text-center relative z-10">
            <div className="inline-block mb-6 px-4 py-2 backdrop-blur-md bg-white/20 border border-white/30 rounded-md hover:bg-white/30 transition-all duration-300">
              <span className="text-xs font-bold uppercase tracking-widest text-white">IEEE Region 10 - Asia Pacific</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
              IEEE BVIMR Student Branch
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-2xl mx-auto font-light">
              Advancing Technology for Humanity
            </p>
            <p className="text-lg opacity-80 mb-10 max-w-3xl mx-auto">
              Join our vibrant community of 40+ passionate students and young professionals dedicated to innovation, leadership, and technical excellence.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <button className="btn-ieee-primary">
                Join Us Today
              </button>
              <Link href="/about" className="btn-ieee-secondary">
                Learn More →
              </Link>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8 pt-12 border-t border-white border-opacity-20">
              <div>
                <div className="stat-value">40+</div>
                <p className="stat-label">Active Members</p>
              </div>
              <div>
                <div className="stat-value">10+</div>
                <p className="stat-label">Events Hosted</p>
              </div>
              <div>
                <div className="stat-value">6</div>
                <p className="stat-label">Societies</p>
              </div>
            </div>
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title">About the Branch</h2>
            <p className="section-subtitle">Discover who we are and what we stand for</p>

            <div className="grid md:grid-cols-2 gap-12 items-center mb-8">
              <div>
                <p className="text-lg text-foreground leading-relaxed mb-4">
                  IEEE BVIMR Student Branch is dedicated to advancing technology for humanity. We bring together passionate students, professionals, and leaders to foster innovation, collaboration, and continuous learning.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Our branch operates across six specialized societies, each focused on different domains of engineering and technology. Through events, workshops, and mentorship programs, we create opportunities for members to grow professionally and personally.
                </p>
                <Link href="/about" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                  Read Full Story
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
              <div className="bg-muted rounded-lg h-64 flex items-center justify-center">
                <span className="text-muted-foreground text-center">
                  <div className="text-5xl opacity-20 mb-2">📸</div>
                  Branch Photo
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Societies Section */}
        <section className="py-20 bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title">IEEE Societies</h2>
            <p className="section-subtitle">Explore our six specialized societies</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
              {societies.map((society) => (
                <SocietyCard key={society.name} {...society} />
              ))}
            </div>

            <div className="text-center">
              <Link href="/societies" className="btn-ieee-primary">
                View All Societies
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title text-center">Member Testimonials</h2>
            <p className="section-subtitle text-center mb-12">What our members are saying</p>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* CTA Section */}
        <section className="ieee-blue text-white py-20">
          <div className="container-ieee text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Join the IEEE Community</h2>
            <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
              Become part of a global community of engineers, technologists, and innovators
            </p>
            <button className="btn-ieee-primary bg-white text-primary hover:bg-gray-100">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
