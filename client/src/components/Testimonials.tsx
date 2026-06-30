import { Star } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  text: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      id: '1',
      name: 'Carlos Silva',
      role: 'Proprietário - Lago Sul',
      image: '👨‍💼',
      rating: 5,
      text: 'Excelente atendimento! A equipe da Nova Distrito foi muito profissional e atenciosa. Minha conta de energia caiu drasticamente e o retorno foi muito mais rápido do que esperava.',
    },
    {
      id: '2',
      name: 'Fernanda Costa',
      role: 'Empresária - Brasília',
      image: '👩‍💼',
      rating: 5,
      text: 'Instalamos o sistema solar em nossa empresa e os resultados foram impressionantes. A economia mensal é exatamente como foi estimado. Recomendo muito!',
    },
    {
      id: '3',
      name: 'Roberto Santos',
      role: 'Fazendeiro - Região do Entorno',
      image: '👨‍🌾',
      rating: 5,
      text: 'Perfeito para nossa propriedade rural. O sistema funciona impecavelmente e a manutenção é mínima. Melhor investimento que fizemos!',
    },
    {
      id: '4',
      name: 'Mariana Oliveira',
      role: 'Síndica - Condomínio Residencial',
      image: '👩‍💼',
      rating: 5,
      text: 'A Nova Distrito nos ajudou a implementar energia solar em todo o condomínio. Os moradores estão muito satisfeitos com a redução nas despesas comuns.',
    },
  ];

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira os depoimentos de clientes satisfeitos com nossos serviços
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 animate-fadeInUp hover:translate-y-[-8px]"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-xs text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fadeInUp">
          <p className="text-lg text-gray-600 mb-6">
            Você também pode fazer parte de nossa comunidade de clientes satisfeitos!
          </p>
          <a
            href="https://wa.me/5561964861115"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Solicitar Orçamento</span>
          </a>
        </div>
      </div>
    </section>
  );
}
