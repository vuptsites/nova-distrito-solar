import { MessageCircle } from 'lucide-react';
import { SERVICES, COMPANY } from '@/constants/company';

export default function Services() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Oferecemos soluções completas em energia solar para todos os tipos de imóvel e necessidade energética.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, index) => (
            <div
              key={service.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:translate-y-[-8px] animate-fadeInUp"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Card Header */}
              <div className="h-32 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                <span className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </span>
              </div>

              {/* Card Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
                <a
                  href={COMPANY.contact.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 group/link"
                >
                  <span>Solicitar Orçamento</span>
                  <MessageCircle size={16} className="group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-center text-white animate-fadeInUp">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Não sabe qual serviço escolher?
          </h3>
          <p className="text-lg mb-6 text-blue-100">
            Nossa equipe está pronta para analisar sua situação e recomendar a melhor solução.
          </p>
          <a
            href={COMPANY.contact.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            <MessageCircle size={20} />
            <span>Falar com um Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
