/* ============================================
   SCRIPT.JS — Portfolio KPEYI Espoir
   Animations, CRUD, Admin, Interactions
   ============================================ */

'use strict';

// ===================== DATA =====================

const DEFAULT_SKILLS = [
  { id: 's1', name: 'HTML & CSS', level: 90, icon: '🌐' },
  { id: 's2', name: 'JavaScript', level: 75, icon: '⚡' },
  { id: 's3', name: 'PHP', level: 60, icon: '🐘' },
  { id: 's4', name: 'C', level: 70, icon: '⚙️' },
  { id: 's5', name: 'MATLAB', level: 65, icon: '📊' },
  { id: 's6', name: 'UI/UX Design', level: 70, icon: '🎨' },
  { id: 's7', name: 'Graphisme', level: 80, icon: '🖌️' },
  { id: 's8', name: 'Python', level: 55, icon: '🐍' },
  { id: 's9', name: 'SQL / MySQL', level: 65, icon: '🗃️' },
  { id: 's10', name: 'Git & GitHub', level: 70, icon: '🔀' },
  { id: 's11', name: 'Node.js (bases)', level: 45, icon: '🟢' },
  { id: 's12', name: 'Algorithmique', level: 75, icon: '🧠' },
  { id: 's13', name: 'TypeScript', level: 35, icon: '📘' },
  { id: 's14', name: 'React (bases)', level: 40, icon: '⚛️' },
  { id: 's15', name: 'Réseaux', level: 50, icon: '🌐' },
];

const DEFAULT_PROJECTS = [
  {
    id: 'p1',
    title: 'Générateur de mots de passe',
    desc: 'Application web pour générer des mots de passe sécurisés et personnalisables avec critères de complexité.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🔐',
    link: '#',
  },
  {
    id: 'p2',
    title: 'Système de gestion PHP',
    desc: 'Application PHP de gestion avec authentification, CRUD et base de données MySQL.',
    techs: ['PHP', 'MySQL', 'HTML', 'CSS'],
    emoji: '🗄️',
    link: '#',
  },
  {
    id: 'p3',
    title: 'Algorithmes en C',
    desc: 'Collection d\'algorithmes et structures de données implémentés en langage C (tri, recherche, listes chaînées).',
    techs: ['C'],
    emoji: '🧮',
    link: '#',
  },
  {
    id: 'p4',
    title: 'Scripts MATLAB',
    desc: 'Scripts de calcul numérique, simulation et visualisation de données avec MATLAB.',
    techs: ['MATLAB'],
    emoji: '📈',
    link: '#',
  },
  {
    id: 'p5',
    title: 'Design d\'affiches',
    desc: 'Créations graphiques pour affiches universitaires et supports de communication visuelle.',
    techs: ['Photoshop', 'Canva'],
    emoji: '🖼️',
    link: '#',
  },
  {
    id: 'p6',
    title: 'Site web vitrine',
    desc: 'Site web vitrine responsive pour une association étudiante, avec présentation des activités et formulaire d\'adhésion.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🏛️',
    link: '#',
  },
  {
    id: 'p7',
    title: 'Gestion de notes',
    desc: 'Application de gestion de notes d\'étudiants avec calcul de moyennes, classement et export PDF.',
    techs: ['PHP', 'MySQL', 'HTML', 'CSS'],
    emoji: '📝',
    link: '#',
  },
  {
    id: 'p8',
    title: 'Calculatrice scientifique',
    desc: 'Calculatrice scientifique interactive avec fonctions avancées (trigo, logarithmes, racines) en JavaScript.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🧮',
    link: '#',
  },
  {
    id: 'p9',
    title: 'Jeu du Pendu',
    desc: 'Jeu du pendu en JavaScript avec plusieurs catégories de mots, scores et animations.',
    techs: ['HTML', 'CSS', 'JavaScript'],
    emoji: '🎮',
    link: '#',
  },
  {
    id: 'p10',
    title: 'Base de données bibliothèque',
    desc: 'Modélisation et implémentation d\'une base de données pour une bibliothèque universitaire avec requêtes SQL complexes.',
    techs: ['MySQL', 'PHP'],
    emoji: '📚',
    link: '#',
  },
  {
    id: 'p11',
    title: 'Scripts d\'automatisation Python',
    desc: 'Scripts Python pour l\'automatisation de tâches (renommage de fichiers, scraping, analyse de texte).',
    techs: ['Python'],
    emoji: '🤖',
    link: '#',
  },
  {
    id: 'p12',
    title: 'Application de chat',
    desc: 'Application de chat en temps réel avec PHP, AJAX et MySQL. Interface moderne et responsive.',
    techs: ['PHP', 'JavaScript', 'MySQL', 'HTML', 'CSS'],
    emoji: '💬',
    link: '#',
  },
  {
    id: 'p13',
    title: 'Générateur de CV en ligne',
    desc: 'Outil web pour créer un CV professionnel en quelques clics avec aperçu en direct et export PDF.',
    techs: ['HTML', 'CSS', 'JavaScript', 'PHP'],
    emoji: '📄',
    link: '#',
  },
  {
    id: 'p14',
    title: 'Mini réseau social',
    desc: 'Plateforme sociale simplifiée avec profils, publications, commentaires et système d\'amis.',
    techs: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
    emoji: '🌍',
    link: '#',
  },
];

