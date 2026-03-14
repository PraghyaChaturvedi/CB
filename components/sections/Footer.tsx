"use client"

/**
 * Footer - Dark footer with 4-column grid layout
 * Includes branding, links, services, and contact info
 */

import { motion } from 'framer-motion'
import { Github, Linkedin, Instagram, MessageCircle, Heart } from 'lucide-react'

const quickLinks = [
  { label: 'Home', href: '#' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Business Websites',
  'E-commerce',
  'Web Applications',
  'CRM & Portals',
  'Website Redesign',
  'Maintenance',
]

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: MessageCircle, href: 'https://wa.me/919876543210', label: 'WhatsApp' },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  return (
    <footer className="relative dark:bg-[#020B18] light:bg-[#F8FAFC] dark:border-t dark:border-[#00D4FF]/20 light:border-t light:border-[#E2E8F0]">
      {/* Subtle particle dots background */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#00D4FF]/20"
            style={{
              left: `${((i * 37 + 11) % 97)}%`,
              top: `${((i * 53 + 7) % 89)}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {/* Column 1: Logo & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              <div className="relative w-8 sm:w-10 h-8 sm:h-10 flex items-center justify-center">
                <div className="absolute inset-0 dark:bg-[#00D4FF]/20 light:bg-[#0084FF]/20 rounded-lg blur-md" />
                <span className="relative text-base sm:text-xl font-bold dark:text-[#00D4FF] light:text-[#0084FF]" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>CB</span>
              </div>
              <span className="text-base sm:text-lg font-semibold dark:text-white light:text-[#0F172A]" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>InfoTech</span>
            </div>
            
            {/* Tagline */}
            <p className="dark:text-[#B8D4E8] light:text-[#475569] text-xs sm:text-sm mb-4 sm:mb-6 max-w-xs">
              Engineering the Digital Future. Premium web development solutions for businesses worldwide.
            </p>

            {/* Social Links */}
            <div className="flex gap-2 sm:gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 sm:w-10 h-9 sm:h-10 rounded-lg dark:bg-[#0A1628] light:bg-white dark:border dark:border-[#1A3A5C]/50 light:border light:border-[#E2E8F0] flex items-center justify-center dark:text-[#7BC8FF] light:text-[#475569] dark:hover:text-[#00D4FF] light:hover:text-[#0084FF] dark:hover:border-[#00D4FF]/50 light:hover:border-[#0084FF]/50 dark:hover:bg-[#00D4FF]/10 light:hover:bg-[#0084FF]/10 transition-all"
                >
                  <social.icon size={16} className="sm:w-[18px] sm:h-[18px]" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Column 2: Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="dark:text-white light:text-[#0F172A] font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="dark:text-[#B8D4E8] light:text-[#475569] dark:hover:text-[#00D4FF] light:hover:text-[#0084FF] transition-colors text-xs sm:text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 3: Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="dark:text-white light:text-[#0F172A] font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>Services</h4>
            <ul className="space-y-2 sm:space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="dark:text-[#B8D4E8] light:text-[#475569] text-xs sm:text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 4: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="dark:text-white light:text-[#0F172A] font-semibold mb-3 sm:mb-4 text-sm sm:text-base" style={{ fontFamily: 'var(--font-space), Space Grotesk, sans-serif' }}>Contact</h4>
            <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
              <p className="dark:text-[#B8D4E8] light:text-[#475569]">
                <span className="dark:text-[#7BC8FF] light:text-[#0084FF]">Email:</span><br />
                <a href="mailto:hello@cbinfotech.in" className="dark:hover:text-[#00D4FF] light:hover:text-[#0084FF] transition-colors break-all">
                  hello@cbinfotech.in
                </a>
              </p>
              <p className="dark:text-[#B8D4E8] light:text-[#475569]">
                <span className="dark:text-[#7BC8FF] light:text-[#0084FF]">Phone:</span><br />
                <a href="tel:+919876543210" className="dark:hover:text-[#00D4FF] light:hover:text-[#0084FF] transition-colors">
                  +91 98765 43210
                </a>
              </p>
              <p className="dark:text-[#B8D4E8] light:text-[#475569]">
                <span className="dark:text-[#7BC8FF] light:text-[#0084FF]">Location:</span><br />
                India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 dark:border-t dark:border-[#1A3A5C]/50 light:border-t light:border-[#E2E8F0]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 text-center sm:text-left">
            <p className="text-xs sm:text-sm dark:text-[#7BC8FF] light:text-[#475569]">
              &copy; {new Date().getFullYear()} CB InfoTech. All rights reserved.
            </p>
            <p className="text-xs sm:text-sm dark:text-[#7BC8FF] light:text-[#475569] flex items-center justify-center gap-1">
              Crafted with <Heart size={12} className="sm:w-[14px] sm:h-[14px] dark:text-[#00D4FF] light:text-[#0084FF] dark:fill-[#00D4FF] light:fill-[#0084FF]" /> by CB InfoTech
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
