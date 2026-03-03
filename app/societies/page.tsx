import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const planned = [
  { name: 'Women in Engineering (WIE)', desc: 'Empowering women in STEM through networking, mentorship, and professional development.' },
  { name: 'Young Professionals (YP)', desc: 'Connecting early-career professionals with industry experts and career development programs.' },
  { name: 'Power & Energy Society (PES)', desc: 'Advancing innovation in power systems, renewable energy, and sustainable technologies.' },
  { name: 'Computer Society (CS)', desc: 'Promoting computing education, research, and professional development in CS and IT.' },
  { name: 'Communications Society (ComSoc)', desc: 'Fostering innovation in communication systems, signal processing, and information theory.' },
  { name: 'Robotics & Automation Society (RAS)', desc: 'Exploring robotics, automation, and intelligent systems to advance technology.' },
]

export default function Societies() {
  return (
    <>
      <Header />
      <main className="min-h-screen">

        {/* Hero */}
        <section className="bg-[#002147] text-white py-20 md:py-28 relative overflow-hidden">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,98,155,0.45) 0%, transparent 70%)' }}
          />
          <div className="container-ieee relative z-10">
            <div className="inline-block mb-4 px-4 py-1.5 bg-white/15 border border-white/20 rounded-full text-xs font-bold uppercase tracking-widest text-white/80">
              IEEE BVIMR
            </div>
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">IEEE Societies</h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Specialized technical communities are coming to our branch. We are setting up dedicated societies to serve different domains of engineering and technology.
            </p>
          </div>
        </section>

        {/* Coming Soon Banner */}
        <section className="py-20">
          <div className="container-ieee">
            <div className="relative rounded-2xl overflow-hidden border border-border mb-16">
              <div className="absolute inset-0 bg-[#002147]" />
              <div
                className="absolute inset-0"
                style={{ background: 'radial-gradient(ellipse 70% 80% at 50% 50%, rgba(0,98,155,0.5) 0%, transparent 70%)' }}
              />
              <div className="relative z-10 flex flex-col items-center justify-center py-20 px-6 text-center text-white">
                <div className="w-20 h-20 rounded-full border-2 border-white/20 flex items-center justify-center mb-6 bg-white/10 backdrop-blur-sm">
                  <svg className="w-10 h-10 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h2 className="text-4xl md:text-5xl font-black mb-4">Coming Soon</h2>
                <p className="text-lg text-white/70 max-w-2xl mb-8">
                  We are actively working on establishing IEEE Societies within our branch. Each society will have its own events, workshops, and leadership structure. Stay tuned for updates!
                </p>
                <Link href="/contact" className="btn-ieee-primary">Get Notified When We Launch</Link>
              </div>
            </div>

            {/* Planned Societies Preview */}
            <h2 className="section-title text-center">Planned Societies</h2>
            <p className="section-subtitle text-center">Here is a preview of the societies we are setting up</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planned.map((s, i) => (
                <div
                  key={s.name}
                  className="bg-card border border-border rounded-xl p-6 opacity-70 relative overflow-hidden group hover:opacity-90 transition-opacity duration-300"
                >
                  {/* "Coming Soon" ribbon */}
                  <div className="absolute top-3 right-3 bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-full border border-primary/20">
                    Coming Soon
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <span className="text-primary font-black text-sm">{String(i + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="font-bold text-foreground mb-2 pr-16">{s.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#002147] text-white py-20">
          <div className="container-ieee text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Lead a Society?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              We are looking for passionate students to help establish and lead our upcoming IEEE Societies.
            </p>
            <Link href="/contact" className="btn-ieee-primary">Express Your Interest</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
