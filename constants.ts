
export const CLIENT_CONFIG = {
  // Ajustando nome para Cristal Glass conforme usado na Navbar e Footer
  name: "Cristal Glass",
  city: "Sua Região e Cidades Próximas",
  neighborhoods: "Atendimento rápido em toda a região",
  whatsapp: "5511999999999", // Ajuste para o seu número real
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

// Corrigindo o erro: exportando a constante USER_BOX_IMAGE que é utilizada no Hero.tsx
export const USER_BOX_IMAGE = "/images/Box do banheiro.jpg";

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
}

// Serviços em Destaque (Cards Grandes)
export const FEATURED_SERVICES: Service[] = [
  {
    id: 'box-de-vidro',
    title: "Box de vidro",
    description: "Instalação rápida de box para banheiro. Vidro temperado 8mm com diversas cores de acabamento.",
    imageUrl: "/images/Box do banheiro.jpg",
    tag: "Mais Pedido"
  },
  {
    id: 'janelas-de-vidro',
    title: "Janelas de vidro",
    description: "Janelas de correr, integradas e basculantes. Vidro comum ou temperado para maior isolamento.",
    imageUrl: "/images/janelas.jpg",
    tag: "Pronta Entrega"
  },
  {
    id: 'portas-de-vidro',
    title: "Portas de vidro",
    description: "Portas de abrir e de correr sob medida para salas, cozinhas e áreas externas.",
    imageUrl: "/images/Caixa para abrir.jpg",
    tag: "Alta Resistência"
  },
  {
    id: 'troca-de-vidro-quebrado',
    title: "Troca de vidro quebrado",
    description: "Atendimento urgente para substituição de vidros quebrados em portas, janelas e fachadas.",
    imageUrl: "/images/manutencao.jpg",
    tag: "Urgente"
  }
];

// Lista Completa de Serviços
export const ALL_SERVICES: Service[] = [
  ...FEATURED_SERVICES,
  {
    id: 'espelhos-sob-medida',
    title: "Espelhos sob medida",
    description: "Espelhos para banheiros, salas e closets. Acabamento bisotê ou lapidado.",
    imageUrl: "/images/espelhos.jpg"
  },
  {
    id: 'envidracamento-sacadas',
    title: "Envidraçamento de sacadas",
    description: "Fechamento completo de varandas com sistema retrátil. Mais segurança e menos ruído.",
    imageUrl: "/images/sacadas.jpg"
  },
  {
    id: 'vidros-temperados',
    title: "Vidros temperados",
    description: "Vidros de segurança para diversas aplicações residenciais e comerciais.",
    imageUrl: "/images/temperados.jpg"
  },
  {
    id: 'vidros-laminados',
    title: "Vidros laminados",
    description: "Vidros duplos com película de segurança. Ideal para coberturas e fachadas.",
    imageUrl: "/images/laminados.jpg"
  },
  {
    id: 'fachadas-de-vidro',
    title: "Fachadas de vidro",
    description: "Projetos de fachadas comerciais e residenciais (Pele de vidro / Glazing).",
    imageUrl: "/images/fachadas.jpg"
  },
  {
    id: 'guarda-corpo-vidro',
    title: "Guarda-corpo de vidro",
    description: "Segurança para escadas e sacadas seguindo as normas técnicas.",
    imageUrl: "/images/guarda-corpo.jpg"
  }
];

export const TESTIMONIALS = [
  {
    name: "João Silva",
    text: "Orçamento rápido pelo WhatsApp e instalação no prazo. O box ficou ótimo.",
    role: "Cliente",
    avatar: "/images/avatar-1.jpg",
    stars: 5,
    date: "há 2 dias"
  },
  {
    name: "Maria Oliveira",
    text: "Precisei trocar o vidro da janela urgente e eles resolveram no mesmo dia.",
    role: "Cliente",
    avatar: "/images/avatar-2.jpg",
    stars: 5,
    date: "há 1 semana"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona o orçamento?",
    answer: "Você envia as medidas e fotos do local pelo WhatsApp e enviamos o valor na hora."
  },
  {
    question: "Qual o prazo de instalação?",
    answer: "Depende do serviço. Box e espelhos costumam ser instalados em até 5 dias úteis."
  },
  {
    question: "Vocês atendem emergência?",
    answer: "Sim, para troca de vidros quebrados temos atendimento prioritário."
  }
];