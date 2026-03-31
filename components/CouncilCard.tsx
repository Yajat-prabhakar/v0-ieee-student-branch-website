import Image from 'next/image'

interface CouncilCardProps {
  name: string
  role: string
  image?: string
  onViewProfile?: () => void
}

export default function CouncilCard({ name, role, image, onViewProfile }: CouncilCardProps) {
  return (
    <div 
      onClick={onViewProfile}
      className={`card-ieee hover:shadow-lg transition-all duration-300 text-center ${onViewProfile ? 'cursor-pointer' : ''}`}
    >
      {/* Image Placeholder */}
      <div className="w-28 h-28 mx-auto mb-4 rounded-lg bg-muted flex items-center justify-center overflow-hidden">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={112}
            height={112}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary to-primary-foreground flex items-center justify-center">
            <span className="text-2xl font-bold text-white opacity-50">{name.charAt(0)}</span>
          </div>
        )}
      </div>

      {/* Content */}
      <h3 className="font-bold text-base text-foreground mb-1">{name}</h3>
      <p className="text-xs text-muted-foreground">{role}</p>
    </div>
  )
}
