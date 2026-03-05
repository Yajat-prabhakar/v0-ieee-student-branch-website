'use client'

import { useEffect } from 'react'
import Image from 'next/image'
import { X, Mail, Linkedin, Github } from 'lucide-react'

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
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-card rounded-lg border border-border shadow-lg"
        onClick={(e) => e.stopPropagation()}
        style={{ animation: 'scale-in 0.3s ease' }}
      >
        {/* Banner */}
        <div className="h-32 bg-gradient-to-r from-primary via-primary/80 to-primary/60 relative overflow-hidden flex-shrink-0">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '32px 32px'
          }} />
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center text-white transition-colors z-10"
            aria-label="Close"
          >
            <X size={18} />
          </button>
        </div>

        {/* Profile Header */}
        <div className="px-6 md:px-8 pb-6 relative z-10">
          <div className="flex gap-5 items-end -mt-16 mb-6">
            {/* Avatar */}
            <div className="w-24 h-24 rounded-full border-4 border-primary overflow-hidden flex-shrink-0 shadow-lg bg-muted">
              {profile.image ? (
                <Image
                  src={profile.image}
                  alt={profile.name}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center">
                  <span className="text-3xl font-bold text-white">{profile.name.charAt(0)}</span>
                </div>
              )}
            </div>
            {/* Name and Role */}
            <div className="pb-2 flex-1 min-w-0">
              <h2 className="text-2xl font-bold text-foreground leading-tight">{profile.name}</h2>
              <p className="text-sm text-muted-foreground mt-1">{profile.role}</p>
              {profile.team && <p className="text-xs text-primary font-semibold mt-0.5">{profile.team}</p>}
            </div>
          </div>

          {/* Tags */}
          {profile.tags && profile.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {profile.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs font-medium px-3 py-1 bg-primary/10 border border-primary/30 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Divider */}
          <div className="h-px bg-border mb-6" />

          {/* About Section */}
          {profile.about && (
            <>
              <div className="mb-6">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2">
                  <span className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded" />
                  About
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{profile.about}</p>
              </div>
              <div className="h-px bg-border mb-6" />
            </>
          )}

          {/* Projects & Research */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 flex items-center gap-2">
              <span className="w-1 h-3 bg-gradient-to-b from-primary to-accent rounded" />
              Projects &amp; Research
            </h3>
            <div className="bg-secondary/50 border border-border rounded-lg p-6 text-center">
              <p className="text-muted-foreground font-medium">Coming Soon</p>
            </div>
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
