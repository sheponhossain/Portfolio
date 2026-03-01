import React from 'react';
import SheponLogo from '../../assets/logos/SheponPortfolioLogo-removebg-preview.png';

export default function About({ isRGBActive }) {
  return (
    <section
      id="about"
      className="w-full min-h-screen bg-black py-20 transition-colors duration-500 font-sans overflow-hidden"
    >
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tighter">
            About <span className="text-green-500">Me</span>
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative group w-full max-w-[380px] aspect-[4/5] flex items-center justify-center overflow-hidden rounded-[40px] p-[2px] shadow-2xl">
              <div className="absolute inset-0 bg-green-500/20 blur-3xl group-hover:bg-green-500/40 transition-all duration-700"></div>

              <div className="relative flex h-full w-full items-center justify-center rounded-[38px] bg-gray-900/50 backdrop-blur-xl overflow-hidden border border-white/10 group-hover:border-green-500/50 transition-all duration-500">
                <img
                  src={SheponLogo}
                  alt="Professional Portrait"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-110 group-hover:scale-100"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl font-bold text-white leading-tight">
                Designing Experiences, <br />
                <span className="text-green-500">Not Just Interfaces.</span>
              </h3>
              <p className="text-gray-400 leading-relaxed text-lg">
                Hello! I'm a passionate developer and designer dedicated to
                creating digital experiences that are not only functional but
                visually captivating. With a deep focus on user-centric design,
                I bridge the gap between complex code and intuitive aesthetics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-500/30 transition-all shadow-sm">
                <h4 className="font-bold text-green-500 mb-2 uppercase text-xs tracking-widest">
                  My Vision
                </h4>
                <p className="text-gray-400 text-sm">
                  To empower brands by building scalable, modern, and accessible
                  web solutions.
                </p>
              </div>
              <div className="p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-green-500/30 transition-all shadow-sm">
                <h4 className="font-bold text-green-500 mb-2 uppercase text-xs tracking-widest">
                  My Strategy
                </h4>
                <p className="text-gray-400 text-sm">
                  Combining clean code with creative thinking to solve
                  real-world problems.
                </p>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-[0.2em] mb-4">
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
                    className="px-5 py-2 rounded-full text-xs font-medium bg-green-500/10 text-green-400 border border-green-500/20 shadow-[0_0_15px_rgba(34,197,94,0.1)] hover:bg-green-500/20 transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-block px-10 py-4 rounded-full font-bold uppercase tracking-wider text-black shadow-[0_10px_20px_rgba(34,197,94,0.3)] hover:scale-105 active:scale-95 transition-all bg-green-500"
                style={{
                  background: isRGBActive
                    ? 'linear-gradient(to right, #22c55e, #10b981)'
                    : '#22c55e',
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
