'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Linkedin, Instagram, Facebook, Twitter, Github } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    'About': [
      { label: 'About Branch', href: '/about' },
      { label: 'Leadership', href: '/about' },
      { label: 'Council', href: '/council' },
    ],
    'Explore': [
      { label: 'Societies', href: '/societies' },
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
    <footer className="bg-[#001830] text-white border-t-0 relative overflow-hidden">
      {/* Gradient top border */}
      <div
        className="h-[3px] w-full"
        style={{
          background: 'linear-gradient(90deg, #002147 0%, #00629B 30%, #00B5E2 50%, #00629B 70%, #002147 100%)',
        }}
      />
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 bg-dots pointer-events-none"
        style={{ opacity: 0.07 }}
      />

      <div className="container-ieee py-12 md:py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="inline-block mb-4 hover:opacity-80 transition-opacity">
              <Image
                src="/ieee-bvimr-logo.png"
                alt="IEEE BVIMR Student Branch"
                width={200}
                height={50}
                className="h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm text-white/50 leading-relaxed">
              Advancing Technology for Humanity. Part of IEEE Region 10 (Asia Pacific).
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-white mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/50 hover:text-[#00B5E2] transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 py-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Badge */}
          <div className="text-center md:text-left">
            <p className="text-sm text-white/40 mb-2">
              © {currentYear} IEEE BVIMR Student Branch. All Rights Reserved.
            </p>
            <div className="inline-block bg-[#00629B] text-white text-xs font-semibold px-3 py-1 rounded-full">
              Part of IEEE Region 10
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-[#00B5E2] flex items-center justify-center text-white/60 hover:text-white transition-all duration-200 hover:scale-110"
              >
                <Icon size={17} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