const ADMIN_PASSWORD = 'admin123';

// ===================== TRANSLATIONS =====================

const LANGUAGES = {
  fr: {
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_skills: 'Compétences',
    nav_projects: 'Projets',
    nav_services: 'Services',
    nav_contact: 'Contact',
    hero_greeting: 'Salut, je suis',
    hero_desc: 'Étudiant en Licence 1 — Système Informatique et Logiciel.<br>Passionné par le développement web, la programmation et le design.',
    hero_btn_projects: 'Voir mes projets',
    hero_btn_cv: 'Télécharger CV',
    hero_btn_contact: 'Me contacter',
    hero_scroll: 'Scroll',
    about_title: 'À propos de moi',
    about_subtitle: 'Qui je suis et ce que je vise',
    about_intro: 'Passionné par l\'informatique et le design, je transforme ma curiosité en compétences concrètes. Mon objectif : devenir un développeur polyvalent capable de créer des solutions complètes et élégantes.',
    about_card1_title: 'Mon Parcours',
    about_card1_desc: 'Je suis <strong>KPEYI Espoir Ahouélété</strong>, étudiant en <strong>Licence 1 en Système Informatique et Logiciel</strong>. Passionné par l\'informatique depuis mon plus jeune âge, j\'ai commencé par le graphisme avant de plonger dans le développement web. Aujourd\'hui, je combine créativité et logique pour construire des solutions numériques élégantes.',
    about_card2_title: 'Mes Objectifs',
    about_card2_desc: 'Devenir un <strong>développeur full stack</strong> accompli, maîtriser plusieurs langages et frameworks, et contribuer à des projets innovants. Je vise l\'excellence technique à travers une <strong>discipline quotidienne</strong> et une <strong>progression constante</strong>.',
    about_card3_title: 'Ma Vision',
    about_card3_desc: 'L\'apprentissage continu est au cœur de ma démarche. Chaque ligne de code est une opportunité d\'apprendre. Je crois en la puissance de la <strong>persévérance</strong>, du <strong>travail bien fait</strong> et du <strong>partage de connaissances</strong>.',
    cv_title: 'Téléchargez mon CV',
    cv_desc: 'Retrouvez l\'ensemble de mon parcours, compétences et expériences.',
    cv_download: 'Télécharger PDF',
    stat_projects: 'Projets réalisés',
    stat_skills: 'Compétences',
    stat_years: 'Années d\'apprentissage',
    stat_certs: 'Certificats obtenus',
    skills_title: 'Mes Compétences',
    skills_subtitle: 'Technologies et outils que j\'utilise',
    projects_title: 'Mes Projets',
    projects_subtitle: 'Quelques réalisations personnelles et académiques',
    services_title: 'Mes Services',
    services_subtitle: 'Ce que je peux vous apporter',
    service1_title: 'Développement Web',
    service1_desc: 'Sites web modernes, responsives et optimisés. HTML, CSS, JavaScript, PHP.',
    service2_title: 'Backend PHP',
    service2_desc: 'Développement backend simple, gestion de formulaires, connexion bases de données.',
    service3_title: 'Programmation C',
    service3_desc: 'Algorithmique, structures de données, résolution de problèmes complexes.',
    service4_title: 'Design Graphique',
    service4_desc: 'Affiches, flyers, maquettes UI. Création visuelle percutante pour vos projets.',
    contact_title: 'Me Contacter',
    contact_subtitle: 'Travaillons ensemble sur votre prochain projet',
    contact_info_title: 'Informations',
    contact_btn: 'Envoyer le message',
    footer_rights: 'Tous droits réservés',
    footer_made: 'Conçu avec',
    footer_and: 'et beaucoup de',
    admin_title: 'Accès Admin',
    admin_login_text: 'Entrez le mot de passe administrateur',
    admin_validate: 'Valider',
    admin_error: 'Mot de passe incorrect',
    admin_tab_projects: 'Projets',
    admin_tab_skills: 'Compétences',
    admin_projects_title: 'Gestion des projets',
    admin_skills_title: 'Gestion des compétences',
    admin_add: '+ Ajouter',
    view_project: 'Voir le projet',
    view_online: 'Voir en ligne',
    edit: 'Modifier',
    delete: 'Supprimer',
    confirm_delete_project: 'Supprimer ce projet ?',
    confirm_delete_skill: 'Supprimer cette compétence ?',
    project_added: 'Projet ajouté',
    project_edited: 'Projet modifié',
    project_deleted: 'Projet supprimé',
    skill_added: 'Compétence ajoutée',
    skill_edited: 'Compétence modifiée',
    skill_deleted: 'Compétence supprimée',
    fill_all: 'Veuillez remplir tous les champs',
    invalid_email: 'Email invalide',
    msg_sent: 'Message envoyé avec succès !',
    no_projects: 'Aucun projet pour le moment',
    no_skills: 'Aucune compétence',
  },
  en: {
    nav_home: 'Home',
    nav_about: 'About',
    nav_skills: 'Skills',
    nav_projects: 'Projects',
    nav_services: 'Services',
    nav_contact: 'Contact',
    hero_greeting: 'Hi, I\'m',
    hero_desc: 'Freshman — Computer Systems and Software.<br>Passionate about web development, programming, and design.',
    hero_btn_projects: 'View my projects',
    hero_btn_cv: 'Download CV',
    hero_btn_contact: 'Contact me',
    hero_scroll: 'Scroll',
    about_title: 'About Me',
    about_subtitle: 'Who I am and what I aim for',
    about_intro: 'Passionate about IT and design, I turn my curiosity into concrete skills. My goal: become a versatile developer capable of creating complete and elegant solutions.',
    about_card1_title: 'My Journey',
    about_card1_desc: 'I\'m <strong>KPEYI Espoir Ahouélété</strong>, a <strong>Freshman in Computer Systems and Software</strong>. Passionate about IT since childhood, I started with graphic design before diving into web development. Today, I combine creativity and logic to build elegant digital solutions.',
    about_card2_title: 'My Goals',
    about_card2_desc: 'Become an accomplished <strong>full stack developer</strong>, master multiple languages and frameworks, and contribute to innovative projects. I aim for technical excellence through <strong>daily discipline</strong> and <strong>constant progress</strong>.',
    about_card3_title: 'My Vision',
    about_card3_desc: 'Continuous learning is at the heart of my approach. Every line of code is an opportunity to learn. I believe in the power of <strong>perseverance</strong>, <strong>quality work</strong>, and <strong>knowledge sharing</strong>.',
    cv_title: 'Download my CV',
    cv_desc: 'Find my full background, skills and experiences.',
    cv_download: 'Download PDF',
    stat_projects: 'Projects done',
    stat_skills: 'Skills',
    stat_years: 'Years learning',
    stat_certs: 'Certificates',
    skills_title: 'My Skills',
    skills_subtitle: 'Technologies and tools I use',
    projects_title: 'My Projects',
    projects_subtitle: 'Personal and academic achievements',
    services_title: 'My Services',
    services_subtitle: 'What I can bring to you',
    service1_title: 'Web Development',
    service1_desc: 'Modern, responsive, and optimized websites. HTML, CSS, JavaScript, PHP.',
    service2_title: 'PHP Backend',
    service2_desc: 'Simple backend development, form handling, database connections.',
    service3_title: 'C Programming',
    service3_desc: 'Algorithms, data structures, complex problem solving.',
    service4_title: 'Graphic Design',
    service4_desc: 'Posters, flyers, UI mockups. Impactful visual creation for your projects.',
    contact_title: 'Contact Me',
    contact_subtitle: 'Let\'s work together on your next project',
    contact_info_title: 'Information',
    contact_btn: 'Send message',
    footer_rights: 'All rights reserved',
    footer_made: 'Made with',
    footer_and: 'and lots of',
    admin_title: 'Admin Access',
    admin_login_text: 'Enter the administrator password',
    admin_validate: 'Validate',
    admin_error: 'Wrong password',
    admin_tab_projects: 'Projects',
    admin_tab_skills: 'Skills',
    admin_projects_title: 'Manage projects',
    admin_skills_title: 'Manage skills',
    admin_add: '+ Add',
    view_project: 'View project',
    view_online: 'View online',
    edit: 'Edit',
    delete: 'Delete',
    confirm_delete_project: 'Delete this project?',
    confirm_delete_skill: 'Delete this skill?',
    project_added: 'Project added',
    project_edited: 'Project updated',
    project_deleted: 'Project deleted',
    skill_added: 'Skill added',
    skill_edited: 'Skill updated',
    skill_deleted: 'Skill deleted',
    fill_all: 'Please fill all fields',
    invalid_email: 'Invalid email',
    msg_sent: 'Message sent successfully!',
    no_projects: 'No projects yet',
    no_skills: 'No skills yet',
  },
};

