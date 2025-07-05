//import icon from 'react-icons/bi';

        // Bi icons
// BoxIcons
import {
 // SiC,
  //SiCplusplus,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiWordpress,
  SiDatabricks,       // for DataTables (optional)
  SiAuth0,            // for Authentication (or use SiShield)
  SiRedux,            // add if using Redux
  SiPostman,          // add if using API tools
  SiTailwindcss
} from "react-icons/si";

import { TbApi, TbShieldCheck, TbBinaryTree, TbBrandCpp } from "react-icons/tb"; // extra stylized dev icons

import {
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoWordpress,
  BiSelectMultiple,
  BiTable,
  BiCode,
  BiShapePolygon,
  BiRss,
  BiShield
} from "react-icons/bi";

import {
  SiC,
  SiCplusplus
} from "react-icons/si";





export const projects = [
  {
    id: 1,
    title: "Online Institute Management System",
    description: "A comprehensive platform to manage courses, students, and instructors for an online institute. Features include user authentication, role-based access control, course enrollment, and progress tracking.",
    techStack: ["Node.js", "Express.js", "MongoDB", "EJS", "JWT"],
    githubLink: "https://github.com/SanjeetKumarGupta/online-institute-management-system", // Replace with your actual link
    liveLink: null, // If you have a deployed link, add it here
    category: "Node.js"
  },
  {
    id: 2,
    title: "E-Commerce Product Listing App",
    description: "A mobile application (built with React Native) for browsing and listing e-commerce products. Includes features like product search, detailed views, and user reviews.",
    techStack: ["React Native", "Redux", "Firebase", "Expo"],
    githubLink: "https://github.com/SanjeetKumarGupta/ecommerce-product-listing-app", // Replace with your actual link
    liveLink: null,
    category: "React"
  },
  // {
  //   id: 3,
  //   title: "WordPress Plugin with Dynamic Filtering",
  //   description: "A custom WordPress plugin that extends functionality with dynamic content filtering based on various criteria (e.g., categories, tags, custom fields), enhancing user experience on large content sites.",
  //   techStack: ["WordPress", "PHP", "JavaScript", "AJAX", "MySQL"],
  //   githubLink: "https://github.com/SanjeetKumarGupta/wordpress-dynamic-filter-plugin", // Replace with your actual link
  //   liveLink: null,
  //   category: "WordPress"
  // },
  {
     id: 3,
  title: "Work Finder – MERN Job Portal",
  description: "A full-stack job platform built with the MERN stack where users can register, post jobs, search with filters, and apply with a user dashboard. The app features authentication, role management, and real-time updates.",
  techStack: ["MongoDB", "Express", "React", "Node.js", "JWT", "Tailwind CSS"],
  githubLink: "https://github.com/SanjeetKumarGupta/work-finder",
  liveLink: "https://work-finder-m7mo.onrender.com/",
  category: "Full Stack"
  },
  // Add more projects here
  // {
  //   id: 4,
  //   title: "Another Cool Project",
  //   description: "Description of your fourth project.",
  //   techStack: ["React", "Tailwind CSS"],
  //   githubLink: "https://github.com/SanjeetKumarGupta/another-project",
  //   liveLink: null,
  //   category: "React"
  // },
];

