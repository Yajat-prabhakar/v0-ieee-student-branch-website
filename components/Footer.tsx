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
    <footer className="bg-secondary text-secondary-foreground border-t border-border">
      <div className="container-ieee py-12 md:py-16">
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
                className="h-12 w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Advancing Technology for Humanity. Part of IEEE Region 10 (Asia Pacific).
            </p>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200"
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
        <div className="border-t border-border py-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Copyright & Badge */}
          <div className="text-center md:text-left">
            <p className="text-sm text-muted-foreground mb-2">
              © {currentYear} IEEE BVIMR Student Branch. All Rights Reserved.
            </p>
            <div className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
              Part of IEEE Region 10
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                aria-label={label}
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
              >
                <Icon size={20} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
