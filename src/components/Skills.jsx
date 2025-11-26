import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen flex items-center justify-center relative z-10 px-4 py-20">
      <div className="max-w-7xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-16"
          style={{ color: '#ffffff', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, categorySkills], catIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass-effect p-8 rounded-2xl bg-black/40"
            >
              <h3 className="text-2xl font-bold mb-6 text-cosmic-cyan" style={{ textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill, index) => (
                  <motion.span
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: catIndex * 0.1 + index * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-gradient-to-r from-cosmic-purple/30 to-cosmic-blue/30 text-white rounded-full border border-cosmic-purple/50 font-medium text-sm shadow-lg"
                    style={{ textShadow: '0 0 5px rgba(255, 255, 255, 0.5)' }}
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
