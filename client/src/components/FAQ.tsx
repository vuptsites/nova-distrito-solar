import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { FAQ_ITEMS } from '@/constants/company';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 md:py-24 lg:py-32 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tire suas dúvidas sobre energia solar e nossos serviços
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden animate-fadeInUp"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-blue-50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-gray-900 text-left">
                  {item.question}
                </h3>
                <ChevronDown
                  size={24}
                  className={`flex-shrink-0 text-blue-600 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              {openIndex === index && (
                <div className="px-6 py-4 bg-blue-50 border-t border-blue-100">
                  <p className="text-gray-700 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fadeInUp">
          <p className="text-lg text-gray-600 mb-4">
            Ainda tem dúvidas? Nossa equipe está pronta para ajudar!
          </p>
          <a
            href="https://wa.me/5561964861115"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>Falar com um Especialista</span>
          </a>
        </div>
      </div>
    </section>
  );
}
