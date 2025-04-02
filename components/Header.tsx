'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logo from "@/public/2.png"
const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      className={`fixed w-full z-50 transition-all duration-300${
        scrolled ? 'bg-white shadow-md ' : 'bg-transparent '
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src={logo}
            alt="Madiyar Qurylys" 
            width={200}  
            // priority
          />
        </Link>
        
        <nav className="hidden md:flex space-x-8">
          {['Home', 'Services', 'Portfolio', 'Reviews', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase()}`}
              className="text-gray-800 hover:text-beige-600 transition-colors font-medium"
            >
              {item}
            </Link>
          ))}
        </nav>
        
        <div className="md:hidden">
          {/* Mobile menu button would go here */}
        </div>
      </div>
    </motion.header>
  );
};

export default Header;