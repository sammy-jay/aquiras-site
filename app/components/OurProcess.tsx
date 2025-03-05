'use client'

import { motion } from 'framer-motion'
import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'; // Import icons

const phases = [
    {
        title: "Phase 1: Consultation & Needs Assessment",
        description: "Before we implement any solutions, we take the time to fully understand your business operations, challenges, and objectives.",
        details: [
            "We conduct comprehensive consultations with key stakeholders to understand your current IT infrastructure, workflows, and business goals.",
            "We perform a thorough audit of your existing IT systems, identifying areas for improvement, potential risks, and opportunities for optimization.",
            "You'll receive a detailed report summarizing our findings, outlining our recommendations, and providing a clear roadmap for achieving your desired outcomes."
        ],
    },
    {
        title: "Phase 2: Solution Design & Selection ",
        description: "Drawing on our expertise and partnerships with leading technology providers, we design and recommend solutions that are perfectly aligned with your business needs and budget.",
        details: [
           "Based on the insights gained in Phase 1, we design tailored solutions that address your specific challenges and leverage the latest technologies to drive efficiency and growth.",
           "We carefully evaluate and select the most appropriate hardware, software, and services from our trusted partners to ensure optimal performance and value.",
           "We develop a comprehensive implementation plan, outlining timelines, resource requirements, and potential risks to ensure a smooth and successful project execution."
        ],
    },
    {
        title: "Phase 3: Seamless Implementation & Integration",
        description: "Our experienced team ensures a seamless and efficient implementation process, integrating new technologies into your existing environment with minimal disruption.",
        details: [
            "We assign a dedicated project manager to oversee all aspects of the implementation, ensuring timely completion and adherence to budget.",
            "We seamlessly integrate new technologies with your existing IT systems, ensuring compatibility and optimal performance.",
            "We conduct rigorous testing and quality assurance to ensure that all solutions function as expected and meet your specific requirements."
        ],
    },
    {
        title: "Phase 4: Ongoing Support & Optimization",
        description: "Our commitment doesn't end with implementation. We provide ongoing support and optimization services to ensure that your IT investments continue to deliver value and drive business success.",
        details: [
            "We offer prompt and reliable help desk support to address any technical issues or questions that may arise.",
            "We provide proactive managed services to monitor, maintain, and optimize your IT infrastructure, ensuring peak performance and security.",
            "We regularly review your IT environment and identify opportunities for further optimization and innovation, helping you stay ahead of the competition."
        ],
    },
];

export function OurProcess() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleDetails = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="process" className="py-16">
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
                        className="inline-flex items-center justify-center px-4 py-1.5 mb-6 border border-gray-800 rounded-full items-center"
                    ><span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
                        <span className="text-[13px] text-gray-300">Our Blueprint</span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="mt-6 text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-white  "
                    >
                        The Aquiras Solutions Domination Blueprint
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="mt-6 text-lg leading-8 text-gray-400"
                    >
                        A battle-tested system for transforming your business, guaranteed to deliver results.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
                    {phases.map((phase, index) => (
                        <motion.div
                            key={index}
                            className="bg-[#0a0a0a] border-l-4 border-[#60A5FA] p-6 rounded-lg flex"
                        >

                            <div className="flex-grow">
                                <h3 className="text-xl font-bold text-white">{phase.title}</h3>
                                <p className="text-gray-400 mt-2">{phase.description}</p>
                                <button
                                    onClick={() => toggleDetails(index)}
                                    className="mt-4 text-[#60A5FA] flex items-center"
                                >
                                    {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                                    <span className="ml-2">{expandedIndex === index ? "Hide Details" : "See How We Dominate"}</span>
                                </button>
                                {expandedIndex === index && (
                                    <ul className="mt-2 list-disc list-inside text-gray-400 pl-5">
                                        {phase.details.map((detail, i) => (
                                            <li key={i}>{detail}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}