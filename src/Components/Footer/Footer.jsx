import React from 'react';
import { motion } from 'framer-motion';
import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaGlobe,
  FaEnvelope,
  FaMapMarkerAlt,
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaGithub />, href: '#' },
    { icon: <FaLinkedinIn />, href: '#' },
    { icon: <FaTwitter />, href: '#' },
    { icon: <FaGlobe />, href: '#' },
  ];

  const quickLinks = ['About', 'Skills', 'Projects', 'Services', 'Contact'];

  return (
    <footer className="bg-black text-white pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: CTA & Socials */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-20">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full md:w-[400px] py-4 bg-gradient-to-r from-green-900/40 via-green-500 to-green-400 rounded-2xl font-bold text-black flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(74,222,128,0.2)]"
          >
            Send Message
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
              />
            </svg>
          </motion.button>

          <div className="flex gap-4">
            {socialLinks.slice(0, 3).map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="w-12 h-12 bg-white/5 border border-white/10 rounded-xl flex items-center justify-center text-xl hover:bg-green-500 hover:text-black transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Middle Section: Links & Info */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-green-500">SHEPON</h2>
            <p className="text-gray-400 max-w-xs leading-relaxed">
              Crafting seamless digital experiences with modern web
              technologies.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-green-500/30 transition-colors">
                <FaEnvelope className="text-green-500" />
                <span className="text-sm text-gray-300">
                  alex@timetoprogram.com
                </span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-2xl group hover:border-green-500/30 transition-colors">
                <FaMapMarkerAlt className="text-green-500" />
                <span className="text-sm text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Quick Links with Underline Animation */}
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="text-gray-400 hover:text-white transition-colors relative group inline-block"
                  >
                    • {link}
                    {/* Underline Animation */}
                    <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-green-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect With Me */}
          <div>
            <h3 className="text-lg font-bold mb-6">Connect With Me</h3>
            <p className="text-gray-400 mb-6">
              Let's connect and create something amazing together.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center text-lg text-gray-400 hover:text-green-500 hover:border-green-500/50 transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {currentYear} Alex Johnson. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Built with <span className="text-green-500">💚</span> using React &
            Tailwind CSS
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
