import Link from 'next/link';
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Madiyar Qurylys</h3>
            <p className="text-blue-200 mb-4">Профессиональный ремонт квартир и офисов в Астане</p>
            <div className="flex space-x-4">
              <Link href="https://www.instagram.com/madiyar.qurylys/" target="_blank" className="text-blue-300 hover:text-white transition-colors">
                <FaInstagram className="w-6 h-6" />
              </Link>
              <Link href="https://wa.me/+77055221122/" target="_blank" className="text-blue-300 hover:text-white transition-colors">
                <FaWhatsapp className="w-6 h-6" />
              </Link>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <p className="text-blue-200 mb-2">г. Астана, ул. Акмешит, д.7</p>
            <p className="text-blue-200 mb-2">madiyar.qurylys@gmail.com</p>
            <p className="text-blue-200">+7 (705) 522-11-22</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#" className="hover:text-white transition-colors">Ремонт квартир</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ремонт офисов</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дизайн интерьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отделочные работы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Режим работы</h3>
            <p className="text-blue-200 mb-2">Пн-Пт: 9:00 - 18:00</p>
            <p className="text-blue-200 mb-2">Сб: 10:00 - 15:00</p>
            <p className="text-blue-200">Вс: Выходной</p>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-12 pt-8 text-center text-blue-300">
          <p>© {new Date().getFullYear()} Madiyar Qurylys. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;