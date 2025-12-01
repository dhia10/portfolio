import React from 'react';
import { motion } from 'framer-motion';
import { hobbies } from '../data/portfolio';

const Hobbies = () => {
  return (
    <section id="hobbies" className="min-h-screen flex items-center justify-center relative z-10 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-6xl w-full">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 text-white"
          style={{ textShadow: '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' }}
        >
          Hobbies & Interests
        </motion.h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-effect p-4 sm:p-5 rounded-xl hover:border-primary-500/50 transition-all duration-300 group hover:scale-105"
              style={{ boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.3), 0 0 15px rgba(14, 165, 233, 0.1)' }}
            >
              <h3 className="text-base sm:text-lg font-semibold text-center text-white group-hover:text-primary-400 transition-colors duration-300">
                {hobby.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hobbies;
