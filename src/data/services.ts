export interface ServiceSection {
  title: string;
  items?: string[];
  text?: string;
}

export interface Service {
  id: number;
  title: string;
  pageTitle: string;
  slug: string;
  image: string;
  alt: string;
  metaDescription: string;
  intro: string;
  sections: ServiceSection[];
}

export const services: Service[] = [
  {
    id: 1,
    title: 'Cerca Concertina',
    pageTitle: 'Cerca Concertina em Botucatu - SP Orçamento',
    slug: 'cerca-concertina',
    image: 'cobertura-metalica',
    alt: 'Cerca concertina em Botucatu SP - Fabricação e instalação',
    metaDescription: 'Cerca concertina em Botucatu - SP. Fabricação e instalação de cerca concertina em Botucatu e região. Solicite um orçamento gratuito!',
    intro: 'A cerca concertina é reconhecida por sua eficácia em cercar áreas com segurança máxima. Feita de aço com lâminas afiadas, ela forma uma barreira quase intransponível, evitando invasões e garantindo a tranquilidade que você merece.',
    sections: [
      {
        title: 'Tipos de Cercas Concertina que Oferecemos',
        items: [
          'Concertina Simples: Ideal para aplicações comuns, oferece uma excelente relação custo-benefício.',
          'Concertina Dupla Clipada: Proporciona um nível adicional de segurança com uma estrutura mais robusta.',
          'Concertina Flat: Caracteriza-se por um design mais discreto, mantendo alta eficiência.',
          'Concertina Eletrificada: Para quem busca uma camada extra de proteção, podendo ser equipada com sensores.',
        ],
      },
      {
        title: 'Benefícios da Cerca Concertina',
        items: [
          'Alta Segurança: Efetiva na proteção contra invasões indesejadas.',
          'Custo-efetividade: Oferece segurança de qualidade por um preço acessível.',
          'Instalação Estratégica: Nossas cercas são instaladas por profissionais experientes, garantindo a máxima eficiência e durabilidade.',
        ],
      },
    ],
  },
  {
    id: 2,
    title: 'Fabricação de Grade',
    pageTitle: 'Fabricação de Grade em Botucatu - SP',
    slug: 'fabricacao-de-grade',
    image: 'manutencao-de-grades',
    alt: 'Fabricação de grade em Botucatu SP - Serralheria',
    metaDescription: 'Fabricação de grade em Botucatu SP. Grades de ferro e aço sob medida para residências e comércios. Orçamento gratuito!',
    intro: 'As grades são elementos essenciais para a segurança de qualquer imóvel. Fabricamos grades de ferro e aço sob medida, com designs modernos e acabamentos impecáveis que combinam proteção e estética.',
    sections: [
      {
        title: 'Tipos de Grades que Fabricamos',
        items: [
          'Grades de Ferro: Resistentes e duráveis, ideais para janelas, portas e muros.',
          'Grades de Aço: Maior resistência e acabamento premium.',
          'Grades Artísticas: Designs personalizados que agregam valor estético ao imóvel.',
          'Grades para Sacadas: Segurança e beleza para varandas e sacadas.',
        ],
      },
      {
        title: 'Benefícios das Nossas Grades',
        items: [
          'Segurança Reforçada: Proteja sua propriedade com grades robustas e resistentes.',
          'Design Versátil: Escolha entre uma variedade de estilos e acabamentos.',
          'Durabilidade: Materiais de primeira linha que garantem longevidade.',
        ],
      },
    ],
  },
  {
    id: 3,
    title: 'Fabricação de Portão',
    pageTitle: 'Fabricação de Portão em Botucatu',
    slug: 'fabricacao-de-portao',
    image: 'portoes-de-ferro',
    alt: 'Fabricação de portão em Botucatu SP - Serralheria',
    metaDescription: 'Fabricação de portão em Botucatu. Portões de ferro, aço e alumínio sob medida. Deslizante, basculante, pivotante e eletrônico. Orçamento grátis!',
    intro: 'Portões são essenciais para assegurar a privacidade e a proteção do seu espaço. Além de funcionais, eles podem transformar a fachada da sua propriedade, adicionando um toque especial ao seu ambiente com designs modernos e acabamentos impecáveis.',
    sections: [
      {
        title: 'Variedade de Portões que Oferecemos',
        items: [
          'Portão Deslizante: Perfeito para espaços com acesso limitado, o portão deslizante oferece praticidade e eficiência. Fabricado em ferro ou alumínio, é uma escolha popular por sua durabilidade e fácil operação.',
          'Portão Basculante: Ideal para garagens, o portão basculante é conhecido por sua abertura vertical que economiza espaço. Disponível em diversas cores e materiais, combina segurança com elegância.',
          'Portão Pivotante: Com um design moderno e requintado, é ideal para entradas principais de casas e estabelecimentos que desejam um toque de sofisticação, sem comprometer a segurança.',
          'Portão Eletrônico: Oferece controle total de quem entra e sai, sendo ideal para portarias residenciais e comerciais. Seu sistema automatizado proporciona conveniência e segurança adicionais.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Portões',
        items: [
          'Segurança Reforçada: Proteja sua propriedade com portões robustos e resistentes.',
          'Design Versátil: Escolha entre uma variedade de estilos e acabamentos para complementar sua propriedade.',
          'Facilidade de Manutenção: Materiais duráveis como alumínio e aço inoxidável requerem pouca manutenção, garantindo longevidade.',
        ],
      },
    ],
  },
  {
    id: 4,
    title: 'Fabricação de Tela',
    pageTitle: 'Fabricação de Tela em Botucatu SP',
    slug: 'fabricacao-de-tela',
    image: 'fabricacao-de-tela',
    alt: 'Fabricação de tela em Botucatu SP - Telas de aço e proteção',
    metaDescription: 'Fabricação de tela em Botucatu SP. Fabricação e instalação de telas em toda região. Solicite um orçamento gratuito agora!',
    intro: 'As telas de aço são essenciais para garantir a segurança e a resistência das suas instalações. Além de protegerem contra invasões, elas oferecem suporte estrutural e podem ser usadas em diversas aplicações, desde cercas e janelas até viveiros e lajes, garantindo versatilidade e robustez.',
    sections: [
      {
        title: 'Tipos de Telas que Oferecemos',
        items: [
          'Tela de Aço Galvanizado: Revestida com zinco para máxima resistência à corrosão, esta tela é ideal para cercas e aplicações externas, oferecendo durabilidade e exigindo pouca manutenção.',
          'Tela de Malha Fina: Perfeita para aplicações que requerem proteção sem sacrificar a ventilação, como janelas ou áreas que precisam de barreiras contra insetos.',
          'Tela para Janelas: Projeta sua casa enquanto proporciona uma estética agradável e moderna, disponível em diferentes acabamentos para combinar com sua decoração.',
          'Tela para Cercas: Indicada para segurança perimetral, oferece resistência e durabilidade, podendo ser revestida em PVC para uma melhor aparência e proteção adicional.',
        ],
      },
      {
        title: 'Vantagens das Nossas Telas de Proteção',
        items: [
          'Segurança Reforçada: Proteja seus espaços com telas resistentes que oferecem proteção contra intrusões.',
          'Durabilidade Excepcional: Nossos materiais são selecionados para garantir longevidade e resistência a intempéries.',
          'Flexibilidade de Aplicação: Nossas telas se adaptam a diversas necessidades, desde cercas até elementos estruturais em construções.',
        ],
      },
    ],
  },
  {
    id: 5,
    title: 'Manutenção e Reforma',
    pageTitle: 'Manutenção e Reforma - Serralheria em Botucatu',
    slug: 'manutencao-e-reforma',
    image: 'manutencao-de-serralheria',
    alt: 'Manutenção e reforma de serralheria em Botucatu SP',
    metaDescription: 'Manutenção e reforma de estruturas metálicas em Botucatu. Reparo de portões, grades, cercas e corrimãos. Orçamento gratuito!',
    intro: 'Realizar a manutenção regular de estruturas metálicas previne danos maiores, economiza em reparos futuros e prolonga a vida útil dos produtos.',
    sections: [
      {
        title: 'Nossos Serviços de Manutenção e Reforma',
        items: [
          'Reparo de Portões e Grades: Desde a substituição de peças desgastadas até a reestruturação completa, garantimos que seu portão ou grade funcione perfeitamente.',
          'Revitalização de Cercas Metálicas: Melhoramos a durabilidade e estética das cercas, prevenindo corrosão e outros danos comuns.',
          'Restauro de Corrimãos e Estruturas de Acesso: Asseguramos que os corrimãos e plataformas sejam seguros e visualmente atraentes.',
        ],
      },
      {
        title: 'Vantagens de Nossos Serviços',
        items: [
          'Profissionalismo e Experiência: Nossa equipe é composta por profissionais qualificados, prontos para atender qualquer necessidade de manutenção com total dedicação.',
          'Materiais de Alta Qualidade: Utilizamos apenas materiais que oferecem resistência e durabilidade, garantindo que suas estruturas suportem as condições mais adversas.',
          'Soluções Personalizadas: Entendemos que cada cliente possui necessidades específicas, por isso, oferecemos soluções sob medida, adaptadas para o seu espaço e orçamento.',
        ],
      },
    ],
  },
  {
    id: 6,
    title: 'Motor para Portão Eletrônico Automático',
    pageTitle: 'Motor para Portão Eletrônico Automático em Botucatu',
    slug: 'motor-para-portao-eletronico-automatico',
    image: 'corte-e-dobra',
    alt: 'Motor para portão eletrônico automático em Botucatu SP',
    metaDescription: 'Instalação de motor para portão eletrônico automático em Botucatu. Automatize seu portão com segurança e praticidade. Orçamento grátis!',
    intro: 'A automatização de portões com motores eletrônicos oferece conveniência, segurança e valorização do seu imóvel. Instalamos e fazemos manutenção de motores para todos os tipos de portão.',
    sections: [
      {
        title: 'Tipos de Motores que Instalamos',
        items: [
          'Motor Deslizante: Para portões que deslizam lateralmente, com capacidade para portões pesados.',
          'Motor Basculante: Ideal para portões de garagem com abertura vertical.',
          'Motor Pivotante: Para portões que abrem para os lados, com design moderno.',
          'Motor com Controle Remoto: Abertura e fechamento à distância com total segurança.',
        ],
      },
      {
        title: 'Vantagens da Automatização',
        items: [
          'Conveniência: Abra e feche seu portão sem sair do carro.',
          'Segurança: Controle total de acesso ao seu imóvel.',
          'Valorização: Portões automatizados valorizam o imóvel.',
        ],
      },
    ],
  },
  {
    id: 7,
    title: 'Portão de Aço',
    pageTitle: 'Portão de Aço em Botucatu - SP',
    slug: 'porta-de-aco',
    image: 'portao-em-aco',
    alt: 'Portão de aço galvanizado em Botucatu SP',
    metaDescription: 'Portão de aço em Botucatu SP. Fabricação e instalação de portões de aço resistentes. Orçamento gratuito!',
    intro: 'Os portões de aço são reconhecidos por sua resistência e durabilidade superiores. Ideais para quem busca segurança máxima sem abrir mão da estética, nossos portões de aço são fabricados com materiais de primeira linha.',
    sections: [
      {
        title: 'Tipos de Portões de Aço',
        items: [
          'Aço Galvanizado: Resistente à corrosão, ideal para áreas externas.',
          'Aço Carbono: Máxima resistência mecânica para segurança reforçada.',
          'Aço Inoxidável: Visual moderno e resistência a intempéries.',
        ],
      },
      {
        title: 'Vantagens dos Portões de Aço',
        items: [
          'Segurança Máxima: Material mais resistente do mercado.',
          'Durabilidade: Vida útil prolongada com manutenção mínima.',
          'Versatilidade: Adaptável a qualquer estilo arquitetônico.',
        ],
      },
    ],
  },
  {
    id: 8,
    title: 'Portão Basculante',
    pageTitle: 'Portão Basculante em Botucatu',
    slug: 'portao-basculante',
    image: 'portoes-basculante',
    alt: 'Portão basculante para garagem em Botucatu SP',
    metaDescription: 'Onde comprar portão basculante em Botucatu-SP? Nós da Serralheria Botucatu temos as melhores opções de portão basculante para garagem. Orçamento Gratuito!',
    intro: 'O design basculante é conhecido por sua capacidade de maximizar o espaço e garantir uma operação suave e segura. Com diversas opções de materiais, como alumínio, aço e madeira, os portões basculantes podem ser personalizados para atender ao estilo e às necessidades de cada cliente.',
    sections: [
      {
        title: 'Estilos e Materiais Disponíveis',
        items: [
          'Alumínio: Leve e resistente à corrosão, ideal para quem busca durabilidade com um toque moderno.',
          'Aço: Proporciona máxima segurança e resistência, perfeito para áreas que exigem robustez.',
          'Madeira: Oferece um visual clássico e elegante, podendo ser combinado com outros materiais para maior resistência.',
        ],
      },
      {
        title: 'Vantagens de Escolher Nossa Serralheria',
        items: [
          'Nossa equipe conta com anos de experiência e é especializada na fabricação e instalação de portões basculantes.',
          'Garantimos um serviço de qualidade, desde o projeto até a instalação, com acabamento impecável e atenção aos detalhes.',
          'Trabalhamos com materiais de alta qualidade para assegurar durabilidade e funcionalidade.',
        ],
      },
    ],
  },
  {
    id: 9,
    title: 'Portão Deslizante',
    pageTitle: 'Portão Deslizante Botucatu',
    slug: 'portao-deslizante',
    image: 'portoes-deslizante',
    alt: 'Portão deslizante em Botucatu SP - Fabricação e instalação',
    metaDescription: 'Portão deslizante em Botucatu é com a nossa Serralheria. Fabricação e instalação de portão de correr. Fale conosco e solicite um orçamento!',
    intro: 'Os portões deslizantes são a escolha perfeita para quem deseja aliar segurança, praticidade e estética. O design deslizante otimiza o espaço disponível e permite um acesso fácil e seguro à sua propriedade. Com várias opções de materiais como ferro, alumínio e madeira, nossos portões podem ser personalizados para se adequar ao estilo e às necessidades de cada cliente.',
    sections: [
      {
        title: 'Estilos e Materiais Disponíveis',
        items: [
          'Alumínio: Leve e resistente à corrosão, é perfeito para quem busca durabilidade com um toque moderno.',
          'Ferro: Oferece robustez e segurança máxima, ideal para áreas que requerem maior proteção.',
          'Madeira: Proporciona um visual clássico e elegante, podendo ser combinado com outros materiais para maior resistência.',
        ],
      },
      {
        title: 'Vantagens de Escolher Nossa Serralheria',
        text: 'Nossa equipe de especialistas em Botucatu possui vasta experiência na fabricação e instalação de portões deslizantes. Garantimos um serviço de alta qualidade, desde o planejamento até a execução, com atenção aos mínimos detalhes. Utilizamos materiais de primeira linha para assegurar durabilidade e funcionalidade, sempre com um acabamento impecável.',
      },
    ],
  },
  {
    id: 10,
    title: 'Portão Deslizante em L',
    pageTitle: 'Portão Deslizante em L Botucatu SP',
    slug: 'portao-deslizante-em-l-em-botucatu',
    image: 'portoes-gradil',
    alt: 'Portão deslizante em L em Botucatu SP',
    metaDescription: 'Portão deslizante em L em Botucatu SP. Fabricação sob medida com materiais de alta qualidade. Solicite seu orçamento gratuito!',
    intro: 'Os portões deslizantes em L são projetados para maximizar o uso do espaço disponível, garantindo uma abertura suave e silenciosa, sem comprometer a área útil do seu imóvel.',
    sections: [
      {
        title: 'Materiais e Estilos Disponíveis',
        items: [
          'Aço Inoxidável: Para quem busca durabilidade e um visual moderno, o aço inoxidável é uma escolha robusta e requintada.',
          'Ferro Galvanizado: Um clássico que combina segurança com um acabamento elegante, perfeito para diversos estilos arquitetônicos.',
          'Alumínio: Conhecido por sua leveza e resistência à corrosão, oferece uma manutenção prática e longa vida útil.',
        ],
      },
      {
        title: 'Por Que Escolher Nossa Serralheria?',
        text: 'Nossa equipe em Botucatu é composta por profissionais altamente qualificados, com anos de experiência na indústria, garantindo que cada portão seja fabricado e instalado com precisão e atenção aos detalhes. Utilizamos apenas materiais de alta qualidade, assegurando que nossos portões ofereçam não apenas estética, mas também segurança e durabilidade.',
      },
    ],
  },
  {
    id: 11,
    title: 'Toldo de Policarbonato',
    pageTitle: 'Toldo de Policarbonato em Botucatu - SP Cobertura de Policarbonato',
    slug: 'toldo-de-policarbonato-em-botucatu-cobertura-de-policarbonato',
    image: 'toldo-em-policarbonato',
    alt: 'Toldo de policarbonato em Botucatu SP - Cobertura',
    metaDescription: 'Toldo de policarbonato em Botucatu SP. Fabricação e instalação de coberturas de policarbonato. Proteção UV e durabilidade. Orçamento grátis!',
    intro: 'Os toldos de policarbonato são conhecidos por sua durabilidade e resistência, sendo capazes de suportar diversas condições climáticas. Além disso, eles oferecem proteção contra os raios UV, ajudando a preservar móveis e ambientes internos dos danos causados pelo sol.',
    sections: [
      {
        title: 'Tipos de Toldos que Oferecemos',
        items: [
          'Policarbonato Alveolar: Leve e com excelente isolamento térmico.',
          'Policarbonato Compacto: Maior resistência a impactos e transparência.',
          'Cobertura com Estrutura Metálica: Combinação de policarbonato com estrutura de aço ou alumínio.',
        ],
      },
      {
        title: 'Vantagens dos Toldos de Policarbonato',
        items: [
          'Proteção UV: Filtra os raios ultravioleta prejudiciais.',
          'Durabilidade: Resistente a intempéries e impactos.',
          'Versatilidade: Pode ser personalizado para diversos ambientes.',
        ],
      },
    ],
  },
  {
    id: 12,
    title: 'Portão Pivotante',
    pageTitle: 'Portão Pivotante em Botucatu - SP',
    slug: 'portao-pivotante-em-botucatu',
    image: 'portoes-pivotante',
    alt: 'Portão pivotante em Botucatu SP - Serralheria',
    metaDescription: 'Portão pivotante em Botucatu SP. Fabricação e instalação de portões pivotantes modernos. Elegância e segurança. Orçamento gratuito!',
    intro: 'Os portões pivotantes são conhecidos por sua elegância e capacidade de transformar a entrada de qualquer imóvel. Eles são projetados para abrir lateralmente, proporcionando uma abertura ampla e um visual imponente. Este tipo de portão é ideal para áreas que demandam estilo e presença, além de serem extremamente versáteis em termos de design.',
    sections: [
      {
        title: 'Materiais e Estilos Disponíveis',
        items: [
          'Ferro com Design Artístico: Para quem busca exclusividade e sofisticação.',
          'Alumínio Moderno: Visual limpo e contemporâneo com manutenção mínima.',
          'Madeira com Ferro: Combinação rústica e elegante.',
        ],
      },
      {
        title: 'Vantagens do Portão Pivotante',
        items: [
          'Design Imponente: Transforma a entrada do imóvel com elegância.',
          'Abertura Ampla: Permite acesso fácil para veículos grandes.',
          'Personalização: Fabricamos sob medida para o seu projeto.',
        ],
      },
    ],
  },
  {
    id: 13,
    title: 'Fabricação de Deck',
    pageTitle: 'Fabricação de Decks e Decks para Piscina em Botucatu',
    slug: 'fabricacao-de-decks-e-decks-para-piscina-em-botucatu',
    image: 'manutencao-de-piscina',
    alt: 'Fabricação de deck e deck para piscina em Botucatu SP',
    metaDescription: 'Fabricação de decks e decks para piscina em Botucatu. Madeira e materiais compactos. Transforme sua área externa. Orçamento gratuito!',
    intro: 'Os decks são conhecidos por sua capacidade de transformar qualquer área externa, tornando-a mais acessível e agradável. Seja em um jardim ou ao redor da piscina, eles oferecem um espaço confortável para descanso e convivência.',
    sections: [
      {
        title: 'Materiais e Estilos Disponíveis',
        items: [
          'Madeira Natural: Oferece uma estética clássica e elegante, ideal para quem deseja um visual acolhedor.',
          'Madeira Plástica: Combina a aparência da madeira com a resistência de materiais compósitos, exigindo menos manutenção.',
          'Deck Modular: Fácil de instalar e remover, perfeito para eventos e áreas temporárias.',
        ],
      },
      {
        title: 'Benefícios dos Nossos Decks',
        items: [
          'Transformação de Espaços: Converta áreas externas em ambientes convidativos.',
          'Durabilidade: Materiais resistentes a intempéries e uso constante.',
          'Personalização: Projetos sob medida para o seu espaço.',
        ],
      },
    ],
  },
];
