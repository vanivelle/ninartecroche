/**
 * Application Constants and Configuration
 */

export const COMPANY_INFO = {
  name: "Ninartcrochê",
  tagline: "Arte em cada ponto, transformando fios em sonhos.",
  phone: "+55 (61) 99199-7037",
  whatsapp: "+5561991997037",
  email: "ninafashion2705@gmail.com",
  address: "Brasília, DF",
  instagram: "@ninartcroche",
  instagramUrl: "https://instagram.com/ninartcroche",
  yearsExperience: 10,
  description:
    "Peças de crochê feitas à mão com amor e carinho. Especializada em tapetes, roupas de praia, souplats, chaveiros e bolsas.",
};

export const COLOR_PALETTE = {
  primary: "#059669", // green carpenter
  secondary: "#f59e0b", // amber/gold
  accent: "#059669", // green - action/WhatsApp
  dark: "#1e293b",
  light: "#f8fafc",
  glass: "rgba(255, 255, 255, 0.1)",
};

export const SERVICES = {
  tapestry: {
    title: "Tapetes Personalizados",
    description: "Tapetes de crochê feitos sob medida para qualquer ambiente.",
    features: ["Design exclusivo", "Material de alta qualidade", "Diversas cores e tamanhos"],
    icon: "Palette",
  },
  beachwear: {
    title: "Roupas de Praia",
    description: "Biquínis, saídas de praia e tops em crochê para um verão com estilo.",
    features: ["Feito à mão", "Confortável e elegante", "Peças únicas"],
    icon: "Palette",
  },
  sousplat: {
    title: "Souplats de Crochê",
    description: "Decore sua mesa com nossos souplats (porta-pratos) artesanais.",
    features: ["Mesa posta com charme", "Várias opções de cores", "Acabamento impecável"],
    icon: "Palette",
  },
  keychains: {
    title: "Chaveiros",
    description: "Lembrancinhas e acessórios como chaveiros de crochê.",
    features: ["Criativos e delicados", "Ótima opção para presente", "Diversos modelos"],
    icon: "Hammer",
  },
  bags: {
    title: "Bolsas de Crochê",
    description: "Bolsas estilosas e versáteis para todas as ocasiões.",
    features: ["Design moderno", "Resistentes e práticas", "Feitas com carinho"],
    icon: "Hammer",
  },
};

export const TESTIMONIALS = [
  {
    name: "Ana P.",
    location: "Brasília, DF",
    rating: 5,
    text: "Amei meu tapete! Feito com muito capricho e exatamente como eu pedi. A entrega foi super rápida. Recomendo demais!",
    avatar: "https://ui-avatars.com/api/?name=Ana+P&background=eab308&color=fff",
  },
  {
    name: "Juliana M.",
    location: "São Paulo, SP",
    rating: 5,
    text: "As roupas de praia são perfeitas! O caimento é ótimo e o material de qualidade. Fizeram o maior sucesso na minha viagem.",
    avatar:
      "https://ui-avatars.com/api/?name=Juliana+M&background=f59e0b&color=fff",
  },
  {
    name: "Fernanda S.",
    location: "Rio de Janeiro, RJ",
    rating: 5,
    text: "Os souplats deixaram minha mesa de jantar um charme. Dá para ver que foram feitos com muito amor e atenção aos detalhes.",
    avatar:
      "https://ui-avatars.com/api/?name=Fernanda+S&background=fbbf24&color=fff",
  },
];

export const FORM_CONFIG = {
  minNameLength: 2,
  maxNameLength: 100,
  minAddressLength: 10,
  phoneFormat: /^\+?1?\d{9,15}$/,
  emailRegex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
};

export const ANIMATION_DELAYS = {
  fast: 0.2,
  normal: 0.3,
  slow: 0.5,
};

export const NAVIGATION = [
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];
