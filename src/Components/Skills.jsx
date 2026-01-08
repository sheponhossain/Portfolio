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
      className="w-full bg-white dark:bg-base-300 text-black dark:text-white py-24 transition-colors duration-500 overflow-hidden"
    >
      <div className="container mx-auto text-center">
        <div className="inline-block mb-12">
          <div className="flex flex-col items-center justify-center py-10">
            {/* Outer Container with Animated Border */}
            <div className="relative p-[3px] rounded-3xl overflow-hidden group">
              {isRGBActive && (
                <>
                  <span
                    className="absolute inset-[-1000%] animate-border-spin 
                    bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_45%,#FF3C3C_50%,transparent_55%,transparent_100%)]"
                  ></span>
                  <span
                    className="absolute inset-[-1000%] animate-border-spin-reverse 
                    bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0%,transparent_45%,#00E5FF_50%,transparent_55%,transparent_100%)]"
                  ></span>
                </>
              )}

              {/* Inner Content Wrapper */}
              <div className="relative p-8 md:p-12 rounded-[1.3rem] z-10 bg-white dark:bg-base-300 transition-colors duration-500">
                <div className="relative group cursor-default">
                  {/* --- টেক্সট এনিমেশন এখানে শুরু --- */}
                  <motion.h2
                    className="text-5xl md:text-7xl font-black tracking-tighter uppercase italic"
                    style={
                      isRGBActive
                        ? {
                            backgroundImage:
                              'linear-gradient(90deg, #000, #000, #FF3C3C, #00E5FF, #000, #000)',
                            backgroundSize: '200% 100%',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                          }
                        : {
                            color: 'inherit',
                          }
                    }
                    animate={
                      isRGBActive
                        ? {
                            backgroundPosition: ['100% 0%', '-100% 0%'],
                          }
                        : {}
                    }
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    TECH STACK
                  </motion.h2>
                  {/* --- টেক্সট এনিমেশন এখানে শেষ --- */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative max-w-screen-lg mx-auto flex flex-col gap-4">
        {/* Blur Overlays */}
        <div className="pointer-events-none absolute left-0 top-0 h-full w-24 z-10 bg-gradient-to-r from-white dark:from-base-300 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 h-full w-24 z-10 bg-gradient-to-l from-white dark:from-base-300 to-transparent" />
        <VelocityText baseVelocity={-3} numCopies={4}>
          {skillsRow1.map((logo, index) => (
            <div
              key={index}
              className="w-20 h-20 text-gray-600 dark:text-gray-400 mx-8"
            >
              {logo}
            </div>
          ))}
        </VelocityText>

        <VelocityText baseVelocity={3} numCopies={4}>
          {skillsRow2.map((logo, index) => (
            <div
              key={index}
              className="w-20 h-20 text-gray-600 dark:text-gray-400 mx-8"
            >
              {logo}
            </div>
          ))}
        </VelocityText>
      </div>
    </section>
  );
}
