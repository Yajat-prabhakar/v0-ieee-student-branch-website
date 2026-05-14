'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { Mail, MapPin, Phone, Send } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' })
    alert('Thank you for your message! We will get back to you soon.')
  }

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <section className="max-w-6xl mx-auto px-6 pt-16 pb-12 grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <div>
              <span className="font-label-caps text-amber-700">Connect with us</span>
              <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mt-2">Contact Us</h1>
              <p className="text-lg text-slate-500 mt-4 max-w-lg">
                Get in touch with the IEEE BVIMR Student Branch leadership and team.
              </p>
            </div>
            <div className="grid gap-4">
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-primary">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Email</h3>
                    <p className="text-slate-500">ieeesb@university.edu</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-primary">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Location</h3>
                    <p className="text-slate-500">BVIMR Campus, New Delhi, India</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-slate-50 rounded-xl border border-slate-200 hover:shadow-lg transition-all">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-2 rounded-lg text-primary">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">Chapter Number</h3>
                    <p className="text-slate-500">IEEE Region 10 — Asia Pacific</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-amber-600"></div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="font-label-caps text-slate-400">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-primary"
                  placeholder="Your name"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="font-label-caps text-slate-400">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-primary"
                  placeholder="your@email.com"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="font-label-caps text-slate-400">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-transparent border-b border-slate-200 py-2 focus:outline-none focus:border-primary"
                  placeholder="What is this about?"
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="font-label-caps text-slate-400">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-transparent border-b border-slate-200 py-2 resize-none focus:outline-none focus:border-primary"
                  placeholder="Your message here..."
                ></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold inline-flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-12">
          <div className="w-full h-[320px] rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 border border-slate-200 bg-slate-100 flex items-center justify-center text-slate-400">
            BVIMR Campus Map
          </div>
        </section>

        <section className="max-w-6xl mx-auto px-6 pb-16">
          <div className="bg-slate-50 rounded-3xl p-8">
            <div className="text-center mb-8">
              <span className="font-label-caps text-amber-700">Knowledge Base</span>
              <h2 className="text-3xl font-semibold text-slate-900 mt-2">Frequently Asked Questions</h2>
            </div>
            <div className="max-w-3xl mx-auto space-y-4">
              {[
                {
                  q: 'How do I join IEEE BVIMR?',
                  a: 'You can join by becoming an IEEE member first, then registering with our student branch. Contact us at ieeesb@university.edu for more details.',
                },
                {
                  q: 'What events do you organize?',
                  a: 'We organize technical workshops, seminars, networking events, competitions, and career development sessions. Check our Events page for upcoming activities.',
                },
                {
                  q: 'Can non-members attend events?',
                  a: 'Most of our events are open to all students and professionals. Some exclusive member-only events may require membership. Contact us for specific event details.',
                },
                {
                  q: 'How can I become a volunteer?',
                  a: 'We welcome volunteers! Send us an email expressing your interest, and we\'ll get back to you with opportunities to contribute.',
                },
                {
                  q: 'How often do you meet?',
                  a: 'Our affinity group meetings and events are scheduled throughout the academic year. Subscribe to our newsletter to stay updated on meeting schedules.',
                },
              ].map((item) => (
                <div key={item.q} className="bg-white border border-slate-200 rounded-xl p-6">
                  <h3 className="font-semibold text-slate-900 mb-2">{item.q}</h3>
                  <p className="text-slate-500">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-primary text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold mb-4">Connect With Us</h2>
            <p className="text-lg text-white/80 mb-8">Follow us on social media for the latest updates and announcements</p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">LinkedIn</button>
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">Instagram</button>
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">Facebook</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
