'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

type Work = {
  id: string
  title: string
  description?: string
  stats?: string
  image: string
  color: string
}

const works: Work[] = [
  {
    id: 'grapho',
    title: 'TeamSync AI',
    description: "Enhancing team collaboration through AI-powered workflow optimization and communication tools.",
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2940&auto=format&fit=crop',
    color: '#60a5fa'
  },
  {
    id: 'vectra',
    title: 'IndustrialTech',
    description: "Modernizing manufacturing operations with smart automation and predictive maintenance solutions.",
    stats: '34% increase in online sales.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2940&auto=format&fit=crop',
    color: '#f59e0b'
  },
  {
    id: 'signum',
    title: 'WorkspaceOS',
    description: "Enterprise workspace management platform that optimizes office efficiency and employee experience.",
    stats: '47% increase in new customers.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2940&auto=format&fit=crop',
    color: '#ec4899'
  }
]

export function WorkShowcase() {
  const [activeWork, setActiveWork] = useState<Work>(works[0])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mt-24">
      {/* Left side - Work list */}
      <div className="relative">
        <div 
          className="absolute left-0 top-0 bottom-0 w-[1px] bg-[#60a5fa]/10"
          style={{
            background: `${activeWork.color}10`
          }}
        />
        <div className="space-y-14 relative">
          {works.map((work) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="pl-8"
            >
              <motion.button
                onClick={() => setActiveWork(work)}
                className={`text-left w-full group ${
                  activeWork.id === work.id ? 'opacity-100' : 'opacity-40'
                }`}
                whileHover={{ opacity: 1 }}
              >
                <motion.h3 
                  className="text-2xl md:text-3xl font-medium mb-3 transition-colors duration-300"
                  style={{
                    color: activeWork.id === work.id ? work.color : 'white'
                  }}
                  layout
                >
                  {work.title}
                </motion.h3>
                {work.description && (
                  <motion.p 
                    className="text-gray-400 text-base leading-relaxed max-w-2xl"
                    layout
                  >
                    {work.description}
                  </motion.p>
                )}
                {work.stats && (
                  <motion.p 
                    className="text-gray-400 text-base"
                    layout
                  >
                    {work.stats}
                  </motion.p>
                )}
                
                {activeWork.id === work.id && (
                  <motion.div
                    className="absolute left-0 top-[16px] w-[2px] h-8"
                    style={{ background: work.color }}
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Right side - Image showcase */}
      <div className="relative">
        <div className="rounded-[32px] overflow-hidden bg-neutral-900/50 backdrop-blur-sm border border-gray-800/50">
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeWork.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative aspect-video rounded-2xl overflow-hidden"
              >
                <Image
                  src={activeWork.image}
                  alt={activeWork.title}
                  fill
                  className="object-cover"
                  priority
                />
                {activeWork.id === 'grapho' && (
                  <div className="absolute inset-0 flex items-end justify-end p-6">
                    <div className="flex items-end gap-4">
                      <div className="w-4 h-16 bg-gray-600/50 rounded-sm" />
                      <motion.div 
                        initial={{ height: 0 }}
                        animate={{ height: 64 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="w-4 bg-[#60a5fa] rounded-sm"
                      />
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-4 right-4 bg-[#60a5fa] text-white px-3 py-1 rounded text-sm"
                    >
                      80%
                    </motion.div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
} 