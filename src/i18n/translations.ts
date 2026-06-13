// Centralized FR/EN copy for the whole portfolio.
// Structural data (icons, images, links, tags) stays in the components;
// only human-readable text lives here, keyed so components can map over it.

export type Lang = 'fr' | 'en';

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: 'fr', label: 'FR' },
  { code: 'en', label: 'EN' },
];

const fr = {
  nav: {
    links: {
      home: 'Accueil',
      about: 'À propos',
      skills: 'Compétences',
      projects: 'Projets',
      contact: 'Contact',
    },
    cta: 'Travaillez avec moi',
    toggleMenu: 'Ouvrir le menu',
    theme: 'Changer de thème',
    language: 'Changer de langue',
    backToTop: 'Retour en haut',
  },
  hero: {
    badge: '🚀 Disponible pour de nouveaux projets',
    greeting: 'Bonjour, je suis',
    roles: [
      'Développeur Front-End',
      'Designer UI/UX IA',
      "Spécialiste IA & Automatisation",
      'Graphiste & Ing. Streaming',
    ],
    description:
      "Je transforme vos idées visionnaires en solutions numériques d'exception, alliant précision technique, esthétique moderne et puissance de l'intelligence artificielle.",
    ctaProjects: 'Voir mes projets',
    ctaContact: 'Me contacter',
  },
  about: {
    title: 'À Propos de Moi',
    subtitle:
      'Un profil multidisciplinaire alliant technique, créativité et intelligence artificielle.',
    items: {
      1: {
        title: 'Développement Front-End',
        description:
          'Expertise en HTML, CSS, JS, TypeScript, React et Next.js pour créer des interfaces fluides, performantes et accessibles.',
      },
      2: {
        title: 'Design UI/UX assisté par IA',
        description:
          "Conception de parcours utilisateurs optimisés via Figma, Design Systems, et prototypage haute fidélité augmenté par l'IA.",
      },
      3: {
        title: 'Intelligence Artificielle',
        description:
          "Intégration d'outils IA (Claude, LLMs) et maîtrise du Prompt Engineering pour booster la créativité et la productivité.",
      },
      4: {
        title: 'Automatisation IA',
        description:
          'Création de workflows intelligents avec Zapier, Make et scripts Python pour optimiser les processus métier.',
      },
      5: {
        title: 'Création Graphique',
        description:
          'Direction artistique, branding et retouche avancée sous Photoshop pour une identité visuelle forte et mémorable.',
      },
      6: {
        title: 'Streaming Professionnel',
        description:
          'Mise en place de régies virtuelles avec vMix et NDI pour des événements live de qualité broadcast.',
      },
    },
  },
  skills: {
    title: 'Mes Compétences',
    subtitle: 'Un arsenal technologique complet pour vos projets les plus ambitieux.',
    cards: {
      frontend: 'Maîtrise Front-End',
      uiux: 'Design UI/UX IA',
      ai: 'Intelligence Artificielle',
      automation: 'Automatisation',
      graphism: 'Création Graphique',
      streaming: 'Live Streaming',
    },
    experience: [
      {
        role: 'Développeur Frontend — Yxen Labs',
        period: 'Juil. 2025 — Fév. 2026',
        description:
          'Développement de landing pages, dashboards UI/UX et applications mobiles via Capacitor.',
      },
      {
        role: 'Développeur Freelance & Projets personnels',
        period: 'Fév. 2026 — Présent',
        description:
          'Missions freelance locales et développement de projets personnels (web & mobile).',
      },
    ],
  },
  stats: {
    labels: {
      projects: 'Projets réalisés',
      clients: 'Clients satisfaits',
      expertises: "Domaines d'expertise",
      hours: 'Heures de création',
    },
  },
  projects: {
    title: 'Projets Récents',
    subtitle: 'Une sélection de mes dernières réalisations.',
    allOnGithub: 'Tout voir sur GitHub',
    demo: 'Démo',
    code: 'Code',
    confidential: 'Projet confidentiel',
    mockup: 'Maquette',
    items: {
      1: {
        category: 'Web App • Analytics',
        description:
          "Tour de contrôle intuitive pour piloter votre entreprise en un coup d'œil. Transformez vos données complexes en visuels clairs et suivez vos performances en temps réel.",
      },
      2: {
        category: 'IA • Super-Résolution',
        description:
          'Application de Super-Résolution par Intelligence Artificielle. Améliore la qualité de vos photos et les agrandit sans perte de détails grâce à des modèles IA de pointe.',
      },
      3: {
        category: 'Productivité • UX',
        description:
          "Outil de productivité minimaliste conçu pour organiser votre quotidien en segmentant vos activités par niveau d'importance. Clair, rapide, efficace.",
      },
      4: {
        category: 'Site Vitrine • Vin & Œnologie',
        description:
          "Site web réalisé pour un client, dédié à la promotion et à la vente de vins rouges et blancs de différentes qualités viticoles. Mis en ligne sur Vercel — détails sous confidentialité.",
      },
      5: {
        category: 'ERP • Développement assisté par IA',
        description:
          "Maquette puis développement d'un ERP de gestion pour une église : membres, finances et activités. Conçu avec Stitch et développé à l'aide de l'IA. Projet en cours, sous confidentialité.",
      },
      6: {
        category: 'UI/UX • Maquette',
        description:
          "Maquette d'un site vitrine pour un salon de coiffure / barbier : présentation des prestations, prise de rendez-vous et galerie. Conçue avec Stitch.",
      },
    },
  },
  contact: {
    title: 'Prenons Contact',
    subtitle:
      'Vous avez une question ou un projet en tête ? Contactez-moi et discutons ensemble.',
    info: {
      email: 'Email',
      phone: 'Téléphone',
      location: 'Localisation',
    },
    form: {
      nameLabel: 'Votre Nom',
      namePlaceholder: 'John Doe',
      emailLabel: 'Adresse Email',
      emailPlaceholder: 'john@example.com',
      subjectLabel: 'Sujet',
      subjectPlaceholder: 'Sujet de votre message',
      messageLabel: 'Message',
      messagePlaceholder: 'Votre message...',
      submit: 'Envoyer le Message',
      sending: 'Envoi en cours...',
      sent: 'Message envoyé !',
      toastRequired: 'Veuillez remplir tous les champs',
      toastSuccess: 'Message envoyé avec succès ! 🎉',
      toastError: 'Une erreur est survenue. Veuillez réessayer.',
    },
  },
  footer: {
    status: 'Disponible pour de nouveaux projets',
    rights: 'Tous droits réservés.',
    madeWith: 'Conçu & développé avec',
    by: 'par johnCode',
  },
};