export const skills = {
  // languages: [
  //   { name: "C++", icon: "SiCplusplus" },
  //   { name: "C", icon: "SiC" },
  //   { name: "JavaScript", icon: "BiLogoJavascript" },
  //   { name: "HTML", icon: "BiLogoHtml5" },
  //   { name: "CSS", icon: "BiLogoCss3" },
  // ],
  // frameworks: [
  //   { name: "React", icon: "BiLogoReact" },
  //   { name: "Node.js", icon: "BiLogoNodejs" },
  //   { name: "Express.js", icon: "BiLogoNodejs" }, // Node.js icon for Express too
  // ],
  // toolsDatabases: [
  //   { name: "MongoDB", icon: "BiLogoMongodb" },
  //   { name: "Git", icon: "BiLogoGit" },
  //   { name: "WordPress", icon: "BiLogoWordpress" },
  //   { name: "Select2", icon: "BiSelectMultiple" }, // Using a generic icon
  //   { name: "DataTables", icon: "BiTable" }, // Using a generic icon
  // ],
  // concepts: [
  //   { name: "DSA", icon: "BiCode" },
  //   { name: "OOP", icon: "BiShapePolygon" }, // Generic icon for OOP
  //   { name: "REST APIs", icon: "BiRss" },
  //   { name: "Authentication", icon: "BiShield" },
  // ],
  languages: [
  { name: "C++", icon: "SiCplusplus" },
  { name: "C", icon: "SiC" },
  { name: "JavaScript", icon: "SiJavascript" },
  { name: "HTML", icon: "SiHtml5" },
  { name: "CSS", icon: "SiCss3" },
],

frameworks: [
  { name: "React", icon: "SiReact" },
  { name: "Node.js", icon: "SiNodedotjs" },
  { name: "Express.js", icon: "SiExpress" },
  {name:"Tailwind CSS", icon:"SiTailwindcss"},
],

toolsDatabases: [
  { name: "MongoDB", icon: "SiMongodb" },
  { name: "Git", icon: "SiGit" },
  { name: "WordPress", icon: "SiWordpress" },
  { name: "Select2", icon: "SiDatabricks" }, // Placeholder icon
  { name: "DataTables", icon: "SiDatabricks" }, // Same or alternate
],

concepts: [
  { name: "DSA", icon: "TbBinaryTree" },
  { name: "OOP", icon: "SiRedux" }, // Optional placeholder
  { name: "REST APIs", icon: "TbApi" },
  { name: "Authentication", icon: "TbShieldCheck" },
],

};

// Map string names to actual react-icons components
export const skillIcons = {
  // BiLogoCPlusPlus:import('react-icons/bi').BiLogoCPlusPlus,
  // BiLogoC: import('react-icons/bi').BiLogoC,
  // BiLogoJavascript: import('react-icons/bi').BiLogoJavascript,
  // BiLogoHtml5: import('react-icons/bi').BiLogoHtml5,
  // BiLogoCss3: import('react-icons/bi').BiLogoCss3,
  // BiLogoReact: import('react-icons/bi').BiLogoReact,
  // BiLogoNodejs: import('react-icons/bi').BiLogoNodejs,
  // BiLogoMongodb: import('react-icons/bi').BiLogoMongodb,
  // BiLogoGit: import('react-icons/bi').BiLogoGit,
  // BiLogoWordpress: import('react-icons/bi').BiLogoWordpress,
  // BiSelectMultiple: import('react-icons/bi').BiSelectMultiple,
  // BiTable: import('react-icons/bi').BiTable,
  // BiCode: import('react-icons/bi').BiCode,
  // BiShapePolygon: import('react-icons/bi').BiShapePolygon,
  // BiRss: import('react-icons/bi').BiRss,
  // BiShield: import('react-icons/bi').BiShield,
  // // Social icons
  // FaGithub: import('react-icons/fa').FaGithub,
  // FaLinkedin: import('react-icons/fa').FaLinkedin,
  // FaPhone: import('react-icons/fa').FaPhone,
  // FaEnvelope: import('react-icons/fa').FaEnvelope,
  BiLogoJavascript,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoReact,
  BiLogoNodejs,
  BiLogoMongodb,
  BiLogoGit,
  BiLogoWordpress,
  BiSelectMultiple,
  BiTable,
  BiCode,
  BiShapePolygon,
  BiRss,
  BiShield,
  SiC,
  SiCplusplus,
   SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGit,
  SiTailwindcss,
  SiWordpress,
  SiDatabricks,       // for DataTables (optional)
  SiAuth0,            // for Authentication (or use SiShield)
  SiRedux,            // add if using Redux
  SiPostman,TbApi, TbShieldCheck, TbBinaryTree, TbBrandCpp
};
