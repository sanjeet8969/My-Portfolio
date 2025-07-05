// src/components/SectionHeader.js
import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-4xl font-bold text-center text-text-light dark:text-text-dark mb-12 relative pb-4"
    >
      {title}
      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-primary-light dark:bg-primary-dark rounded-full"></span>
    </motion.h2>
  );
};

export default SectionHeader;
