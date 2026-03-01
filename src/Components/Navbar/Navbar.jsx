import React, { useEffect, useState } from 'react';
import logo from '../../assets/logos/SheponLogo-0.png';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navOptions = [
    { name: 'Home', link: 'home' },
    { name: 'About', link: 'about' },
    { name: 'Skills', link: 'skills' },
    { name: 'Projects', link: 'projects' },
    { name: 'Education', link: 'education' },
    { name: 'Contact', link: 'contact' },
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -40% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    navOptions.forEach((option) => {
      const element = document.getElementById(option.link);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  const renderNavLinks = navOptions.map((item) => (
    <li key={item.name} className="relative">
      <a
        href={`#${item.link}`}
        onClick={(e) => handleScroll(e, item.link)}
        className={`relative block pb-1 text-sm font-bold uppercase tracking-wider transition-all duration-300 group ${
          activeSection === item.link
            ? 'text-green-500'
            : 'text-gray-400 hover:text-green-400'
        }`}
      >
        {item.name}

        <span
          className={`absolute left-0 bottom-0 h-[2px] bg-green-500 shadow-[0_0_8px_#22c55e] transition-all duration-500 ease-in-out ${
            activeSection === item.link
              ? 'w-full opacity-100'
              : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'
          }`}
        ></span>
      </a>
    </li>
  ));

  return (
    <nav className="navbar bg-black/80 backdrop-blur-md sticky top-0 z-50 px-4 md:px-12 border-b border-white/5 shadow-2xl">
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden text-green-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-[#0a0a0a] rounded-box z-[1] mt-3 w-52 p-6 shadow-2xl gap-5 border border-green-500/20"
          >
            {renderNavLinks}
          </ul>
        </div>

        {/* Logo Section */}
        <a
          href="#home"
          onClick={(e) => handleScroll(e, 'home')}
          className="flex items-center group"
        >
          <div className="h-10 w-10 md:h-12 md:w-12 overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
            <img
              src={logo}
              alt="Logo"
              className="h-full w-full object-contain scale-[2.5]"
            />
          </div>
        </a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-10">{renderNavLinks}</ul>
      </div>

      <div className="navbar-end gap-4">
        <button
          onClick={(e) => handleScroll(e, 'contact')}
          className="btn bg-green-500 hover:bg-green-600 border-none rounded-full px-8 text-black font-bold hidden sm:flex shadow-[0_0_15px_rgba(34,197,94,0.4)] transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
