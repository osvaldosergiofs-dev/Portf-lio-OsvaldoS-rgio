export const navLinks = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'servicos', label: 'Serviços' },
  { id: 'contato', label: 'Contato' },
]

export const heroContent = {
  eyebrow: 'Full-stack developer / WEB DEVELOPER',
  titlePrimary: 'Osvaldo',
  titleSecondary: 'Sérgio',
  lede:
    'Desenvolvedor Full-Stack com experiência em aplicações web responsivas, dashboards administrativos e sistemas SaaS utilizando Vue.js, Laravel e JavaScript moderno.',
  ctaPrimary: { label: 'Ver projetos', href: '#projetos' },
  ctaSecondary: { label: 'Falar comigo', href: '#contato' },
  panel: [
    {
      label: 'Foco',
      value: 'Interfaces modernas, sistemas escaláveis e experiências web responsivas.',
    },
    {
      label: 'Stack',
      value: 'Vue.js · React · Laravel · JavaScript · TypeScript',
    },
  ],
  availability: 'Disponível para conversas seletivas',
}

export const aboutContent = {
  kicker: 'SOBRE MIM',
  title: 'DESENVOLVIMENTO COM FOCO EM EXPERIÊNCIA.',
  intro: 'Transformo requisitos de negócio em aplicações web modernas, responsivas e fáceis de manter.',
  paragraph:
    'Combino desenvolvimento front-end, integração de APIs e arquitetura de interfaces para criar aplicações performáticas, organizadas e orientadas à experiência do usuário. O objetivo é transformar complexidade em fluxos claros, componentes reutilizáveis e produtos digitais consistentes.',
  points: [
    {
      id: '01',
      text: 'Interfaces responsivas, componentização e experiência consistente em diferentes tamanhos de tela.',
    },
    {
      id: '02',
      text: 'Integração de APIs, regras de negócio e fluxos de dados com leitura simples para o usuário final.',
    },
    {
      id: '03',
      text: 'Código organizado, atenção à performance e manutenção escalável para evolução contínua.',
    },
  ],
}

export const skillCategories = [
  {
    name: 'Frontend',
    skills: ['Vue.js', 'Vue 3', 'JavaScript', 'HTML5', 'CSS3', 'Vuetify', 'Pinia', 'Vue Router', 'Axios', 'Vite'],
  },
  {
    name: 'Backend',
    skills: ['PHP', 'Laravel', 'APIs REST', 'JWT', 'Bearer Token', 'Controllers', 'Migrations', 'Seeders', 'Resources'],
  },
  {
    name: 'Banco de Dados',
    skills: ['MySQL', 'SQL', 'phpMyAdmin'],
  },
  {
    name: 'Ferramentas',
    skills: [
      'Git',
      'GitHub',
      'Git Flow',
      'Pull Requests',
      'VS Code',
      'PowerShell',
      'npm',
      'Node.js',
      'Deploy',
      'Componentização',
      'Responsividade',
      'Versionamento',
    ],
  },
]

const asset = (path) => `${import.meta.env.BASE_URL}${path}`
const image = (name) => asset(`portfolio-assets/images/${name}`)
const video = (name) => asset(`portfolio-assets/video/${name}`)

