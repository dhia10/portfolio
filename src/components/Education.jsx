import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          style={{ color: '#ffffff', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
        >
          Education
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-effect p-8 rounded-2xl hover:scale-105 transition-transform duration-300 bg-black/40"
            >
              <h3 className="text-3xl font-bold mb-2" style={{ color: '#06b6d4', textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>{edu.institution}</h3>
              <p className="text-xl font-semibold mb-2" style={{ color: '#3b82f6', textShadow: '0 0 5px rgba(59, 130, 246, 0.5)' }}>{edu.degree}</p>
              <p className="mb-4 text-lg" style={{ color: '#9ca3af', textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}>{edu.period}</p>
              <p className="leading-relaxed text-lg" style={{ color: '#e5e7eb', textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}>{edu.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
