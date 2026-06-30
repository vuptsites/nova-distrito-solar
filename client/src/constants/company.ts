/**
 * Nova Distrito Company Constants
 * Centralized company information and configuration
 */

export const COMPANY = {
  name: 'Nova Distrito',
  tagline: 'Energia Solar Inteligente',
  description: 'Soluções completas em energia solar fotovoltaica para residências, empresas, condomínios e propriedades rurais em Brasília e região.',
  
  // Contact Information
  contact: {
    whatsapp: '+55 61 96486-115',
    whatsappLink: 'https://wa.me/5561964861115',
    instagram: '@novadistrito',
    instagramUrl: 'https://www.instagram.com/novadistrito',
  },
  
  // Location
  location: {
    address: 'Setor de Mansões Dom Bosco',
    neighborhood: 'Lago Sul',
    city: 'Brasília',
    state: 'DF',
    zipCode: '71680-120',
    fullAddress: 'Setor de Mansões Dom Bosco, Lago Sul, Brasília – DF, CEP: 71680-120',
    coordinates: {
      lat: -15.8267,
      lng: -47.8822,
    },
  },

  // Color Palette
  colors: {
    primary: '#0D47A1',
    primaryDark: '#08306B',
    yellow: '#FFC107',
    yellowAccent: '#FFB300',
    white: '#FFFFFF',
    lightGray: '#F4F6F8',
    darkGray: '#374151',
  },
};

/**
 * Solar Calculator Configuration
 * Formulas and constants for energy calculations
 */
export const SOLAR_CALCULATOR = {
  // Default energy tariff (R$/kWh)
  defaultTariff: 1.0,
  
  // Formulas
  formulas: {
    // Recommended system power: Consumption (kWh) ÷ 160
    systemPower: (consumptionKwh: number) => {
      const power = consumptionKwh / 160;
      return Math.ceil(power * 100) / 100; // Round up to 2 decimal places
    },
    
    // Required area: System (kWp) × 6 m²
    requiredArea: (systemKwp: number) => {
      return systemKwp * 6;
    },
    
    // Monthly savings: 95% of bill value
    monthlySavings: (billValue: number) => {
      return billValue * 0.95;
    },
    
    // Annual savings: Monthly × 12
    annualSavings: (monthlySavings: number) => {
      return monthlySavings * 12;
    },
    
    // 25-year savings: Annual × 25
    savingsIn25Years: (annualSavings: number) => {
      return annualSavings * 25;
    },
    
    // Convert bill to consumption: Bill ÷ Tariff
    billToConsumption: (billValue: number, tariff: number) => {
      return billValue / tariff;
    },
  },

  // Savings percentage
  savingsPercentage: 95,
  
  // System lifespan (years)
  lifespan: 25,
};

/**
 * Services offered by Nova Distrito
 */
export const SERVICES = [
  {
    id: 'residential',
    icon: '🏡',
    title: 'Energia Solar Residencial',
    description: 'Sistemas de energia solar personalizados para residências, reduzindo sua conta de energia em até 95%.',
  },
  {
    id: 'commercial',
    icon: '🏢',
    title: 'Energia Solar Comercial',
    description: 'Soluções completas para empresas, comércios e indústrias com retorno garantido do investimento.',
  },
  {
    id: 'rural',
    icon: '🚜',
    title: 'Energia Solar Rural',
    description: 'Sistemas robustos para propriedades rurais e fazendas com alta eficiência energética.',
  },
  {
    id: 'condos',
    icon: '🏘️',
    title: 'Energia Solar para Condomínios',
    description: 'Instalações em condomínios residenciais e comerciais com economia compartilhada.',
  },
  {
    id: 'projects',
    icon: '📐',
    title: 'Projetos Fotovoltaicos',
    description: 'Projetos técnicos personalizados com análise completa de viabilidade energética.',
  },
  {
    id: 'maintenance',
    icon: '🔧',
    title: 'Manutenção Preventiva',
    description: 'Serviços de manutenção e limpeza para máximo desempenho do seu sistema.',
  },
  {
    id: 'consulting',
    icon: '📊',
    title: 'Consultoria Energética',
    description: 'Consultoria especializada para otimizar seu consumo e investimento em energia solar.',
  },
  {
    id: 'homologation',
    icon: '📑',
    title: 'Homologação junto à Concessionária',
    description: 'Processo completo de regularização e homologação com a concessionária de energia.',
  },
];

