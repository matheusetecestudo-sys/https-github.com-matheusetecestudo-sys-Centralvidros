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

// LISTA COMPLETA DE SERVIÇOS (15 Itens)
export const ALL_SERVICES: Service[] = [
  {
    id: 'box-banheiro',
    title: "Box de banheiro",
    description: "Instalação de box em vidro temperado com roldanas de alta performance e vedação garantida.",
    imageUrl: "/images/box-banheiro.jpg"
  },
  {
    id: 'espelhos-medida',
    title: "Espelhos sob medida",
    description: "Espelhos de cristal com acabamento lapidado ou bisotê, ideais para banheiros, salas e closets.",
    imageUrl: "/images/espelhos.jpg"
  },
  {
    id: 'janelas-vidro',
    title: "Janelas de vidro",
    description: "Janelas em vidro temperado ou comum, com sistemas de correr ou basculantes sob medida.",
    imageUrl: "/images/janelas.jpg"
  },
  {
    id: 'troca-vidro',
    title: "Troca de vidro quebrado",
    description: "Substituição rápida e segura de vidros quebrados em janelas, portas e móveis.",
    imageUrl: "/images/troca-vidro-quebrado.jpg"
  },
  {
    id: 'portas-vidro',
    title: "Portas de vidro",
    description: "Portas de abrir ou correr com ferragens modernas para residências e empresas.",
    imageUrl: "/images/divisorias.jpg"
  },
  {
    id: 'vidro-temperado',
    title: "Vidro temperado",
    description: "Vidros de alta resistência para projetos que exigem máxima segurança e durabilidade.",
    imageUrl: "/images/vidro-temperado-quebrado.jpg"
  },
  {
    id: 'vidro-comum',
    title: "Vidro comum",
    description: "Opções versáteis em diversas espessuras para aplicações variadas em vidraçaria.",
    imageUrl: "/images/janelas.jpg"
  },
  {
    id: 'manutencao-portas',
    title: "Manutenção de portas e janelas",
    description: "Troca de roldanas, guias, batedores e regulagem completa para o funcionamento perfeito.",
    imageUrl: "/images/manutencao.jpg"
  },
  {
    id: 'fechamento-sacada',
    title: "Fechamento de sacada / varanda",
    description: "Envidraçamento de sacadas com sistema retrátil para aproveitar seu ambiente em qualquer clima.",
    imageUrl: "/images/sacada.jpg"
  },
  {
    id: 'vitrines-comerciais',
    title: "Vitrines comerciais",
    description: "Instalação e manutenção de vitrines em vidro para lojas e estabelecimentos comerciais.",
    imageUrl: "/images/vitrine-comercial.jpg"
  },
  {
    id: 'guarda-corpo',
    title: "Guarda-corpo de vidro",
    description: "Segurança e elegância para escadas e sacadas com fixação técnica certificada.",
    imageUrl: "/images/guarda-corpo.jpg"
  },
  {
    id: 'tampos-mesa',
    title: "Tampos de mesa de vidro",
    description: "Vidros sob medida com lapidação de alta precisão para móveis e mesas de jantar.",
    imageUrl: "/images/espelhos.jpg"
  },
  {
    id: 'prateleiras-vidro',
    title: "Prateleiras de vidro",
    description: "Soluções práticas e modernas para organização e exposição de produtos ou objetos.",
    imageUrl: "/images/prateleiras.jpg"
  },
  {
    id: 'vidros-especiais',
    title: "Vidros fumê, bronze e refletivo",
    description: "Vidros decorativos e funcionais que garantem privacidade e controle de luminosidade.",
    imageUrl: "/images/fachada.jpg"
  },
  {
    id: 'fachadas-vidro',
    title: "Fachadas de vidro",
    description: "Projetos de fachadas em pele de vidro ou vidros temperados para prédios e lojas.",
    imageUrl: "/images/fachada.jpg"
  }
];

// 4 SERVIÇOS EM DESTAQUE ( Homepage - Prioridade Máxima )
export const FEATURED_SERVICES: Service[] = [
  { ...ALL_SERVICES[0], tag: "Mais Pedido" },
  { ...ALL_SERVICES[1], tag: "Acabamento Premium" },
  { ...ALL_SERVICES[2], tag: "Instalação Rápida" },
  { ...ALL_SERVICES[3], tag: "Atendimento Urgente" }
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