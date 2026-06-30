import { MessageCircle, Zap } from 'lucide-react';
import { COMPANY } from '@/constants/company';

export default function ContactCTA() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl shadow-2xl overflow-hidden animate-fadeInUp">
          <div className="relative px-6 md:px-12 py-12 md:py-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="relative z-10 text-center text-white">
              <div className="mb-6 flex justify-center">
                <Zap className="w-16 h-16 animate-pulse" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Comece hoje a produzir sua própria energia
              </h2>
              <p className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Solicite um orçamento gratuito e descubra quanto você pode economizar todos os meses investindo em energia solar.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={COMPANY.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <MessageCircle size={20} />
                  <span>Falar no WhatsApp</span>
                </a>
                <a
                  href="#calculator"
                  className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 active:scale-95"
                >
                  <span>Fazer Simulação</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {/* WhatsApp Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fadeInUp">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <a
              href={COMPANY.contact.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              {COMPANY.contact.whatsapp}
            </a>
            <p className="text-sm text-gray-600 mt-2">Atendimento rápido e direto</p>
          </div>

          {/* Instagram Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fadeInUp">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📷</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
            <a
              href={COMPANY.contact.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:text-blue-700 transition-colors"
            >
              @novadistrito
            </a>
            <p className="text-sm text-gray-600 mt-2">Acompanhe nossos projetos</p>
          </div>

          {/* Location Card */}
          <div className="bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-xl transition-shadow animate-fadeInUp">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-3xl">📍</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Localização</h3>
            <p className="text-blue-600 font-semibold text-sm">
              {COMPANY.location.address}
              <br />
              {COMPANY.location.neighborhood}
            </p>
            <p className="text-sm text-gray-600 mt-2">{COMPANY.location.city} - {COMPANY.location.state}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
