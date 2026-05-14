'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Menu, X, Search, Globe } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/council', label: 'Council' },
    { href: '/affinity-groups', label: 'Affinity Groups' },
    { href: '/events', label: 'Events' },
    { href: '/alumni', label: 'Alumni' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-500">
      <div className="container-ieee">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
            <Image
              src="/ieee-bvimr-logo.png"
              alt="IEEE BVIMR Student Branch"
              width={200}
              height={50}
              className="h-12 w-auto object-contain"
              priority
            />
            <span className="hidden lg:inline text-lg font-black text-sky-800 tracking-tighter">IEEE BVIMR</span>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-sky-700 transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <button
              type="button"
              className="p-2 text-slate-600 hover:text-sky-700 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Change language"
            >
              <Globe size={18} />
            </button>
            <button
              type="button"
              className="p-2 text-slate-600 hover:text-sky-700 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="Search"
            >
              <Search size={18} />
            </button>
            <Link
              href="/contact"
              className="bg-primary text-white px-5 py-2 rounded-full text-xs font-semibold tracking-widest hover:bg-primary/90 transition-all"
            >
              JOIN US
            </Link>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 hover:bg-slate-100 rounded-lg transition-all"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={22} className="text-slate-700" /> : <Menu size={22} className="text-slate-700" />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-slate-200 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block py-3 px-4 rounded-lg text-sm font-medium text-slate-700 hover:text-sky-700 hover:bg-slate-50 transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 flex gap-2">
              <Link
                href="/contact"
                className="flex-1 text-center bg-primary text-white py-2 rounded-full text-xs font-semibold tracking-widest"
              >
                JOIN US
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
