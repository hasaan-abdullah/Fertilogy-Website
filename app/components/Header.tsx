'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Header = () => {
  const [selected, setSelected] = useState<string | null>(null);
  const [isScrolling, setIsScrolling] = useState(false);

  const navLinks = [
    { name: "Home", path: "home" },
    { name: "About Us", path: "about" },
    { name: "Features", path: "features" },
    { name: "Tools and Technologies", path: "tools" },
    { name: "Project Overview", path: "project-overview" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const handleClick = (path: string) => {
    setSelected(path);
    document.getElementById(path)?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
      const sections = document.querySelectorAll('section');
      const scrollPos = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;

      sections.forEach((section) => {
        if (section instanceof HTMLElement && section.offsetTop <= scrollPos + 60 && (section.offsetTop + section.offsetHeight) > scrollPos + 60) {
          setSelected(section.getAttribute('id') || '');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed left-[50%] -translate-x-1/2 top-4 z-50 transition-all duration-300 ${isScrolling ? 'backdrop-blur-md bg-opacity-90' : 'bg-opacity-100'}`}>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        className='bg-[#fbe8f365] p-4 rounded-full border-black/[0.09] shadow-md border'
      >
        <motion.ul
          className='flex gap-x-8'
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {navLinks.map((item) => (
            <motion.li
              key={item.name}
              className={`transition-all rounded-full py-1 px-2 hover:bg-[#eb7bb5] ${
                selected === item.path ? 'bg-[#eb7bb5] text-white' : ''
              }`}
              variants={itemVariants}
              onClick={() => handleClick(item.path)}
            >
              <a className="text-black font-semibold hover:text-gray-900 cursor-pointer">
                {item.name}
              </a>
            </motion.li>
          ))}
        </motion.ul>
      </motion.div>
    </header>
  );
};
