'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const benefits = [
  {
    title: 'Global Partners',
    description: 'Wide array of suppliers and partners worldwide providing specialized IT products and services.'
  },
  {
    title: 'Industry Coverage',
    description: 'Serving Education, Telecommunications, Banking, Insurance, and SME sectors.'
  },
  {
    title: 'Complete Solutions',
    description: 'End-to-end IT services from infrastructure to software and security solutions.'
  }
]

export function Benefits() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
            >
              {/* Card with Grid Background */}
              <div className="relative rounded-[32px] p-8 overflow-hidden bg-[#0A0A0A] border border-gray-800/30">
                {/* Grid Background */}
                <div 
                  className="absolute inset-0 bg-[linear-gradient(rgba(17,17,17,0.8),rgba(17,17,17,0.8))]"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 0h1v1H1V0zm1 1h1v1H2V1zM1 2h1v1H1V2zm2-1h1v1H3V1zM3 2h1v1H3V2zm0-2h1v1H3V0zM0 3h1v1H0V3zm1 1h1v1H1V4zM0 5h1v1H0V5zm2-1h1v1H2V4zm0 2h1v1H2V6zm1-1h1v1H3V5z' fill='rgba(255,255,255,0.05)'/%3E%3C/svg%3E")`,
                    backgroundSize: '40px 40px'
                  }}
                />

                {/* Content */}
                <div className="relative flex flex-col items-center text-center">
                  {/* Title */}
                  <h3 className="text-2xl font-medium mb-4">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex justify-center mt-16"
        >
          <Link
            href="/#pricing"
            className="inline-block px-8 py-4 bg-[#60a5fa] text-white rounded-2xl text-lg font-medium hover:bg-[#60a5fa]/90 transition-colors"
          >
            See Pricing
          </Link>
        </motion.div>
      </div>
    </section>
  )
} 