import { Calendar, MapPin, ArrowRight } from 'lucide-react'

interface EventCardProps {
  date: string
  title: string
  description: string
  location: string
  cta: string
}

export default function EventCard({ date, title, description, location, cta }: EventCardProps) {
  return (
    <div className="card-ieee hover:shadow-lg transition-all duration-300 border-l-4 border-primary">
      {/* Date Badge */}
      <div className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full mb-4">
        {date}
      </div>

      {/* Content */}
      <h3 className="font-bold text-lg text-foreground mb-2">{title}</h3>
      <p className="text-sm text-muted-foreground mb-4">{description}</p>

      {/* Location */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
        <MapPin size={16} className="text-primary" />
        {location}
      </div>

      {/* CTA Button */}
      <button className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-200">
        {cta}
        <ArrowRight size={16} />
      </button>
    </div>
  )
}