const en: typeof fr = {
  nav: {
    links: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      contact: 'Contact',
    },
    cta: 'Work with me',
    toggleMenu: 'Open menu',
    theme: 'Toggle theme',
    language: 'Switch language',
    backToTop: 'Back to top',
  },
  hero: {
    badge: '🚀 Available for new projects',
    greeting: "Hi, I'm",
    roles: [
      'Front-End Developer',
      'AI UI/UX Designer',
      'AI & Automation Specialist',
      'Graphic & Streaming Eng.',
    ],
    description:
      'I turn your visionary ideas into outstanding digital solutions, blending technical precision, modern aesthetics and the power of artificial intelligence.',
    ctaProjects: 'View my projects',
    ctaContact: 'Get in touch',
  },
  about: {
    title: 'About Me',
    subtitle:
      'A multidisciplinary profile blending engineering, creativity and artificial intelligence.',
    items: {
      1: {
        title: 'Front-End Development',
        description:
          'Expertise in HTML, CSS, JS, TypeScript, React and Next.js to build smooth, performant and accessible interfaces.',
      },
      2: {
        title: 'AI-assisted UI/UX Design',
        description:
          'Designing optimized user journeys with Figma, Design Systems and AI-augmented high-fidelity prototyping.',
      },
      3: {
        title: 'Artificial Intelligence',
        description:
          'Integrating AI tools (Claude, LLMs) and mastering Prompt Engineering to boost creativity and productivity.',
      },
      4: {
        title: 'AI Automation',
        description:
          'Building smart workflows with Zapier, Make and Python scripts to streamline business processes.',
      },
      5: {
        title: 'Graphic Design',
        description:
          'Art direction, branding and advanced retouching in Photoshop for a strong, memorable visual identity.',
      },
      6: {
        title: 'Professional Streaming',
        description:
          'Setting up virtual production with vMix and NDI for broadcast-quality live events.',
      },
    },
  },
  skills: {
    title: 'My Skills',
    subtitle: 'A complete technology arsenal for your most ambitious projects.',
    cards: {
      frontend: 'Front-End Mastery',
      uiux: 'AI UI/UX Design',
      ai: 'Artificial Intelligence',
      automation: 'Automation',
      graphism: 'Graphic Design',
      streaming: 'Live Streaming',
    },
    experience: [
      {
        role: 'Frontend Developer — Yxen Labs',
        period: 'Jul 2025 — Feb 2026',
        description:
          'Building landing pages, UI/UX dashboards and mobile apps with Capacitor.',
      },
      {
        role: 'Freelance Developer & Personal Projects',
        period: 'Feb 2026 — Present',
        description:
          'Local freelance work and building personal projects (web & mobile).',
      },
    ],
  },
  stats: {
    labels: {
      projects: 'Projects delivered',
      clients: 'Happy clients',
      expertises: 'Areas of expertise',
      hours: 'Hours of creation',
    },
  },
  projects: {
    title: 'Recent Projects',
    subtitle: 'A selection of my latest work.',
    allOnGithub: 'See all on GitHub',
    demo: 'Demo',
    code: 'Code',
    confidential: 'Confidential project',
    mockup: 'Mockup',
    items: {
      1: {
        category: 'Web App • Analytics',
        description:
          'An intuitive control tower to steer your business at a glance. Turn complex data into clear visuals and track your performance in real time.',
      },
      2: {
        category: 'AI • Super-Resolution',
        description:
          'An AI-powered Super-Resolution app. Enhances your photos and upscales them without losing detail thanks to state-of-the-art AI models.',
      },
      3: {
        category: 'Productivity • UX',
        description:
          'A minimalist productivity tool designed to organize your day by sorting tasks by importance. Clear, fast, effective.',
      },
      4: {
        category: 'Showcase Site • Wine & Œnology',
        description:
          'A website built for a client to promote and sell red and white wines of various viticultural qualities. Deployed on Vercel — details under NDA.',
      },
      5: {
        category: 'ERP • AI-assisted development',
        description:
          'Mockup then development of a management ERP for a church: members, finances and activities. Designed with Stitch and built with AI assistance. Work in progress, under NDA.',
      },
      6: {
        category: 'UI/UX • Mockup',
        description:
          'Mockup of a showcase website for a hair salon / barbershop: services overview, online booking and gallery. Designed with Stitch.',
      },
    },
  },
  contact: {
    title: 'Get in Touch',
    subtitle: 'Have a question or a project in mind? Reach out and let’s talk.',
    info: {
      email: 'Email',
      phone: 'Phone',
      location: 'Location',
    },
    form: {
      nameLabel: 'Your Name',
      namePlaceholder: 'John Doe',
      emailLabel: 'Email Address',
      emailPlaceholder: 'john@example.com',
      subjectLabel: 'Subject',
      subjectPlaceholder: 'Subject of your message',
      messageLabel: 'Message',
      messagePlaceholder: 'Your message...',
      submit: 'Send Message',
      sending: 'Sending...',
      sent: 'Message sent!',
      toastRequired: 'Please fill in all fields',
      toastSuccess: 'Message sent successfully! 🎉',
      toastError: 'Something went wrong. Please try again.',
    },
  },
  footer: {
    status: 'Available for new projects',
    rights: 'All rights reserved.',
    madeWith: 'Designed & built with',
    by: 'by johnCode',
  },
};

export const translations = { fr, en };

export type Translation = typeof fr;