// ===================== STORAGE =====================

function loadData(key, fallback) {
  try {
    const d = localStorage.getItem(key);
    return d ? JSON.parse(d) : fallback;
  } catch { return fallback; }
}

function saveData(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

let skills = loadData('portfolio_skills', DEFAULT_SKILLS);
let projects = loadData('portfolio_projects', DEFAULT_PROJECTS);

// ===================== DOM REFS =====================

const $ = (s, p = document) => p.querySelector(s);
const $$ = (s, p = document) => [...p.querySelectorAll(s)];

function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas || !canvas.getContext) return;
  const ctx = canvas.getContext('2d');
  if (!ctx) return;
  let w, h, particles = [];

  function resize() {
    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;
  }
  resize();
  window.addEventListener('resize', resize);

  const count = Math.min(60, Math.floor((w * h) / 20000));

  for (let i = 0; i < count; i++) {
    particles.push({
      x: Math.random() * w,
      y: Math.random() * h,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      r: Math.random() * 2 + 0.5,
      alpha: Math.random() * 0.5 + 0.2,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);
    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = w;
      if (p.x > w) p.x = 0;
      if (p.y < 0) p.y = h;
      if (p.y > h) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
      ctx.fill();
    });

    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(139, 92, 246, ${0.08 * (1 - dist / 120)})`;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
}

// ===================== TYPING EFFECT =====================

function initTyping() {
  const el = document.getElementById('typingText');
  if (!el) return;
  const words = {
    fr: ['Développeur Web', 'Passionné d\'Informatique', 'Graphiste', 'Étudiant en SIL'],
    en: ['Web Developer', 'IT Enthusiast', 'Graphic Designer', 'CS Student'],
  };
  let wordIdx = 0;
  let charIdx = 0;
  let isDeleting = false;
  let speed = 80;

  function getWords() { return words[currentLang] || words.fr; }

  function type() {
    const current = getWords()[wordIdx];
    if (isDeleting) {
      el.textContent = current.substring(0, charIdx--);
      speed = 40;
    } else {
      el.textContent = current.substring(0, charIdx++);
      speed = 80;
    }

    if (!isDeleting && charIdx === current.length + 1) {
      isDeleting = true;
      speed = 1200;
    } else if (isDeleting && charIdx === -1) {
      isDeleting = false;
      wordIdx = (wordIdx + 1) % getWords().length;
      speed = 400;
    }

    setTimeout(type, speed);
  }
  type();
}

// ===================== NAVBAR =====================

function initNavbar() {
  const navbar = document.getElementById('navbar');
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');
  const links = $$('a', navLinks);

  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
  });

  links.forEach((link) => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navLinks.classList.remove('active');
    });
  });

  const sections = $$('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY + 150;
    let current = '';
    sections.forEach((sec) => {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        current = sec.id;
      }
    });
    links.forEach((link) => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  });
}

// ===================== SMOOTH SCROLL =====================

document.addEventListener('click', (e) => {
  const link = e.target.closest('a[href^="#"]');
  if (!link) return;
  const target = document.querySelector(link.getAttribute('href'));
  if (target) {
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth' });
  }
});

// ===================== SECTION ANIMATIONS =====================

function initSectionAnims() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('anim-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll('[data-anim]').forEach((el) => observer.observe(el));
}

// ===================== FADE-IN SCROLL =====================

let fadeObserver = null;

function initFadeIn() {
  fadeObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  const cards = $$('.about-card, .skill-card, .project-card, .service-card, .stat-item, .contact-info, .contact-form, .about-intro');
  cards.forEach((el) => {
    if (el.closest('[data-anim="stagger"]')) return;
    el.classList.add('fade-in');
    fadeObserver.observe(el);
  });
}

function observeNewFadeElements(container) {
  if (!fadeObserver) return;
  container.querySelectorAll('.fade-in:not(.visible)').forEach((el) => fadeObserver.observe(el));
}

// ===================== ANIMATED COUNTERS =====================

function initCounters() {
  const counters = $$('.stat-number');
  if (!counters.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const target = parseInt(el.dataset.target);
          animateCounter(el, target);
          observer.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((el) => observer.observe(el));
}

function animateCounter(el, target) {
  let current = 0;
  const step = Math.max(1, Math.floor(target / 60));
  const duration = 1500;
  const start = performance.now();

  function update(now) {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    current = Math.floor(eased * target);
    el.textContent = current + (target > 10 ? '+' : '');
    if (progress < 1) requestAnimationFrame(update);
    else el.textContent = target + '+';
  }
  requestAnimationFrame(update);
}

// ===================== SKILL BARS =====================

function initSkillBars() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const fill = entry.target;
          const level = fill.dataset.level;
          setTimeout(() => { fill.style.width = level + '%'; }, 200);
          observer.unobserve(fill);
        }
      });
    },
    { threshold: 0.3 }
  );

  $$('.skill-bar-fill').forEach((el) => observer.observe(el));
}

// ===================== RENDER SKILLS =====================

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;
  grid.innerHTML = skills.map((s) => `
    <div class="skill-card fade-in visible">
      <div class="skill-icon">${s.icon || '📘'}</div>
      <div class="skill-info">
        <h4>${s.name}</h4>
        <div class="skill-bar">
          <div class="skill-bar-fill" data-level="${s.level}"></div>
        </div>
      </div>
      <span class="skill-percent">${s.level}%</span>
    </div>
  `).join('');
  initSkillBars();
}

// ===================== RENDER PROJECTS =====================

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;
  grid.innerHTML = projects.map((p) => `
    <div class="project-card fade-in visible" data-id="${p.id}">
      <div class="project-img">${p.emoji || '📁'}</div>
      <div class="project-body">
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-techs">
          ${p.techs.map((t) => `<span class="project-tech">${t}</span>`).join('')}
        </div>
        <button class="project-btn view-project" data-id="${p.id}">${t('view_project')}</button>
      </div>
    </div>
  `).join('');

  $$('.view-project').forEach((btn) => {
    btn.addEventListener('click', () => {
      const project = projects.find((p) => p.id === btn.dataset.id);
      if (project) showProjectModal(project);
    });
  });
}

// ===================== PROJECT MODAL =====================

function showProjectModal(project) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');
  body.innerHTML = `
    <div style="font-size:4rem;text-align:center;margin-bottom:16px;">${project.emoji || '📁'}</div>
    <h2>${project.title}</h2>
    <p>${project.desc}</p>
    <div class="project-techs">
      ${project.techs.map((t) => `<span class="project-tech">${t}</span>`).join('')}
    </div>
    <a href="${project.link}" target="_blank" class="btn btn-primary" style="margin-top:20px;display:inline-flex;">
      ${t('view_online')}
    </a>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===================== MODAL CLOSE =====================

