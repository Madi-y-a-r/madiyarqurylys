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
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      // Send form data to the API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.message || 'Something went wrong');
      }
      
      // Show success modal
      setShowModal(true);
      
      // Clear form
      setFormData({
        name: '',
        phone: '',
        message: ''
      });
      
      // Close modal after 3 seconds
      setTimeout(() => {
        setShowModal(false);
      }, 3000);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
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
              {error && (
                <div className="mb-4 p-4 bg-red-50 text-red-800 rounded-md">
                  {error}
                </div>
              )}
              
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
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Сообщение (необязательно)</label>
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
                  disabled={loading}
                  className={`w-full ${loading ? 'bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white font-medium py-3 px-6 rounded-md transition-colors`}
                  whileHover={!loading ? { scale: 1.02 } : {}}
                  whileTap={!loading ? { scale: 0.98 } : {}}
                >
                  {loading ? 'Отправка...' : 'Отправить заявку'}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            className="fixed inset-0 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="fixed inset-0 " style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
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