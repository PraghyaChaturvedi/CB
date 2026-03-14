"use client"

/**
 * WhyChooseUs - Key differentiators and animated counter stats
 * Displays company values with count-up animations on scroll
 */

import { motion } from 'framer-motion'
import { Zap, Shield, Clock, HeadphonesIcon } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowCard } from '@/components/ui/GlowCard'
import { AnimatedCounter } from '@/components/ui/AnimatedCounter'

const differentiators = [
  {
    icon: Zap,
    title: 'Lightning Fast Delivery',
    description: 'We deliver projects on time, every time. Our agile methodology ensures rapid development without compromising quality.',
  },
  {
    icon: Shield,
    title: 'Battle-Tested Security',
    description: 'Every project is built with security-first principles, protecting your data and your customers.',
  },
  {
    icon: Clock,
    title: 'Future-Proof Technology',
    description: 'We use the latest technologies to ensure your website stays relevant and performant for years to come.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Dedicated Support',
    description: 'Our team is always available to help. Get expert support whenever you need it, day or night.',
  },
]

const stats = [
  { value: 50, suffix: '+', label: 'Projects Delivered' },
  { value: 100, suffix: '%', label: 'Client Satisfaction' },
  { value: 5, suffix: '+', label: 'Years Experience' },
  { value: 24, suffix: '/7', label: 'Support Available' },
]

export function WhyChooseUs() {
  return (
    <section className="relative py-12 sm:py-16 md:py-24 dark:bg-[#020B18] light:bg-[#F8FAFC]">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#020B18] dark:via-[#0A1628]/30 dark:to-[#020B18] light:bg-gradient-to-b light:from-[#F8FAFC] light:via-white light:to-[#F8FAFC]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Why Choose CB InfoTech"
          subtitle="Excellence through expertise and innovation."
        />

        {/* Differentiators Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16 md:mb-20">
          {differentiators.map((item, index) => (
            <GlowCard
              key={item.title}
              delay={index * 0.1}
              className="text-center group h-full"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="w-12 sm:w-14 h-12 sm:h-14 rounded-full bg-[#00D4FF]/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-[#00D4FF]/20 transition-colors"
              >
                <item.icon className="w-6 sm:w-7 h-6 sm:h-7 text-[#00D4FF]" />
              </motion.div>

              {/* Title */}
              <h3 
                className="text-base sm:text-lg font-semibold text-white mb-2"
                style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
              >
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#B8D4E8] leading-relaxed">
                {item.description}
              </p>
            </GlowCard>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-xl sm:rounded-2xl bg-[#0A1628]/60 backdrop-blur-sm border border-[#1A3A5C]/50 p-6 sm:p-8 md:p-12"
        >
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-r from-[#00D4FF]/5 via-transparent to-[#4A9EFF]/5" />
          
          <div className="relative grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#00D4FF] text-glow-cyan" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>
                  <AnimatedCounter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000}
                  />
                </div>
                <div className="mt-2 text-xs sm:text-sm md:text-base text-[#B8D4E8]">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
