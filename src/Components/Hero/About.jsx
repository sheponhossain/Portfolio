import React from 'react';
import SheponLogo from '../../assets/logos/SheponPortfolioLogo-removebg-preview.png';

export default function About({ isRGBActive }) {
  // কালার ভ্যারিয়েবল (Contact Page এর সাথে মিল রেখে)
  const darkGradient =
    'conic-gradient(from 90deg at 50% 50%, #E2E8F0 0%, #8E7CDB 25%, #55B4E4 50%, #8E7CDB 75%, #E2E8F0 100%)';
  const lightGradient =
    'conic-gradient(from 90deg at 50% 50%, #FAD0C4 0%, #FF9A9E 25%, #A1C4FD 50%, #FF9A9E 75%, #FAD0C4 100%)';

  return (
    <section
      id="about"
      className="w-full min-h-screen bg-[#F8FAFC] dark:bg-base-300 py-20 transition-colors duration-500 font-sans overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white uppercase tracking-tighter">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8E7CDB] to-[#55B4E4]">
              Me
            </span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#8E7CDB] to-[#55B4E4] mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Side: Professional Image with RGB Border */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-[380px] aspect-[4/5] flex items-center justify-center overflow-hidden rounded-[40px] p-[2px] shadow-2xl">
              <div className="relative flex h-full w-full items-center justify-center rounded-[38px] bg-white/50 dark:bg-gray-900/50 backdrop-blur-xl overflow-hidden border border-white/30">
                <img
                  src={SheponLogo}
                  alt="Professional Portrait"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 scale-110 hover:scale-100"
                />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
                Designing Experiences, <br />
                <span className="text-[#55B4E4]">Not Just Interfaces.</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
                Hello! I'm a passionate developer and designer dedicated to
                creating digital experiences that are not only functional but
                visually captivating. With a deep focus on user-centric design,
                I bridge the gap between complex code and intuitive aesthetics.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-800/30 shadow-sm">
                <h4 className="font-bold text-[#8E7CDB] mb-2 uppercase text-sm tracking-widest">
                  My Vision
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  To empower brands by building scalable, modern, and accessible
                  web solutions.
                </p>
              </div>
              <div className="p-6 bg-white/40 dark:bg-white/5 backdrop-blur-md rounded-2xl border border-white/20 dark:border-gray-800/30 shadow-sm">
                <h4 className="font-bold text-[#55B4E4] mb-2 uppercase text-sm tracking-widest">
                  My Strategy
                </h4>
                <p className="text-gray-500 dark:text-gray-400 text-sm">
                  Combining clean code with creative thinking to solve
                  real-world problems.
                </p>
              </div>
            </div>

            {/* Skill Tags */}
            <div className="pt-4">
              <p className="text-sm font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4">
                Core Expertise
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'React.js',
                  'Tailwind CSS',
                  'UI/UX Design',
                  'Modern JavaScript',
                  'Figma',
                ].map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 rounded-full text-sm font-medium bg-white/60 dark:bg-gray-800/60 text-gray-700 dark:text-gray-200 border border-white/20 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Call */}
            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-10 py-4 rounded-full font-bold uppercase tracking-wider text-white shadow-xl hover:scale-105 active:scale-95 transition-all"
                style={{
                  background: isRGBActive
                    ? lightGradient.replace('conic', 'linear')
                    : 'linear-gradient(to right, #8E7CDB, #55B4E4)',
                }}
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
