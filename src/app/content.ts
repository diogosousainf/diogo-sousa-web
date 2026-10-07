export type Lang = 'pt' | 'en';

export interface Shot {
  src: string;
  alt: string;
  kind: 'desktop' | 'mobile';
}

export interface CaseStudy {
  id: string;
  index: string;
  name: string;
  year: string;
  kicker: string;
  title: string;
  summary: string;
  highlights: string[];
  stack: string[];
  theme: { bg: string; fg: string; accent: string; muted: string };
  shots: Shot[];
  link?: { href: string; label: string };
  status: string;
}

export interface Phase {
  label: string;
  items: { title: string; detail?: string; tags: string[] }[];
}

export interface Role {
  period: string;
  org: string;
  role: string;
  place: string;
  text: string;
}

export interface Content {
  nav: { work: string; career: string; about: string; contact: string; menu: string };
  hero: {
    status: string;
    roles: string[];
    lead: string;
    ctaWork: string;
    ctaContact: string;
    local: string;
    hint: string;
  };
  work: {
    eyebrow: string;
    title: string;
    intro: string;
    cases: CaseStudy[];
    private: string;
    highlightsLabel: string;
    stackLabel: string;
  };
  career: {
    eyebrow: string;
    title: string;
    intro: string;
    meiv: {
      period: string;
      role: string;
      org: string;
      place: string;
      text: string;
      domainsLabel: string;
      domains: string[];
      phases: Phase[];
    };
    before: string;
    roles: Role[];
  };
  about: {
    eyebrow: string;
    title: string;
    paragraphs: string[];
    skillsLabel: string;
    skills: { group: string; items: string[] }[];
    trainingLabel: string;
    training: string[];
    languagesLabel: string;
    languages: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    studioLabel: string;
    studioText: string;
    copy: string;
    copied: string;
    cv: string;
  };
  palette: {
    placeholder: string;
    empty: string;
    goto: string;
    actions: string;
    copyEmail: string;
    downloadCv: string;
    switchLang: string;
    top: string;
  };
  footer: string;
}

const meivDomains = {
  pt: ['SST', 'Qualidade', 'Compras', 'Obras', 'RH', 'Gestão Documental', 'Assiduidade', 'Viaturas', 'Equipamentos', 'Centros de Custo', 'Orçamentação', 'Despesas e Pagamentos', 'Vista Financeira', 'i18n EN'],
  en: ['Health & Safety', 'Quality', 'Procurement', 'Sites', 'HR', 'Document Mgmt', 'Attendance', 'Fleet', 'Equipment', 'Cost Centres', 'Budgeting', 'Expenses & Payments', 'Financial View', 'i18n EN'],
};

