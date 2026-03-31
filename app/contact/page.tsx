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
        {/* Hero Section */}
        <section className="bg-[#00629B] text-white py-20 md:py-24">
          <div className="container-ieee">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl opacity-90 max-w-2xl">
              Get in touch with the IEEE BVIMR Student Branch leadership and team.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20">
          <div className="container-ieee">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Contact Info Cards */}
              <div className="card-ieee text-center">
                <div className="text-4xl text-primary mb-4">
                  <Mail className="mx-auto" size={32} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Email</h3>
                <p className="text-foreground">ieeesb@university.edu</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Send us your queries and feedback
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl text-primary mb-4">
                  <MapPin className="mx-auto" size={32} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Location</h3>
                <p className="text-foreground">BVIMR Campus</p>
                <p className="text-sm text-muted-foreground mt-2">
                  New Delhi, India
                </p>
              </div>

              <div className="card-ieee text-center">
                <div className="text-4xl text-primary mb-4">
                  <Phone className="mx-auto" size={32} />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Chapter Number</h3>
                <p className="text-foreground">IEEE Region 10</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Asia Pacific Region
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-secondary">
          <div className="container-ieee max-w-2xl">
            <h2 className="section-title text-center">Send us a Message</h2>
            <p className="section-subtitle text-center mb-12">
              We'd love to hear from you. Fill out the form below and we'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="card-ieee space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="What is this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-border rounded-lg bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="btn-ieee-primary w-full inline-flex items-center justify-center gap-2"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="container-ieee max-w-2xl">
            <h2 className="section-title text-center">Frequently Asked Questions</h2>

            <div className="space-y-4">
              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-2">How do I join IEEE BVIMR?</h3>
                <p className="text-foreground">
                  You can join by becoming an IEEE member first, then registering with our student branch. Contact us at ieeesb@university.edu for more details.
                </p>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-2">What events do you organize?</h3>
                <p className="text-foreground">
                  We organize technical workshops, seminars, networking events, competitions, and career development sessions. Check our Events page for upcoming activities.
                </p>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-2">Can non-members attend events?</h3>
                <p className="text-foreground">
                  Most of our events are open to all students and professionals. Some exclusive member-only events may require membership. Contact us for specific event details.
                </p>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-2">How can I become a volunteer?</h3>
                <p className="text-foreground">
                  We welcome volunteers! Send us an email expressing your interest, and we'll get back to you with opportunities to contribute.
                </p>
              </div>

              <div className="card-ieee">
                <h3 className="font-bold text-lg text-foreground mb-2">How often do you meet?</h3>
                <p className="text-foreground">
                  Our affinity group meetings and events are scheduled throughout the academic year. Subscribe to our newsletter to stay updated on meeting schedules.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#00629B] text-white py-20">
          <div className="container-ieee text-center">
            <h2 className="text-4xl font-bold mb-4">Connect With Us</h2>
            <p className="text-xl opacity-90 mb-8">
              Follow us on social media for the latest updates and announcements
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                LinkedIn
              </button>
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Instagram
              </button>
              <button className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                Facebook
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
