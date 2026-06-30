import { PROCESS_STEPS } from '@/constants/company';

export default function Process() {
  return (
    <section id="process" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça as 6 etapas do processo de instalação de energia solar
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-600 to-yellow-400 transform -translate-x-1/2"></div>

          {/* Steps */}
          <div className="space-y-12 md:space-y-0">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={step.number}
                className={`relative md:flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 items-center animate-fadeInUp`}
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Circle with Number */}
                <div className="relative md:w-auto flex justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform z-10">
                    <div className="text-center">
                      <p className="text-4xl">{step.emoji}</p>
                    </div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="hidden md:block md:w-1/2"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeInUp">
          <p className="text-lg text-gray-600 mb-6">
            Pronto para começar sua jornada rumo à energia solar?
          </p>
          <a
            href="https://wa.me/5561964861115"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Agendar Visita Técnica</span>
          </a>
        </div>
      </div>
    </section>
  );
}
