'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });
  const [showModal, setShowModal] = useState(false);

  // Обработка изменений ввода
  const handleChange = (e: any) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Обработка отправки формы
  const handleSubmit = (e: any) => {
    e.preventDefault();
    
    // Здесь вы можете сохранить данные в локальную переменную, localStorage или отправить на свой сервер
    const savedData = {
      name: formData.name,
      phone: formData.phone,
      message: formData.message,
      timestamp: new Date().toISOString()
    };
    
    // Пример сохранения в localStorage (опционально)
    const existingRequests = JSON.parse(localStorage.getItem('contactRequests') || '[]');
    existingRequests.push(savedData);
    localStorage.setItem('contactRequests', JSON.stringify(existingRequests));
    
    // Показать модальное окно успеха
    setShowModal(true);
    
    // Очистить форму после отправки
    setFormData({
      name: '',
      phone: '',
      message: ''
    });
    
    // Закрыть модальное окно через 3 секунды
    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  return (
    <section id="написать-нам" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-soft overflow-hidden">
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2 bg-blue-800 p-8 md:p-12 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="mb-8">Оставьте заявку, и мы свяжемся с вами для консультации и расчета стоимости ремонта.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-3 text-blue-300">📍</span>
                  <p>г. Астана, ул. Акмешит, д. 7</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-blue-300">📱</span>
                  <p>+7 (705) 522-11-22</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3 text-blue-300">✉️</span>
                  <p>madiyar.qurylys@gmail.com</p>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="md:w-1/2 p-8 md:p-12"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение</label>
                  <textarea 
                    id="message" 
                    rows={4}
                    value={formData.message}
                    onChange={handleChange} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Отправить заявку
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Модальное окно успеха */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 bg-black bg-opacity-10"></div>
            <motion.div 
              className="bg-white rounded-lg p-8 max-w-md mx-4 relative z-10"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
            >
              <div className="text-center">
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-4">
                  <svg className="h-10 w-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">Заявка отправлена успешно!</h3>
                <p className="text-gray-600">Наш менеджер свяжется с вами в ближайшее время.</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactSection;