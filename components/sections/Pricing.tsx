"use client"

/**
 * Pricing - Three-tier pricing cards with glass morphism design
 * Professional tier highlighted as most popular
 * Fully responsive across mobile, tablet, and desktop
 */

import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'
import { SectionHeading } from '@/components/ui/SectionHeading'
import { GlowButton } from '@/components/ui/GlowButton'

const pricingTiers = [
  {
    name: 'Starter',
    price: '₹12,999',
    period: '/project',
    description: 'Perfect for small businesses and portfolios',
    features: [
      'Responsive Website (5-8 Pages)',
      'Mobile-First Design',
      'Contact Form & CMS Basics',
      'Free Domain 1st Year',
      'Basic SEO Setup',
      '2 Months Support',
      'SSL Certificate',
      'Performance Optimization',
    ],
    popular: false,
    note: 'Best for getting started online',
  },
  {
    name: 'Professional',
    price: '₹35,999',
    period: '/project',
    description: 'Most popular for growing businesses',
    features: [
      'Everything in Starter',
      'E-commerce Store (Upto 100 Products)',
      'Payment Gateway Integration',
      'Advanced CMS & Admin Panel',
      'Custom Animations & Effects',
      '6 Months Support & Maintenance',
      'Analytics & Reporting',
      'API Integrations',
      'Database Design & Optimization',
    ],
    popular: true,
    note: 'Includes 1 month free maintenance',
  },
  {
    name: 'Enterprise',
    price: '₹75,000+',
    period: '/project',
    description: 'For complex applications and scaling businesses',
    features: [
      'Fully Custom Web Application',
      'E-commerce (Unlimited Products)',
      'CRM / ERP / Management Portal',
      'Advanced Feature Development',
      'Cloud Infrastructure Setup',
      'DevOps & CI/CD Pipeline',
      '1 Year Support & Maintenance',
      'Annual Maintenance Contract (AMC)',
      'Priority 24/7 Support',
      'Dedicated Account Manager',
    ],
    popular: false,
    note: 'Custom pricing based on requirements',
  },
]

export function Pricing() {
  const handleScrollToContact = () => {
    const element = document.querySelector('#contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="pricing" className="relative py-12 sm:py-16 md:py-24 dark:bg-[#020B18] light:bg-[#F8FAFC]">
      {/* Background */}
      <div className="absolute inset-0 dark:bg-gradient-to-b dark:from-[#020B18] dark:via-[#0A1628]/50 dark:to-[#020B18] light:bg-gradient-to-b light:from-[#F8FAFC] light:via-white light:to-[#F8FAFC]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Transparent Pricing"
          subtitle="Choose the perfect plan for your business."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -5 }}
              className={`relative rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 transition-all duration-300 flex flex-col h-full ${
                tier.popular
                  ? 'dark:bg-[#0A1628] light:bg-white dark:border-2 light:border-2 dark:border-[#00D4FF]/50 light:border-[#0084FF]/50 dark:shadow-[0_0_30px_rgba(0,212,255,0.2)] light:shadow-[0_0_30px_rgba(0,132,255,0.2)] sm:scale-100 scale-100'
                  : 'dark:bg-[#0A1628]/80 light:bg-white dark:border dark:border-[#1A3A5C]/50 light:border light:border-[#E2E8F0] dark:hover:border-[#00D4FF]/30 light:hover:border-[#0084FF]/30'
              }`}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2">
                  <div className="flex items-center gap-1 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full bg-[#00D4FF] text-[#020B18] text-xs sm:text-sm font-semibold">
                    <Sparkles size={12} className="sm:hidden" />
                    <Sparkles size={14} className="hidden sm:block" />
                    Most Popular
                  </div>
                </div>
              )}

              {/* Tier name */}
              <h3 
                className="text-lg sm:text-xl font-bold text-white mb-2"
                style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
              >
                {tier.name}
              </h3>

              {/* Price */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span 
                    className={`text-3xl sm:text-4xl md:text-5xl font-bold ${
                      tier.popular ? 'text-[#00D4FF] text-glow-cyan' : 'text-white'
                    }`}
                    style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}
                  >
                    {tier.price}
                  </span>
                  <span className={`text-xs sm:text-sm ${tier.popular ? 'text-[#00D4FF]/80' : 'text-[#7BC8FF]'}`}>
                    {tier.period}
                  </span>
                </div>
              </div>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#B8D4E8] mb-6">
                {tier.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3 mb-8 flex-grow">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 sm:gap-3">
                    <div className="mt-0.5 w-4 sm:w-5 h-4 sm:h-5 rounded-full bg-[#00D4FF]/20 flex items-center justify-center flex-shrink-0">
                      <Check size={10} className="sm:hidden text-[#00D4FF]" />
                      <Check size={12} className="hidden sm:block text-[#00D4FF]" />
                    </div>
                    <span className="text-xs sm:text-sm text-[#B8D4E8]">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <GlowButton
                variant={tier.popular ? 'primary' : 'ghost'}
                className="w-full"
                onClick={handleScrollToContact}
              >
                Get Started
              </GlowButton>

              {/* Note */}
              {tier.note && (
                <p className="mt-4 text-xs text-center text-[#7BC8FF] italic">
                  {tier.note}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
