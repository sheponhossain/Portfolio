import { VelocityText } from './ScrollVelocity';
import {
  Figma,
  Git,
  Javascript,
  Mysql,
  Nextjs,
  Node,
  ReactLogo,
  Typescript,
  Css,
  Html,
  MongoDB,
  Tailwind,
} from './SkillLogos';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const skillsRow1 = [
  <ReactLogo key="react" />,
  <Nextjs key="nextjs" />,
  <Javascript key="js" />,
  <Typescript key="ts" />,
  <Tailwind key="tailwind" />,
  <Css key="css" />,
  <Figma key="figma" />,
];

const skillsRow2 = [
  <Html key="html" />,
  <MongoDB key="mongodb" />,
  <Mysql key="mysql" />,
  <Node key="node" />,
  <Git key="git" />,
];

export default function Skills({ isRGBActive }) {
  return (
    <section
      id="skills"
      className="w-full bg-black text-white py-24 transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <div className="inline-block mb-12">
          <div className="flex flex-col items-center justify-center py-10">
            {/* Outer Container with Green Animated Border */}
            <div className="relative p-[2px] rounded-3xl overflow-hidden group">
              {isRGBActive && (
                <span
                  className="absolute inset-[-1000%] animate-border-spin 
                  bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_45%,#22c55e_50%,transparent_55%,transparent_100%)]"
                ></span>
              )}

              {/* Inner Content Wrapper */}
              <div className="relative p-8 md:p-12 rounded-[1.4rem] z-10 bg-[#0a0a0a] transition-colors duration-500">
                <div className="relative group cursor-default">
                  <motion.h2
                    className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic"
                    style={
                      isRGBActive
                        ? {
                            backgroundImage:
                              'linear-gradient(90deg, #fff, #22c55e, #10b981, #fff)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }
                        : {
                            color: '#22c55e',
                          }
                    }
                    animate={
                      isRGBActive
                        ? {
                            backgroundPosition: ['0% 0%', '200% 0%'],
                          }
                        : {}
                    }
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    TECH STACK
                  </motion.h2>
                  {/* Title Glow */}
                  <div className="absolute inset-0 bg-green-500/20 blur-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-screen-lg mx-auto flex flex-col gap-10">
        {/* Blur Overlays for Smooth Fading */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-32 z-10 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-32 z-10 bg-gradient-to-l from-black to-transparent" />

        {/* Row 1 */}
        <VelocityText baseVelocity={-2} numCopies={6}>
          {skillsRow1.map((logo, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 text-gray-500 hover:text-green-400 mx-10 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
            >
              {logo}
            </div>
          ))}
        </VelocityText>

        {/* Row 2 */}
        <VelocityText baseVelocity={2} numCopies={6}>
          {skillsRow2.map((logo, index) => (
            <div
              key={index}
              className="w-16 h-16 md:w-20 md:h-20 text-gray-500 hover:text-green-400 mx-10 transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_15px_rgba(34,197,94,0.5)]"
            >
              {logo}
            </div>
          ))}
        </VelocityText>
      </div>
    </section>
  );
}
