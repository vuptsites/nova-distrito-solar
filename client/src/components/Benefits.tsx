import { BENEFITS } from '@/constants/company';

export default function Benefits() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Benefícios da Energia Solar
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra todas as vantagens de investir em energia solar para sua residência ou negócio
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {BENEFITS.map((benefit, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-blue-50 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:translate-y-[-8px] p-6 animate-fadeInUp border border-blue-100 hover:border-blue-300"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Icon */}
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                {benefit.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {benefit.description}
              </p>

              {/* Accent Line */}
              <div className="mt-4 h-1 w-0 bg-gradient-to-r from-blue-600 to-yellow-400 group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 rounded-2xl p-8 md:p-12 text-white animate-fadeInUp overflow-hidden relative">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 -z-10"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Retorno Garantido do Investimento
            </h3>
            <p className="text-lg text-blue-100 mb-6 max-w-2xl">
              Recupere seu investimento em 4 a 8 anos e aproveite 17+ anos de energia praticamente gratuita. Após esse período, você terá economizado dezenas de milhares de reais.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-sm text-blue-200 mb-1">Payback Médio</p>
                <p className="text-2xl font-bold">5-6 anos</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-sm text-blue-200 mb-1">Vida Útil</p>
                <p className="text-2xl font-bold">25+ anos</p>
              </div>
              <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                <p className="text-sm text-blue-200 mb-1">Economia Média</p>
                <p className="text-2xl font-bold">80-95%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
