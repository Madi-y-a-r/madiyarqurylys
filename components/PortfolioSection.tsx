'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import portfolio1 from "@/public/studia.webp"
import portfolio2 from "@/public/portfolio2.png"
import portfolio3 from "@/public/studia.webp"
const portfolioItems = [
  {
    id: 1,
    title: "Современная квартира-студия",
    description: "Полный ремонт квартиры-студии площадью 45 м²",
    image: portfolio1
  },
  {
    id: 2,
    title: "Двухкомнатная квартира в классическом стиле",
    description: "Ремонт двухкомнатной квартиры площадью 65 м²",
    image: portfolio2
  },
  {
    id: 3,
    title: "Трехкомнатная квартира для семьи",
    description: "Капитальный ремонт трехкомнатной квартиры площадью 90 м²",
    image: portfolio3
  }
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши работы</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Посмотрите примеры реальных проектов, которые мы выполнили для наших клиентов
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="overflow-hidden rounded-lg shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <div className="relative h-64">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 bg-white">
                <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="border-2 border-beige-500 text-beige-600 hover:bg-beige-500 hover:text-white font-medium py-3 px-8 rounded-md transition-colors">
            Посмотреть все проекты
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;