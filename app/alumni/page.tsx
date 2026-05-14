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
        <section className="relative pt-16 pb-12 overflow-hidden">
          <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="font-label-caps text-amber-700 mb-4 block">Legacy of Excellence</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Alumni. Our Pride.</h1>
              <p className="text-lg text-slate-500 max-w-xl mb-6">
                Celebrating the achievements of our graduates across the globe.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg">Join Alumni Network</button>
                <button className="border border-slate-300 text-slate-700 px-6 py-3 rounded-xl font-semibold">Mentorship Portal</button>
              </div>
            </div>
            <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-slate-200 flex items-center justify-center text-slate-400">
              Alumni Gathering
              <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-100">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-3">Trailblazers in Tech</h2>
              <p className="text-slate-500 max-w-2xl mx-auto">Success stories from our branch</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {alumni.map((person) => (
                <AlumniCard key={person.name} {...person} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group bg-primary p-8 rounded-2xl text-white flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">👥</div>
                  <h3 className="text-2xl font-semibold mb-3">Join the Alumni Network</h3>
                  <p className="text-white/80">Connect with fellow alumni, share experiences, and stay updated on branch activities.</p>
                </div>
                <button className="inline-flex items-center gap-2 font-bold mt-6">Learn More →</button>
              </div>
              <div className="group bg-amber-700 p-8 rounded-2xl text-white flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-6">🤝</div>
                  <h3 className="text-2xl font-semibold mb-3">Mentorship Program</h3>
                  <p className="text-white/80">Mentor current students and give back to the community that shaped your career.</p>
                </div>
                <button className="inline-flex items-center gap-2 font-bold mt-6">Become a Mentor →</button>
              </div>
              <div className="group bg-white border border-slate-200 p-8 rounded-2xl text-slate-900 flex flex-col justify-between min-h-[320px]">
                <div>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">💼</div>
                  <h3 className="text-2xl font-semibold mb-3">Career Opportunities</h3>
                  <p className="text-slate-500">Access exclusive job opportunities posted by alumni working at top companies.</p>
                </div>
                <button className="inline-flex items-center gap-2 font-bold text-primary mt-6">Explore Jobs →</button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-slate-900 text-white">
          <div className="max-w-5xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative">
                <span className="material-symbols-outlined text-amber-200 text-5xl absolute -top-4 -left-4 opacity-20">format_quote</span>
                <p className="text-xl italic mb-6">"My time in IEEE BVIMR shaped my career. The networking, workshops, and mentorship I received helped me secure my first role at Google."</p>
                <p className="text-sm text-white/70"><strong>- Priya Verma, Software Engineer at Google</strong></p>
              </div>
              <div className="bg-white/5 border border-white/10 p-8 rounded-3xl relative">
                <span className="material-symbols-outlined text-blue-200 text-5xl absolute -top-4 -left-4 opacity-20">format_quote</span>
                <p className="text-xl italic mb-6">"The technical depth I gained through IEEE's AI workshops and competitions prepared me well. I'm now pursuing cutting-edge research in machine learning."</p>
                <p className="text-sm text-white/70"><strong>- Rohit Sharma, AI/ML Engineer at OpenAI</strong></p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Inspire Future Generations</h2>
            <p className="text-lg text-white/80 mb-8">Share your story and mentor the next generation of engineers</p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-bold">Share Your Story</button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
