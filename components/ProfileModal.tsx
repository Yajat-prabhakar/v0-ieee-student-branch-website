'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Mail, Linkedin, Github } from 'lucide-react'

interface Project {
  title: string
  description: string
  tech?: string
  link?: string
}

interface ProfileModalProps {
  isOpen: boolean
  onClose: () => void
  profile: {
    name: string
    role: string
    team?: string
    about?: string
    image?: string
    email?: string
    linkedin?: string
    github?: string
    tags?: string[]
    projects?: Project[]
  }
}

export default function ProfileModal({ isOpen, onClose, profile }: ProfileModalProps) {
  useEffect(() => {
    if (!isOpen) return
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'auto'
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/40 backdrop-blur-sm"
      onClick={onClose}
      style={{ animation: 'fade-in 0.2s ease' }}
    >
      {/* Modal Card */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-lg border border-border shadow-lg [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:bg-secondary [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-primary/60 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:hover:bg-primary"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scale-in 0.3s ease', scrollbarWidth: 'thin', scrollbarColor: 'hsl(var(--primary) / 0.6) hsl(var(--secondary))' }}
      >
        {/* Banner with Image Background */}
        <div className="h-32 relative overflow-hidden flex-shrink-0">
          <Image
            src="/images/profile-banner.png"
            alt="Profile banner"
            fill
            className="object-cover object-top"
            priority
          />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/60 hover:bg-white/90 flex items-center justify-center text-foreground transition-colors z-10"
            aria-label="Close"
          >
            <X size={16} />
          </button>
        </div>

        {/* Profile Header */}
        <div className="px-6 md:px-8 pt-5 pb-5 flex items-center gap-4 border-b border-border">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-full border-2 border-primary overflow-hidden flex-shrink-0 shadow-sm bg-muted">
            {profile.image ? (
              <Image
                src={profile.image}
                alt={profile.name}
                width={64}
                height={64}
                className="w-full h-full object-cover object-top"
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                <span className="text-xl font-bold text-white">{profile.name.charAt(0)}</span>
              </div>
            )}
          </div>
          {/* Name and Role */}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-foreground leading-tight">{profile.name}</h2>
            <p className="text-sm text-muted-foreground mt-0.5">{profile.role}</p>
            {profile.team && <p className="text-xs text-primary font-semibold mt-0.5">{profile.team}</p>}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 md:px-8 pt-5 pb-6">

          {/* Tags */}
          {profile.tags && profile.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-5">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 bg-primary/10 border border-primary/20 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* About Section */}
          {profile.about && (
            <div className="mb-5">
              <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
                <span className="w-1 h-3 bg-primary rounded" />
                About
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{profile.about}</p>
            </div>
          )}

          {/* Projects & Research */}
          <div className={profile.about ? 'mt-5 pt-5 border-t border-border' : ''}>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
              <span className="w-1 h-3 bg-primary rounded" />
              Projects &amp; Research
            </h3>
            {profile.projects && profile.projects.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {profile.projects.map((proj, idx) => (
                  <div
                    key={idx}
                    className="bg-secondary/40 border border-border rounded-lg p-4 hover:border-primary/30 hover:bg-primary/5 transition-all"
                  >
                    <h4 className="text-sm font-semibold text-foreground mb-1 leading-snug">{proj.title}</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed mb-2">{proj.description}</p>
                    {proj.tech && (
                      <span className="text-[10px] font-medium px-2 py-0.5 bg-primary/10 text-primary border border-primary/20 rounded-full">
                        {proj.tech}
                      </span>
                    )}
                    {proj.link && (
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-xs text-primary hover:underline mt-2"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-secondary/40 border border-border rounded-lg p-5 text-center">
                <p className="text-sm text-muted-foreground">Coming Soon</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-border bg-secondary/30 px-6 md:px-8 py-4 flex items-center justify-between">
          <p className="text-xs text-muted-foreground">Connect with <span className="font-semibold text-foreground">{profile.name.split(' ')[0]}</span></p>
          <div className="flex gap-2">
            {profile.email && (
              <a
                href={`mailto:${profile.email}`}
                title="Email"
                className="w-9 h-9 rounded-md border border-border bg-card hover:bg-primary/10 hover:border-primary text-muted-foreground hover:text-primary flex items-center justify-center transition-all"
              >
                <Mail size={16} />
              </a>
            )}
            {profile.linkedin && profile.linkedin !== '#' && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn"
                className="w-9 h-9 rounded-md border border-border bg-card hover:bg-primary/10 hover:border-primary text-muted-foreground hover:text-primary flex items-center justify-center transition-all"
              >
                <Linkedin size={16} />
              </a>
            )}
            {profile.github && profile.github !== '#' && (
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                title="GitHub"
                className="w-9 h-9 rounded-md border border-border bg-card hover:bg-primary/10 hover:border-primary text-muted-foreground hover:text-primary flex items-center justify-center transition-all"
              >
                <Github size={16} />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
