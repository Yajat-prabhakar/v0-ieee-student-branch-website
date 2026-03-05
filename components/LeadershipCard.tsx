import Image from 'next/image'
import Link from 'next/link'

interface LeadershipCardProps {
  name: string
  role: string
  image?: string
  linkedin?: string
  onViewProfile?: () => void
}

export default function LeadershipCard({ name, role, image, linkedin, onViewProfile }: LeadershipCardProps) {
  return (
    <div 
      onClick={onViewProfile}
      className={`card-ieee text-center hover:shadow-lg transition-all duration-300 ${onViewProfile ? 'cursor-pointer' : ''}`}
    >
      {/* Circular Image Placeholder */}
      <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center">
            <span className="text-2xl font-bold text-white opacity-50">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-bold text-lg text-foreground mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4">{role}</p>

      {/* LinkedIn Link */}
      {linkedin && (
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:text-primary-foreground transition-colors duration-200"
          aria-label={`${name}'s LinkedIn profile`}
          onClick={(e) => e.stopPropagation()}
        >
          <svg className="w-5 h-5 mx-auto" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </Link>
      )}
    </div>
  )
}
