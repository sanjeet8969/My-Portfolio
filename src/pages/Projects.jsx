// src/pages/Projects.js
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { projects } from '../data';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project }) => {
  return (
    <motion.div
      className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg hover:shadow-xl p-6 transition-all duration-300 border border-gray-200 dark:border-gray-700 flex flex-col h-full"
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-3">{project.title}</h3>
      <p className="text-secondary-light dark:text-secondary-dark mb-4 flex-grow">{project.description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {project.techStack.map((tech, index) => (
          <span key={index} className="bg-gray-100 dark:bg-gray-700 text-sm font-medium text-gray-700 dark:text-gray-200 px-3 py-1 rounded-full">
            {tech}
          </span>
        ))}
      </div>
      <div className="flex justify-end gap-4 mt-auto">
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
            aria-label={`GitHub repository for ${project.title}`}
          >
            <FaGithub size={24} />
          </a>
        )}
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
            aria-label={`Live demo for ${project.title}`}
          >
            <FaExternalLinkAlt size={24} />
          </a>
        )}
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const filteredProjects = filter === 'All'
    ? projects
    : projects.filter(project => project.category === filter);

  return (
    <section className="py-20 md:py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="My Projects" />

        {/* Project Filtering */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === cat
                  ? 'bg-primary-light text-white dark:bg-primary-dark'
                  : 'bg-gray-200 text-gray-700 hover:bg-primary-light hover:text-white dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-primary-dark dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        {filteredProjects.length === 0 && (
          <motion.p
            className="text-center text-secondary-light dark:text-secondary-dark text-lg mt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            No projects found for this category.
          </motion.p>
        )}
      </div>
    </section>
  );
};

export default Projects;