export const CONTENT: Record<Lang, Content> = {
  pt: {
    nav: { work: 'Trabalho', career: 'Carreira', about: 'Sobre', contact: 'Contacto', menu: 'Menu' },
    hero: {
      status: 'OutSystems Developer na Meivcore',
      roles: ['Software Developer', 'OutSystems Developer', 'Full-stack', 'Fundador da d.software'],
      lead: 'Construo software que resolve problemas reais: módulos para a plataforma interna de um grupo de construção, uma app de orçamentos para uma carpintaria e sites para o comércio local.',
      ctaWork: 'Ver trabalho',
      ctaContact: 'Falar comigo',
      local: 'Porto, PT',
      hint: 'atalhos',
    },
    work: {
      eyebrow: '01 · Trabalho',
      title: 'Projetos com clientes reais.',
      intro: 'Projetos meus, feitos de ponta a ponta: do problema e do design à base de dados e ao deploy.',
      highlightsLabel: 'Destaques',
      stackLabel: 'Stack',
      private: 'Repositório privado',
      cases: [
        {
          id: 'dsoftware',
          index: '01',
          name: 'd.software',
          year: '2026',
          kicker: 'Estúdio · Produto próprio',
          title: 'Sites para o comércio local, com o primeiro esboço grátis.',
          summary: 'O meu estúdio de websites para padarias, barbearias, oficinas, floristas e restaurantes. O visitante escreve o nome do negócio e vê, na hora, uma pré-visualização do seu futuro site.',
          highlights: [
            'Pré-visualização ao vivo: nome, localidade, tipo de negócio e paleta geram um site falso em desktop e telemóvel',
            'Secção "Porquê" com uma pesquisa Google simulada: negócio sem site vs. com site',
            '4 línguas (PT, EN, ES, FR) servidas pelo mesmo index.html',
            'Formulário com Netlify Forms, honeypot, CSP estrita e HSTS',
          ],
          stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
          theme: { bg: '#F7F6F3', fg: '#0E0E0E', accent: '#FF5A1F', muted: '#55534E' },
          shots: [
            { src: 'assets/work/dsoftware-hero.jpg', alt: 'Página inicial da d.software', kind: 'desktop' },
            { src: 'assets/work/dsoftware-mobile.jpg', alt: 'd.software no telemóvel', kind: 'mobile' },
          ],
          status: 'Em lançamento',
        },
        {
          id: 'orcamentos',
          index: '02',
          name: 'Orçamentos NC',
          year: '2026',
          kicker: 'App web · PWA',
          title: 'Do Excel com contas à mão para orçamentos em PDF em dois minutos.',
          summary: 'App feita à medida da Nuno Cardoso Carpintaria para criar, guardar e enviar orçamentos. Substituiu uma folha de Excel sem fórmulas, onde o IVA tinha ficado a 0% por engano.',
          highlights: [
            'Valores em cêntimos inteiros: IVA por taxa, descontos por linha e prestações sem erros de arredondamento',
            'PDF gerado no browser com QR code e rodapé da empresa, enviado por WhatsApp ou email',
            'Numeração atómica (ORC-2026-015) e RLS no Postgres entre empresas',
            'Testes Vitest e Playwright em desktop e mobile; custo mensal de 0 €',
          ],
          stack: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'react-pdf', 'Playwright'],
          theme: { bg: '#3B2A21', fg: '#EFECE7', accent: '#F07F1B', muted: '#C9B8A8' },
          shots: [
            { src: 'assets/work/orc-editor.jpg', alt: 'Editor de orçamentos', kind: 'desktop' },
            { src: 'assets/work/orc-mobile.jpg', alt: 'Lista de orçamentos no telemóvel', kind: 'mobile' },
          ],
          status: 'Em produção interna',
        },
        {
          id: 'nc',
          index: '03',
          name: 'Nuno Cardoso Carpintaria',
          year: '2024',
          kicker: 'Website institucional',
          title: 'Madeira trabalhada à medida, agora também online.',
          summary: 'Site de uma carpintaria de Vila do Conde, em atividade desde 2002: cozinhas, armários, portas e carpintaria geral, com galeria de obras e pedidos de orçamento.',
          highlights: [
            'Substituiu um site antigo em Bootstrap 4 e jQuery',
            'Catálogo de produtos por categoria e galeria de obras',
            'Multilíngue e pensado para telemóvel',
          ],
          stack: ['Angular 18', 'TypeScript', 'CSS'],
          theme: { bg: '#EFECE7', fg: '#3B2A21', accent: '#A55D35', muted: '#5E4438' },
          shots: [
            { src: 'assets/work/nc-site.jpg', alt: 'Site da Nuno Cardoso Carpintaria', kind: 'desktop' },
            { src: 'assets/work/nc-site-mobile.jpg', alt: 'Site da carpintaria no telemóvel', kind: 'mobile' },
          ],
          link: { href: 'https://nunocardosocarpintaria.com/', label: 'nunocardosocarpintaria.com' },
          status: 'Online',
        },
      ],
    },
    career: {
      eyebrow: '02 · Carreira',
      title: 'Onde ponho o código a trabalhar.',
      intro: 'Na Meivcore desenvolvo a plataforma interna do grupo em OutSystems, usada todos os dias nas obras, na segurança, nas compras, nas finanças e nos recursos humanos.',
      meiv: {
        period: 'Fev 2025 — hoje',
        role: 'OutSystems Developer',
        org: 'Meivcore Group',
        place: 'Porto',
        text: 'Desenvolvo módulos novos e melhorias de ponta a ponta em OutSystems Reactive: modelo de dados, lógica, ecrãs, emails, PDFs e integrações.',
        domainsLabel: 'Áreas onde já entreguei',
        domains: meivDomains.pt,
        phases: [
          {
            label: '2025 · S1',
            items: [
              { title: 'Novo módulo de Gestão da Qualidade', detail: 'Ciclo completo de não conformidades: registo, acompanhamento, histórico de alterações, evidências fotográficas, intervenientes e notificações automáticas por email.', tags: ['Qualidade', 'Módulo novo'] },
              { title: 'Aplicação de gestão de equipamentos em obra', detail: 'Nova aplicação para controlar o inventário em contentores de obra e a atribuição de artigos a colaboradores.', tags: ['Logística', 'App nova'] },
              { title: 'Internacionalização da plataforma', detail: 'Tradução para inglês das áreas operacionais e financeiras: obras, encomendas, orçamentação, centros de custo e vista financeira.', tags: ['i18n', 'Financeiro'] },
              { title: 'Evolução dos módulos core do ERP', detail: 'Melhorias em compras, obras, recursos humanos, frota, orçamentação, centros de custo, gestão de utilizadores e registo de horas.', tags: ['Compras', 'RH', 'Obras'] },
              { title: 'Segurança e comunicação em obra', detail: 'Melhorias no reporte de incidentes e nos relatórios de SST, e um canal de feedback a partir da obra.', tags: ['SST'] },
            ],
          },
          {
            label: '2025 · S2',
            items: [
              { title: 'Digitalização da Segurança e Saúde no Trabalho', detail: 'Novos fluxos para diálogos de segurança e inspeções em obra, com registo, histórico, relatórios em PDF e acesso na app móvel dos colaboradores.', tags: ['SST', 'Mobile', 'PDF'] },
              { title: 'Assinatura digital de documentos', detail: 'Novo módulo de gestão documental que permite aos colaboradores assinar documentos digitalmente.', tags: ['Gestão Documental', 'Módulo novo'] },
              { title: 'Registo de assiduidade por app móvel', detail: 'Picagem de ponto pelo telemóvel, com controlo por frente de obra, permissões por perfil e histórico.', tags: ['Assiduidade', 'Mobile'] },
            ],
          },
          {
            label: '2026',
            items: [
              { title: 'Reestruturação do processamento de faturas de fornecedores', detail: 'Nova versão do circuito, com dupla validação contra as ordens de compra e uma interface redesenhada.', tags: ['Compras', 'Financeiro'] },
              { title: 'Evolução do registo de assiduidade', detail: 'Horários de referência por frente de obra, gestão de pausas e filtros avançados.', tags: ['Assiduidade', 'Mobile'] },
              { title: 'Automatização da atribuição de EPS às obras', tags: ['Obras', 'Automação'] },
              { title: 'Evolução contínua da plataforma', detail: 'Novos estados e listagens na área de segurança, e melhorias em qualidade, obras, compras e gestão documental.', tags: ['SST', 'Qualidade'] },
            ],
          },
          {
            label: 'Agora',
            items: [
              { title: 'Aprovação e processamento de despesas', detail: 'Novo módulo financeiro com um circuito de aprovação de despesas, desde a submissão até à validação.', tags: ['Financeiro', 'Em curso'] },
              { title: 'Aprovação de pagamentos', detail: 'Fluxo de aprovação e processamento de pagamentos, com acesso aos documentos de suporte guardados em AWS S3.', tags: ['Financeiro', 'AWS S3', 'Em curso'] },
            ],
          },
        ],
      },
      before: 'Antes disso',
      roles: [
        { period: 'Out — Nov 2024', org: 'Claranet Portugal', role: 'Software Engineer · Estágio', place: 'Porto', text: 'Primeira experiência numa equipa de engenharia de software em contexto empresarial.' },
        { period: '2023 — 2024', org: 'ATEC', role: 'CTeSP Tecnologias e Programação de Sistemas de Informação', place: 'Perafita', text: 'Nível 5 (EQF). Laravel, Angular, C#/Blazor, SQL Server e projetos em equipa como o Innodrive.' },
        { period: '2018 — 2023', org: 'Nelo · MAR Kayaks', role: 'Produção em fibra de carbono', place: 'Vila do Conde', text: 'Cerca de 5 anos a fabricar peças em carbono para kayaks de competição e lazer. Daí ficou-me o rigor e a atenção ao detalhe.' },
        { period: '2015 — 2018', org: 'Escola D. Afonso Sanches', role: 'Gestão e Programação de Sistemas Informáticos', place: 'Vila do Conde', text: 'Nível 4 (EQF), com estágio no departamento de informática da Câmara Municipal de Vila do Conde.' },
      ],
    },
    about: {
      eyebrow: '03 · Sobre',
      title: 'Prático, curioso e com vontade de aprender.',
      paragraphs: [
        'Sou o Diogo, developer na zona do Porto. Antes de programar passei cinco anos numa fábrica de kayaks de competição, e foi aí que aprendi que os detalhes contam.',
        'Hoje trabalho entre o low-code e o pro-code: OutSystems durante o dia e, nos meus projetos, React, Angular, Laravel e Postgres. Gosto de software simples de usar por quem não é técnico.',
      ],
      skillsLabel: 'Ferramentas',
      skills: [
        { group: 'Plataformas', items: ['OutSystems', 'Supabase', 'Netlify', 'Power Pages'] },
        { group: 'Front-end', items: ['TypeScript', 'React', 'Angular', 'Next.js', 'Blazor', 'Tailwind'] },
        { group: 'Back-end', items: ['PHP / Laravel', 'C#', 'Node', 'REST'] },
        { group: 'Dados', items: ['SQL Server', 'PostgreSQL', 'MariaDB'] },
        { group: 'Qualidade', items: ['Vitest', 'Playwright', 'Git'] },
      ],
      trainingLabel: 'Formação complementar',
      training: ['Foundational C# · Microsoft', 'Responsive Web Design · freeCodeCamp', 'Project Management · Saylor Academy', 'Angular, SQL e JavaScript · Sololearn'],
      languagesLabel: 'Línguas',
      languages: ['Português, nativo', 'Inglês, B1'],
    },
    contact: {
      eyebrow: '04 · Contacto',
      title: 'Diga olá.',
      text: 'Para trocar ideias sobre software, OutSystems ou um projeto, o meu email está sempre aberto.',
      studioLabel: 'Precisa de um site para o seu negócio?',
      studioText: 'Os projetos para clientes são feitos através da d.software, com o primeiro esboço grátis.',
      copy: 'Copiar email',
      copied: 'Copiado ✓',
      cv: 'Descarregar CV',
    },
    palette: {
      placeholder: 'Para onde queres ir?',
      empty: 'Nada encontrado.',
      goto: 'Ir para',
      actions: 'Ações',
      copyEmail: 'Copiar email',
      downloadCv: 'Descarregar CV',
      switchLang: 'Switch to English',
      top: 'Voltar ao topo',
    },
    footer: 'Desenhado e programado por Diogo Sousa',
  },

  en: {
    nav: { work: 'Work', career: 'Career', about: 'About', contact: 'Contact', menu: 'Menu' },
    hero: {
      status: 'OutSystems Developer at Meivcore',
      roles: ['Software Developer', 'OutSystems Developer', 'Full-stack', 'Founder of d.software'],
      lead: 'I build software for real problems: modules for a construction group’s internal platform, a quoting app for a carpentry shop, and websites for local shops.',
      ctaWork: 'See the work',
      ctaContact: 'Get in touch',
      local: 'Porto, PT',
      hint: 'shortcuts',
    },
    work: {
      eyebrow: '01 · Work',
      title: 'Projects with real clients.',
      intro: 'My own projects, built end to end: from the problem and the design to the database and the deploy.',
      highlightsLabel: 'Highlights',
      stackLabel: 'Stack',
      private: 'Private repository',
      cases: [
        {
          id: 'dsoftware',
          index: '01',
          name: 'd.software',
          year: '2026',
          kicker: 'Studio · Own product',
          title: 'Websites for local shops, with the first draft free.',
          summary: 'My web studio for bakeries, barbershops, garages, florists and restaurants. Visitors type their business name and instantly see a preview of their future site.',
          highlights: [
            'Live preview: name, town, business type and palette generate a mock site on desktop and phone',
            '"Why" section with a simulated Google search: a business without a site vs. with one',
            '4 languages (PT, EN, ES, FR) served by a single index.html',
            'Netlify Forms with a honeypot, a strict CSP and HSTS',
          ],
          stack: ['HTML', 'CSS', 'JavaScript', 'Netlify'],
          theme: { bg: '#F7F6F3', fg: '#0E0E0E', accent: '#FF5A1F', muted: '#55534E' },
          shots: [
            { src: 'assets/work/dsoftware-hero.jpg', alt: 'd.software home page', kind: 'desktop' },
            { src: 'assets/work/dsoftware-mobile.jpg', alt: 'd.software on a phone', kind: 'mobile' },
          ],
          status: 'Launching',
        },
        {
          id: 'orcamentos',
          index: '02',
          name: 'Orçamentos NC',
          year: '2026',
          kicker: 'Web app · PWA',
          title: 'From a hand-totalled spreadsheet to PDF quotes in two minutes.',
          summary: 'A custom app for Nuno Cardoso Carpintaria to create, save and send quotes. It replaced an Excel sheet with no formulas, where VAT had been left at 0% by mistake.',
          highlights: [
            'Money stored as whole cents: VAT per rate, per-line discounts and instalments with no rounding errors',
            'PDF built in the browser with a QR code and the company letterhead, sent via WhatsApp or email',
            'Atomic numbering (ORC-2026-015) and Postgres row-level security between companies',
            'Vitest and Playwright tests on desktop and mobile; €0 a month to run',
          ],
          stack: ['React 18', 'TypeScript', 'Vite', 'Supabase', 'react-pdf', 'Playwright'],
          theme: { bg: '#3B2A21', fg: '#EFECE7', accent: '#F07F1B', muted: '#C9B8A8' },
          shots: [
            { src: 'assets/work/orc-editor.jpg', alt: 'Quote editor', kind: 'desktop' },
            { src: 'assets/work/orc-mobile.jpg', alt: 'Quote list on a phone', kind: 'mobile' },
          ],
          status: 'In internal use',
        },
        {
          id: 'nc',
          index: '03',
          name: 'Nuno Cardoso Carpintaria',
          year: '2024',
          kicker: 'Company website',
          title: 'Made-to-measure woodwork, now online too.',
          summary: 'Website for a carpentry shop in Vila do Conde, running since 2002: kitchens, wardrobes, doors and general carpentry, with a project gallery and quote requests.',
          highlights: [
            'Replaced an old Bootstrap 4 and jQuery site',
            'Product catalogue by category and a project gallery',
            'Multilingual and mobile-first',
          ],
          stack: ['Angular 18', 'TypeScript', 'CSS'],
          theme: { bg: '#EFECE7', fg: '#3B2A21', accent: '#A55D35', muted: '#5E4438' },
          shots: [
            { src: 'assets/work/nc-site.jpg', alt: 'Nuno Cardoso Carpintaria website', kind: 'desktop' },
            { src: 'assets/work/nc-site-mobile.jpg', alt: 'Carpentry website on a phone', kind: 'mobile' },
          ],
          link: { href: 'https://nunocardosocarpintaria.com/', label: 'nunocardosocarpintaria.com' },
          status: 'Live',
        },
      ],
    },
    career: {
      eyebrow: '02 · Career',
      title: 'Where my code goes to work.',
      intro: 'At Meivcore I develop the group’s internal OutSystems platform, used every day across construction sites, health & safety, procurement, finance and HR.',
      meiv: {
        period: 'Feb 2025 — now',
        role: 'OutSystems Developer',
        org: 'Meivcore Group',
        place: 'Porto',
        text: 'I build new modules and improvements end to end in OutSystems Reactive: data model, logic, screens, emails, PDFs and integrations.',
        domainsLabel: 'Areas I’ve shipped to',
        domains: meivDomains.en,
        phases: [
          {
            label: '2025 · H1',
            items: [
              { title: 'New Quality Management module', detail: 'Full non-conformity lifecycle: logging, follow-up, change history, photo evidence, people involved and automatic email notifications.', tags: ['Quality', 'New module'] },
              { title: 'On-site equipment management app', detail: 'New application to track inventory in site containers and the assignment of items to employees.', tags: ['Logistics', 'New app'] },
              { title: 'Platform internationalisation', detail: 'English translation of operational and financial areas: sites, orders, budgeting, cost centres and the financial view.', tags: ['i18n', 'Finance'] },
              { title: 'Evolving the core ERP modules', detail: 'Improvements across procurement, sites, HR, fleet, budgeting, cost centres, user management and time tracking.', tags: ['Procurement', 'HR', 'Sites'] },
              { title: 'On-site safety and communication', detail: 'Improved incident reporting and H&S reports, plus a feedback channel straight from the site.', tags: ['H&S'] },
            ],
          },
          {
            label: '2025 · H2',
            items: [
              { title: 'Digitising Health & Safety', detail: 'New flows for safety dialogues and site inspections, with logging, history, PDF reports and access from the employee mobile app.', tags: ['H&S', 'Mobile', 'PDF'] },
              { title: 'Digital document signing', detail: 'New document management module that lets employees sign documents digitally.', tags: ['Documents', 'New module'] },
              { title: 'Mobile attendance tracking', detail: 'Clock-in from the phone, with control per work front, role-based permissions and history.', tags: ['Attendance', 'Mobile'] },
            ],
          },
          {
            label: '2026',
            items: [
              { title: 'Redesigned supplier invoice processing', detail: 'A new version of the workflow, with double validation against purchase orders and a redesigned interface.', tags: ['Procurement', 'Finance'] },
              { title: 'Attendance tracking, next iteration', detail: 'Reference schedules per work front, break management and advanced filters.', tags: ['Attendance', 'Mobile'] },
              { title: 'Automated EPS assignment to sites', tags: ['Sites', 'Automation'] },
              { title: 'Continuous platform evolution', detail: 'New states and listings in the safety area, and improvements across quality, sites, procurement and document management.', tags: ['H&S', 'Quality'] },
            ],
          },
          {
            label: 'Now',
            items: [
              { title: 'Expense approval and processing', detail: 'New finance module with an expense approval workflow, from submission to validation.', tags: ['Finance', 'In progress'] },
              { title: 'Payment approval', detail: 'Payment approval and processing workflow, with access to supporting documents stored in AWS S3.', tags: ['Finance', 'AWS S3', 'In progress'] },
            ],
          },
        ],
      },
      before: 'Before that',
      roles: [
        { period: 'Oct — Nov 2024', org: 'Claranet Portugal', role: 'Software Engineer · Internship', place: 'Porto', text: 'My first experience in a software engineering team in a corporate setting.' },
        { period: '2023 — 2024', org: 'ATEC', role: 'Higher Technical Course in Information Systems Programming', place: 'Perafita', text: 'EQF level 5. Laravel, Angular, C#/Blazor, SQL Server and team projects such as Innodrive.' },
        { period: '2018 — 2023', org: 'Nelo · MAR Kayaks', role: 'Carbon-fibre manufacturing', place: 'Vila do Conde', text: 'About 5 years making carbon-fibre parts for racing and leisure kayaks. It taught me rigour and attention to detail.' },
        { period: '2015 — 2018', org: 'D. Afonso Sanches School', role: 'Computer Systems Management & Programming', place: 'Vila do Conde', text: 'EQF level 4, with an internship at the Vila do Conde City Council IT department.' },
      ],
    },
    about: {
      eyebrow: '03 · About',
      title: 'Practical, curious and always learning.',
      paragraphs: [
        'I’m Diogo, a developer based near Porto. Before coding I spent five years in a racing-kayak factory, which is where I learned that details matter.',
        'Today I work across low-code and pro-code: OutSystems by day and, on my own projects, React, Angular, Laravel and Postgres. I like software that non-technical people find easy to use.',
      ],
      skillsLabel: 'Toolbox',
      skills: [
        { group: 'Platforms', items: ['OutSystems', 'Supabase', 'Netlify', 'Power Pages'] },
        { group: 'Front-end', items: ['TypeScript', 'React', 'Angular', 'Next.js', 'Blazor', 'Tailwind'] },
        { group: 'Back-end', items: ['PHP / Laravel', 'C#', 'Node', 'REST'] },
        { group: 'Data', items: ['SQL Server', 'PostgreSQL', 'MariaDB'] },
        { group: 'Quality', items: ['Vitest', 'Playwright', 'Git'] },
      ],
      trainingLabel: 'Further training',
      training: ['Foundational C# · Microsoft', 'Responsive Web Design · freeCodeCamp', 'Project Management · Saylor Academy', 'Angular, SQL and JavaScript · Sololearn'],
      languagesLabel: 'Languages',
      languages: ['Portuguese, native', 'English, B1'],
    },
    contact: {
      eyebrow: '04 · Contact',
      title: 'Say hello.',
      text: 'For a chat about software, OutSystems or a project, my inbox is always open.',
      studioLabel: 'Need a website for your business?',
      studioText: 'Client projects go through d.software, and the first draft is free.',
      copy: 'Copy email',
      copied: 'Copied ✓',
      cv: 'Download CV',
    },
    palette: {
      placeholder: 'Where do you want to go?',
      empty: 'Nothing found.',
      goto: 'Go to',
      actions: 'Actions',
      copyEmail: 'Copy email',
      downloadCv: 'Download CV',
      switchLang: 'Mudar para português',
      top: 'Back to top',
    },
    footer: 'Designed and built by Diogo Sousa',
  },
};

export const EMAIL = 'diogosousainf@gmail.com';
export const STUDIO_EMAIL = 'd.software.sites@gmail.com';
export const CV = 'assets/DiogoSousaCV_ENG.pdf';
export const SOCIALS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/diogo-sousa-6322b5159/' },
  { label: 'GitHub', href: 'https://github.com/diogosousainf' },
];
export const STACK = ['OutSystems', 'TypeScript', 'React', 'Angular', 'Laravel', 'Supabase', 'PostgreSQL', 'SQL Server', 'C#', 'Next.js', 'Playwright', 'Netlify'];
