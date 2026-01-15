export const PACOTES_DETALHES = [
  {
    id: 1,
    titulo: 'Pacote completo para Trancoso',
    localizacao: 'Trancoso - BA',
    icon:'assets/img/icons/icons8-marcador.png',

    imagens: {
      banner: 'assets/img/pacotes-detalhes/BA/banner.jpg',
      galeria: [
        'assets/img/pacotes-detalhes/BA/01.jpg',
        'assets/img/pacotes-detalhes/BA/02.jpg',
        'assets/img/pacotes-detalhes/BA/03.jpg'
      ]
    },

    sobre: {
      descricao:
        'O passeio completo para Trancoso oferece uma experiência única em um dos destinos mais encantadores do sul da Bahia. O roteiro combina praias paradisíacas, paisagens naturais preservadas e tempo livre para conhecer o famoso Quadrado de Trancoso.',
      observacoes:
        'Recomenda-se o uso de roupas leves, protetor solar e calçados confortáveis. O passeio pode sofrer ajustes conforme condições climáticas.'
    },

    pontosProximos: [
      {
        nome: 'Solar do Imperador',
        distancia: '200m',
        referencia: 'Terminal Rodoviário de Porto Seguro'
      },
      {
        nome: 'Quadrado de Trancoso',
        distancia: '500m',
        referencia: 'Centro histórico'
      },
      {
        nome: 'Praia dos Coqueiros',
        distancia: '1km',
        referencia: 'Acesso pelo Quadrado'
      }
    ],

    informacoes: {
      acessibilidade: true,

      taxaLocal: {
        possui: true,
        descricao: 'Passeio de catamarã pago à parte'
      }
    }
  },
  {
  id: 2,
  titulo: 'Experiência inesquecível nos Lençóis Maranhenses',
  localizacao: 'Barreirinhas - MA',

  imagens: {
    banner: 'assets/img/pacotes-detalhes/MA/banner.jpg',
    galeria: [
      'assets/img/pacotes-detalhes/MA/01.jpg',
      'assets/img/pacotes-detalhes/MA/02.jpg',
      'assets/img/pacotes-detalhes/MA/03.jpg'
    ]
  },

  sobre: {
    descricao:
      'O pacote para os Lençóis Maranhenses proporciona uma vivência única entre dunas de areia branca e lagoas cristalinas formadas pelas chuvas. O roteiro inclui passeios guiados em veículos 4x4, contemplação do pôr do sol e tempo livre para banho nas lagoas.',
    observacoes:
      'Passeio recomendado entre os meses de junho e setembro, quando as lagoas estão cheias. Use roupas leves, chapéu e protetor solar.'
  },

  pontosProximos: [
    {
      nome: 'Lagoa Azul',
      distancia: '12km',
      referencia: 'Parque Nacional dos Lençóis Maranhenses'
    },
    {
      nome: 'Lagoa Bonita',
      distancia: '15km',
      referencia: 'Acesso por trilha guiada'
    }
  ],

  informacoes: {
    acessibilidade: false,

    taxaLocal: {
      possui: true,
      descricao: 'Taxa de acesso ao parque e transporte 4x4 não inclusos'
    }
  }
},
{
  id: 3,
  titulo: 'Foz do Iguaçu: natureza, aventura e cultura',
  localizacao: 'Foz do Iguaçu - PR',

  imagens: {
    banner: 'assets/img/pacotes-detalhes/PR/banner.jpg',
    galeria: [
      'assets/img/pacotes-detalhes/PR/01.jpg',
      'assets/img/pacotes-detalhes/PR/02.jpg',
      'assets/img/pacotes-detalhes/PR/03.jpg'
    ]
  },

  sobre: {
    descricao:
      'O pacote para Foz do Iguaçu reúne uma das maiores maravilhas naturais do mundo: as Cataratas do Iguaçu. O roteiro inclui visitas ao Parque Nacional, à Usina de Itaipu e opções de passeios culturais na tríplice fronteira.',
    observacoes:
      'Leve capa de chuva para a visita às Cataratas. Documentos pessoais são necessários para passeios na fronteira.'
  },

  pontosProximos: [
    {
      nome: 'Cataratas do Iguaçu',
      distancia: '8km',
      referencia: 'Parque Nacional do Iguaçu'
    },
    {
      nome: 'Usina de Itaipu',
      distancia: '10km',
      referencia: 'Centro de Visitantes'
    }
  ],

  informacoes: {
    acessibilidade: true,

    taxaLocal: {
      possui: true,
      descricao: 'Ingresso do Parque Nacional cobrado à parte'
    }
  }
},
{
  id: 4,
  titulo: 'Rio de Janeiro: Pão de Açúcar e paisagens icônicas',
  localizacao: 'Rio de Janeiro - RJ',

  imagens: {
    banner: 'assets/img/pacotes-detalhes/RJ/banner.jpg',
    galeria: [
      'assets/img/pacotes-detalhes/RJ/01.jpg',
      'assets/img/pacotes-detalhes/RJ/02.jpg',
      'assets/img/pacotes-detalhes/RJ/03.jpg'
    ]
  },

  sobre: {
    descricao:
      'O passeio pelo Pão de Açúcar oferece uma das vistas mais famosas do Brasil. O roteiro inclui o trajeto de bondinho até o Morro da Urca e o topo do Pão de Açúcar, com tempo livre para fotos e contemplação da Baía de Guanabara.',
    observacoes:
      'Evite horários de pico para melhor aproveitamento. Passeio indicado para todas as idades.'
  },

  pontosProximos: [
    {
      nome: 'Morro da Urca',
      distancia: '300m',
      referencia: 'Primeira estação do bondinho'
    },
    {
      nome: 'Praia Vermelha',
      distancia: '200m',
      referencia: 'Bairro da Urca'
    }
  ],

  informacoes: {
    acessibilidade: true,

    taxaLocal: {
      possui: true,
      descricao: 'Ingresso do bondinho não incluso no pacote'
    }
  }
}



];
