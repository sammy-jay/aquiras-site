'use client'

import { motion } from 'framer-motion'

const features = [
  {
    title: "Just-In-Time Inventory",
    description: "Our effective inventory management system ensures consistent supply of diverse IT products available to all clients.",
    icon: "📦"
  },
  {
    title: "Global Partnerships",
    description: "Strategic partnerships with Microsoft, IBM, Dell, HP, Cisco, and Canon for premium technology solutions.",
    icon: "🤝"
  },
  {
    title: "Expert Team",
    description: "Highly skilled workforce with continuous training in the latest IT technologies and best practices.",
    icon: "👥"
  }
]

export function WhyUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-gray-800 rounded-full"
          >
            <span className="text-[13px] text-gray-300">Why Us</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-4xl font-medium tracking-tight text-white sm:text-6xl"
          >
            Experience The Benefits
            <br />
            Of Our Expertise
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-lg leading-8 text-gray-400"
          >
            That drives impactful gain powerful results
          </motion.p>
        </motion.div>
      </div>
    </section>
  )
} 