function initModalClose() {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  if (!overlay || !closeBtn) return;

  [closeBtn, overlay].forEach((el) => {
    el.addEventListener('click', (e) => {
      if (e.target !== el) return;
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// ===================== CONTACT FORM =====================

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('formName').value.trim();
    const email = document.getElementById('formEmail').value.trim();
    const message = document.getElementById('formMessage').value.trim();

    if (!name || !email || !message) {
      showToast(t('fill_all'));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      showToast(t('invalid_email'));
      return;
    }

    showToast('✅ ' + t('msg_sent'));
    form.reset();
  });
}

// ===================== TOAST =====================

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._timeout);
  toast._timeout = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ===================== THEME TOGGLE =====================

function initTheme() {
  const saved = localStorage.getItem('portfolio_theme');
  if (saved === 'light') document.body.classList.add('light-mode');

  const toggles = ['themeToggle', 'themeToggleMobile'];
  toggles.forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      const isLight = document.body.classList.contains('light-mode');
      localStorage.setItem('portfolio_theme', isLight ? 'light' : 'dark');
    });
  });
}

// ===================== LANGUAGE =====================

let currentLang = localStorage.getItem('portfolio_lang') || 'fr';

function t(key) {
  return LANGUAGES[currentLang]?.[key] || LANGUAGES.fr[key] || key;
}

