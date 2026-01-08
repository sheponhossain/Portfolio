import React, { useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Education({ isRGBActive }) {
  const containerRef = useRef(null);

  const darkGradient = 'linear-gradient(to right, #8E7CDB, #55B4E4)';
  const lightGradient = 'linear-gradient(to right, #FF9A9E, #A1C4FD)';

  // সেকশনের স্ক্রল ট্র্যাক করা
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  // স্ক্রল মুভমেন্টকে একদম ফাস্ট এবং স্মুথ করার জন্য
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 30,
  });

  const educationData = [
    {
      degree: 'B.Sc in Computer Science',
      institution: 'Your University Name',
      duration: '2021 - Present',
      description:
        'Focusing on modern web architecture and advanced software engineering principles.',
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Your College Name',
      duration: '2018 - 2020',
      description:
        'Major in Science with a strong focus on Mathematics and Information Technology.',
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Your School Name',
      duration: '2016 - 2018',
      description:
        'Started the journey of technology and science with excellence.',
    },
  ];

  return (
    <section
      id="education"
      ref={containerRef}
      className="w-full py-32 bg-[#F8FAFC] dark:bg-base-300 transition-colors duration-500 overflow-hidden relative"
    >
      <div className="container mx-auto px-6 max-w-4xl relative">
        <div className="text-center mb-24">
          <h2 className="text-4xl font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Academic <span className="text-[#55B4E4]">Journey</span>
          </h2>
        </div>

        <div className="relative">
          {/* ১. চিকন ড্যাশড ভার্টিকাল লাইন (Slim Dashed Line) */}
          <div className="absolute left-[20px] md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-[1px] border-l border-dashed border-gray-300 dark:border-gray-700 z-0">
            {/* ২. প্রগ্রেস লাইন (স্ক্রল করলে এই চিকন লাইনটি কালার হবে) */}
            <motion.div
              style={{ scaleY, originY: 0 }}
              className="absolute top-0 left-[-1px] w-[2px] h-full bg-gradient-to-b from-[#8E7CDB] to-[#55B4E4] z-10"
            />
          </div>

          {/* কার্ডগুলো */}
          <div className="space-y-32">
            {educationData.map((edu, index) => (
              <div
                key={index}
                className={`flex items-center w-full ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
                }`}
              >
                {/* কার্ড এনিমেশন: পাশ থেকে আসবে */}
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  viewport={{ once: true, margin: '-100px' }}
                  className="w-full md:w-[45%] ml-12 md:ml-0"
                >
                  <div className="relative p-8 bg-white/70 dark:bg-gray-900/50 backdrop-blur-3xl rounded-[30px] border border-white/40 dark:border-gray-800/40 shadow-xl hover:scale-[1.02] transition-transform duration-300">
                    {/* কার্ডের কানেক্টর ড্যাশ */}
                    <div
                      className={`absolute top-1/2 -translate-y-1/2 w-6 h-[1px] border-t border-dashed border-gray-400 dark:border-gray-600 hidden md:block ${
                        index % 2 === 0 ? '-left-6' : '-right-6'
                      }`}
                    ></div>

                    <div
                      className="absolute -top-4 left-8 px-4 py-1 rounded-full text-[10px] font-bold text-white shadow-md uppercase tracking-tighter"
                      style={{
                        background: isRGBActive ? lightGradient : darkGradient,
                      }}
                    >
                      {edu.duration}
                    </div>

                    <h3 className="text-xl md:text-2xl font-black text-gray-800 dark:text-white mb-1 italic uppercase tracking-tighter">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-bold text-[#55B4E4] mb-3 uppercase tracking-wide">
                      {edu.institution}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-300 text-sm leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
