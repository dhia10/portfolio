import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className={`glass-effect p-4 sm:p-5 md:p-6 rounded-xl relative overflow-hidden hover:border-primary-500/50 transition-all duration-300 ${
        project.highlight ? 'ring-2 ring-primary-500/50 shadow-2xl shadow-primary-500/20' : ''
      }`}
      style={project.highlight ? { boxShadow: '0 0 40px rgba(14, 165, 233, 0.3)' } : {}}
    >
      {project.highlight && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4">
          <Star className="text-amber-400 fill-amber-400" size={16} />
        </div>
      )}
      
      <h3 className="text-lg sm:text-xl font-bold mb-2 text-white pr-6">
        {project.title}
      </h3>
      
      <p className="text-xs sm:text-sm mb-3 font-medium text-primary-400">
        {project.category}
      </p>
      
      <p className="mb-4 leading-relaxed text-slate-300 text-xs sm:text-sm">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-2.5 py-1 bg-primary-500/10 text-primary-300 text-xs rounded-md border border-primary-500/30"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-md text-xs font-semibold ${
          project.status === 'Live' || project.status === 'Completed' 
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
            : project.status === 'Sold'
            ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
            : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
        }`}>
          {project.status}
        </span>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-primary-400 hover:text-primary-300 transition-colors text-sm"
          >
            <span>Visit</span>
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'ai_ml', name: 'AI & Machine Learning' },
    { id: 'ecosystem', name: 'ProjectLib Ecosystem' },
    { id: 'sold_apps', name: 'Sold Applications' },
    { id: 'web_dev', name: 'Web Development' }
  ];
  
  const getFilteredProjects = () => {
    if (activeCategory === 'all') {
      return Object.values(projects).flat();
    }
    return projects[activeCategory] || [];
  };
  
  const filteredProjects = getFilteredProjects();
  
  return (
    <section id="projects" className="min-h-screen relative z-10 px-4 sm:px-6 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-3 sm:mb-4 text-white"
          style={{ textShadow: '0 0 30px rgba(14, 165, 233, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' }}
        >
          Projects Portfolio
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 text-sm sm:text-base text-slate-300"
        >
          {Object.values(projects).flat().length}+ projects across AI/ML, Web Development, and Entrepreneurship
        </motion.p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 rounded-lg font-medium transition-all duration-300 text-xs sm:text-sm ${
                activeCategory === cat.id
                  ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                  : 'glass-effect hover:bg-primary-500/10 hover:border-primary-500/50'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-400 text-xl mt-12"
          >
            No projects in this category yet.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Projects;
