import React from 'react';
import { motion } from 'framer-motion';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300"
              style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 15px rgba(14, 165, 233, 0.1)' }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div className="mb-3 md:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">{exp.company}</h3>
                    <p className="text-lg font-semibold mb-1 text-primary-400">{exp.role}</p>
                    <p className="text-sm text-primary-300">{exp.project}</p>
                </div>
                <span className="glass-effect px-3 py-1.5 rounded-md text-xs font-medium text-slate-300">
                  {exp.period}
                </span>
              </div>
              <p className="leading-relaxed text-sm text-slate-300">{exp.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
