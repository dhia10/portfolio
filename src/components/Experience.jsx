import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          style={{ color: '#ffffff', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-2xl hover:shadow-2xl hover:shadow-cosmic-purple/20 transition-all duration-300 bg-black/40"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ color: '#06b6d4', textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>{exp.company}</h3>
                    <p className="text-xl font-semibold mb-1" style={{ color: '#3b82f6', textShadow: '0 0 5px rgba(59, 130, 246, 0.5)' }}>{exp.role}</p>
                    <p className="text-lg" style={{ color: '#a855f7', textShadow: '0 0 5px rgba(168, 85, 247, 0.5)' }}>{exp.project}</p>
                </div>
                <span className="glass-effect px-4 py-2 rounded-full text-sm font-medium">
                  {exp.period}
                </span>
              </div>
              <p className="leading-relaxed text-lg" style={{ color: '#e5e7eb', textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}>{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
