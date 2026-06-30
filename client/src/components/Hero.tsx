import { ArrowRight, MessageCircle } from 'lucide-react';
import { COMPANY } from '@/constants/company';

export default function Hero() {
  const scrollToCalculator = () => {
    const element = document.getElementById('calculator');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-yellow-50 -z-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Transforme a luz do sol em{' '}
                <span className="text-gradient-solar">economia para toda a vida</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                Projetos completos de energia solar para residências, empresas, fazendas e condomínios em Brasília e região.
              </p>
            </div>

            {/* Indicators */}
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-3xl">☀️</span>
                <div>
                  <p className="font-semibold text-gray-900">Economia de até 95%</p>
                  <p className="text-sm text-gray-600">Reduza sua conta</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-3xl">⚡</span>
                <div>
                  <p className="font-semibold text-gray-900">Energia Limpa</p>
                  <p className="text-sm text-gray-600">100% renovável</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-3xl">🏡</span>
                <div>
                  <p className="font-semibold text-gray-900">Valorização do Imóvel</p>
                  <p className="text-sm text-gray-600">Aumenta valor</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <span className="text-3xl">🔋</span>
                <div>
                  <p className="font-semibold text-gray-900">Retorno Garantido</p>
                  <p className="text-sm text-gray-600">4-8 anos</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href={COMPANY.contact.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <MessageCircle size={20} />
                <span>Solicitar Orçamento</span>
              </a>
              <button
                onClick={scrollToCalculator}
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-500 hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Simular Economia</span>
                <ArrowRight size={20} />
              </button>
            </div>
          </div>

          {/* Image/Illustration */}
          <div className="relative animate-slideInRight">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
              {/* Placeholder with gradient */}
              <div className="w-full h-full bg-gradient-to-br from-blue-400 via-blue-600 to-yellow-400 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4 animate-float">☀️</div>
                  <p className="text-white text-xl font-semibold">Energia Solar em Brasília</p>
                  <p className="text-white/80 mt-2">Imagem de painéis solares ao nascer do sol</p>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-xl p-6 max-w-xs animate-float">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-2xl">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Certificado</p>
                  <p className="text-sm text-gray-600">Profissionais qualificados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
