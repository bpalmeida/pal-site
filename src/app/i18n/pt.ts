export const pt = {
  htmlLang: 'pt-PT',

  nav: {
    schoolMenu: 'Escola de equitação',
    aulas: 'Aulas',
    passeios: 'Passeios',
    eventos: 'Eventos',
    atls: "ATL's",
    cavalosPenso: 'Cavalos a penso',
    instalacoes: 'Instalações',
    galeria: 'Galeria',
    ondeEstamos: 'Onde Estamos',
  },

  footer: {
    rights: '© 2026 Picadeiro Arena Lusitana. Todos os direitos reservados.',
  },

  home: {
    title: 'Picadeiro Arena Lusitana',
    subtitle: 'Descubra a excelência na equitação. Junte-se a nós.',
  },

  instalacoes: {
    heroTitle: 'Instalações',
    intro:
      'O Picadeiro Arena Lusitana orgulha-se de oferecer instalações projetadas para proporcionar o melhor ambiente tanto para cavalos como para cavaleiros. Todas as nossas infraestruturas são regularmente mantidas garantindo uma experiência equestre excecional.',
    facilities: [
      {
        title: 'Picadeiro Coberto',
        description:
          'Picadeiro coberto com piso em sílica/fibra, iluminação e sistema de rega automático. Ideal para treinos em qualquer condição meteorológica.',
      },
      // {
      //   title: 'Picadeiro Exterior',
      //   description:
      //     'Arena exterior de 60x80m com piso especial drenante, perfeito para saltos e dressage. Cercado com vedação de segurança e bancadas para espectadores.',
      // },
      {
        title: 'Boxes',
        description:
          '25 boxes com ventilação natural e sistema automático de bebedouros.',
      },
      {
        title: 'Pasto',
        description:
          'Pastos de manada e paddocks individuais. Todos os campos têm abrigos cobertos, bebedouros automáticos e vedação segura.',
      },
      {
        title: 'Área de Lavagem',
        description:
          'Quatro áreas de lavagem cobertas com água quente e fria, piso antiderrapante.',
      },
      {
        title: 'Sala de arreios',
        description:
          'Sela de arreios com armários individuais para equipamento.',
      },
    ],
    amenitiesTitle: 'Comodidades Adicionais',
    amenities: [
      { icon: '🅿️', title: 'Estacionamento', description: 'Parque de estacionamento gratuito para visitantes e clientes' },
      // { icon: '☕', title: 'Zona de Convívio', description: 'Espaço confortável com cafetaria e área de descanso' },
      // { icon: '📶', title: 'Wi-Fi Gratuito', description: 'Internet de alta velocidade em todas as instalações' },
    ],
  },

  cavalosPenso: {
    heroTitle: 'Cavalos a Penso',
    intro1:
      'No Picadeiro Arena Lusitana, oferecemos serviços de pensos para cavalos, garantindo o máximo conforto, cuidado e bem-estar do seu animal. As nossas instalações modernas e equipa dedicada asseguram que o seu cavalo recebe a melhor atenção diária.',
    intro2:
      'Disponibilizamos duas modalidades de pensos, adaptadas às necessidades específicas de cada cavalo e proprietário: penso em boxe e penso a campo.',
    boxPlan: {
      title: 'Penso em Boxe',
      price: '375€',
      period: '/mês',
      includesLabel: 'Inclui:',
      features: [
        'Boxe individual',
        'Alimentação completa (3x ao dia)',
        'Feno à descrição',
        'Limpeza diária da boxe',
        'Cama de aparas',
        'Água fresca em bebedouros automáticoss',
        'Acesso ao picadeiro coberto',
        'Duche de água quente/fria',
        'Acesso ao solário',
      ],
      noteLabel: 'Serviços adicionais disponíveis:',
      note: 'Paddock diário, trabalho diário, ferrador, veterinário',
    },
    fieldPlan: {
      title: 'Penso a Campo',
      price: '250€',
      period: '/mês',
      includesLabel: 'Inclui:',
      features: [
        'Campo vedado e seguro',
        'Individual ou com companhia de outros cavalos',
        'Alimentação diária',
        'Feno à descrição',
        'Abrigo coberto',
        'Água fresca em bebedouros automáticos',
        'Supervisão diária',
        'Acesso ao picadeiro coberto',
        'Espaço para movimento livre',
        'Duche de água quente/fria',
        'Acesso ao solário',
      ],
      noteLabel: 'Ideal para:',
      note: 'Cavalos que beneficiam de socialização e movimento livre permanente',
    },
    additionalServicesTitle: 'Serviços Adicionais',
    additionalServices: [
      { title: 'Trabalho diário', description: 'Treino e exercício personalizado', price: '15€/dia' },
      { title: 'Banho com tosquia', description: 'Higiene e apresentação', price: '25€' },
      { title: 'Transporte', description: 'Deslocações para eventos', price: 'Sob consulta' },
    ],
  },

  aulas: {
    heroTitle: 'Aulas de Equitação',
    intro1:
      'Oferecemos aulas de equitação para todos os níveis, desde iniciantes até cavaleiros avançados. As nossas aulas são ministradas por instrutores certificados e experientes, garantindo uma aprendizagem segura e eficaz.',
    intro2:
      'Cada aula é adaptada ao nível e objetivos do cavaleiro, proporcionando uma experiência personalizada e enriquecedora. Utilizamos cavalos treinados e dóceis, perfeitos para o desenvolvimento das habilidades equestres.',
    pricingTitle: 'Preçário',
    individual: {
      title: 'Aula Individual',
      description: 'Atenção personalizada com instrutor dedicado',
      price: '40€',
      period: '/aula',
      features: ['1 hora de duração', 'Instrutor dedicado', 'Cavalo adequado ao nível', 'Equipamento incluído'],
    },
    group: {
      title: 'Aula em Grupo',
      description: 'Grupos de até 4 cavaleiros',
      price: '30€',
      period: '/aula',
      features: ['1 hora de duração', 'Máximo 4 alunos', 'Níveis semelhantes', 'Equipamento incluído'],
    },
    package: {
      badge: 'Mais Popular',
      title: 'Pacote Mensal',
      description: '4 aulas em grupo por mês',
      price: '100€',
      period: '/mês',
      features: ['4 aulas incluídas', 'Economia de 20€', 'Horários flexíveis', 'Acompanhamento personalizado'],
    },
  },

  passeios: {
    heroTitle: 'Passeios a Cavalo',
    intro1:
      'Explore a beleza natural da região portuguesa a cavalo. Os nossos passeios são ideais para quem deseja desfrutar de uma experiência única em contacto com a natureza, percorrendo trilhos seguros e paisagens deslumbrantes.',
    intro2:
      'Acompanhados por guias experientes, os passeios são adequados tanto para iniciantes como para cavaleiros experientes. Proporcionamos uma experiência inesquecível num ambiente seguro e relaxante.',
    pricingTitle: 'Preçário',
    short: {
      title: 'Passeio Curto',
      description: 'Percurso de 1 hora',
      price: '80€',
      period: '/pessoa',
      features: ['1 hora de duração', 'Trilhos fáceis', 'Guia acompanhante', 'Para todos os níveis'],
    },
    medium: {
      title: 'Passeio Longo',
      description: 'Percurso de 2 horas',
      price: '120€',
      period: '/pessoa',
      features: ['2 horas de duração', 'Paisagens panorâmicas', 'Guia especializado', 'Para todos os níveis'],
    },
    sunset: {
      title: 'Passeios para grupos',
      description: 'Mínimo 4 pessoas',
      price: 'Sob consulta',
      period: '',
      features: ['Duração variável', 'Vista espetacular', 'Grupos pequenos'],
    },
  },

  eventos: {
    heroTitle: 'Eventos',
    intro1:
      'O Picadeiro Arena Lusitana organiza e acolhe diversos eventos equestres ao longo do ano. As nossas instalações e a localização privilegiada fazem do nosso picadeiro o local ideal para festas de aniversário e celebrações privadas.',
    pricingTitle: 'Preçário de Eventos',
    // competitions: {
    //   title: 'Competições',
    //   description: 'Organização de provas oficiais',
    //   price: 'Sob consulta',
    //   features: ['Uso completo das instalações', 'Equipa de apoio', 'Cronometragem profissional', 'Catering disponível', 'Estacionamento amplo'],
    // },
    // workshops: {
    //   title: 'Workshops & Clínicas',
    //   description: 'Participação em eventos formativos',
    //   price: '80€',
    //   period: '/dia',
    //   features: ['Dia completo de formação', 'Instrutores especializados', 'Material didático incluído', 'Certificado de participação'],
    // },
    privateEvents: {
      title: 'Eventos Privados',
      description: 'Celebrações e eventos corporativos',
      price: 'Sob consulta',
      features: ['Aluguer das instalações', 'Demonstrações equestres', 'Passeios para convidados', 'Espaço personalizável', 'Catering sob consulta'],
    },
    birthdayParty: {
      title: 'Festas de Aniversário',
      description: 'Celebração única com cavalos',
      price: 'Sob consulta',
      period: '',
      features: ['Um dia em cheio', 'Passeios a cavalo', 'Atividades temáticas', 'Decoração incluída'],
    },
  },

  atls: {
    heroTitle: 'ATL de Equitação',
    intro1:
      'O nosso ATL (Atividades de Tempos Livres) de equitação proporciona às crianças uma experiência única e educativa durante as férias escolares. Combinamos o aprendizado da equitação com atividades lúdicas e pedagógicas num ambiente seguro e supervisionado.',
    intro2:
      'As crianças aprendem não só a montar, mas também a cuidar dos cavalos, desenvolver responsabilidade, trabalho em equipa e respeito pelos animais. Um programa completo que alia diversão e aprendizagem.',
    pricingTitle: 'Preçário',
    daily: {
      title: 'ATL Diário',
      description: 'Programa de dia completo',
      price: '40€',
      period: '/dia',
      features: ['9h00 às 17h00', 'Aulas de equitação', 'Atividades lúdicas', 'Lanche incluído', 'Seguro incluído'],
    },
    weekly: {
      badge: 'Recomendado',
      title: 'ATL Semanal',
      description: 'Semana completa de atividades',
      price: '180€',
      period: '/semana',
      features: ['5 dias (2ª a 6ª feira)', 'Programa completo', 'Almoço e lanches', 'T-shirt do ATL', 'Economia de 20€'],
    },
    summerCamp: {
      title: 'Campo de Férias',
      description: 'Programa de verão intensivo',
      price: '650€',
      period: '/mês',
      features: ['4 semanas completas', 'Aulas diárias', 'Excursões a cavalo', 'Todas as refeições', 'Kit do cavaleiro'],
    },
    infoTitle: 'Informações Importantes',
    infoItems: [
      'Idades: 6 a 14 anos',
      'Todos os níveis aceites (iniciantes e avançados)',
      'Equipamento de segurança fornecido',
      'Máximo 12 crianças por grupo',
      'Inscrições abertas todo o ano',
    ],
  },

  galeria: {
    heroTitle: 'Galeria',
    heroSubtitle: 'Momentos memoráveis do Picadeiro Arena Lusitana',
    categories: {
      todos: 'Todos',
      cavalos: 'Cavalos',
      aulas: 'Aulas',
      instalacoes: 'Instalações',
      passeios: 'Passeios',
    },
    imageTitles: [
      'Cavalo Lusitano em retrato',
      'Treino de Dressage',
      'Saltos de Obstáculos',
      'Aula de Equitação',
      'Cavalo Branco',
      'Estábulos de Luxo',
      'Arena de Treino',
      'Cavalo ao Pôr do Sol',
      'Equipamento de Equitação',
      'Close-up de Cavalo',
      'Cavalos em Liberdade',
      'Passeio ao Ar Livre',
    ],
    emptyState: 'Nenhuma imagem encontrada nesta categoria.',
  },

  ondeEstamos: {
    heroTitle: 'Onde Estamos',
    contactsTitle: 'Contactos',
    addressLabel: 'Morada',
    phoneLabel: 'Telefone',
    emailLabel: 'Email',
    socialLabel: 'Redes Sociais',
    hoursLabel: 'Horário de Funcionamento',
    hoursWeekday: 'Segunda a Sábado:',
    hoursSunday: 'Domingo:',
    locationTitle: 'Localização',
    howToArriveLabel: 'Como Chegar:',
    howToArriveText: 'A 200m da rotunda da paz.',
  },
};

export type Translations = typeof pt;