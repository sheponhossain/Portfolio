import React, { useState } from 'react';

import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import Skills from '../Components/Skills';
import Hero from '../Components/Hero/Hero';
import Contact from '../Components/Contact/Contact';
import Education from '../Components/Education/Education';
import SkillsSection from '../Components/Skill&Technology/SkillsSection';
import ServicesSection from '../Components/ServicesSection/ServicesSection';
import Projects from '../Components/Projects/Projects';
import About from '../Components/About/About';

const Root = () => {
  const [isRGBActive, setIsRGBActive] = useState(true);
  console.log(isRGBActive);
  return (
    <div>
      <div className="W-full min-h-screen">
        <Navbar setIsRGBActive={setIsRGBActive} />
        <Hero />
        <About />
        <SkillsSection />
        <Projects />
        <ServicesSection />
        <Education />
        <Skills isRGBActive={isRGBActive} />
        <Contact isRGBActive={isRGBActive} />
        <Footer />
      </div>
    </div>
  );
};

export default Root;
