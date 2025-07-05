// src/pages/About.js
import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';


const About = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section className="py-20 md:py-24 bg-background-light dark:bg-background-dark transition-colors duration-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="About Me" />

        <motion.div
          className="bg-card-light dark:bg-card-dark rounded-lg shadow-xl p-8 md:p-10 lg:p-12 text-text-light dark:text-text-dark transition-colors duration-300"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } }
          }}
        >
          <motion.p variants={textVariants} className="text-lg leading-relaxed mb-8">
            Hello! I am Sanjeet Kumar Gupta, a pre-final year Computer Science student and Aspiring Software Engineer with hands-on experience in full-stack web development, primarily using the MERN stack (MongoDB, Express.js, React, Node.js). I’m proficient in building scalable web applications with clean architecture, RESTful APIs, and responsive user interfaces.I have a strong foundation in Data Structures and Algorithms (DSA) and Object-Oriented Programming, which helps me write optimized and maintainable code.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <motion.h3 variants={textVariants} className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">Education</motion.h3>
              <motion.p variants={textVariants} className="text-lg">
                <span className="font-semibold">
    University College of Engineering and Technology, Hazaribagh
  </span>
  <br />
  <br />
  Pre-final year B.Tech student in Computer Science and Engineering<br />
              </motion.p>
            </div>
            <div>
              <motion.h3 variants={textVariants} className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">Tech Stack</motion.h3>
              <motion.ul variants={listVariants} className="list-disc list-inside text-lg space-y-1">
                <motion.li variants={listItemVariants}>MERN Stack (MongoDB, Express.js, React, Node.js)</motion.li>
                <motion.li variants={listItemVariants}>C++,JAVA, C</motion.li>
                <motion.li variants={listItemVariants}>Data Structures & Algorithms (DSA)</motion.li>
                <motion.li variants={listItemVariants}>Object-Oriented Programming (OOP)</motion.li>
              </motion.ul>
            </div>
          </div>

          <motion.h3 variants={textVariants} className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">Interests</motion.h3>
          <motion.ul variants={listVariants} className="list-disc list-inside text-lg space-y-1 mb-8">
            <motion.li variants={listItemVariants}>AI-Driven Web Applications</motion.li>
            <motion.li variants={listItemVariants}>Scalable System Design</motion.li>
            <motion.li variants={listItemVariants}>Open Source Contribution</motion.li>
          </motion.ul>

          <motion.h3 variants={textVariants} className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-4">Career Goal</motion.h3>
          <motion.p variants={textVariants} className="text-lg leading-relaxed">
           As a passionate and dedicated pre-final year engineering student with a strong foundation in full-stack development, system design, and data structures, my goal is to become a skilled software engineer capable of building scalable and impactful digital solutions. I aim to work in dynamic, innovation-driven environments where I can contribute to meaningful projects, collaborate with talented teams, and continuously grow my technical and problem-solving abilities. In the long term, I aspire to lead and architect high-performance systems that address real-world challenges through the power of technology.
            </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
