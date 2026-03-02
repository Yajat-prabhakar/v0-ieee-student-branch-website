import Image from 'next/image'
import Link from 'next/link'
import { Linkedin } from 'lucide-react'

interface AlumniCardProps {
  name: string
  graduationYear: string
  position: string
  company: string
  image?: string
  linkedin?: string
}

export default function AlumniCard({ name, graduationYear, position, company, image, linkedin }: AlumniCardProps) {
  return (
    <div className="card-ieee hover:shadow-lg transition-all duration-300 text-center">
      {/* Image Placeholder */}
      <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center">
            <span className="text-xl font-bold text-white opacity-50">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-bold text-lg text-foreground mb-1">{name}</h3>
      <p className="text-xs text-muted-foreground mb-3">Class of {graduationYear}</p>

      {/* Current Role */}
      <div className="mb-4">
        <p className="text-sm font-semibold text-foreground">{position}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>

      {/* LinkedIn Link */}
      {linkedin && (
        <Link
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary-foreground transition-colors duration-200"
        >
          <Linkedin size={16} />
          <span className="text-xs font-semibold">LinkedIn</span>
        </Link>
      )}
    </div>
  )
}
