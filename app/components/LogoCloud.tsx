'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    name: 'IBM',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg'
  },
  {
    name: 'Dell',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg'
  },
  {
    name: 'Cisco',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg'
  },
  {
    name: 'HP',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/2/29/HP_New_Logo_2D.svg'
  },
  {
    name: 'Canon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Canon_logo_vector.svg'
  }
]

export function LogoCloud() {
  return (
    <div className="py-24 sm:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center"
      >
        <p className="text-gray-400 text-sm">Our services are featured on</p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-10 sm:grid-cols-5 sm:gap-x-10">
          {partners.map((partner) => (
            <Image
              key={partner.name}
              src={partner.logo}
              alt={partner.name}
              width={100}
              height={40}
              className="object-contain opacity-40 hover:opacity-60 transition-opacity duration-300"
            />
          ))}
        </div>
      </motion.div>
    </div>
  )
} 