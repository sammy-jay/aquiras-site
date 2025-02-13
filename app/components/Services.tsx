'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Add this type near the top of the file
type ServiceKey = keyof typeof serviceImages;

const services: { title: string; description: string; icon: string; key: ServiceKey }[] = [
  {
    title: 'Enterprise Software Solution Implementation',
    description: 'Complete enterprise software solutions and implementation services for businesses.',
    icon: '💼',
    key: 'enterprise'
  },
  {
    title: 'OEM Software Solution Resale',
    description: 'Licensed software solutions from leading technology partners like Microsoft, IBM, and more.',
    icon: '🔑',
    key: 'software'
  },
  {
    title: 'Technology Solutions Training',
    description: 'Comprehensive training programs for IT infrastructure and software solutions.',
    icon: '📚',
    key: 'training'
  },
  {
    title: 'Technology Integration',
    description: 'Seamless integration of various technology solutions for optimal performance.',
    icon: '🔄',
    key: 'integration'
  },
  {
    title: 'Website Development',
    description: 'Custom web solutions and development services for your digital presence.',
    icon: '🌐',
    key: 'web'
  },
  {
    title: 'Networking',
    description: 'Complete networking solutions and infrastructure setup services.',
    icon: '📡',
    key: 'network'
  },
  {
    title: 'Database Management',
    description: 'Professional database administration and management services.',
    icon: '💾',
    key: 'database'
  },
  {
    title: 'Web Solutions',
    description: 'End-to-end web application development and maintenance.',
    icon: '🌍',
    key: 'webSolutions'
  },
  {
    title: 'Data Recovery',
    description: 'Professional data recovery and backup solution services.',
    icon: '🔄',
    key: 'dataRecovery'
  },
]

const features = [
  {
    name: 'AI-Driven Solutions',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M8 1l7 4v6l-7 4-7-4V5z" />
      </svg>
    )
  },
  {
    name: 'Serverless Computing',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M2 4h12v8H2z" />
      </svg>
    )
  },
  {
    name: 'Cloud Integration',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M4 10a4 4 0 118 0H4z" />
      </svg>
    )
  },
  {
    name: 'Data Insight',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M2 2h12v12H2z" />
      </svg>
    )
  },
  {
    name: 'Analytics',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M2 14V8h3v6H2zm4 0V2h3v12H6zm4 0V6h3v8h-3z" />
      </svg>
    )
  },
  {
    name: 'API Security',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M8 1L2 4v3c0 4.4 2.6 8.5 6 10 3.4-1.5 6-5.6 6-10V4L8 1z" />
      </svg>
    )
  },
  {
    name: 'Real-Time',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M8 0a8 8 0 100 16A8 8 0 008 0zm1 8V3H7v6h5V7H9z" />
      </svg>
    )
  },
  {
    name: 'Ad Targeting',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M14 8A6 6 0 112 8a6 6 0 0112 0z" />
      </svg>
    )
  }
]

const serviceImages = {
  enterprise: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
  software: 'https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?auto=format&fit=crop&q=80',
  training: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  integration: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
  web: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
  network: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
  procurement: 'https://images.unsplash.com/photo-1578598336003-1514a96268a0?auto=format&fit=crop&q=80',
  security: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80',
  database: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
  webSolutions: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  dataRecovery: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80',
}
  

export function Services() {
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
            <span className="text-[12px] text-gray-300">Our Services</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6">
            Expertise That Drives Quality
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            With deep expertise, we deliver quality solutions that drive
            success and exceed industry standards consistently.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-[24px] overflow-hidden bg-[#111] border border-gray-800/30 p-6"
            >
              <div className="relative h-52 w-full overflow-hidden rounded-xl mb-6">
                <Image
                  src={serviceImages[service.key]}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">
                {service.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Features Grid - Updated with better spacing and container width */}
        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="inline-flex items-center gap-3 px-6 py-3.5 rounded-full bg-[#111] border border-gray-800/30"
            >
              {feature.icon}
              <span className="text-base text-gray-300 whitespace-nowrap">{feature.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 