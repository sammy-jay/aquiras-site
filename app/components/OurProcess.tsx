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
        description: "This isn't about generic solutions; it's about engineering a custom-built AI system that's perfectly tailored to your unique needs. We'll map out a strategic blueprint to turn your business into a lead-generating, revenue-multiplying machine.",
        details: [
            "We'll design a custom AI system architecture based on our findings from the discovery phase.",
            "You’ll get a visual blueprint detailing every step of the process, from lead capture to customer conversion.",
            "We’ll present a rock-solid ROI projection, showing you the exact financial impact our AI system will deliver."
        ],
    },
    {
        title: "Phase 3: Deploy & Dominate",
        description: "Now it’s time to unleash the power. We'll build, test, and integrate your custom AI system seamlessly into your existing operations, ensuring a smooth transition and immediate results. This isn't just implementation; it's about domination.",
        details: [
            "Our expert team will handle the entire development and deployment process, minimizing disruption to your business.",
            "We'll conduct rigorous testing to ensure flawless performance and maximum ROI.",
            "You'll receive comprehensive training and ongoing support to ensure you're maximizing the system's potential."
        ],
    },
    {
        title: "Phase 4: Optimize & Scale",
        description: "We don't just set it and forget it. This is about continuous refinement and relentless pursuit of improvement. We'll constantly analyze performance, identify new opportunities, and scale your AI system to fuel unstoppable growth.",
        details: [
            "We'll provide ongoing monitoring, maintenance, and optimization to ensure your AI system is always performing at its peak.",
            "We’ll proactively identify new opportunities to leverage AI to drive further growth and efficiency.",
            "You'll have a dedicated partner committed to maximizing the long-term ROI of your AI investment."
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
                        A battle-tested system for transforming your business with AI, guaranteed to deliver results.
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