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

// Imagens específicas solicitadas com nomes de arquivos manuais
export const USER_BOX_IMAGE = "/images/Box do banheiro.jpg";
export const USER_DOOR_IMAGE = "/images/Caixa para abrir.jpg";

export interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tag?: string;
}

// 4 Serviços Principais (Destaque na Home)
export const FEATURED_SERVICES: Service[] = [
  {
    id: 'box-de-vidro',
    title: "Box de vidro",
    description: "Instalação rápida de box para banheiro com vidro temperado 8mm.",
    imageUrl: USER_BOX_IMAGE,
    tag: "Mais Pedido"
  },
  {
    id: 'janelas-de-vidro',
    title: "Janelas de vidro",
    description: "Janelas de correr e basculantes sob medida para sua residência.",
    imageUrl: "/images/Janelas de vidro.jpg",
    tag: "Pronta Entrega"
  },
  {
    id: 'portas-de-vidro',
    title: "Portas de vidro",
    description: "Portas de abrir e de correr com ferragens de alta qualidade.",
    imageUrl: USER_DOOR_IMAGE,
    tag: "Alta Resistência"
  },
  {
    id: 'manutencao-e-troca-de-vidro-quebrado',
    title: "Manutenção e troca de vidro quebrado",
    description: "Atendimento urgente para manutenção e substituição de vidros.",
    imageUrl: "/images/Manutenção e troca de vidro quebrado.jpg",
    tag: "Urgente"
  }
];

// Catálogo Completo (Todos os 10 Serviços seguindo os nomes dos arquivos)
export const ALL_SERVICES: Service[] = [
  {
    id: 'box-de-vidro',
    title: "Box de vidro",
    description: "Vidros temperados para banheiros com diversas opções de acabamento.",
    imageUrl: USER_BOX_IMAGE
  },
  {
    id: 'janelas-de-vidro',
    title: "Janelas de vidro",
    description: "Instalação de janelas em vidro temperado ou comum.",
    imageUrl: "/images/Janelas de vidro.jpg"
  },
  {
    id: 'portas-de-vidro',
    title: "Portas de vidro",
    description: "Soluções elegantes para entradas e divisórias de ambientes.",
    imageUrl: USER_DOOR_IMAGE
  },
  {
    id: 'espelhos-sob-medida',
    title: "Espelhos sob medida",
    description: "Espelhos lapidados e bisotados para salas, banheiros e quartos.",
    imageUrl: "/images/Espelhos sob medida.jpg"
  },
  {
    id: 'envidracamento-sacadas',
    title: "Envidraçamento de sacadas",
    description: "Fechamento de varandas com sistema de abertura total.",
    imageUrl: "/images/Envidraçamento de sacadas.jpg"
  },
  {
    id: 'vidros-temperados',
    title: "Vidros temperados",
    description: "Vidros de alta resistência para prateleiras e tampos de mesa.",
    imageUrl: "/images/Vidros temperados.jpg"
  },
  {
    id: 'vidros-laminados',
    title: "Vidros laminados",
    description: "Vidros de segurança para coberturas e áreas de risco.",
    imageUrl: "/images/Vidros laminados.jpg"
  },
  {
    id: 'fachadas-de-vidro',
    title: "Fachadas de vidro",
    description: "Projetos de fachadas comerciais e residenciais (Pele de vidro).",
    imageUrl: "/images/Fachadas de vidro.jpg"
  },
  {
    id: 'guarda-corpo-vidro',
    title: "Guarda-corpo de vidro",
    description: "Segurança e design para escadas, mezaninos e sacadas.",
    imageUrl: "/images/Guarda-corpo de vidro.jpg"
  },
  {
    id: 'manutencao-e-troca-de-vidro-quebrado',
    title: "Manutenção e troca de vidro quebrado",
    description: "Troca rápida e segura de vidros avariados.",
    imageUrl: "/images/Manutenção e troca de vidro quebrado.jpg"
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