export const CLIENT_CONFIG = {
  name: "Cristal Glass",
  city: "Sua Região",
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

// Imagens Locais conforme solicitado
export const USER_BOX_IMAGE = "/images/Box do banheiro.jpg";
export const USER_DOOR_IMAGE = "/images/Caixa para abrir.jpg";

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
}

// 4 Serviços em Destaque (Cards Grandes)
export const FEATURED_SERVICES: Service[] = [
  {
    id: 'box-de-vidro',
    title: "Box de vidro",
    description: "Instalação rápida de box para banheiro. Vidro temperado 8mm com segurança total.",
    imageUrl: USER_BOX_IMAGE,
    tag: "Mais Pedido"
  },
  {
    id: 'janelas-de-vidro',
    title: "Janelas de vidro",
    description: "Janelas de correr e basculantes sob medida para maior ventilação e claridade.",
    imageUrl: "/images/janelas.jpg",
    tag: "Pronta Entrega"
  },
  {
    id: 'portas-de-vidro',
    title: "Portas de vidro",
    description: "Portas de abrir e de correr para salas e áreas externas com ferragens reforçadas.",
    imageUrl: USER_DOOR_IMAGE,
    tag: "Alta Resistência"
  },
  {
    id: 'troca-de-vidro-quebrado',
    title: "Troca de vidro quebrado",
    description: "Atendimento urgente para substituição de vidros em janelas, portas e sacadas.",
    imageUrl: "/images/troca-vidro.jpg",
    tag: "Urgente"
  }
];

// Lista Completa dos 10 Serviços
export const ALL_SERVICES: Service[] = [
  ...FEATURED_SERVICES,
  {
    id: 'espelhos-sob-medida',
    title: "Espelhos sob medida",
    description: "Espelhos de cristal prata com acabamento bisotê ou lapidado para qualquer ambiente.",
    imageUrl: "/images/espelhos.jpg"
  },
  {
    id: 'envidracamento-sacadas',
    title: "Envidraçamento de sacadas",
    description: "Sistema retrátil panorâmico para proteção contra chuva, vento e barulho.",
    imageUrl: "/images/sacadas.jpg"
  },
  {
    id: 'vidros-temperados',
    title: "Vidros temperados",
    description: "Vidros de segurança para divisórias, tampos de mesa e prateleiras.",
    imageUrl: "/images/temperados.jpg"
  },
  {
    id: 'vidros-laminados',
    title: "Vidros laminados",
    description: "Vidros de alta segurança com película interna, ideais para coberturas.",
    imageUrl: "/images/laminados.jpg"
  },
  {
    id: 'fachadas-de-vidro',
    title: "Fachadas de vidro",
    description: "Projetos comerciais de alto padrão com sistema glazing ou pele de vidro.",
    imageUrl: "/images/fachadas.jpg"
  },
  {
    id: 'guarda-corpo-vidro',
    title: "Guarda-corpo de vidro",
    description: "Segurança para escadas e varandas com fixação técnica em aço inox.",
    imageUrl: "/images/guarda-corpo.jpg"
  }
];

export const TESTIMONIALS = [
  {
    name: "João Silva",
    text: "Orçamento rápido pelo WhatsApp e instalação no prazo. O box ficou perfeito.",
    role: "Cliente",
    avatar: "/images/avatar-1.jpg",
    stars: 5,
    date: "há 2 dias"
  },
  {
    name: "Maria Oliveira",
    text: "Equipe profissional e limpa. Recomendo para troca de vidros urgentes.",
    role: "Cliente",
    avatar: "/images/avatar-2.jpg",
    stars: 5,
    date: "há 1 semana"
  }
];

export const FAQ_ITEMS = [
  {
    question: "Como funciona o orçamento?",
    answer: "Você envia medidas e fotos pelo WhatsApp e retornamos com o valor na hora."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Instalamos box e espelhos em até 5 dias úteis após a confirmação."
  },
  {
    question: "Vocês atendem emergência?",
    answer: "Sim, para troca de vidros quebrados temos prioridade total no atendimento."
  }
];