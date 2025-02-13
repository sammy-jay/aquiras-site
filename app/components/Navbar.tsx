'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Link from 'next/link'

const navLinks = [
  { name: 'Why Us', href: '#why-us' },
  { name: 'Mission', href: '#mission' },
  { name: 'Works', href: '#works' },
  { name: 'Services', href: '#services' }
]

const pageLinks = [
  { name: 'About Us', href: '/about' },
  { name: 'Contact', href: '/contact' },
  { name: 'Pricing', href: '#pricing' },
  { name: 'FAQ', href: '#faq' }
]

export function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto max-w-7xl px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link 
            href="/" 
            className="text-[#60a5fa] font-bold text-base hover:text-[#60a5fa]/90 transition-colors"
          >
            Aquiras Solutions
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="text-gray-400 hover:text-[#60a5fa] transition-colors"
              >
                {link.name}
              </a>
            ))}

            {/* Pages Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-2 text-gray-400 hover:text-[#60a5fa] transition-colors"
              >
                Pages
                <svg
                  className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full right-0 mt-2 py-2 w-48 bg-[#111] border border-gray-800 rounded-xl shadow-xl"
                >
                  {pageLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      className="block px-4 py-2 text-gray-400 hover:text-[#60a5fa] hover:bg-gray-800/50 transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      {link.name}
                    </a>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#111] text-white hover:bg-[#222] transition-colors border border-gray-800"
          >
            Let's Talk
            <svg 
              className="w-4 h-4" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </motion.a>
        </div>
      </nav>
    </header>
  )
} 