export const projects = [
  {
    id: 'cliqueagenda',
    kicker: 'SAAS / AGENDAMENTO',
    title: 'CLIQUEAGENDA',
    summary: 'Sistema de agendamento com gestão de clientes, funcionários, serviços e autenticação completa.',
    tags: ['VUE 3', 'LARAVEL', 'PINIA'],
    image: image('mpcs2ess-image.png'),
    imageAlt: 'Logo do projeto CliqueAgenda',
    video: video('mpcsmkxw-Video-Project-AGENDA.mp4'),
    videoLabel: 'Vídeo do projeto CliqueAgenda',
    details: {
      about: [
        'O CliqueAgenda foi desenvolvido para resolver a dificuldade de pequenos negócios em organizar atendimentos, serviços e equipes em um único sistema simples e acessível.',
        'O projeto centraliza o gerenciamento de clientes, funcionários, serviços e horários em uma interface moderna e responsiva.',
      ],
      problems: [
        'Organização manual de agendamentos',
        'Falta de controle de horários e disponibilidade',
        'Dificuldade em gerenciar clientes e serviços',
        'Interfaces antigas e pouco intuitivas',
        'Falta de centralização das informações',
      ],
      development: [
        'O sistema foi construído utilizando Vue 3 no front-end e Laravel no back-end, consumindo API REST para comunicação entre as camadas.',
        'A arquitetura foi organizada com componentes reutilizáveis, gerenciamento de estado utilizando Pinia e autenticação baseada em token.',
      ],
      built: [
        'painel administrativo responsivo',
        'fluxo de autenticação',
        'setup inicial da empresa',
        'CRUD completo de serviços, clientes e funcionários',
        'navegação dinâmica',
        'controle de permissões e sessões',
      ],
      technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY'],
    },
  },
  {
    id: 'voucher',
    kicker: 'GESTÃO / PDF AUTOMÁTICO',
    title: 'VOUCHER SYSTEM',
    summary:
      'Sistema para geração automática de vouchers em PDF com autenticação, numeração sequencial e controle de usuários.',
    tags: ['LARAVEL', 'PDF', 'MYSQL'],
    image: image('mpcs2j9k-image.png'),
    imageAlt: 'Logo do projeto VoucherX',
    video: video('mpcszrsq-Video-Project-VOUCHERX.mp4'),
    videoLabel: 'Vídeo do projeto VoucherX',
    details: {
      about: [
        'O Voucher System foi pensado para automatizar a emissão de vouchers e comprovantes de serviço, substituindo processos manuais e reduzindo erros operacionais.',
        'O sistema permite que usuários autenticados preencham formulários rapidamente e gerem documentos em PDF de maneira automática.',
      ],
      problems: [
        'Emissão manual de vouchers',
        'Controle desorganizado de documentos',
        'Falta de histórico e rastreabilidade',
        'Erros em numeração e preenchimento',
        'Tempo excessivo gasto com geração manual de PDFs',
      ],
      development: [
        'O projeto foi estruturado com Laravel no back-end para gerenciamento das regras de negócio e geração de PDFs automáticos.',
        'O front-end foi desenvolvido com foco em produtividade e facilidade de uso, permitindo criação rápida dos documentos.',
      ],
      built: [
        'autenticação de usuários',
        'aprovação de acessos',
        'geração automática de PDF',
        'numeração sequencial',
        'histórico de vouchers',
        'gerenciamento de usuários',
        'estrutura preparada para múltiplos acessos',
      ],
      technologies: ['LARAVEL', 'MYSQL', 'PDF', 'AUTH', 'API'],
    },
  },
  {
    id: 'tourism',
    kicker: 'TURISMO / TRANSFER',
    title: 'GHS TRANSFER MCZ',
    summary:
      'Sistema para organizar reservas, clientes, servicos e solicitacoes de empresas de turismo e transporte.',
    tags: ['VUE', 'LARAVEL', 'MYSQL'],
    image: image('mpcs2m4u-image.png'),
    imageAlt: 'Logo do projeto GHS Transfer MCZ',
    video: video('mpct34x6-Video-Project-GHS.mp4'),
    videoLabel: 'Vídeo do projeto GHS Transfer MCZ',
    details: {
      about: [
        'O Sistema para Turismo/Transfer foi desenvolvido com o objetivo de auxiliar empresas do setor de turismo e transporte na organização operacional de reservas, clientes e serviços.',
        'O projeto surgiu inicialmente como uma proposta de site institucional, mas evoluiu para uma solução mais completa, focada em gerenciamento interno e centralização das informações da empresa.',
        'A proposta do sistema é facilitar o controle operacional e melhorar a organização dos atendimentos, reservas e solicitações realizadas diariamente.',
      ],
      problems: [
        'Controle manual de reservas e atendimentos',
        'Dificuldade em organizar clientes e serviços',
        'Falta de centralização das informações',
        'Processos operacionais desorganizados',
        'Dependência de anotações e contatos manuais',
        'Interfaces pouco modernas e não responsivas',
      ],
      development: [
        'O sistema foi planejado utilizando uma arquitetura moderna, visando escalabilidade e facilidade de manutenção conforme o crescimento da empresa.',
        'A estrutura foi organizada para unir uma interface visual profissional com funcionalidades administrativas e operacionais, proporcionando uma experiência intuitiva tanto para usuários quanto para administradores.',
      ],
      built: [
        'painel administrativo responsivo',
        'gerenciamento de reservas',
        'cadastro de clientes',
        'organização de serviços',
        'acompanhamento operacional',
        'estrutura para gerenciamento de solicitações',
        'navegação dinâmica',
        'interface responsiva para mobile e desktop',
        'organização modular para futuras expansões',
      ],
      technologies: ['VUE', 'LARAVEL', 'MYSQL', 'RESPONSIVO', 'API REST', 'JAVASCRIPT'],
    },
  },
]