function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n;
    const text = t(key);
    if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
      el.placeholder = text;
    } else {
      el.innerHTML = text;
    }
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  const btns = ['langToggle', 'langToggleMobile'];
  btns.forEach((id) => {
    const btn = document.getElementById(id);
    if (btn) btn.textContent = currentLang === 'fr' ? 'EN' : 'FR';
  });
}

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('portfolio_lang', lang);
  applyTranslations();
  renderSkills();
  renderProjects();
}

function initLang() {
  const toggles = ['langToggle', 'langToggleMobile'];
  toggles.forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      setLang(currentLang === 'fr' ? 'en' : 'fr');
    });
  });
  applyTranslations();
}

// ===================== ADMIN PANEL =====================

let adminAuthed = false;

function initAdmin() {
  let keyBuffer = '';
  document.addEventListener('keydown', (e) => {
    if (e.ctrlKey && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      openAdmin();
    }
  });

  const overlay = document.getElementById('adminOverlay');
  const close = document.getElementById('adminClose');
  const loginBtn = document.getElementById('adminLoginBtn');
  const pwdInput = document.getElementById('adminPassword');
  const errorEl = document.getElementById('adminError');
  const tabs = $$('.admin-tab');
  const loginView = document.getElementById('adminLogin');
  const dashView = document.getElementById('adminDashboard');

  close.addEventListener('click', () => {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    pwdInput.value = '';
    errorEl.classList.remove('show');
  });

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
      pwdInput.value = '';
      errorEl.classList.remove('show');
    }
  });

  loginBtn.addEventListener('click', () => {
    if (pwdInput.value === ADMIN_PASSWORD) {
      adminAuthed = true;
      loginView.style.display = 'none';
      dashView.style.display = 'block';
      errorEl.classList.remove('show');
      renderAdminProjects();
      renderAdminSkills();
    } else {
      errorEl.classList.add('show');
    }
  });

  pwdInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') loginBtn.click();
  });

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      tabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      $$('.admin-panel').forEach((p) => p.classList.remove('active'));
      document.getElementById('admin' + tab.dataset.tab.charAt(0).toUpperCase() + tab.dataset.tab.slice(1)).classList.add('active');
    });
  });

  document.getElementById('addProjectBtn').addEventListener('click', () => showAdminForm('project'));
  document.getElementById('addSkillBtn').addEventListener('click', () => showAdminForm('skill'));
}

