'use client';

import { motion } from 'framer-motion';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
          <div className="md:flex">
            <motion.div 
              className="md:w-1/2 bg-gray-900 p-8 md:p-12 text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Свяжитесь с нами</h2>
              <p className="mb-8">Оставьте заявку, и мы свяжемся с вами для консультации и расчета стоимости ремонта.</p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="mr-3">📍</span>
                  <p>г. Астана, ул. Примерная, д. 123, офис 45</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3">📱</span>
                  <p>+7 (777) 123-45-67</p>
                </div>
                <div className="flex items-start">
                  <span className="mr-3">✉️</span>
                  <p>info@madiyar-qurylys.kz</p>
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
              <form>
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Ваше имя</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Телефон</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500" 
                    required 
                  />
                </div>
                
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение</label>
                  <textarea 
                    id="message" 
                    rows={4} 
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-beige-500"
                  ></textarea>
                </div>
                
                <motion.button
                  type="submit"
                  className="w-full bg-beige-500 hover:bg-beige-600 text-gray-900 font-medium py-3 px-6 rounded-md transition-colors"
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
    </section>
  );
};

export default ContactSection;