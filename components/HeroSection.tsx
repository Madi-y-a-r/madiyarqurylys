'use client';

import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp } from 'react-icons/fa';

const HeroSection = () => {
  const handleClick = () => {
    const text = "Здравствуйте! Пишу с сайта Madiyar Qurylys! Хотел бы узнать подробнее про ремонт"
    window.open(`https://wa.me/+77055221122/?text=${text}`, '_blank');
  }
  return (
    <section id="главная" className="relative h-screen flex items-center">
     <div className="absolute inset-0 bg-blue-500 from-construction-800/90 to-construction-950/90 z-10 opacity-50"></div>
     <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1770&auto=format&fit=crop')] bg-cover bg-center"></div>
      
      <div className="container mx-auto px-20 relative z-10">
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
            Превращаем ваши мечты о комфортном жилье в реальность. Качественный ремонт от проверенной компании!
          </motion.p>
          <div className='lg:flex items-center gap-4'>
          <motion.button
            className="bg-blue-500 hover:bg-blue-700 text-white font-medium py-3 px-8 w-70 rounded-md transition-colors flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              const element = document.getElementById('написать-нам');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <FaPhone className="mr-2 w-5 h-5" />
            Получить консультацию
          </motion.button>
          <motion.button
            className="bg-green-500 hover:bg-green-600 text-white font-medium py-3 px-8 w-70 rounded-md transition-colors flex items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleClick}
          >
            <FaWhatsapp className="mr-2 w-6 h-6" />
            Написать в WhatsApp
          </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;