function openAdmin() {
  const overlay = document.getElementById('adminOverlay');
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';

  if (adminAuthed) {
    document.getElementById('adminLogin').style.display = 'none';
    document.getElementById('adminDashboard').style.display = 'block';
    renderAdminProjects();
    renderAdminSkills();
  } else {
    document.getElementById('adminLogin').style.display = 'block';
    document.getElementById('adminDashboard').style.display = 'none';
  }
}

function renderAdminProjects() {
  const list = document.getElementById('adminProjectsList');
  if (!list) return;
  if (!projects.length) {
    list.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:20px;">${t('no_projects')}</p>`;
    return;
  }
  list.innerHTML = projects.map((p) => `
    <div class="admin-item">
      <div class="admin-item-info">
        <h4>${p.title}</h4>
        <p>${p.techs.join(', ')}</p>
      </div>
      <div class="admin-item-actions">
        <button class="admin-btn admin-btn-edit" data-id="${p.id}">${t('edit')}</button>
        <button class="admin-btn admin-btn-delete" data-id="${p.id}">${t('delete')}</button>
      </div>
    </div>
  `).join('');

  $$('.admin-btn-edit', list).forEach((btn) => {
    btn.addEventListener('click', () => {
      const proj = projects.find((p) => p.id === btn.dataset.id);
      if (proj) showAdminForm('project', proj);
    });
  });

  $$('.admin-btn-delete', list).forEach((btn) => {
    btn.addEventListener('click', () => {
      if (confirm(t('confirm_delete_project'))) {
        projects = projects.filter((p) => p.id !== btn.dataset.id);
        saveData('portfolio_projects', projects);
        renderAdminProjects();
        renderProjects();
        showToast(t('project_deleted'));
      }
    });
  });
}

