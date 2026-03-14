"use client"

/**
 * TechStack - Animated infinite horizontal marquee of technology logos
 * Smooth infinite scroll animation showcasing tech expertise
 */

import { motion } from 'framer-motion'
import { SectionHeading } from '@/components/ui/SectionHeading'

const technologies = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#FFFFFF' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Express', color: '#FFFFFF' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Tailwind CSS', color: '#06B6D4' },
  { name: 'PostgreSQL', color: '#4169E1' },
  { name: 'Redis', color: '#DC382D' },
  { name: 'AWS', color: '#FF9900' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'GraphQL', color: '#E10098' },
]

function TechLogo({ name, color }: { name: string; color: string }) {
  return (
    <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-6 py-2 sm:py-3 mx-2 sm:mx-4 rounded-lg dark:bg-[#0A1628]/50 light:bg-white dark:border dark:border-[#1A3A5C]/30 light:border light:border-[#E2E8F0] dark:hover:border-[#00D4FF]/30 light:hover:border-[#0084FF]/30 transition-colors">
      <div 
        className="w-2 sm:w-3 h-2 sm:h-3 rounded-full"
        style={{ backgroundColor: color, boxShadow: `0 0 10px ${color}40` }}
      />
      <span className="font-mono text-xs sm:text-sm dark:text-[#B8D4E8] light:text-[#475569] whitespace-nowrap">{name}</span>
    </div>
  )
}

export function TechStack() {
  // Double the array for seamless infinite scroll
  const doubledTech = [...technologies, ...technologies]

  return (
    <section className="relative py-10 sm:py-12 md:py-16 overflow-hidden dark:bg-[#020B18] light:bg-[#F8FAFC]">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-[#020B18] light:bg-[#F8FAFC]" />
      
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 dark:bg-gradient-to-r dark:from-[#020B18] light:bg-gradient-to-r light:from-[#F8FAFC] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 dark:bg-gradient-to-l dark:from-[#020B18] light:bg-gradient-to-l light:from-[#F8FAFC] to-transparent z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-xs sm:text-sm font-mono uppercase tracking-widest text-[#00D4FF] mb-2 sm:mb-4"
        >
          Our Tech Stack
        </motion.p>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-center text-xl sm:text-2xl md:text-3xl font-bold text-white"
          style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
        >
          Built With Industry-Leading Technologies
        </motion.h3>
      </div>

      {/* Marquee container */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex animate-marquee"
        >
          {doubledTech.map((tech, index) => (
            <TechLogo key={`${tech.name}-${index}`} {...tech} />
          ))}
        </motion.div>
      </div>

      {/* Second row - reverse direction */}
      <div className="relative mt-4">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex animate-marquee"
          style={{ animationDirection: 'reverse', animationDuration: '40s' }}
        >
          {[...doubledTech].reverse().map((tech, index) => (
            <TechLogo key={`${tech.name}-reverse-${index}`} {...tech} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
