const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Madiyar Qurylys</h3>
            <p className="text-gray-400 mb-4">Профессиональный ремонт квартир и офисов в Астане</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* Facebook icon */}
                <span>FB</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* Instagram icon */}
                <span>IG</span>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                {/* WhatsApp icon */}
                <span>WA</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Контакты</h3>
            <p className="text-gray-400 mb-2">г. Астана, ул. Примерная, д. 123</p>
            <p className="text-gray-400 mb-2">info@madiyar-qurylys.kz</p>
            <p className="text-gray-400">+7 (777) 123-45-67</p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Услуги</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Ремонт квартир</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ремонт офисов</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Дизайн интерьера</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Отделочные работы</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Режим работы</h3>
            <p className="text-gray-400 mb-2">Пн-Пт: 9:00 - 18:00</p>
            <p className="text-gray-400 mb-2">Сб: 10:00 - 15:00</p>
            <p className="text-gray-400">Вс: Выходной</p>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Madiyar Qurylys. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;