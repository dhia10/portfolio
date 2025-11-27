import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Education
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold mb-2 text-white">{edu.institution}</h3>
              <p className="text-lg font-semibold mb-2 text-primary-400">{edu.degree}</p>
              <p className="mb-3 text-sm text-slate-400">{edu.period}</p>
              <p className="leading-relaxed text-sm text-slate-300">{edu.focus}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
