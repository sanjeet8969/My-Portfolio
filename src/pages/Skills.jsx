// src/pages/Skills.js
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { skills, skillIcons } from '../data';

const SkillCategory = ({ title, skillList }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div
      className="bg-card-light dark:bg-card-dark rounded-lg shadow-lg p-6 transition-colors duration-300"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.6 } }
      }}
    >
      <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-6 text-center">{title}</h3>
      <motion.div
        className="grid grid-cols-2 sm:grid-cols-3 gap-y-6 gap-x-4"
        variants={containerVariants}
      >
        {skillList.map((skill, index) => {
          const IconComponent = skillIcons[skill.icon];
          return (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center justify-center text-center p-2"
            >
              {IconComponent && <IconComponent className="text-4xl text-gray-700 dark:text-gray-300 mb-2" />}
              <span className="text-lg font-medium text-text-light dark:text-text-dark">{skill.name}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-20 md:py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="My Skills" />

        <div className="grid grid-cols-1 md:grid-cols-2  gap-6 lg:grid-cols-3 xl:grid-cols-4">
          <SkillCategory title="Languages" skillList={skills.languages} />
          <SkillCategory title="Frameworks" skillList={skills.frameworks} />
          <SkillCategory title="Tools & Databases" skillList={skills.toolsDatabases} />
          <SkillCategory title="Concepts" skillList={skills.concepts} />
        </div>
      </div>
    </section>
  );
};

export default Skills;

