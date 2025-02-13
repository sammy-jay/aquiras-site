'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const stats = [
  {
    value: '15+',
    label: 'Years Experience'
  },
  {
    value: '500+',
    label: 'Projects Completed'
  },
  {
    value: '100+',
    label: 'Expert Staff'
  }
]

export function WorkShowcase() {
  return (
    <section className="py-24 bg-black relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full"
            >
              <span className="text-[12px] text-gray-300">What We Do</span>
            </motion.div>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-medium mb-6"
            >
              At Aquiras Solutions, we provide a wide range of I.T. products, services and solutions.
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg leading-relaxed mb-12"
            >
              Our desire to ensure customer satisfaction coupled with in-depth I.T. knowledge helps to ensure that we 
              bring to our clients an efficient and cost effective solution applying best industry practices in the 
              selection and deployment of our solutions.
            </motion.p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.2 }}
                >
                  <div className="text-3xl font-medium mb-2 text-[#60a5fa]">
                    {stat.value}
                  </div>
                  <div className="text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Column - Team Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Image
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Our Team"
              width={600}
              height={400}
              className="rounded-2xl"
            />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-black/50 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  )
} 