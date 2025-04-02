'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import bgImage from "@/public/bg-image.png"
const HeroSection = () => {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Modern renovated living room"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl text-white"
        >
          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Ремонт квартир под ключ в Астане
          </motion.h1>
          <motion.p 
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Превращаем ваши мечты о комфортном жилье в реальность. Качественный ремонт от проверенной компании.
          </motion.p>
          <motion.button
            className="bg-beige-500 hover:bg-beige-600 text-gray-900 font-medium py-3 px-8 rounded-md transition-colors"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Получить консультацию
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;