function renderAdminSkills() {
  const list = document.getElementById('adminSkillsList');
  if (!list) return;
  if (!skills.length) {
    list.innerHTML = `<p style="color:var(--text-muted);text-align:center;padding:20px;">${t('no_skills')}</p>`;
    return;
  }
  list.innerHTML = skills.map((s) => `
    <div class="admin-item">
      <div class="admin-item-info">
        <h4>${s.icon || '📘'} ${s.name}</h4>
        <p>${t('admin_skills_title')}: ${s.level}%</p>
      </div>
      <div class="admin-item-actions">
        <button class="admin-btn admin-btn-edit" data-id="${s.id}">${t('edit')}</button>
        <button class="admin-btn admin-btn-delete" data-id="${s.id}">${t('delete')}</button>
      </div>
    </div>
  `).join('');

  $$('.admin-btn-edit', list).forEach((btn) => {
    btn.addEventListener('click', () => {
      const skill = skills.find((s) => s.id === btn.dataset.id);
      if (skill) showAdminForm('skill', skill);
    });
  });

  $$('.admin-btn-delete', list).forEach((btn) => {
    btn.addEventListener('click', () => {
      if (confirm(t('confirm_delete_skill'))) {
        skills = skills.filter((s) => s.id !== btn.dataset.id);
        saveData('portfolio_skills', skills);
        renderAdminSkills();
        renderSkills();
        showToast(t('skill_deleted'));
      }
    });
  });
}

