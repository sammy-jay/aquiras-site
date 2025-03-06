'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'img-1',
    logo: '/testimonial-cloud/img-1.png'
  },
  {
    name: 'img-2',
    logo: '/testimonial-cloud/img-2.png'
  },
  {
    name: 'img-3',
    logo: '/testimonial-cloud/img-3.png'
  },
  {
    name: 'img-4',
    logo: '/testimonial-cloud/img-4.png'
  },
  {
    name: 'img-5',
    logo: '/testimonial-cloud/img-5.png'
  },
  {
    name: 'img-6',
    logo: '/testimonial-cloud/img-6.png'
  },
  {
    name: 'img-7',
    logo: '/testimonial-cloud/img-7.png'
  }
]

export function TestimonialCloud() {
  return (
    <div className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10"
      >
        <p className="text-gray-400 text-sm">Companies we've worked with</p>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="absolute pointer-events-none inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent z-10" />
        <div className="absolute pointer-events-none inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent z-10" />
        
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex gap-16 px-8"
            animate={{
              x: [0, -1935]
            }}
            transition={{
              x: {
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }
            }}
          >
            {/* First set of logos */}
            {partners.map((partner) => (
              <div key={partner.name} className="relative w-[150px] h-[60px] shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-40 hover:opacity-60 transition-opacity duration-300"
                />
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {partners.map((partner) => (
              <div key={`${partner.name}-duplicate`} className="relative w-[150px] h-[60px] shrink-0">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  fill
                  className="object-contain opacity-40 hover:opacity-60 transition-opacity duration-300"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 