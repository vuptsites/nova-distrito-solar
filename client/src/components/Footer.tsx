import { MessageCircle, MapPin, Mail, Phone } from 'lucide-react';
import { COMPANY } from '@/constants/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-yellow-400 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">☀️</span>
              </div>
              <div>
                <h3 className="text-white font-bold">{COMPANY.name}</h3>
                <p className="text-xs text-gray-400">{COMPANY.tagline}</p>
              </div>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Soluções completas em energia solar para residências, empresas e propriedades rurais em Brasília.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                  Sobre
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-white transition-colors">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#calculator" className="text-gray-400 hover:text-white transition-colors">
                  Calculadora
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contato</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MessageCircle size={18} className="text-green-500 mt-0.5 flex-shrink-0" />
                <a
                  href={COMPANY.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  {COMPANY.contact.whatsapp}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-blue-500 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {COMPANY.location.address}
                  <br />
                  {COMPANY.location.city} - {COMPANY.location.state}
                </span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-white font-semibold mb-4">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={COMPANY.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:scale-110"
                title="Instagram"
              >
                <span className="text-lg">📷</span>
              </a>
              <a
                href={COMPANY.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white hover:shadow-lg transition-all hover:scale-110"
                title="WhatsApp"
              >
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} {COMPANY.name}. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a
        href={COMPANY.contact.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 w-14 h-14 bg-green-500 text-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 z-40 animate-pulse"
        title="Falar no WhatsApp"
      >
        <MessageCircle size={24} />
      </a>
    </footer>
  );
}
