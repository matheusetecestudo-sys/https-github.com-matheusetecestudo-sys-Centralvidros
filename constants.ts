export const CLIENT_CONFIG = {
  name: "Cristal Glass",
  city: "São Paulo e Região",
  neighborhoods: "Atendimento rápido em toda a cidade",
  whatsapp: "5511999999999",
  phoneDisplay: "(11) 99999-9999",
  email: "contato@cristalglass.com.br",
  address: "Atendimento em domicílio e Showroom",
  openingHours: "Seg-Sex: 08:00 às 18:00 | Sáb: 08:00 às 13:00",
  message: "Olá! Gostaria de pedir um orçamento pelo WhatsApp."
};

export const WHATSAPP_LINK = `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent(CLIENT_CONFIG.message)}`;

export const getServiceWhatsAppLink = (serviceName: string) => {
  const msg = `Olá! Vi no site e gostaria de um orçamento para ${serviceName}.`;
  return `https://wa.me/${CLIENT_CONFIG.whatsapp}?text=${encodeURIComponent(msg)}`;
};

export const CTA_TEXT = "Peça seu orçamento no WhatsApp";

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
}

// Catálogo Completo com 15 Serviços (Um para cada imagem .png)
export const ALL_SERVICES: Service[] = [
  {
    id: 'box-de-vidro',
    title: "Box de vidro",
    description: "Vidros temperados para banheiros com diversas opções de acabamento.",
    imageUrl: "/images/Box de vidro.png"
  },
  {
    id: 'janelas-de-vidro',
    title: "Janelas de vidro",
    description: "Instalação de janelas em vidro temperado ou comum.",
    imageUrl: "/images/Janelas de vidro.png"
  },
  {
    id: 'portas-de-vidro',
    title: "Portas de vidro",
    description: "Soluções elegantes para entradas e divisórias de ambientes.",
    imageUrl: "/images/Portas de vidro.png"
  },
  {
    id: 'espelhos-sob-medida',
    title: "Espelhos sob medida",
    description: "Espelhos lapidados e bisotados para salas e banheiros.",
    imageUrl: "/images/Espelhos sob medida.png"
  },
  {
    id: 'envidracamento-sacadas',
    title: "Envidraçamento de sacadas",
    description: "Fechamento de varandas com sistema de abertura total.",
    imageUrl: "/images/Envidraçamento de sacadas.png"
  },
  {
    id: 'vidros-temperados',
    title: "Vidros temperados",
    description: "Vidros de alta resistência para diversas aplicações.",
    imageUrl: "/images/Vidros temperados.png"
  },
  {
    id: 'vidros-laminados',
    title: "Vidros laminados",
    description: "Vidros de segurança para coberturas e áreas de risco.",
    imageUrl: "/images/Vidros laminados.png"
  },
  {
    id: 'fachadas-de-vidro',
    title: "Fachadas de vidro",
    description: "Projetos de fachadas comerciais e residenciais (Pele de vidro).",
    imageUrl: "/images/Fachadas de vidro.png"
  },
  {
    id: 'guarda-corpo-vidro',
    title: "Guarda-corpo de vidro",
    description: "Segurança e design para escadas e sacadas.",
    imageUrl: "/images/Guarda-corpo de vidro.png"
  },
  {
    id: 'manutencao-vidro',
    title: "Manutenção e troca de vidro quebrado",
    description: "Troca rápida e segura de vidros avariados.",
    imageUrl: "/images/Manutenção e troca de vidro quebrado.png"
  },
  {
    id: 'tampos-de-mesa',
    title: "Tampos de mesa",
    description: "Vidros sob medida para mesas de jantar e escritórios.",
    imageUrl: "/images/Tampos de mesa.png"
  },
  {
    id: 'prateleiras-de-vidro',
    title: "Prateleiras de vidro",
    description: "Soluções práticas e elegantes para organização.",
    imageUrl: "/images/Prateleiras de vidro.png"
  },
  {
    id: 'divisorias-de-vidro',
    title: "Divisórias de vidro",
    description: "Divisão de ambientes corporativos e residenciais.",
    imageUrl: "/images/Divisórias de vidro.png"
  },
  {
    id: 'coberturas-de-vidro',
    title: "Coberturas de vidro",
    description: "Proteção contra chuva com entrada de luz natural.",
    imageUrl: "/images/Coberturas de vidro.png"
  },
  {
    id: 'muro-de-vidro',
    title: "Muro de vidro",
    description: "Segurança com visibilidade total para sua fachada.",
    imageUrl: "/images/Muro de vidro.png"
  }
];

// 4 Serviços Principais para a Home
export const FEATURED_SERVICES: Service[] = [
  { ...ALL_SERVICES[0], tag: "Mais Pedido" },
  { ...ALL_SERVICES[1], tag: "Pronta Entrega" },
  { ...ALL_SERVICES[2], tag: "Alta Resistência" },
  { ...ALL_SERVICES[9], tag: "Urgente" }
];

export const TESTIMONIALS = [
  {
    name: "João Silva",
    text: "Orçamento rápido pelo WhatsApp e instalação no prazo. O box ficou ótimo.",
    role: "Cliente",
    avatar: "/images/avatar-1.png",
    stars: 5,
    date: "há 2 dias"
  },
  {
    name: "Maria Oliveira",
    text: "Precisei trocar o vidro da janela urgente e eles resolveram no mesmo dia.",
    role: "Cliente",
    avatar: "/images/avatar-2.png",
    stars: 5,
    date: "há 1 semana"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona o orçamento?",
    answer: "Basta clicar no botão de WhatsApp, enviar as medidas aproximadas e fotos do local. Respondemos com o orçamento na hora."
  },
  {
    question: "Qual o prazo médio de instalação?",
    answer: "Para itens comuns como box e espelhos, o prazo é de 3 a 5 dias úteis."
  },
  {
    question: "Atendem casos urgentes de vidro quebrado?",
    answer: "Sim! Temos uma equipe dedicada para substituição imediata de vidros que ofereçam risco à segurança."
  }
];