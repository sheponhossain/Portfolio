import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  FaCode,
  FaDatabase,
  FaTools,
  FaReact,
  FaJs,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiVite,
} from 'react-icons/si';

const SkillCard = ({ title, icon, skills }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-[#0f160f] border border-green-900/30 p-8 rounded-[32px] shadow-2xl relative overflow-hidden group"
  >
    {/* Background Glow */}
    <div className="absolute -top-24 -right-24 w-48 h-48 bg-green-500/5 blur-[80px] group-hover:bg-green-500/10 transition-all duration-500" />

    <div className="flex items-center gap-3 mb-8">
      <div className="p-3 bg-green-500/10 rounded-xl text-green-500 text-xl">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-white tracking-tight">{title}</h3>
    </div>

    <div className="space-y-6">
      {skills.map((skill, index) => (
        <div key={index} className="space-y-2">
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-3 text-gray-300">
              <span className="text-green-500/80">{skill.icon}</span>
              <span className="font-medium">{skill.name}</span>
              <span className="text-[10px] text-gray-500 uppercase tracking-widest ml-1">
                {skill.years}
              </span>
            </div>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-full border tracking-tighter uppercase
              ${
                skill.level === 'Expert'
                  ? 'text-green-400 border-green-400/30 bg-green-400/5'
                  : skill.level === 'Advanced'
                    ? 'text-cyan-400 border-cyan-400/30 bg-cyan-400/5'
                    : 'text-yellow-400 border-yellow-400/30 bg-yellow-400/5'
              }`}
            >
              {skill.level}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="h-[6px] w-full bg-gray-800/50 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: skill.percentage }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="h-full bg-gradient-to-r from-green-600 to-green-400 rounded-full shadow-[0_0_10px_rgba(74,222,128,0.3)]"
            />
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function SkillsSection() {
  const categories = [
    {
      title: 'Frontend Development',
      icon: <FaCode />,
      skills: [
        {
          name: 'React.js',
          icon: <FaReact />,
          years: '0-1 years',
          level: 'Intermediate',
          percentage: '30%',
        },
        {
          name: 'JavaScript',
          icon: <FaJs />,
          years: '0-1 years',
          level: 'Intermediate',
          percentage: '60%',
        },
        {
          name: 'TypeScript',
          icon: <SiTypescript />,
          years: '0-6 years',
          level: 'Learning',
          percentage: '25%',
        },
        {
          name: 'Next.js',
          icon: <SiNextdotjs />,
          years: '0-6 years',
          level: 'Intermediate',
          percentage: '20%',
        },
        {
          name: 'Tailwind CSS',
          icon: <SiTailwindcss />,
          years: '1+ years',
          level: 'Intermediate',
          percentage: '85%',
        },
      ],
    },
    {
      title: 'Backend & APIs',
      icon: <FaDatabase />,
      skills: [
        {
          name: 'Node.js',
          icon: <FaNodeJs />,
          years: '0-1 years',
          level: 'Intermediate',
          percentage: '45%',
        },
        {
          name: 'REST APIs',
          icon: <SiExpress />,
          years: '0-1 years',
          level: 'Intermediate',
          percentage: '75%',
        },
      ],
    },
    {
      title: 'Tools & Others',
      icon: <FaTools />,
      skills: [
        {
          name: 'Git & GitHub',
          icon: <FaGitAlt />,
          years: '2+ years',
          level: 'Advanced',
          percentage: '88%',
        },
        {
          name: 'Responsive Design',
          icon: <FaCode />,
          years: '1+ years',
          level: 'Advanced',
          percentage: '98%',
        },
        {
          name: 'Figma',
          icon: <FaFigma />,
          years: '1+ years',
          level: 'Intermediate',
          percentage: '70%',
        },
        {
          name: 'Vite',
          icon: <SiVite />,
          years: '1+ years',
          level: 'Advanced',
          percentage: '80%',
        },
      ],
    },
  ];

  return (
    <section id="skills" className="bg-black py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">
            Skills & <span className="text-green-500">Technologies</span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
            A comprehensive overview of my technical skills and proficiency
            levels in building modern web applications.
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((cat, index) => (
            <SkillCard key={index} {...cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
