'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Avatar from "@/public/1.png"
const testimonials = [
  {
    id: 1,
    name: "Алия К.",
    role: "Владелец квартиры в ЖК Хайвил",
    quote: "Очень довольна результатом ремонта. Команда Madiyar Qurylys справилась со всеми поставленными задачами быстро и качественно.",
    image: Avatar
  },
  {
    id: 2,
    name: "Марат Т.",
    role: "Владелец двухкомнатной квартиры",
    quote: "Благодарен команде за профессиональный подход и качественный ремонт. Все работы были выполнены в срок и с соблюдением всех договоренностей.",
    image: Avatar
  },
  {
    id: 3,
    name: "Айгуль Ж.",
    role: "Владелец квартиры-студии",
    quote: "Отличная работа! Ремонт моей квартиры превзошел все мои ожидания. Обязательно буду рекомендовать компанию своим друзьям.",
    image: Avatar
  }
];

const TestimonialsSection = () => {
  return (
    <section id="отзывы" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Отзывы клиентов</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Мнения наших клиентов — лучшее подтверждение качества нашей работы
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-22 h-22 mr-4 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">&quot;{testimonial.quote}&quot;</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;