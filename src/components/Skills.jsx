import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-center mb-12 text-white"
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1, duration: 0.5 }}
              className="glass-effect p-6 rounded-xl hover:border-primary-500/50 transition-all duration-300"
              style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 15px rgba(14, 165, 233, 0.1)' }}
            >
              <h3 className="text-xl font-bold mb-4 text-primary-400">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {categorySkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.03 }}
                    className="px-3 py-1.5 bg-primary-500/10 text-slate-200 rounded-md border border-primary-500/30 font-medium text-xs hover:bg-primary-500/20 transition-colors"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
