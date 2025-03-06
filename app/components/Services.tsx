'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

// Add this type near the top of the file
type ServiceKey = keyof typeof serviceImages;

const services: { title: string; description: string; icon: string; key: ServiceKey }[] = [
  {
    title: 'Enterprise Software Solution Implementation',
    description: 'We specialize in delivering end-to-end Enterprise Software Solution Implementation that transforms the way organizations operate. From initial strategy to full deployment, we ensure that your enterprise systems work harmoniously with your business processes, driving efficiency, scalability, and growth.',
    icon: '💼',
    key: 'enterprise'
  },
  {
    title: 'OEM Software Solution Resale',
    description: 'Delivering Trusted, Scalable Software Solutions from Leading OEM Partners. We are a trusted reseller of top - tier OEM(Original Equipment Manufacturer) Software Solutions, providing businesses with access to innovative, reliable, and cost - effective technologies that drive operational excellence.',
    icon: '🔑',
    key: 'software'
  },
  {
    title: 'Technology Solutions Training',
    description: 'We offer comprehensive technology solutions training programs designed to equip your team with the knowledge and skills needed to maximize the value of your IT investments. From software proficiency to specialized technical skills, we tailor training to your specific needs, empowering your workforce to drive innovation and achieve operational excellence.',
    icon: '📚',
    key: 'training'
  },
  {
    title: 'Networking',
    description: 'We provide comprehensive networking solutions that establish a robust, reliable, and secure foundation for your business communications and data infrastructure.From design and implementation to management and maintenance, we\'re your partners in building a network that empowers your organization.',
    icon: '📡',
    key: 'network'
  },
  {
    title: 'Web Solutions',
    description: 'We specialize in web solutions that create engaging, user-friendly, and effective digital experiences. From website design and development to e-commerce platforms and custom web applications, we build online solutions that elevate your brand, reach your target audience, and achieve your business goals.',
    icon: '🌐',
    key: 'webSolutions'
  },
  {
    title: 'Database Management',
    description: 'We offer expert database management services designed to optimize, secure, and harness the power of your organization\'s data assets. From design and implementation to maintenance and optimization, we ensure your data is readily accessible, protected, and drives insightful decision-making.',
    icon: '🌐',
    key: 'databaseManagement'
  },
]

const features = [
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
    name: 'Data Recovery',
    icon: (
      <svg className="w-4 h-4 text-[#60a5fa]" viewBox="0 0 16 16">
        <path fill="currentColor" d="M2 4h12v8H2z" />
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
]

const serviceImages = {
  enterprise: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
  software: 'https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?auto=format&fit=crop&q=80',
  training: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80',
  web: 'https://images.unsplash.com/photo-1547658719-da2b51169166?auto=format&fit=crop&q=80',
  network: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
  security: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80',
  webSolutions: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
  databaseManagement: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
}


export function Services() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium mb-6">
            Expertise That Drives Quality
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            With deep expertise, we deliver quality solutions that drive
            success and exceed industry standards consistently.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative rounded-[10px] md:rounded-[24px] overflow-hidden bg-[#0a0a0a] border border-gray-800/30 p-2 py-4 md:p-4"
            >
              <div className="relative h-64 lg:h-64 w-full overflow-hidden rounded-md md:rounded-xl mb-6">
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
              <p className="text-gray-400 text-base leading-relaxed">
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
