'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import logoWhite from "@/public/2.png"
import logoBlack from "@/public/1.png"

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
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white' : 'bg-transparent'
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center h-16">
            {scrolled ? (
              <Image 
                src={logoBlack}
                alt="Madiyar Qurylys"
                height={70}
                priority
              />
            ) : (
              <Image 
                src={logoWhite}
                alt="Madiyar Qurylys"
                height={70}
                priority
              />
            )}
          </Link>
          <h1 className={`font-bold text-xl ${scrolled ? "text-black" : "text-white"}`}>
            Madiyar Qurylys
          </h1>
        </div>
        
        <nav className="hidden md:flex space-x-8">
          {['Главная', 'Услуги', 'Наши работы', 'Отзывы', 'Написать нам'].map((item) => (
            <Link
              key={item}
              href={`/#${item.toLowerCase().replace(/\s+/g, '-')}`} // Преобразуем пробелы в дефисы
              className={`hover:text-beige-600 font-medium ${scrolled ? 'text-black' : 'text-white'}`}
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
