'use client'

import { useState } from 'react'

interface Testimonial {
  quote: string
  name: string
  role: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
}

export default function TestimonialCarousel({ testimonials }: TestimonialCarouselProps) {
  const [testimonialIndex, setTestimonialIndex] = useState(0)

  return (
    <div className="max-w-3xl mx-auto">
      <div className="card-ieee">
        <blockquote className="mb-6">
          <p className="text-xl md:text-2xl text-foreground italic leading-relaxed">
            "{testimonials[testimonialIndex].quote}"
          </p>
        </blockquote>

        <div className="border-t border-border pt-6 text-center">
          <p className="font-semibold text-foreground mb-1">{testimonials[testimonialIndex].name}</p>
          <p className="text-sm text-muted-foreground mb-6">{testimonials[testimonialIndex].role}</p>

          <div className="flex justify-center gap-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setTestimonialIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${
                  idx === testimonialIndex ? 'bg-primary w-8' : 'bg-border'
                }`}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
