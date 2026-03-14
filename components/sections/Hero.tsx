"use client"

/**
 * Hero - Full-viewport cinematic hero section
 * Clean editorial layout, no pricing mention
 */

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { GlowButton } from '@/components/ui/GlowButton'
import { JarvisHUD } from '@/components/effects/JarvisHUD'

export function Hero() {
  const handleScrollTo = (href: string) => {
    const element = document.querySelector(href)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden dark:bg-[#020B18] light:bg-[#F8FAFC]">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#020B18] dark:via-[#081422] dark:to-[#020B18] light:bg-gradient-to-b light:from-[#F8FAFC] light:via-white light:to-[#F8FAFC]" />

      {/* Geometric HUD - no radar */}
      <JarvisHUD />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12 sm:py-0">

        {/* Eyebrow badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-10 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase rounded-full border border-[#00D4FF]/20 bg-[#00D4FF]/5 text-[#00D4FF]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#00D4FF] animate-pulse" />
            Premium Web Development
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, delay: 0.4 }}
  className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight sm:leading-[1.1] md:leading-[1.0] tracking-tight"
  style={{ fontFamily: "var(--font-space), Space Grotesk, sans-serif" }}
>
  <span className="text-white">We Build </span>

  <br className="hidden sm:block" />

  <span
    className="text-primary dark:text-[#00D4FF] light:text-[#0084FF]"
    style={{
      textShadow: "0 0 10px rgba(0,212,255,0.25)",
    }}
  >
    Fast Websites
  </span>
</motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="mt-4 sm:mt-7 text-sm sm:text-base md:text-lg text-[#7BA8C4] max-w-lg mx-auto leading-relaxed"
        >
          Crafting high-performance digital experiences that convert visitors into loyal customers.
        </motion.p>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.85 }}
          className="mt-8 sm:mt-10 flex justify-center gap-6 sm:gap-10 md:gap-14 flex-wrap"
        >
          {[
            { val: '50+', label: 'Projects Shipped' },
            { val: '<2s', label: 'Load Time' },
            { val: '100%', label: 'Client Satisfaction' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-xl sm:text-2xl md:text-3xl font-bold text-white"
                style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
              >
                {stat.val}
              </div>
              <div className="mt-0.5 text-xs sm:text-sm text-[#4A7A96] tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.05 }}
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <GlowButton
            size="lg"
            onClick={() => handleScrollTo('#contact')}
            icon={<ArrowRight size={20} />}
          >
            Start Your Project
          </GlowButton>
          {/* <GlowButton
            variant="ghost"
            size="lg"
            onClick={() => handleScrollTo('#portfolio')}
          >
            See Our Work
          </GlowButton> */}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 rounded-full border-2 border-[#00D4FF]/25 flex justify-center pt-1.5"
        >
          <div className="w-1 h-1.5 bg-[#00D4FF]/40 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  )
}
