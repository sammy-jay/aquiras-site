'use client'

import { motion } from 'framer-motion'
import { WorkShowcase } from './WorkShowcase'

const ArrowIcon = () => (
  <motion.svg
    width="80"
    height="120"
    viewBox="0 0 80 120"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    initial={{ y: 0 }}
    animate={{ y: [0, 20, 0] }}
    transition={{
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    <path
      d="M37.5 2.5L37.5 95M37.5 95L5 62.5M37.5 95L70 62.5"
      stroke="#60a5fa"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </motion.svg>
)

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.24, 0.25, 0.25, 0.75]
    }
  }
}

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.5,
      ease: [0.24, 0.25, 0.25, 0.75]
    }
  })
}

export function RecentWorks() {
  return (
    <motion.section 
      className="py-32 relative"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Centered Arrow */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-24"
        >
          <ArrowIcon />
        </motion.div>

        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex justify-center"
        >
          <div className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full">
            <motion.span 
              variants={textVariants}
              custom={0.4}
              className="text-[12px] text-gray-300"
            >
              Work That Make Us Proud
            </motion.span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          variants={itemVariants}
          className="text-center"
        >
          <motion.h2 
            className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-white"
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.1
                }
              }
            }}
          >
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.24, 0.25, 0.25, 0.75]
                  }
                }
              }}
              className="inline-block"
            >
              Recent Works,{' '}
            </motion.span>
            <motion.span
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    ease: [0.24, 0.25, 0.25, 0.75]
                  }
                }
              }}
              className="inline-block"
            >
              Notable Impact
            </motion.span>
          </motion.h2>
        </motion.div>

        {/* Work Showcase */}
        <WorkShowcase />
      </div>
    </motion.section>
  )
} 