function showAdminForm(type, item) {
  const overlay = document.getElementById('modalOverlay');
  const body = document.getElementById('modalBody');

  if (type === 'project') {
    const isEdit = !!item;
    body.innerHTML = `
      <h2>${isEdit ? t('edit') : t('admin_add')} ${t('admin_tab_projects').toLowerCase()}</h2>
      <form class="admin-form" id="adminProjectForm">
        <div class="form-group">
          <label>Titre</label>
          <input type="text" id="pfTitle" value="${isEdit ? item.title : ''}" required>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea id="pfDesc" rows="3" required>${isEdit ? item.desc : ''}</textarea>
        </div>
        <div class="form-group">
          <label>${t('admin_tab_skills')} (séparées par des virgules)</label>
          <input type="text" id="pfTechs" value="${isEdit ? item.techs.join(', ') : ''}" required>
        </div>
        <div class="form-group">
          <label>Emoji / Icône</label>
          <input type="text" id="pfEmoji" value="${isEdit ? item.emoji : '📁'}" maxlength="4">
        </div>
        <div class="form-group">
          <label>Lien (demo / GitHub)</label>
          <input type="url" id="pfLink" value="${isEdit ? item.link : '#'}">
        </div>
        <button type="submit" class="btn btn-primary">${isEdit ? t('edit') : t('admin_add')}</button>
      </form>
    `;

    document.getElementById('adminProjectForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        title: document.getElementById('pfTitle').value.trim(),
        desc: document.getElementById('pfDesc').value.trim(),
        techs: document.getElementById('pfTechs').value.split(',').map((t) => t.trim()).filter(Boolean),
        emoji: document.getElementById('pfEmoji').value.trim() || '📁',
        link: document.getElementById('pfLink').value.trim() || '#',
      };

      if (isEdit) {
        Object.assign(item, data);
        saveData('portfolio_projects', projects);
        showToast(t('project_edited'));
      } else {
        data.id = 'p' + Date.now();
        projects.push(data);
        saveData('portfolio_projects', projects);
        showToast(t('project_added'));
      }
      renderProjects();
      renderAdminProjects();
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  if (type === 'skill') {
    const isEdit = !!item;
    body.innerHTML = `
      <h2>${isEdit ? t('edit') : t('admin_add')} ${t('admin_tab_skills').toLowerCase()}</h2>
      <form class="admin-form" id="adminSkillForm">
        <div class="form-group">
          <label>${t('admin_tab_skills')}</label>
          <input type="text" id="sfName" value="${isEdit ? item.name : ''}" required>
        </div>
        <div class="form-group">
          <label>Niveau (0-100)</label>
          <input type="number" id="sfLevel" min="0" max="100" value="${isEdit ? item.level : '50'}" required>
        </div>
        <div class="form-group">
          <label>Icône (emoji)</label>
          <input type="text" id="sfIcon" value="${isEdit ? item.icon : '📘'}" maxlength="4">
        </div>
        <button type="submit" class="btn btn-primary">${isEdit ? t('edit') : t('admin_add')}</button>
      </form>
    `;

    document.getElementById('adminSkillForm').addEventListener('submit', (e) => {
      e.preventDefault();
      const data = {
        name: document.getElementById('sfName').value.trim(),
        level: Math.min(100, Math.max(0, parseInt(document.getElementById('sfLevel').value) || 0)),
        icon: document.getElementById('sfIcon').value.trim() || '📘',
      };

      if (isEdit) {
        Object.assign(item, data);
        saveData('portfolio_skills', skills);
        showToast(t('skill_edited'));
      } else {
        data.id = 's' + Date.now();
        skills.push(data);
        saveData('portfolio_skills', skills);
        showToast(t('skill_added'));
      }
      renderSkills();
      renderAdminSkills();
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===================== INIT =====================

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLang();
  initParticles();
  initTyping();
  initNavbar();
  initFadeIn();
  initSectionAnims();
  renderSkills();
  renderProjects();
  initCounters();
  initContactForm();
  initModalClose();
  initAdmin();

  const observer = new MutationObserver(() => initSkillBars());
  const skillsGrid = document.getElementById('skillsGrid');
  if (skillsGrid) observer.observe(skillsGrid, { childList: true, subtree: true });
});
