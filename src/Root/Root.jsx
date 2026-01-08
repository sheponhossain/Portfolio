import React, { useState } from 'react';

import Navbar from '../Components/Navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer/Footer';
import About from '../Components/Hero/About';
import Skills from '../Components/Skills';
import Hero from '../Components/Hero/Hero';
import Contact from '../Components/Contact/Contact';
import Education from '../Components/Education/Education';
import SkillsSection from '../Components/Skill&Technology/SkillsSection';
import ServicesSection from '../Components/ServicesSection/ServicesSection';

const Root = () => {
  const [isRGBActive, setIsRGBActive] = useState(true);
  console.log(isRGBActive);
  return (
    <div>
      <Navbar setIsRGBActive={setIsRGBActive} />
      <div className="W-full min-h-screen">
        <Hero />
        <About />
        <SkillsSection />
        <ServicesSection />
        <Education />
        <Skills isRGBActive={isRGBActive} />
        <Contact isRGBActive={isRGBActive} />
      </div>
      <Footer />
    </div>
  );
};

export default Root;
