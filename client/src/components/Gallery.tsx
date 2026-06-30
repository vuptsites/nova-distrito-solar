import { useState } from 'react';

type GalleryCategory = 'all' | 'residential' | 'commercial' | 'condos' | 'rural';

interface GalleryItem {
  id: string;
  category: GalleryCategory;
  title: string;
  description: string;
  image: string;
}

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<GalleryCategory>('all');

  const galleryItems: GalleryItem[] = [
    {
      id: '1',
      category: 'residential',
      title: 'Residência Lago Sul',
      description: 'Sistema 8.0 kWp - Economia de R$ 1.200/mês',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
    },
    {
      id: '2',
      category: 'residential',
      title: 'Casa Moderna Brasília',
      description: 'Sistema 6.5 kWp - Retorno em 5 anos',
      image: 'bg-gradient-to-br from-blue-500 to-blue-700',
    },
    {
      id: '3',
      category: 'commercial',
      title: 'Empresa de Tecnologia',
      description: 'Sistema 25 kWp - Economia de R$ 8.500/mês',
      image: 'bg-gradient-to-br from-yellow-400 to-orange-500',
    },
    {
      id: '4',
      category: 'commercial',
      title: 'Comércio Brasília',
      description: 'Sistema 15 kWp - Redução de 90% na conta',
      image: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    },
    {
      id: '5',
      category: 'condos',
      title: 'Condomínio Residencial',
      description: 'Sistema 120 kWp - 40 unidades',
      image: 'bg-gradient-to-br from-green-400 to-green-600',
    },
    {
      id: '6',
      category: 'condos',
      title: 'Condomínio Comercial',
      description: 'Sistema 80 kWp - 25 lojas',
      image: 'bg-gradient-to-br from-green-500 to-green-700',
    },
    {
      id: '7',
      category: 'rural',
      title: 'Fazenda Brasília',
      description: 'Sistema 50 kWp - Bombeamento de água',
      image: 'bg-gradient-to-br from-amber-400 to-amber-600',
    },
    {
      id: '8',
      category: 'rural',
      title: 'Propriedade Rural',
      description: 'Sistema 35 kWp - Energia 100% renovável',
      image: 'bg-gradient-to-br from-amber-500 to-amber-700',
    },
  ];

  const categories: { value: GalleryCategory; label: string }[] = [
    { value: 'all', label: 'Todos' },
    { value: 'residential', label: 'Residencial' },
    { value: 'commercial', label: 'Comercial' },
    { value: 'condos', label: 'Condomínios' },
    { value: 'rural', label: 'Rural' },
  ];

  const filteredItems =
    activeCategory === 'all' ? galleryItems : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section className="py-16 md:py-24 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Projetos Realizados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Conheça alguns dos projetos que realizamos em Brasília e região
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fadeInUp">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === category.value
                  ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-8px] animate-fadeInUp"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {/* Image */}
              <div className={`relative w-full aspect-square ${item.image} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-white text-4xl mb-2">🏗️</p>
                    <p className="text-white font-semibold text-sm">Ver Detalhes</p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="bg-white p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center animate-fadeInUp">
          <p className="text-lg text-gray-600 mb-6">
            Quer ver mais projetos ou conhecer melhor nosso trabalho?
          </p>
          <a
            href="https://www.instagram.com/novadistrito"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 active:scale-95 transition-all duration-300"
          >
            <span>📷</span>
            <span>Acompanhe no Instagram</span>
          </a>
        </div>
      </div>
    </section>
  );
}
