import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Star } from 'lucide-react';
import { projects } from '../data/portfolio';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
      className={`glass-effect p-6 rounded-2xl relative overflow-hidden bg-black/40 ${
        project.highlight ? 'ring-2 ring-cosmic-purple shadow-2xl shadow-cosmic-purple/30' : ''
      }`}
    >
      {project.highlight && (
        <div className="absolute top-4 right-4">
          <Star className="text-yellow-400 fill-yellow-400" size={24} />
        </div>
      )}
      
      <h3 className="text-2xl font-bold mb-2" style={{ color: '#06b6d4', textShadow: '0 0 10px rgba(6, 182, 212, 0.5)' }}>
        {project.title}
      </h3>
      
      <p className="text-sm mb-3 font-semibold" style={{ color: '#a855f7', textShadow: '0 0 5px rgba(168, 85, 247, 0.5)' }}>
        {project.category}
      </p>
      
      <p className="mb-4 leading-relaxed" style={{ color: '#e5e7eb', textShadow: '0 0 5px rgba(0, 0, 0, 0.8)' }}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, i) => (
          <span
            key={i}
            className="px-3 py-1 bg-cosmic-purple/20 text-cosmic-blue text-sm rounded-full border border-cosmic-purple/30"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex items-center justify-between">
        <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
          project.status === 'Live' || project.status === 'Completed' 
            ? 'bg-green-500/20 text-green-400' 
            : project.status === 'Sold'
            ? 'bg-yellow-500/20 text-yellow-400'
            : 'bg-blue-500/20 text-blue-400'
        }`}>
          {project.status}
        </span>
        
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-cosmic-cyan hover:text-cosmic-blue transition-colors"
          >
            <span>Visit</span>
            <ExternalLink size={16} />
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
    <section id="projects" className="min-h-screen relative z-10 px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl md:text-6xl font-bold text-center mb-8"
          style={{ color: '#ffffff', textShadow: '0 0 20px rgba(99, 102, 241, 0.5)' }}
        >
          Projects Portfolio
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12 text-lg"
          style={{ color: '#e5e7eb', textShadow: '0 0 10px rgba(0, 0, 0, 0.8)' }}
        >
          {Object.values(projects).flat().length}+ projects across AI/ML, Web Development, and Entrepreneurship
        </motion.p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-gradient-to-r from-cosmic-purple to-cosmic-blue text-white shadow-lg shadow-cosmic-purple/50'
                  : 'glass-effect hover:bg-white/10'
              }`}
            >
              {cat.name}
            </motion.button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
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
