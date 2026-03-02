import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface SocietyCardProps {
  name: string
  description: string
  icon?: string
  color: string
}

export default function SocietyCard({ name, description, icon, color }: SocietyCardProps) {
  return (
    <div className="card-ieee hover:shadow-lg transition-all duration-300 flex flex-col h-full">
      {/* Icon/Color Header */}
      <div className={`w-full h-32 rounded-t-lg ${color} flex items-center justify-center mb-4 -mx-6 -mt-6 mb-4`}>
        {icon ? (
          <Image
            src={icon}
            alt={name}
            width={48}
            height={48}
          />
        ) : (
          <div className="text-5xl opacity-20">{name.charAt(0)}</div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-bold text-xl text-foreground mb-2">{name}</h3>
      <p className="text-sm text-muted-foreground mb-4 flex-grow">{description}</p>

      {/* CTA Button */}
      <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
        Learn More
        <ArrowRight size={18} />
      </button>
    </div>
  )
}
