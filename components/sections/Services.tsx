"use client"

/**
 * Services - Display all services as glowing dark cards
 * Animated entry with staggered reveal on scroll
 */

import { motion } from 'framer-motion'
import { 
  Globe, 
  ShoppingCart, 
  Code2, 
  Database, 
  RefreshCw, 
  Wrench,
  Search,
  Server
} from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowCard } from '@/components/ui/GlowCard'

const services = [
  {
    icon: Globe,
    title: 'Business Websites',
    description: 'Professional, responsive websites that establish your digital presence and convert visitors into customers.',
  },
  {
    icon: ShoppingCart,
    title: 'E-commerce Websites',
    description: 'Full-featured online stores with secure payments, inventory management, and seamless checkout experiences.',
  },
  {
    icon: Code2,
    title: 'Custom Web Applications',
    description: 'Tailored web applications built to solve your unique business challenges with cutting-edge technology.',
  },
  {
    icon: Database,
    title: 'CRM & Portals',
    description: 'Custom CRM systems and client portals that streamline operations and enhance customer relationships.',
  },
  {
    icon: RefreshCw,
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, high-performing digital experiences.',
  },
  {
    icon: Wrench,
    title: 'Maintenance & AMC',
    description: 'Ongoing support, updates, and maintenance to keep your website secure and running smoothly.',
  },
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Data-driven SEO strategies that improve visibility and drive organic traffic to your website.',
  },
  {
    icon: Server,
    title: 'Server Setup & Management',
    description: 'Professional server configuration, deployment, and management for optimal performance.',
  },
]

export function Services() {
  return (
    <section id="services" className="relative py-12 sm:py-16 md:py-24 dark:bg-[#020B18] light:bg-[#F8FAFC]">
      {/* Background gradient */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#020B18] dark:via-[#0A1628]/50 dark:to-[#020B18] light:bg-gradient-to-b light:from-[#F8FAFC] light:via-white light:to-[#F8FAFC]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="What We Build"
          subtitle="Web development services tailored to your needs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <GlowCard
              key={service.title}
              delay={index * 0.1}
              className="group h-full"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-lg bg-[#00D4FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#00D4FF]/20 transition-colors"
              >
                <service.icon className="w-5 sm:w-6 h-5 sm:h-6 text-[#00D4FF]" />
              </motion.div>

              {/* Title */}
              <h3 
                className="text-base sm:text-lg font-semibold text-white mb-2 group-hover:text-[#00D4FF] transition-colors"
                style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
              >
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#B8D4E8] leading-relaxed">
                {service.description}
              </p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  )
}