export const extraProjects = [
  {
    id: 'school',
    title: 'PLATAFORMA DE ATIVIDADES ESCOLARES',
    details: {
      about: [
        'A Plataforma de Atividades Escolares foi desenvolvida para ajudar professores do Ensino Fundamental I e II a encontrarem atividades prontas de forma rápida, organizada e acessível.',
        'O projeto centraliza atividades escolares por disciplina, ano escolar, tema e tipo de atividade, permitindo visualizar uma prévia do material, realizar pequenas personalizações e fazer o download das atividades em PDF.',
        'A plataforma foi pensada para otimizar o tempo dos professores e facilitar o acesso a materiais organizados e visualmente padronizados.',
      ],
      problems: [
        'Busca demorada por atividades na internet',
        'Materiais desorganizados e repetidos',
        'Atividades com baixa qualidade visual',
        'Dificuldade em encontrar conteúdos por ano escolar',
        'Falta de gabarito em muitos materiais',
        'Dificuldade para adaptar atividades à turma',
        'Falta de centralização dos materiais',
      ],
      development: [
        'O sistema foi construído utilizando Vue 3 no front-end e Laravel no back-end, consumindo API REST para comunicação entre as camadas.',
        'A arquitetura foi organizada utilizando componentes reutilizáveis, gerenciamento de estado com Pinia e autenticação baseada em token, permitindo uma aplicação escalável e organizada.',
      ],
      built: [
        'cadastro e login de professores',
        'catálogo de atividades escolares',
        'filtros por disciplina, ano escolar, tema e tipo de atividade',
        'página de detalhes da atividade',
        'visualização prévia do material',
        'download de atividades em PDF',
        'controle de limite de downloads por plano',
        'editor simples para personalização da atividade',
        'opção de mostrar ou ocultar gabarito',
        'sistema de solicitação de novas atividades',
        'painel administrativo para gerenciamento de atividades e solicitações',
        'controle de status das atividades e pedidos',
        'navegação dinâmica e responsiva',
      ],
      mvp: [
        'catálogo de atividades prontas',
        'busca e filtros avançados',
        'download em PDF',
        'visualização prévia das atividades',
        'editor simples de cabeçalho',
        'controle de planos',
        'limite de downloads no plano gratuito',
        'solicitação de novas atividades',
        'painel administrativo básico',
      ],
      technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY', 'API REST', 'AUTENTICAÇÃO POR TOKEN'],
    },
  },
  {
    id: 'finly',
    title: 'FINLY APP — SISTEMA DE GESTÃO FINANCEIRA EMPRESARIAL',
    details: {
      about: [
        'O Finly App foi desenvolvido para ajudar pequenas empresas a terem um controle financeiro mais organizado, simples e visual, substituindo planilhas manuais e processos desorganizados por uma plataforma centralizada.',
        'O sistema foi pensado para auxiliar no acompanhamento do fluxo de caixa, permitindo visualizar entradas, saídas, despesas e receitas em tempo real através de um painel administrativo moderno e responsivo.',
      ],
      problems: [
        'Falta de controle financeiro empresarial',
        'Organização manual de receitas e despesas',
        'Dificuldade em visualizar o fluxo de caixa',
        'Falta de acompanhamento de contas a pagar e receber',
        'Informações financeiras descentralizadas',
        'Interfaces financeiras complexas e pouco intuitivas',
      ],
      development: [
        'O sistema foi estruturado utilizando Vue.js no front-end e Laravel no back-end, utilizando API REST para comunicação entre as camadas da aplicação.',
        'A arquitetura foi planejada visando escalabilidade, organização e reutilização de componentes, utilizando gerenciamento de estado para controle das informações financeiras e autenticação segura baseada em token.',
      ],
      built: [
        'dashboard financeiro responsivo',
        'controle de fluxo de caixa',
        'gerenciamento de receitas e despesas',
        'categorização de movimentações financeiras',
        'filtros e pesquisas por período',
        'controle de contas a pagar e receber',
        'relatórios financeiros simplificados',
        'autenticação e controle de sessão',
        'navegação dinâmica',
        'estrutura preparada para expansão futura',
      ],
      technologies: ['VUE', 'LARAVEL', 'MYSQL', 'API REST', 'JAVASCRIPT', 'DASHBOARD'],
    },
  },
  {
    id: 'arcanjo',
    title: 'SISTEMA DE GESTÃO OPERACIONAL — ARCANJO',
    details: {
      about: [
        'O Sistema de Gestão Operacional Arcanjo foi desenvolvido para centralizar processos administrativos e operacionais da empresa em uma única plataforma moderna, organizada e acessível.',
        'O projeto foi pensado para reduzir processos manuais, melhorar o gerenciamento interno e facilitar o acompanhamento das operações diárias através de um painel administrativo responsivo e integrado.',
        'A proposta do sistema é otimizar o fluxo operacional da empresa, permitindo maior controle das informações, organização das demandas e melhoria na produtividade da equipe.',
      ],
      problems: [
        'Processos operacionais desorganizados',
        'Controle manual de informações',
        'Dificuldade no acompanhamento de demandas',
        'Falta de centralização dos dados',
        'Baixa produtividade causada por processos manuais',
        'Dificuldade em acompanhar status e solicitações',
        'Interfaces antigas e pouco intuitivas',
      ],
      development: [
        'O sistema foi estruturado utilizando Vue 3 no front-end e Laravel no back-end, utilizando API REST para comunicação entre as camadas da aplicação.',
        'A arquitetura foi organizada com foco em escalabilidade, reutilização de componentes e organização modular, permitindo futuras expansões conforme o crescimento da empresa.',
      ],
      built: [
        'painel administrativo responsivo',
        'autenticação de usuários',
        'gerenciamento operacional',
        'controle de solicitações',
        'gerenciamento de status',
        'filtros e pesquisas',
        'dashboard com informações resumidas',
        'controle de usuários e permissões',
        'navegação dinâmica',
        'organização modular das funcionalidades',
        'integração entre módulos administrativos',
      ],
      mvp: [
        'autenticação de usuários',
        'painel administrativo',
        'gerenciamento de solicitações',
        'acompanhamento de status',
        'dashboard operacional',
        'filtros de pesquisa',
        'controle básico de usuários',
        'organização de processos internos',
        'interface responsiva',
      ],
      technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY', 'API REST', 'AUTENTICAÇÃO POR TOKEN'],
    },
  },
  {
    id: 'events',
    title: 'SISTEMA DE GERENCIAMENTO DE EVENTOS',
    details: {
      about: [
        'O Sistema de Gerenciamento de Eventos foi desenvolvido para auxiliar organizadores no controle de eventos, participantes e inscrições em uma única plataforma moderna e responsiva.',
        'O projeto permite criar eventos, organizar informações importantes, controlar participantes e acompanhar inscrições de forma centralizada e acessível.',
        'A proposta do sistema é substituir processos manuais e desorganizados por uma solução digital capaz de otimizar o gerenciamento operacional dos eventos.',
      ],
      problems: [
        'Organização manual de inscrições',
        'Dificuldade em controlar participantes',
        'Falta de centralização das informações',
        'Processos operacionais lentos',
        'Perda de dados de participantes',
        'Dificuldade em acompanhar vagas disponíveis',
        'Interfaces pouco intuitivas',
      ],
      development: [
        'O sistema foi desenvolvido utilizando Vue 3 no front-end e Laravel no back-end, utilizando API REST para comunicação entre as funcionalidades da aplicação.',
        'A arquitetura foi organizada utilizando componentes reutilizáveis, gerenciamento de estado com Pinia e estrutura modular para facilitar futuras expansões.',
      ],
      built: [
        'painel administrativo responsivo',
        'cadastro de eventos',
        'gerenciamento de inscrições',
        'controle de participantes',
        'dashboard operacional',
        'filtros e pesquisas',
        'gerenciamento de vagas',
        'autenticação de usuários',
        'controle de status dos eventos',
        'navegação dinâmica',
        'interface responsiva',
      ],
      mvp: [
        'criação de eventos',
        'gerenciamento de inscrições',
        'controle de participantes',
        'painel administrativo',
        'dashboard operacional',
        'autenticação de usuários',
        'filtros básicos',
        'interface responsiva',
      ],
      technologies: ['VUE 3', 'LARAVEL', 'PINIA', 'VITE', 'MYSQL', 'VUETIFY', 'API REST', 'AUTENTICAÇÃO POR TOKEN'],
    },
  },
]

