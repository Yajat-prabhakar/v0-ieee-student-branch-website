import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const activeGroups = [
  { name: 'Women in Engineering (WIE)', desc: 'Empowering women in STEM through networking, mentorship, and professional development. Our first officially recognized affinity group.', active: true },
]

const planned = [
  { name: 'Young Professionals (YP)', desc: 'Connecting early-career professionals with industry experts and career development programs.' },
  { name: 'Computer Society (CS)', desc: 'Promoting computing education, research, and professional development in CS and IT.' },
  { name: 'Power & Energy Society (PES)', desc: 'Advancing innovation in power systems, renewable energy, and sustainable technologies.' },
  { name: 'Communications Society (ComSoc)', desc: 'Fostering innovation in communication systems, signal processing, and information theory.' },
  { name: 'Robotics & Automation Society (RAS)', desc: 'Exploring robotics, automation, and intelligent systems to advance technology.' },
]

export default function AffinityGroups() {
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
            <h1 className="text-4xl md:text-6xl font-black mb-4 leading-tight">Affinity Groups</h1>
            <p className="text-xl text-white/70 max-w-2xl">
              Specialized communities within our branch. WIE is our first officially recognized affinity group, with more coming soon to serve different domains of engineering and technology.
            </p>
          </div>
        </section>

        {/* Active Affinity Groups */}
        <section className="py-20">
          <div className="container-ieee">
            <h2 className="section-title text-center">Our Affinity Group</h2>
            <p className="section-subtitle text-center">WIE is our first officially recognized affinity group</p>

            <div className="max-w-2xl mx-auto mb-16">
              {activeGroups.map((g) => (
                <div
                  key={g.name}
                  className="bg-card border-2 border-primary rounded-xl p-8 relative overflow-hidden group hover:shadow-lg transition-all duration-300"
                >
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    Active
                  </div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                    </svg>
                  </div>
                  <h3 className="font-bold text-xl text-foreground mb-2">{g.name}</h3>
                  <p className="text-muted-foreground leading-relaxed">{g.desc}</p>
                </div>
              ))}
            </div>

            {/* Planned Affinity Groups */}
            <h2 className="section-title text-center">Upcoming Affinity Groups</h2>
            <p className="section-subtitle text-center">More communities coming soon to our branch</p>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Want to Lead an Affinity Group?</h2>
            <p className="text-lg text-white/70 mb-8 max-w-xl mx-auto">
              We are looking for passionate students to help establish and lead our upcoming IEEE Affinity Groups.
            </p>
            <Link href="/contact" className="btn-ieee-primary">Express Your Interest</Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
