import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import {
  LuLayoutTemplate,
  LuSmartphone,
  LuPalette,
  LuCode,
  LuZap,
  LuSearchCode,
} from 'react-icons/lu';

// eslint-disable-next-line no-unused-vars
const ServiceCard = ({ title, description, icon: Icon, isFeatured }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    whileHover={{ y: -8, transition: { duration: 0.2 } }}
    className={`relative p-8 rounded-[32px] border transition-all duration-300 group overflow-hidden h-full ${
      isFeatured
        ? 'bg-green-950/20 border-green-500/40 shadow-[0_0_40px_rgba(34,197,94,0.15)]'
        : 'bg-[#0f110f] border-white/5 hover:border-green-500/30 shadow-xl'
    }`}
  >
    <div
      className="absolute inset-0 opacity-[0.03] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1h18v18H1V1z' fill='none' stroke='white' stroke-width='1'/%3E%3C/svg%3E")`,
      }}
    />

    <div
      className={`inline-flex p-4 rounded-2xl mb-6 transition-all duration-300 ${
        isFeatured
          ? 'bg-green-500 text-black scale-110'
          : 'bg-green-500/10 text-green-500 group-hover:bg-green-500 group-hover:text-black group-hover:rotate-6'
      }`}
    >
      <Icon size={28} />
    </div>

    <h3
      className={`text-2xl font-bold mb-4 transition-colors ${
        isFeatured ? 'text-green-500' : 'text-white group-hover:text-green-500'
      }`}
    >
      {title}
    </h3>

    <p className="text-gray-400 leading-relaxed text-sm md:text-base opacity-80 group-hover:opacity-100 transition-opacity">
      {description}
    </p>

    <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-green-500/5 blur-[50px] group-hover:bg-green-500/20 transition-all" />
  </motion.div>
);

export default function ServicesSection() {
  const services = [
    {
      title: 'Frontend Development',
      description:
        'Building responsive and performant web applications using React, Next.js, and modern JavaScript frameworks with pixel-perfect designs.',
      icon: LuLayoutTemplate,
      isFeatured: false,
      gridClass: 'lg:col-span-2',
    },
    {
      title: 'Responsive Design',
      description:
        'Creating mobile-first, responsive interfaces that work seamlessly across all devices and screen sizes with exceptional user experience.',
      icon: LuSmartphone,
      isFeatured: true,
      gridClass: 'lg:col-span-2',
    },

    {
      title: 'UI/UX Design',
      description:
        'Intuitive interfaces focusing on usability and accessibility.',
      icon: LuPalette,
      isFeatured: false,
      gridClass: 'lg:col-span-1',
    },
    {
      title: 'Custom Components',
      description: 'Scalable component libraries and design systems.',
      icon: LuCode,
      isFeatured: false,
      gridClass: 'lg:col-span-1',
    },
    {
      title: 'Performance',
      description:
        'Speed optimization through code splitting and lazy loading.',
      icon: LuZap,
      isFeatured: false,
      gridClass: 'lg:col-span-1',
    },
    {
      title: 'Consulting',
      description: 'Technical guidance and expert code reviews.',
      icon: LuSearchCode,
      isFeatured: false,
      gridClass: 'lg:col-span-1',
    },
  ];

  return (
    <section
      id="services"
      className="relative bg-black py-24 px-6 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(#1a2e1a 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-gray-400 uppercase tracking-[0.3em] text-xs font-bold"
          ></motion.h2>
          <div className="text-center mb-24">
            <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
              <span className="text-green-500">Service</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div key={index} className={`${service.gridClass}`}>
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
