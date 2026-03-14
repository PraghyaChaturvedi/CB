"use client"

/**
 * Testimonials - Auto-playing carousel of client testimonials
 * Dark card design with star ratings and glow effects
 */

import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'

const testimonials = [
  {
    quote: "CB InfoTech transformed our outdated website into a modern, high-converting platform. Our online sales increased by 300% within three months.",
    name: "Rahul Sharma",
    company: "TechStart India",
    rating: 5,
  },
  {
    quote: "The team delivered our e-commerce platform ahead of schedule with exceptional quality. Their attention to detail and technical expertise is unmatched.",
    name: "Priya Patel",
    company: "Fashion Forward",
    rating: 5,
  },
  {
    quote: "Working with CB InfoTech was a game-changer for our business. They built a CRM that perfectly fits our workflow and has saved us countless hours.",
    name: "Amit Kumar",
    company: "RealEstate Pro",
    rating: 5,
  },
  {
    quote: "Professional, responsive, and incredibly talented. CB InfoTech delivered beyond our expectations. Highly recommend for any web development needs.",
    name: "Sneha Reddy",
    company: "HealthFirst Clinic",
    rating: 5,
  },
  {
    quote: "The best investment we made for our business. Our new website has generated 5x more leads than before. The team truly understands digital success.",
    name: "Vikram Singh",
    company: "ConsultPro Services",
    rating: 5,
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }, [])

  useEffect(() => {
    if (!isAutoPlaying) return
    const timer = setInterval(next, 5000)
    return () => clearInterval(timer)
  }, [isAutoPlaying, next])

  return (
    <section className="relative py-12 sm:py-16 md:py-24 overflow-hidden dark:bg-[#020B18] light:bg-[#F8FAFC]">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#020B18] dark:via-[#0A1628]/30 dark:to-[#020B18] light:bg-gradient-to-b light:from-[#F8FAFC] light:via-white light:to-[#F8FAFC]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What Clients Say"
          subtitle="Real feedback from businesses we've helped."
        />

        {/* Carousel */}
        <div 
          className="relative"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="relative rounded-xl sm:rounded-2xl bg-[#0A1628]/80 backdrop-blur-sm border border-[#1A3A5C]/50 p-5 sm:p-8 md:p-12"
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 sm:top-6 sm:right-6 opacity-20">
                <Quote size={36} className="sm:w-12 sm:h-12 text-[#00D4FF]" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4 sm:mb-6">
                {Array.from({ length: testimonials[current].rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="sm:w-5 sm:h-5 fill-[#00D4FF] text-[#00D4FF]"
                  />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-base sm:text-lg md:text-xl lg:text-2xl text-white leading-relaxed mb-6 sm:mb-8">
                &ldquo;{testimonials[current].quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 sm:w-12 h-10 sm:h-12 rounded-full bg-gradient-to-br from-[#00D4FF] to-[#4A9EFF] flex items-center justify-center flex-shrink-0">
                  <span 
                    className="text-base sm:text-lg font-bold text-[#020B18]"
                    style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
                  >
                    {testimonials[current].name.charAt(0)}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="font-semibold text-white text-sm sm:text-base truncate">
                    {testimonials[current].name}
                  </div>
                  <div className="text-xs sm:text-sm text-[#7BC8FF] truncate">
                    {testimonials[current].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center gap-2 sm:gap-4 mt-6 sm:mt-8">
            <button
              onClick={prev}
              className="p-2 sm:p-3 rounded-full bg-[#0A1628] border border-[#1A3A5C]/50 text-[#00D4FF] hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/50 transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft size={20} className="sm:w-6 sm:h-6" />
            </button>
            
            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`rounded-full transition-all ${
                    index === current 
                      ? 'w-6 sm:w-8 h-2 bg-[#00D4FF]' 
                      : 'w-2 h-2 bg-[#1A3A5C] hover:bg-[#00D4FF]/50'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 sm:p-3 rounded-full bg-[#0A1628] border border-[#1A3A5C]/50 text-[#00D4FF] hover:bg-[#00D4FF]/10 hover:border-[#00D4FF]/50 transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight size={20} className="sm:w-6 sm:h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
