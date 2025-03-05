'use client'

import { motion } from 'framer-motion';
import { FaHospital, FaIndustry, FaCode, FaUniversity, FaSearchDollar } from 'react-icons/fa'; // Import necessary icons
import { RiGovernmentLine } from 'react-icons/ri';

const works = [
  {
    title: "Revolutionize Business Applications",
    description: "Streamline your entire organization with integrated ERP, CRM, and HRMS solutions. Gain a unified view of your business for smarter decisions.",
    icon: "🏢",
    details: [
      "Automated workflows across departments.",
      "Real-time data visibility for informed decision-making.",
      "Improved efficiency and reduced operational costs.",
      "Scalable solutions to grow with your business."
    ]
  },
  {
    title: "Unlock Scalability with Cloud Solutions",
    description: "Empower your business with flexible and scalable Cloud Solutions (IaaS, PaaS, SaaS). Reduce costs, increase agility, and accelerate innovation.",
    icon: "☁️",
    details: [
      "Reduced infrastructure management overhead.",
      "Increased agility and faster time to market.",
      "Enhanced collaboration and data accessibility.",
      "Improved security and disaster recovery capabilities."
    ]
  },
  {
    title: "Fortify Your Defenses with Security & Compliance Tools",
    description: "Protect your valuable data and maintain compliance with industry regulations. Proactive security measures prevent costly breaches and fines.",
    icon: "🛡️",
    details: [
      "Real-time threat detection and prevention.",
      "Automated compliance reporting and auditing.",
      "Enhanced data encryption and access control.",
      "Proactive vulnerability management."
    ]
  },
  {
    title: "Boost Collaboration and Productivity",
    description: "Empower your teams with the right tools for seamless communication, collaboration, and productivity. Increase efficiency and improve team performance.",
    icon: "🤝",
    details: [
      "Real-time collaboration on documents and projects.",
      "Streamlined communication channels for efficient teamwork.",
      "Automated task management and workflow automation.",
      "Improved employee engagement and satisfaction."
    ]
  },
  {
    title: "Transform Data into Insights with Analytics & BI",
    description: "Unlock the power of your data with advanced analytics and business intelligence platforms. Make data-driven decisions and gain a competitive edge.",
    icon: "📊",
    details: [
      "Interactive dashboards and visualizations.",
      "Real-time data analysis and reporting.",
      "Predictive analytics for forecasting trends.",
      "Improved decision-making and strategic planning."
    ]
  },
  {
    title: "Optimize Your Infrastructure with System Management Software",
    description: "Gain complete control and visibility over your IT infrastructure. Proactively manage systems, reduce downtime, and optimize performance.",
    icon: "⚙️",
    details: [
      "Automated system monitoring and alerting.",
      "Remote management and troubleshooting capabilities.",
      "Proactive performance optimization and tuning.",
      "Improved system availability and reliability."
    ]
  }
];

export function WorkShowcase() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-2 lg:px-8">
        <div className="flex overflow-auto hide-scrollbar scroll-smooth">
          <motion.div
            className="flex gap-4 md:gap-8 px-2"
          >
            {/* First set of logos */}
            {works.map((work, index) => (
              <motion.div
                key={index}
                className="bg-[#0a0a0a] cursor-pointer py-6 px-3 md:p-6 rounded-lg flex flex-col w-[300px] md:min-w-[330px]" // Increased width
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-3xl mr-2">{work.icon}</div>
                  <h3 className="text-xl font-bold text-white">{work.title}</h3>
                </div>
                <p className="text-gray-400">{work.description}</p>
                <ul className="mt-2 list-disc list-inside text-gray-400 pl-3">
                  {work.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Industries */}
        <div className="mt-24 flex justify-center gap-4 md:gap-8 flex-row flex-wrap">
          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaUniversity className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Education</span>
          </div>
          
          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaIndustry className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Manufacturing</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaCode className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Tech/Software</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <RiGovernmentLine className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Government</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaSearchDollar className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Finance</span>
          </div>

          <div className="flex items-center text-gray-300 flex-col">
            <div className='p-2 rounded-lg border-gray-900 border-[1px] cursor-pointer hover:scale-105 transition duration-300'>
              <div className='bg-[#0a0a0a] rounded-lg p-4 border-gray-900 border-[1px]'>
                <FaHospital className="text-3xl" />
              </div>
            </div>
            <span className="mt-2 ml-2 text-sm">Healthcare</span>
          </div>
        </div>
      </div>
    </section>
  );
}