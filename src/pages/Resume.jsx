import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import ResumePDF from '../assets/sanjeet_kumar_gupta_resume.pdf'; // Make sure you have your resume.pdf in src/assets/

const Resume = () => {
  return (
    <section className="min-h-screen py-20 md:py-24 flex items-center bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <SectionHeader title="My Resume" />

        <motion.div
          className="bg-card-light dark:bg-card-dark rounded-lg shadow-xl p-8 md:p-10 lg:p-12 text-text-light dark:text-text-dark transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <p className="text-lg leading-relaxed mb-8">
            You can download my latest resume below to get a detailed overview of my education, experience, and skills.
          </p>
          <a
            href={ResumePDF}
            download="Sanjeet_Kumar_Gupta_Resume.pdf"
            className="inline-block px-10 py-4 bg-primary-light dark:bg-primary-dark text-white rounded-full text-xl font-semibold hover:bg-primary-dark dark:hover:bg-primary-light transition-all duration-300 shadow-lg"
            aria-label="Download Sanjeet Kumar Gupta's Resume"
          >
            Download Resume (PDF)
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
