import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export const WhyUs = () => {
  const [inView, setInView] = useState(false);
  const [highlightIndex, setHighlightIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const text = "Aquiras Solutions is your dedicated IT partner. With years of experience and strong vendor partnerships, we deliver tailored, cost-effective solutions. Choose us for expertise, reliability, and lasting success.";
  const words = text.split(" ");
  const wordsPerHighlight = 3;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setInView(entry.isIntersecting);
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (inView) {
      const intervalId = setInterval(() => {
        setHighlightIndex(prevIndex => (prevIndex + wordsPerHighlight) % words.length);
      }, 1500); // Adjust interval for desired reading speed

      return () => clearInterval(intervalId);
    }
  }, [inView]);

  return (
    <section id="who-we-are" className="py-16" ref={sectionRef}>
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center justify-center px-4 py-1.5 mb-8 border border-gray-800 rounded-full items-center"
        >
          <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse mr-2" />
          <span className="text-[13px] text-gray-300">Why Us</span>
        </motion.div>
        <div className="text-center mx-auto relative overflow-hidden">
          <p className="mt-4 leading-10 text-3xl md:text-4xl lg:text-5xl text-gray-300 whitespace-pre-line relative">
            {words.map((word, index) => {
              const shouldHighlight = index >= highlightIndex && index < highlightIndex + wordsPerHighlight;
              const wrappedIndex = highlightIndex + wordsPerHighlight - words.length

              if (highlightIndex + wordsPerHighlight > words.length) {
                if (index <= wrappedIndex) {
                  return (
                    <span key={index} className={shouldHighlight ? 'text-[#000000] bg-[#60a5fa]/70 rounded-sm transition-all duration-300' : ''}>
                      {word}{' '}
                    </span>)
                }
              }
              return (
                <span key={index} className={shouldHighlight ? 'text-[#000000] bg-[#60a5fa]/70 rounded-xs transition-all duration-300' : ''}>
                  {word}{' '}
                </span>
              )
            })}
          </p>
        </div>
      </div>
    </section>
  );
};