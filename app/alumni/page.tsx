import Header from '@/components/Header'
import Footer from '@/components/Footer'
import AlumniCard from '@/components/AlumniCard'

export default function Alumni() {
  const alumni = [
    {
      name: "Priya Verma",
      graduationYear: "2023",
      position: "Software Engineer",
      company: "Google",
      linkedin: "#",
    },
    {
      name: "Arjun Patel",
      graduationYear: "2022",
      position: "Senior Systems Engineer",
      company: "Microsoft Azure",
      linkedin: "#",
    },
    {
      name: "Shreya Nair",
      graduationYear: "2023",
      position: "Product Manager",
      company: "Amazon",
      linkedin: "#",
    },
    {
      name: "Rohit Sharma",
      graduationYear: "2022",
      position: "AI/ML Engineer",
      company: "OpenAI",
      linkedin: "#",
    },
    {
      name: "Divya Kapoor",
      graduationYear: "2024",
      position: "Data Analyst",
      company: "McKinsey & Company",
      linkedin: "#",
    },
    {
      name: "Vikram Singh",
      graduationYear: "2023",
      position: "Solutions Architect",
      company: "AWS",
      linkedin: "#",
    },
    {
      name: "Ananya Gupta",
      graduationYear: "2022",
      position: "Lead Developer",
      company: "Goldman Sachs",
      linkedin: "#",
    },
    {
      name: "Nikhil Kumar",
      graduationYear: "2024",
      position: "Associate Consultant",
      company: "Deloitte",
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Alumni</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Celebrating the achievements of our graduates across the globe.
            </p>
          </div>
        </section>

        {/* Alumni Grid */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title">Notable Alumni</h2>
            <p className="section-subtitle">Success stories from our branch</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {alumni.map((person) => (
                <AlumniCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20 bg-secondary">
          <div className="container-ieee">
            <h2 className="section-title">Alumni Success Stories</h2>
            <p className="section-subtitle">Inspiring journeys of our graduates</p>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-3">From Student to Tech Leader</h3>
                <p className="text-foreground mb-4">
                  "My time in IEEE BVIMR shaped my career. The networking, workshops, and mentorship I received helped me secure my first role at Google. Today, I lead a team of engineers working on cutting-edge cloud technologies."
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>- Priya Verma, Software Engineer at Google</strong>
                </p>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-3">Building a Career in AI</h3>
                <p className="text-foreground mb-4">
                  "The technical depth I gained through IEEE's AI workshops and competitions prepared me well. I'm now pursuing cutting-edge research in machine learning and artificial intelligence."
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>- Rohit Sharma, AI/ML Engineer at OpenAI</strong>
                </p>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-3">Entrepreneurial Journey</h3>
                <p className="text-foreground mb-4">
                  "The leadership skills and industry connections I made through IEEE were crucial in starting my own venture. The branch taught me the importance of innovation and collaboration."
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>- Nikhil Khanna, Startup Founder</strong>
                </p>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-3">Global Career Path</h3>
                <p className="text-foreground mb-4">
                  "IEEE opened doors to international opportunities. The global network and technical excellence promoted by the organization helped me transition to working with multinational companies."
                </p>
                <p className="text-sm text-muted-foreground">
                  <strong>- Shreya Nair, Product Manager at Amazon</strong>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stay Connected */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title text-center">Stay Connected</h2>
            <p className="section-subtitle text-center mb-8">Alumni Network and Mentorship</p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">👥</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Join the Alumni Network</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Connect with fellow alumni, share experiences, and stay updated on branch activities.
                </p>
                <button className="text-primary font-semibold hover:text-primary-foreground transition-colors">
                  Learn More
                </button>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Mentorship Program</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Mentor current students and give back to the community that shaped your career.
                </p>
                <button className="text-primary font-semibold hover:text-primary-foreground transition-colors">
                  Become a Mentor
                </button>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="font-bold text-lg text-foreground mb-2">Career Opportunities</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Access exclusive job opportunities posted by alumni working at top companies.
                </p>
                <button className="text-primary font-semibold hover:text-primary-foreground transition-colors">
                  Explore Jobs
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="ieee-blue text-white py-20">
          <div className="container-ieee text-center">
            <h2 className="text-4xl font-bold mb-4">Inspire Future Generations</h2>
            <p className="text-xl opacity-90 mb-8">
              Share your story and mentor the next generation of engineers
            </p>
            <button className="btn-ieee-primary bg-white text-primary hover:bg-gray-100">
              Share Your Story
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
