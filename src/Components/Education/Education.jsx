import React, { useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

// ১. কার্ড কম্পোনেন্ট (Internal Component)
const EducationCard = ({ edu, index, scrollYProgress }) => {
  const step = 1 / 3;
  const cardStart = index * step;
  const impactPoint = cardStart + 0.12;
  const flowEnd = impactPoint + 0.05;

  const lightWidth = useTransform(
    scrollYProgress,
    [impactPoint, flowEnd],
    ['0%', '100%']
  );

  const lightOpacity = useTransform(
    scrollYProgress,
    [impactPoint, impactPoint + 0.01],
    [0, 1]
  );

  const borderGlow = useTransform(
    scrollYProgress,
    [impactPoint, flowEnd],
    ['rgba(255, 255, 255, 0.1)', 'rgba(34, 197, 94, 1)']
  );

  return (
    <div
      className={`flex items-center w-full relative mb-32 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <motion.div
        style={{
          opacity: useTransform(
            scrollYProgress,
            [cardStart, impactPoint],
            [0.3, 1]
          ),
        }}
        className="w-full md:w-[45%] ml-12 md:ml-0"
      >
        <motion.div
          style={{
            borderColor: borderGlow,
            boxShadow: useTransform(
              scrollYProgress,
              [impactPoint, flowEnd],
              ['0 0 0px #22c55e', '0 0 25px rgba(34, 197, 94, 0.2)']
            ),
          }}
          className="relative p-8 bg-[#050505] backdrop-blur-3xl rounded-[30px] border-2 transition-all duration-500 shadow-2xl group"
        >
          <div
            className={`absolute top-1/2 -translate-y-1/2 h-[2px] hidden md:block overflow-hidden ${
              index % 2 === 0 ? '-left-8 w-8' : '-right-8 w-8'
            }`}
          >
            <div className="absolute inset-0 bg-white/5" />

            <motion.div
              style={{
                width: lightWidth,
                opacity: lightOpacity,
                left: index % 2 === 0 ? 'auto' : 0,
                right: index % 2 === 0 ? 0 : 'auto',
                background:
                  'linear-gradient(90deg, transparent, #22c55e, #fff)',
                boxShadow: '0 0 15px #22c55e',
              }}
              className="absolute top-0 h-full flex items-center justify-end"
            >
              <div className="w-1.5 h-1.5 bg-white rounded-full blur-[1px] shadow-[0_0_8px_#fff]" />
            </motion.div>
          </div>

          <motion.div
            style={{ opacity: lightOpacity }}
            className="absolute -left-[35px] top-1/2 -translate-y-1/2 w-3 h-3 bg-green-500 rounded-full md:hidden shadow-[0_0_15px_#22c55e]"
          />

          <div className="absolute -top-5 left-10 px-5 py-1.5 rounded-full text-[11px] font-black text-black uppercase tracking-tighter bg-green-500 shadow-[0_10px_20px_rgba(34,197,94,0.3)]">
            {edu.duration}
          </div>

          <h3 className="text-2xl md:text-3xl font-black text-white mb-2 italic uppercase tracking-tighter group-hover:text-green-400 transition-colors duration-500">
            {edu.degree}
          </h3>
          <h4 className="text-sm font-bold text-green-500/90 mb-4 uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            {edu.institution}
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            {edu.description}
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

// ২. প্রধান কম্পোনেন্ট
export default function Education() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  const scaleY = useSpring(scrollYProgress, { stiffness: 100, damping: 25 });

  const educationData = [
    {
      degree: 'B.Sc in Computer Science',
      institution: 'Sonargaon University',
      duration: '2021 - Present',
      description:
        'Focusing on modern web architecture and advanced software engineering principles.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Rajabari Degree College',
      duration: '2018 - 2020',
      description:
        'Major in Science with a strong focus on Mathematics and Information Technology.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Golam Nabi Pilot High School',
      duration: '2016 - 2018',
      description:
        'Started the journey of technology and science with excellence.',
    },
  ];

  return (
    <section
      id="education"
      ref={containerRef}
      className="w-full py-32 bg-black overflow-hidden relative"
    >
      <div className="container mx-auto px-6 max-w-4xl relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black text-white uppercase tracking-tighter">
            Academic <span className="text-green-500">Journey</span>
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-white/20">
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-[-1px] w-[2px] h-full bg-green-500 shadow-[0_0_20px_#22c55e] z-10"
            />
          </div>

          <div className="space-y-32">
            {educationData.map((edu, index) => (
              <EducationCard
                key={index}
                edu={edu}
                index={index}
                scrollYProgress={scrollYProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
