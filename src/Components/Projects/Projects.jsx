import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaCode } from 'react-icons/fa';

const Projects = () => {
  const projectList = [
    {
      id: 1,
      title: 'Dragon News',
      desc: 'Google and GitHub social logins, email verification, and Context API to eliminate prop drilling in this dynamic news portal project',
      tags: ['Tailwind', 'React', 'Firebase', 'Stripe'],
      image: 'https://i.ibb.co.com/FbdVbScj/dragon-news.jpg',
      github: 'https://github.com/sheponhossain/Dragon-News',
      live: 'https://dragon-news-e70c9.web.app/category/0',
      stats: '40% increase in conversion',
    },
    {
      id: 2,
      title: 'TOY-GALAXY',
      desc: '"Local Toy Saler" is a modern online marketplace offering a curated collection of safe, creative, and high-quality toys for children from a trusted neighborhood shop.',
      tags: ['React', 'TypeScript', 'Firebase', 'Tailwind'],
      image:
        'https://i.ibb.co.com/mCRgZN2B/Screenshot-2026-01-08-at-17-21-45.png',
      github: 'https://github.com/sheponhossain/Toy-Galaxy',
      live: 'https://toy-galaxy-ph-09.web.app/',
      stats: '500+ active users',
    },
    {
      id: 3,
      title: 'Blood Donation',
      desc: 'Build a CRUD-based API to master data storage, updates, and deletions through seamless backend and database integration.',
      tags: ['Tailwind', 'React', 'Node.js', 'Express', 'MongoDB'],
      image:
        'https://i.ibb.co.com/9kSx39gw/Gemini-Generated-Image-ixlqzaixlqzaixlq.png',
      github: 'https://github.com/sheponhossain/Blood-Donation-Client.git',
      live: 'https://blood-donation-11.web.app/',
      stats: '1K+ donors registered',
    },
  ];

  return (
    <section id="projects" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <div className="text-center mb-24">
              <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
                Featured <span className="text-green-500">Projects</span>
              </h2>
            </div>
          </motion.h2>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectList.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-[#0f0f0f] border border-white/10 rounded-3xl overflow-hidden hover:border-green-500/50 transition-all duration-500 shadow-2xl"
            >
              {/* Image Container */}
              <div className="relative h-60 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0f0f] to-transparent opacity-60"></div>

                {/* Floating Action Buttons */}
                <div className="absolute top-4 right-4 flex gap-2 translate-y-[-50px] group-hover:translate-y-0 transition-transform duration-500">
                  <a
                    href={project.github}
                    className="p-3 bg-black/50 backdrop-blur-md rounded-full hover:bg-green-500 hover:text-black transition-colors"
                  >
                    <FaGithub />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 bg-black/50 backdrop-blur-md rounded-full hover:bg-green-500 hover:text-black transition-colors"
                  >
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <FaCode className="text-green-500 text-sm" />
                  <span className="text-xs font-mono text-green-500 uppercase tracking-widest">
                    Web Application
                  </span>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-green-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-6">
                  {project.desc}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Stats / Achievement */}
                <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-green-500/80 text-xs italic">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    {project.stats}
                  </div>
                  <motion.a
                    href={project.live}
                    whileTap={{ scale: 0.95 }}
                    className="text-sm font-semibold flex items-center gap-2 hover:underline underline-offset-4"
                  >
                    View Project
                  </motion.a>
                </div>
              </div>

              {/* Background Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
