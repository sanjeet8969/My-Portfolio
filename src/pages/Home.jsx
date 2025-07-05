// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProfilePhoto from '../assets/profile.jpg'; // Make sure you have your profile.jpg in src/assets/
const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16 px-4 py-8 md:py-16 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <motion.div
        className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto text-center md:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="flex-shrink-0">
          <motion.img
            src={ProfilePhoto}
            alt="Sanjeet Kumar Gupta"
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-4 border-primary-light dark:border-primary-dark shadow-lg"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
          />
        </motion.div>

        <div className="flex-1">
          <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-light dark:text-text-dark leading-tight mb-4">
            Hi, I’m <span className="text-primary-light dark:text-primary-dark">Sanjeet Kumar Gupta</span>
          </motion.h1>
          <motion.p variants={itemVariants} className="text-xl sm:text-2xl text-secondary-light dark:text-secondary-dark mb-8">
            a <span className="font-semibold">Full Stack Web Developer</span> passionate about building scalable web applications and learning cutting-edge technologies.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <Link to="/projects">
              <motion.button
                className="px-8 py-3 bg-card-light dark:bg-card-dark text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark rounded-full text-lg font-semibold hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.button>
            </Link>
            <a href="/sanjeet_kumar_gupta_resume.pdf" download="Sanjeet_Kumar_Gupta_Resume.pdf">
              <motion.button
                className="px-8 py-3 bg-card-light dark:bg-card-dark text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark rounded-full text-lg font-semibold hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Download Resume
                
              </motion.button>
            </a>
            <Link to="/contact">
              <motion.button
                className="px-8 py-3 bg-card-light dark:bg-card-dark text-primary-light dark:text-primary-dark border border-primary-light dark:border-primary-dark rounded-full text-lg font-semibold hover:bg-primary-light hover:text-white dark:hover:bg-primary-dark dark:hover:text-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, boxShadow: "0 10px 15px rgba(0,0,0,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Me
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Home;