export const services = [
  {
    title: 'FRONT-END',
    description:
      'Interfaces responsivas, componentes reutilizáveis, consumo de APIs, organização de páginas e experiência do usuário.',
    tag: 'VUE 3 · VITE · HTML · CSS · JS',
  },
  {
    title: 'BACK-END',
    description:
      'APIs REST, autenticação, regras de negócio, validações, controllers, migrations e persistência de dados.',
    tag: 'LARAVEL · PHP · MYSQL',
  },
  {
    title: 'UI E PRODUTO',
    description:
      'Construção de telas modernas, fluxos de usuário, protótipos funcionais, dashboards e sistemas administrativos.',
    tag: 'VUETIFY · UX · DESIGN SYSTEM',
  },
  {
    title: 'ENTREGA',
    description:
      'Versionamento, deploy, documentação básica, ajustes finais, manutenção e publicação em hospedagem.',
    tag: 'GIT · GITHUB · HOSTINGER · DEPLOY',
  },
]

export const contactChannels = [
  {
    id: 'email',
    type: 'copy',
    label: 'Gmail',
    value: 'contato@osvaldosergio.dev',
    display: 'osvaldosergio.fs@gmail.com',
    action: 'copiar',
  },
  {
    id: 'linkedin',
    type: 'link',
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/in/osvaldo-s%C3%A9rgio-887572307/',
    display: 'linkedin.com/in/osvaldo-sérgio-887572307',
    action: 'perfil',
  },
  {
    id: 'github',
    type: 'link',
    label: 'GitHub',
    value: 'https://github.com/osvaldosergiofs-dev',
    display: 'github.com/osvaldosergiofs-dev',
    action: 'perfil',
  },
  {
    id: 'whatsapp',
    type: 'link',
    label: 'WhatsApp',
    value: 'https://wa.me/5581993760308',
    display: '(81) 99376-0308',
    action: 'chamar',
  },
  {
    id: 'resume',
    type: 'download',
    label: 'Currículo',
    value: asset('portfolio-assets/mpc3h1j2-OSVALDO-SÉRGIO_____.pdf'),
    action: 'download',
  },
]

export const mediaManifest = {
  requiredImages: [
    'assets/header-avatar.png',
    'mpcs2ess-image.png',
    'mpcs2j9k-image.png',
    'mpcs2m4u-image.png',
    'assets/video-reference-thumbnail.png',
    'assets/php-logo-mask.png',
    'assets/mysql-logo-mask.png',
    'assets/npm-logo-mask.png',
    'mp6zvams-image.png',
  ],
  requiredVideos: ['mpcsmkxw-Video-Project-AGENDA.mp4', 'mpcszrsq-Video-Project-VOUCHERX.mp4', 'mpct34x6-Video-Project-GHS.mp4'],
  requiredDocuments: ['mpc3h1j2-OSVALDO-SÉRGIO_____.pdf'],
}
