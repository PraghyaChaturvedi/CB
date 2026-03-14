"use client"

/**
 * SectionHeading - Reusable section title + subtitle block
 * Consistent styling across all page sections
 */

import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center' | 'right'
  className?: string
  titleClassName?: string
  subtitleClassName?: string
}

export function SectionHeading({
  title,
  subtitle,
  align = 'center',
  className,
  titleClassName,
  subtitleClassName,
}: SectionHeadingProps) {
  const alignClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      className={cn('mb-8', alignClasses[align], className)}
    >
      <h2
        className={cn(
          'text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight',
          'text-white',
          titleClassName
        )}
        style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            'mt-2 sm:mt-3 text-xs sm:text-sm md:text-base lg:text-lg text-[#7BC8FF] max-w-2xl',
            align === 'center' && 'mx-auto',
            subtitleClassName
          )}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  )
}
