import React from 'react';
import { motion } from 'framer-motion';
import { Github, Mail, Briefcase } from 'lucide-react';
import { personalInfo, businessActivities } from '../data/portfolio';

const Footer = () => {
  return (
    <footer id="contact" className="relative z-10 px-4 sm:px-6 py-12 sm:py-16 mt-16 sm:mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Business Activities */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 sm:mb-16"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8 text-white">
            Additional Activities
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {businessActivities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect p-5 sm:p-6 rounded-xl text-center bg-black/40"
              >
                <h4 className="text-base sm:text-lg font-bold mb-2 text-primary-400">
                  {activity.title}
                </h4>
                <p className="text-xs sm:text-sm text-slate-300">{activity.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Contact Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-effect p-6 sm:p-8 rounded-2xl mb-8 sm:mb-12 text-center bg-black/40"
        >
          <h3 className="text-2xl sm:text-3xl font-bold mb-3 sm:mb-4 text-white">
            Let's Work Together
          </h3>
          <p className="mb-5 sm:mb-6 text-sm sm:text-base text-slate-300">
            Interested in AI/ML solutions, web development, or entrepreneurial ventures?
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <a
              href={`mailto:${personalInfo.email}`}
              className="glass-effect px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 text-sm"
            >
              <Mail size={18} />
              <span>Email Me</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect px-4 sm:px-5 py-2 sm:py-2.5 rounded-lg flex items-center gap-2 hover:bg-primary-500/10 hover:border-primary-500/50 transition-all duration-300 hover:scale-105 text-sm"
            >
              <Github size={18} />
              <span>GitHub</span>
            </a>
          </div>
        </motion.div>
        
        {/* Footer Bottom */}
        <div className="text-center text-gray-400">
          <p className="text-xs sm:text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
