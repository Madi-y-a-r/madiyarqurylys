'use client';

import { motion } from 'framer-motion';

const services = [
  { 
    icon: "demolition", 
    title: "Демонтаж", 
    description: "Профессиональный демонтаж старых конструкций и материалов" 
  },
  { 
    icon: "plastering", 
    title: "Штукатурка", 
    description: "Качественные штукатурные работы с использованием современных материалов" 
  },
  { 
    icon: "electrical", 
    title: "Электрика", 
    description: "Полная замена или модернизация электропроводки" 
  },
  { 
    icon: "design", 
    title: "Дизайн", 
    description: "Создание индивидуальных дизайн-проектов для вашего интерьера" 
  },
  { 
    icon: "finishing", 
    title: "Чистовая отделка", 
    description: "Профессиональная финишная отделка всех поверхностей" 
  }
];

const ServiceSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Наши услуги</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Мы предлагаем полный комплекс услуг по ремонту и отделке, чтобы сделать ваш дом идеальным
          </p>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              variants={itemVariants}
              whileHover={{ y: -5 }}
            >
              <div className="w-16 h-16 bg-beige-100 rounded-full flex items-center justify-center mb-4">
                <span className="text-2xl text-beige-600">
                  {/* Icon would be imported or SVG inline */}
                  {service.icon === "demolition" && "🔨"}
                  {service.icon === "plastering" && "🧱"}
                  {service.icon === "electrical" && "⚡"}
                  {service.icon === "design" && "✏️"}
                  {service.icon === "finishing" && "🖌️"}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceSection;