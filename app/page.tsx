'use client'

import { motion } from 'framer-motion'
import { LogoCloud } from './components/LogoCloud'
import { WhyUs } from './components/WhyUs'
import { Benefits } from './components/Benefits'
import { Mission } from './components/Mission'
import { RecentWorks } from './components/RecentWorks'
import { Stats } from './components/Stats'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import Link from 'next/link'
import { OurProcess } from './components/OurProcess'
import { TestimonialCloud } from './components/TestimonialCloud'

export default function Home() {
  const scrollToWorks = () => {
    const worksSection = document.querySelector('#works')
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            {/* Status Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center"
            >
              <div className="inline-flex items-center gap-2 bg-black/30 px-4 py-2 rounded-full border border-gray-800">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
                <span className="text-sm text-gray-300">Secure your transformation today</span>
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-12 text-center space-y-2"
            >
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                Your Trusted IT Partner
              </h1>
              
              <h1 className="text-4xl md:text-5xl font-bold lg:text-6xl">
                 for a Smarter,
              </h1>
            
              <h2 className="text-4xl md:text-5xl font-bold gradient-text lg:text-6xl">
                More Efficient Future.
              </h2>
            </motion.div>

            {/* Subtitle */}
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-center text-xl text-gray-400"
            >
              Comprehensive IT solutions and services for businesses of all sizes.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center"
            >
              <Link 
                href="/contact"
                className="bg-[#60a5fa] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#60a5fa]/90 transition-colors"
              >
                Book A Call
              </Link>
            </motion.div>

            
          </div>
        </section>

        {/* Logo Cloud Section */}
        <LogoCloud />

        {/* Why Us Section */}
        <section id="why-us">
          <WhyUs />
        </section>

        {/* Services Section */}
        <section id="services">
          <Services />
        </section>

        <section id="works">
          <OurProcess />
        </section>
      

        {/* Recent Works Section */}
        <section>
          <RecentWorks />
        </section>

        {/* Stats Section */}
        <Stats />

        {/* Testimonials Section */}
        {/* <TestimonialCloud /> */}

       

        {/* FAQ Section */}
        <FAQ />
      </main>
      <Footer />
    </>
  )
}
