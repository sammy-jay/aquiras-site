'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

const plans = [
  {
    name: 'Business Essential',
    description: 'Ideal for small to medium businesses',
    price: '100',
    features: [
      'Basic IT infrastructure setup',
      'Standard security package',
      'Email and basic cloud solutions',
      'Regular maintenance'
    ]
  },
  {
    name: 'Enterprise Pro',
    description: 'Complete solution for large organizations',
    popular: true,
    price: '1000',
    features: [
      'Advanced infrastructure management',
      'Enterprise security suite',
      'Custom software solutions',
      'Priority support',
      'IT consultation services',
      '24/7 monitoring'
    ]
  }
]

export function Pricing() {
  return (
    <section className="bg-black py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full">
            <span className="text-[12px] text-gray-300">Simple Pricing</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium">
            Transparent Pricing Plans
          </h2>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative rounded-[32px] overflow-hidden bg-[#111] border border-gray-800/30 p-8 ${
                plan.popular ? 'md:p-10' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute top-8 right-8">
                  <span className="text-[13px] text-gray-400">Popular</span>
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-3xl font-medium mb-3">
                  {plan.name}
                </h3>
                <p className="text-gray-400 text-lg">
                  {plan.description}
                </p>
              </div>

              <div className="mb-8">
                <div className="flex items-baseline">
                  <span className="text-5xl font-medium">$</span>
                  <span className="text-5xl font-medium ml-1">{plan.price}</span>
                  <span className="text-gray-400 text-lg ml-2">/month</span>
                </div>
              </div>

              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-[#60a5fa] text-white rounded-xl font-medium hover:bg-[#60a5fa]/90 transition-colors"
              >
                Book A Call
              </Link>

              <div>
                <div className="text-gray-400 text-lg mb-6">What's Included:</div>
                <ul className="space-y-4">
                  {plan.features.map((feature) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-2 h-2 rounded-full bg-gray-600" />
                      <span className="text-gray-400 text-lg">{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 