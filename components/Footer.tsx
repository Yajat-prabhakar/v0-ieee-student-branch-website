'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram, Facebook, Twitter, Github, Mail, Globe } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'About': [
      { label: 'About Branch', href: '/about' },
      { label: 'Leadership', href: '/about' },
      { label: 'Council', href: '/council' },
    ],
    'Explore': [
      { label: 'Affinity Groups', href: '/affinity-groups' },
      { label: 'Events', href: '/events' },
      { label: 'Alumni', href: '/alumni' },
    ],
    'Contact': [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Email: ieeesb@university.edu', href: 'mailto:ieeesb@university.edu' },
    ],
  }

  const socialLinks = [
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
  ]

  return (
    <footer className="bg-slate-50 border-t border-slate-200">
      <div className="container-ieee py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/ieee-bvimr-logo.png"
                alt="IEEE BVIMR Student Branch"
                width={180}
                height={42}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed mb-4">
              The student branch of IEEE at BVIMR, New Delhi, committed to technical excellence and fostering innovation among students.
            </p>
            <div className="flex items-center gap-3 text-slate-400">
              <Globe size={18} />
              <Mail size={18} />
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-sm font-bold text-slate-900 mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-500 hover:text-sky-700 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-slate-200 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-xs text-slate-500">
            © {currentYear} IEEE Student Branch BVIMR. Part of IEEE Region 10. All Rights Reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-slate-400 hover:text-sky-700 transition-colors"
              >
                <Icon size={18} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
