import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface LeadershipCardProps {
  name: string
  role: string
  image?: string
  banner?: string
  objectPosition?: string
  linkedin?: string
  github?: string
  email?: string
  about?: string
  onViewProfile?: () => void
}

export default function LeadershipCard({ name, role, image, objectPosition, linkedin, github, email, about, onViewProfile }: LeadershipCardProps) {
  return (
    <div 
      onClick={onViewProfile}
      className={`card-ieee text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 relative group/card ${onViewProfile ? 'cursor-pointer' : ''}`}
    >
      {/* Circular Image Placeholder */}
      <div className="w-32 h-32 mb-6 rounded-full bg-muted flex items-center justify-center overflow-hidden border-4 border-white/20 shadow-lg group-hover/card:scale-105 transition-transform duration-500">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
            style={{ objectPosition: objectPosition ?? 'center' }}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-[#00629B] to-[#002147] flex items-center justify-center">
            <span className="text-3xl font-bold text-white opacity-50">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Basic Info */}
      <div className="mb-4">
        <h3 className="font-bold text-xl text-foreground mb-1 group-hover/card:text-primary transition-colors">{name}</h3>
        <p className="text-sm font-semibold text-primary uppercase tracking-wider">{role}</p>
      </div>

      {/* Bio Paragraph */}
      {about && (
        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed px-2">
          {about}
        </p>
      )}

      {/* Thin Divider Line */}
      <div className="w-full h-[1px] bg-border/40 mb-6" />

      {/* Bottom Actions Area */}
      <div className="w-full flex flex-col items-center gap-6 mt-auto">
        {/* Social Links with Tooltips */}
        <div className="flex items-center justify-center gap-3">
          {email && email !== '#' && (
            <div className="relative group/tooltip">
              <a
                href={`mailto:${email}`}
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#00629B]/10 text-[#00629B] hover:bg-[#00629B] hover:text-white transition-all duration-300"
                aria-label={`Email ${name}`}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4.5 h-4.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[10px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                Email
              </span>
            </div>
          )}
          {linkedin && linkedin !== '#' && (
            <div className="relative group/tooltip">
              <Link
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-[#0077B5]/10 text-[#0077B5] hover:bg-[#0077B5] hover:text-white transition-all duration-300"
                aria-label={`${name}'s LinkedIn profile`}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[10px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                LinkedIn
              </span>
            </div>
          )}
          {github && github !== '#' && (
            <div className="relative group/tooltip">
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center rounded-lg bg-foreground/10 text-foreground hover:bg-foreground hover:text-background transition-all duration-300"
                aria-label={`${name}'s GitHub profile`}
                onClick={(e) => e.stopPropagation()}
              >
                <svg className="w-4.5 h-4.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2 py-1 bg-foreground text-background text-[10px] font-bold rounded opacity-0 group-hover/tooltip:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                GitHub
              </span>
            </div>
          )}
        </div>

        {/* Action Button */}
        <button 
          onClick={(e) => {
            e.stopPropagation();
            onViewProfile?.();
          }}
          className="group/btn w-full py-3 bg-secondary hover:bg-primary hover:text-white rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2"
        >
          View Profile
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:rotate-[-45deg] group-hover/btn:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
