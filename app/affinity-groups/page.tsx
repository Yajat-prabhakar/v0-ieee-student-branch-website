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

        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center md:text-left">
          <span className="font-label-caps text-amber-700 mb-3 block">SPECIAL INTEREST GROUPS</span>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4 max-w-3xl">Fostering Excellence Through Focused Communities.</h1>
          <p className="text-lg text-slate-500 max-w-2xl">
            Specialized communities within our branch. WIE is our first officially recognized affinity group, with more coming soon to serve different domains of engineering and technology.
          </p>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="overflow-hidden rounded-xl bg-white border border-slate-200 shadow-sm">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-amber-700">stars</span>
                  <span className="font-label-caps text-slate-400">PREMIUM AFFINITY GROUP</span>
                </div>
                <h2 className="text-3xl font-semibold text-primary mb-4">{activeGroups[0].name}</h2>
                <p className="text-slate-500 mb-6">{activeGroups[0].desc}</p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <strong className="text-slate-900 block">Mission</strong>
                      <span className="text-slate-500">To facilitate the recruitment and retention of women in technical disciplines globally.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary mt-1">check_circle</span>
                    <div>
                      <strong className="text-slate-900 block">Vision</strong>
                      <span className="text-slate-500">A vibrant community of IEEE women and men using their diverse talents to innovate for the benefit of humanity.</span>
                    </div>
                  </div>
                </div>
                <button className="inline-flex items-center gap-2 text-primary font-bold hover:underline">
                  Learn more about WIE Global
                  <span className="material-symbols-outlined">arrow_right_alt</span>
                </button>
              </div>
              <div className="lg:w-1/2 relative min-h-[320px] bg-slate-100 flex items-center justify-center text-slate-400">
                WIE Spotlight Image
                <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="flex flex-wrap justify-between items-end gap-4 mb-8">
            <div>
              <span className="font-label-caps text-amber-700 mb-2 block">EXPANDING HORIZONS</span>
              <h3 className="text-2xl font-semibold text-slate-900">Societies Coming Soon</h3>
            </div>
            <p className="text-sm text-slate-500">Building the future of technical chapters at BVIMR.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {planned.slice(0, 3).map((s) => (
              <div key={s.name} className="group relative overflow-hidden rounded-xl bg-slate-50 border border-slate-200 p-6 hover:shadow-xl hover:-translate-y-1 transition-all">
                <div className="absolute top-0 left-0 w-full h-1 bg-primary transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform"></div>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary">engineering</span>
                </div>
                <h4 className="text-lg font-semibold text-primary mb-2">{s.name}</h4>
                <p className="text-sm text-slate-500 mb-4">{s.desc}</p>
                <span className="px-3 py-1 bg-amber-100 text-amber-700 text-[0.7rem] font-bold rounded-full uppercase tracking-tighter">
                  Status: Planning
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-20">
          <div className="rounded-xl bg-gradient-to-br from-[#004976] to-[#00629B] p-10 text-center text-white shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 opacity-10">
              <span className="material-symbols-outlined text-[200px]">groups</span>
            </div>
            <h3 className="text-3xl font-semibold mb-4 relative z-10">Interested in starting a new chapter?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto relative z-10">
              We are always looking for passionate individuals to lead and grow our technical community. If you want to pioneer a new IEEE Society at BVIMR, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <button className="bg-white text-primary px-8 py-3 rounded-lg font-bold">Submit Proposal</button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white/10">Contact Faculty Advisor</button>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  )
}
