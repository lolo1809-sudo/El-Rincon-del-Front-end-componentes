import {
  FaGithub,
  FaLinkedin,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaGitAlt,
} from "react-icons/fa";

import { SiTypescript, SiTailwindcss, SiVite } from "react-icons/si";

export const profileData = {
  name: "Tu nombre",
  role: "Desarrollador",
  photoUrl: "la-url-de-tu-foto-aqí",
  socials: [
    { icon: FaGithub, link: "tu-github" },
    {
      icon: FaLinkedin,
      link: "tu-linkedin",
    },
  ],
};

export const experienceData = [
  {
    id: 1,
    date: "Marzo 2025 - Noviembre 2025",
    role: "Tu rol",
    company: "Compañía",
    description: ["Descripción"],
  },
  {
    id: 2,
    date: "Noviembre 2025 - Febrero 2026",
    role: "Tu rol",
    company: "Compañía",
    description: ["Descripción"],
  },
];

export const projectsData = [
  {
    id: 1,
    title: "Tu Proyecto",
    year: "2026",
    description: "Descripción del proyecto",
    imageUrl: "url_img_del_proyecto",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  {
    id: 1,
    title: "Tu Proyecto",
    year: "2026",
    description: "Descripción del proyecto",
    imageUrl: "url_img_del_proyecto",
    stack: [
      { icon: FaReact, name: "React" },
      { icon: SiTailwindcss, name: "Tailwind" },
    ],
  },
  // tus otros proyectos
];

export const skillsData = [
  { name: "HTML5", icon: FaHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React", icon: FaReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Vite", icon: SiVite },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
];