/**
 * Benefits of Solar Energy
 */
export const BENEFITS = [
  {
    icon: '🌞',
    title: 'Economia de até 95%',
    description: 'Reduza significativamente sua conta de energia elétrica.',
  },
  {
    icon: '♻️',
    title: 'Energia Limpa',
    description: 'Contribua para um planeta mais sustentável e limpo.',
  },
  {
    icon: '📈',
    title: 'Excelente Retorno Financeiro',
    description: 'Recupere seu investimento em poucos anos.',
  },
  {
    icon: '🏡',
    title: 'Valorização do Imóvel',
    description: 'Aumente o valor de sua propriedade.',
  },
  {
    icon: '🔋',
    title: 'Baixa Manutenção',
    description: 'Sistemas duráveis com manutenção mínima.',
  },
  {
    icon: '⚡',
    title: 'Proteção contra Aumentos Tarifários',
    description: 'Independência energética e proteção financeira.',
  },
  {
    icon: '🌎',
    title: 'Sustentabilidade',
    description: 'Energia renovável e responsável com o meio ambiente.',
  },
  {
    icon: '🛠️',
    title: 'Longa Vida Útil',
    description: 'Equipamentos com durabilidade de 25+ anos.',
  },
];

/**
 * Process Steps
 */
export const PROCESS_STEPS = [
  {
    number: 1,
    emoji: '1️⃣',
    title: 'Análise do Consumo',
    description: 'Avaliamos seu consumo de energia e necessidades específicas.',
  },
  {
    number: 2,
    emoji: '2️⃣',
    title: 'Projeto Personalizado',
    description: 'Desenvolvemos um projeto técnico customizado para sua situação.',
  },
  {
    number: 3,
    emoji: '3️⃣',
    title: 'Aprovação do Orçamento',
    description: 'Apresentamos o orçamento e esclarecemos todas as dúvidas.',
  },
  {
    number: 4,
    emoji: '4️⃣',
    title: 'Instalação',
    description: 'Realizamos a instalação profissional do sistema solar.',
  },
  {
    number: 5,
    emoji: '5️⃣',
    title: 'Homologação',
    description: 'Regularizamos o sistema junto à concessionária de energia.',
  },
  {
    number: 6,
    emoji: '6️⃣',
    title: 'Economia Todos os Meses',
    description: 'Comece a economizar e aproveite os benefícios da energia solar.',
  },
];

/**
 * FAQ Items
 */
export const FAQ_ITEMS = [
  {
    question: 'Quanto posso economizar?',
    answer: 'A economia depende do seu consumo atual de energia. Em média, nossos clientes economizam entre 80% a 95% da conta de energia elétrica. Use nossa calculadora solar para uma estimativa personalizada.',
  },
  {
    question: 'O sistema funciona em dias nublados?',
    answer: 'Sim! Os painéis solares funcionam mesmo em dias nublados, embora com menor eficiência. Brasília tem excelente incidência solar durante o ano todo, garantindo excelente desempenho.',
  },
  {
    question: 'Quanto tempo dura um sistema fotovoltaico?',
    answer: 'Os painéis solares têm vida útil de mais de 25 anos, mantendo 80% de sua eficiência. Os inversores têm garantia de 10 anos e podem durar até 20 anos com manutenção adequada.',
  },
  {
    question: 'Precisa de manutenção?',
    answer: 'A manutenção é mínima. Recomendamos limpeza dos painéis 1-2 vezes por ano e verificação anual do sistema. Oferecemos pacotes de manutenção preventiva.',
  },
  {
    question: 'Quanto tempo leva para instalar?',
    answer: 'A instalação típica leva de 3 a 7 dias, dependendo do tamanho do sistema. O processo completo, incluindo projeto e homologação, leva em média 30 dias.',
  },
  {
    question: 'Em quanto tempo recupero o investimento?',
    answer: 'O retorno do investimento varia de 4 a 8 anos, dependendo do seu consumo e da tarifa de energia. Após esse período, você aproveita 17+ anos de energia praticamente gratuita.',
  },
  {
    question: 'A Nova Distrito atende toda a região de Brasília?',
    answer: 'Sim! Atendemos Brasília e região, incluindo cidades do Entorno. Realizamos visitas técnicas em toda a região do Distrito Federal.',
  },
];
