import { CheckCircle2 } from 'lucide-react';
import { COMPANY } from '@/constants/company';

export default function About() {
  const highlights = [
    'Experiência comprovada em projetos solares',
    'Equipe técnica qualificada e certificada',
    'Suporte completo do projeto até a homologação',
    'Garantia estendida nos equipamentos',
    'Financiamento disponível',
    'Acompanhamento pós-instalação',
  ];

  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative animate-slideInLeft">
            <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl mb-4">🏢</div>
                  <p className="text-white text-xl font-semibold">Equipe Profissional</p>
                  <p className="text-white/80 mt-2">Especialistas em energia solar</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 animate-fadeInUp">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Energia inteligente para quem pensa no futuro
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                A {COMPANY.name} oferece soluções completas em energia solar fotovoltaica, desenvolvendo projetos personalizados que proporcionam economia, sustentabilidade e independência energética.
              </p>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed">
              Nossa equipe acompanha todas as etapas do projeto, desde a análise de consumo até a homologação junto à concessionária, garantindo segurança, eficiência e qualidade em cada fase.
            </p>

            {/* Highlights */}
            <div className="space-y-3">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3 group">
                  <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-gray-700 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-blue-600">500+</p>
                <p className="text-sm text-gray-600 mt-1">Projetos Realizados</p>
              </div>
              <div className="bg-yellow-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-yellow-600">2000+</p>
                <p className="text-sm text-gray-600 mt-1">Clientes Satisfeitos</p>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <p className="text-3xl font-bold text-green-600">15+</p>
                <p className="text-sm text-gray-600 mt-1">Anos de Experiência</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
