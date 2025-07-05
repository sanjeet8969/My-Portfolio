import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionHeader from '../components/SectionHeader';
import { FaEnvelope, FaPhone, FaGithub, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState(''); // 'success', 'error', 'submitting', ''

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    // --- IMPORTANT: This is a frontend-only form. ---
    // For a real-world application, you would integrate a backend service here.
    // Options:
    // 1. Formspree.io: Simple, works with plain HTML forms.
    // 2. Netlify Forms / Vercel Forms: If deploying on these platforms.
    // 3. Custom Backend: Node.js/Express, Python/Flask, etc., with email sending (e.g., Nodemailer).
    // For this example, we'll simulate a delay.

    console.log('Form data submitted:', formData);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Example of a Formspree submission (uncomment and replace YOUR_FORMSPREE_FORM_ID)
      /*
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' }); // Clear form
      } else {
        setStatus('error');
      }
      */

      // Assuming success for the simulated example
      setStatus('success');
      setFormData({ name: '', email: '', message: '' }); // Clear form

    } catch (error) {
      console.error('Error submitting form:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 md:py-24 bg-background-light dark:bg-background-dark transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="Contact Me" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="bg-card-light dark:bg-card-dark rounded-lg shadow-xl p-8 transition-colors duration-300"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-6">Get in Touch</h3>
            <p className="text-lg text-blue-800 dark:text-secondary-dark mb-6">
              Feel free to reach out to me via email or phone, or connect with me on social media. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>


            <div className="space-y-4">
              <div className="flex items-center text-text-light dark:text-text-dark">
                <FaEnvelope className="text-primary-light dark:text-primary-dark mr-3 text-2xl" />
                <a href="mailto:sanjeetskg1212@gmail.com" className="text-lg hover:underline">sanjeetskg1212@gmail.com</a>
              </div>
              <div className="flex items-center text-text-light dark:text-text-dark">
                <FaPhone className="text-primary-light dark:text-primary-dark mr-3 text-2xl" />
                <a href="tel:8210115608" className="text-lg hover:underline">8210115608</a>
              </div>
            </div>

            <div className="flex space-x-6 mt-8 justify-center md:justify-start">
              <a
                href="https://github.com/SanjeetKumarGupta"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
                aria-label="GitHub Profile"
              >
                <FaGithub size={30} />
              </a>
              <a
                href="https://www.linkedin.com/in/sanjeet-kumar-gupta-267923232/" // Replace with your LinkedIn
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-light dark:text-gray-400 dark:hover:text-primary-dark transition-colors duration-300"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-card-light dark:bg-card-dark rounded-lg shadow-xl p-8 transition-colors duration-300"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <h3 className="text-2xl font-bold text-primary-light dark:text-primary-dark mb-6">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-200 text-text-light dark:text-text-dark rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-200 text-text-light dark:text-text-dark rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-colors duration-300"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-light dark:text-text-dark mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-200 text-text-light dark:text-text-dark rounded-md border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-primary-light dark:focus:ring-primary-dark focus:border-transparent transition-colors duration-300"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full px-6 py-3 bg-primary-light dark:bg-primary-dark text-white rounded-md font-semibold hover:bg-primary-dark dark:hover:bg-primary-light transition-all duration-300"
                disabled={status === 'submitting'}
              >
                {status === 'submitting' ? 'Sending...' : 'Send Message'}
              </button>
              {status === 'success' && (
                <p className="text-green-600 dark:text-green-400 text-center mt-3">Message sent successfully!</p>
              )}
              {status === 'error' && (
                <p className="text-red-600 dark:text-red-400 text-center mt-3">Failed to send message. Please try again later.</p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
