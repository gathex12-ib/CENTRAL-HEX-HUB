'use strict';

const IMG = [
  'https://i.ibb.co/VYkbTxNj/IMG-20261118-WA0075.jpg',
  'https://i.ibb.co/MxZK2nMM/IMG-20261118-WA0068.jpg',
  'https://i.ibb.co/Nnpg3CbS/WA-1794990310272.jpg',
  'https://i.ibb.co/v4y2FyMy/IMG-20261118-WA0069.jpg',
  'https://i.ibb.co/tPXCCqHY/IMG-20261118-WA0071.jpg',
  'https://i.ibb.co/KcT2p3Mm/IMG-20261118-WA0065.jpg',
  'https://i.ibb.co/mCHBmfFs/IMG-20261118-WA0072.jpg',
  'https://i.ibb.co/rfsDw2KV/IMG-20261118-WA0070.jpg'
];
const ICON = 'assets/central-hex-icon.png';
const CATEGORIES = [
  ['Bots', '🤖', 'Bots et automatisations'],
  ['Applications', '📱', 'Apps mobiles et web'],
  ['Tools', '🧰', 'Outils et utilitaires'],
  ['Sites Web', '🌐', 'Sites et plateformes'],
  ['Laboratoire', '🧪', 'Prototypes et idées']
];
const SEED = [
  {
    "id": "hexai",
    "name": "HEX-AI",
    "category": "Applications",
    "icon": "🧠",
    "description": "Assistant IA CENTRAL-HEX pour discuter, apprendre, coder, traduire et développer ses idées.",
    "status": "En développement",
    "image": "assets/visuals/hex-ai.svg",
    "gallery": [
      "assets/visuals/hex-ai.svg"
    ],
    "link": "",
    "download": "",
    "featured": true,
    "details": "HEX-AI regroupe les expériences d’assistance par intelligence artificielle associées à CENTRAL-HEX. Les deux accès ci-dessous correspondent aux versions actuellement communiquées.",
    "features": [
      "Chat IA",
      "Aide au développement",
      "Traduction et rédaction",
      "Assistant de projets"
    ],
    "commands": [],
    "links": [
      {
        "label": "HEX-AI — Version Lovable",
        "url": "https://hex-ai-cem.lovable.app"
      },
      {
        "label": "CENTRAL-HEX IA — Version Base44",
        "url": "https://central-hex-ia-copy-cff1d280.base44.app/?is_new_user=true"
      }
    ]
  },
  {
    "id": "hexrec",
    "name": "HEX-REC",
    "category": "Applications",
    "icon": "🎥",
    "description": "Projet d’enregistreur d’écran Android pour capturer des vidéos, du son et du gameplay.",
    "status": "En développement",
    "image": "assets/apps/hex-rec.jpg",
    "gallery": [
      "assets/apps/hex-rec.jpg"
    ],
    "link": "",
    "download": "",
    "featured": true,
    "details": "HEX-REC est le projet d’application de capture d’écran et d’enregistrement vidéo. Cette fiche accueillera les fonctions réellement présentes dans l’APK, les informations de compatibilité et le téléchargement dès que le fichier sera fourni.",
    "features": [
      "Capture d’écran",
      "Enregistrement vidéo",
      "Détails audio et options à confirmer avec l’APK"
    ],
    "commands": []
  },
  {
    "id": "centralbot",
    "name": "CENTRAL-HEX BOT",
    "category": "Bots",
    "icon": "🤖",
    "description": "Bot WhatsApp communautaire : commandes, outils et automatisations.",
    "status": "En développement",
    "image": "assets/visuals/central-hex-bot.svg",
    "gallery": [
      "assets/visuals/central-hex-bot.svg"
    ],
    "link": "",
    "download": "",
    "featured": true,
    "details": "CENTRAL-HEX BOT est le bot WhatsApp de la communauté. Cette fiche rassemble ses points d’accès actuellement fournis par l’équipe. Choisis un serveur pour ouvrir son panneau ou son interface de connexion. La disponibilité de chaque hébergement peut varier.",
    "features": [
      "Commandes WhatsApp",
      "Outils communautaires",
      "Automatisations",
      "Réponses utiles"
    ],
    "commands": [
      {
        "name": ".menu",
        "description": "Afficher le menu des commandes, si cette commande est activée sur la version choisie."
      },
      {
        "name": ".ping",
        "description": "Tester la réponse du bot, si cette commande est activée."
      },
      {
        "name": ".help",
        "description": "Demander de l’aide ou la liste des commandes, si disponible."
      }
    ],
    "prerequisites": [
      "Un compte WhatsApp actif sur ton téléphone.",
      "Une connexion Internet stable.",
      "Ouvrir un seul serveur à la fois et suivre les instructions affichées.",
      "Ne jamais partager un code de vérification WhatsApp avec quelqu’un."
    ],
    "examples": [
      "Exemple indicatif : envoyer .menu dans la conversation avec le bot.",
      "Exemple indicatif : envoyer .ping pour tester sa réponse.",
      "Les commandes exactes peuvent varier selon la version et le serveur. Vérifie le menu renvoyé par le bot."
    ],
    "links": [
      {
        "label": "CENTRAL-HEX BOT — Serveur 1 (Railway)",
        "url": "https://central-hex-production-ib.up.railway.app/"
      },
      {
        "label": "CENTRAL-HEX BOT — Serveur 2 (Render)",
        "url": "https://central-hex-2cxh.onrender.com/"
      },
      {
        "label": "CENTRAL-HEX BOT — Serveur 3 (Render)",
        "url": "https://central-hex-1-17ji.onrender.com/"
      },
      {
        "label": "CENTRAL-HEX BOT — Serveur 4 (SkyHost)",
        "url": "https://central-hex-bot.skyhost.tech/"
      }
    ]
  },
  {
    "id": "jarvis",
    "name": "JARVIS",
    "category": "Applications",
    "icon": "🦾",
    "description": "Assistant personnel expérimental pour l’écosystème HEX.",
    "status": "Bientôt",
    "image": "assets/apps/jarvis.jpg",
    "gallery": [
      "assets/apps/jarvis.jpg"
    ],
    "link": "",
    "download": "",
    "featured": true,
    "details": "JARVIS est présenté comme un assistant personnel de l’écosystème CENTRAL-HEX. Cette fiche accueillera sa présentation, ses fonctions confirmées, les captures et le fichier APK. Le téléchargement sera ajouté depuis l’administration lorsque l’APK sera fourni.",
    "features": [
      "Présentation de l’assistant",
      "Fonctions et cas d’usage à documenter à partir de l’APK",
      "Téléchargement Android à ajouter après réception"
    ],
    "commands": []
  },
  {
    "id": "hextools",
    "name": "HEX TOOLS",
    "category": "Tools",
    "icon": "🧰",
    "description": "Collection d’utilitaires et d’outils web réunis au même endroit.",
    "status": "En développement",
    "image": "assets/visuals/hex-tools.svg",
    "gallery": [
      "assets/visuals/hex-tools.svg"
    ],
    "link": "",
    "download": "",
    "featured": true,
    "details": "HEX TOOLS est le regroupement des utilitaires et mini-applications de l’écosystème CENTRAL-HEX. Ouvre un outil depuis la liste ci-dessous. Les services restent hébergés sur leurs plateformes respectives.",
    "features": [
      "Outils web",
      "Utilitaires",
      "Accès centralisé"
    ],
    "commands": [],
    "links": [
      {
        "label": "HEX TOOLS — Portail principal",
        "url": "https://central-hex-tools.netlify.app/"
      },
      {
        "label": "HEX PROMP",
        "url": "https://hex-promp.netlify.app/"
      },
      {
        "label": "HEX RADAR",
        "url": "https://hex-radar.netlify.app/"
      },
      {
        "label": "HEX PROMP TEXTE",
        "url": "https://hex-promp-texte.netlify.app/"
      },
      {
        "label": "HEX IDEA CREATOR",
        "url": "https://hex-idea-creator.netlify.app/"
      },
      {
        "label": "CENTRAL-HEX SIGNAL",
        "url": "https://central-hex-signal.netlify.app/"
      },
      {
        "label": "HEX TOOLS LAB",
        "url": "https://hex-tools-lab.netlify.app/"
      },
      {
        "label": "HEX AI STUDIOS",
        "url": "https://hex-ai-studios.lovable.app/"
      },
      {
        "label": "CENTRAL-HEX RÉSEAUX",
        "url": "https://central-hex-reseau-s.netlify.app/"
      }
    ]
  },
  {
    "id": "hexsonic",
    "name": "HEXSONIC",
    "category": "Applications",
    "icon": "🎵",
    "description": "Projet mobile expérimental autour de la reconnaissance musicale.",
    "status": "En développement",
    "image": "assets/apps/hexsonic.jpg",
    "gallery": [
      "assets/apps/hexsonic.jpg"
    ],
    "link": "",
    "download": "",
    "featured": false,
    "details": "HEXSONIC est un concept d’application de reconnaissance musicale. La fiche sera mise à jour avec les avancées et le téléchargement lorsqu’ils seront prêts.",
    "features": [
      "Reconnaissance musicale — objectif",
      "Historique",
      "Projet mobile"
    ],
    "commands": []
  },
  {
    "id": "telechex",
    "name": "TELECHEX",
    "category": "Applications",
    "icon": "📥",
    "description": "Projet de gestion de liens vidéo issus de plateformes sociales.",
    "status": "En développement",
    "image": "assets/visuals/telechex.svg",
    "gallery": [
      "assets/visuals/telechex.svg"
    ],
    "link": "",
    "download": "",
    "featured": false,
    "details": "TELECHEX explorera les liens vidéo des plateformes prises en charge, avec une interface simple et mobile. Les possibilités dépendront des règles et capacités de chaque plateforme.",
    "features": [
      "Interface mobile",
      "Gestion de liens",
      "Plateformes prises en charge à préciser"
    ],
    "commands": []
  },
  {
    "id": "hexapp",
    "name": "HEX-APP",
    "category": "Applications",
    "icon": "✨",
    "description": "Application communautaire pour suivre l’univers et les annonces CENTRAL-HEX.",
    "status": "En développement",
    "image": "assets/apps/hex-app.jpg",
    "gallery": [
      "assets/apps/hex-app.jpg"
    ],
    "link": "",
    "download": "",
    "featured": false,
    "details": "HEX-APP sera un espace de rassemblement pour les annonces, contenus et projets de la communauté CENTRAL-HEX.",
    "features": [
      "Actualités",
      "Communauté",
      "Projets et annonces"
    ],
    "commands": []
  },
  {
    "id": "itachi-md-v2",
    "name": "ITACHI-MD V2",
    "category": "Bots",
    "icon": "🥷",
    "description": "Bot WhatsApp ITACHI-MD V2 — deux points d’accès communiqués.",
    "status": "Disponible",
    "image": "assets/visuals/central-hex-bot.svg",
    "gallery": [
      "assets/visuals/central-hex-bot.svg"
    ],
    "link": "",
    "download": "",
    "featured": false,
    "details": "ITACHI-MD V2 est présenté ici dans la catégorie Bots. Les deux accès ci-dessous sont ceux fournis par CENTRAL-HEX. La liste de commandes et les prérequis spécifiques seront ajoutés après vérification de cette version.",
    "features": [
      "Deux points d’accès fournis",
      "Ouverture des interfaces d’hébergement",
      "Commandes spécifiques à documenter"
    ],
    "prerequisites": [
      "Compte WhatsApp actif.",
      "Connexion Internet.",
      "Suivre les instructions affichées par le service."
    ],
    "commands": [],
    "examples": [],
    "links": [
      {
        "label": "ITACHI-MD V2 — Serveur 1 (Railway)",
        "url": "https://itachi-md-v2-production.up.railway.app/"
      },
      {
        "label": "ITACHI-MD V2 — Serveur 2 (Render)",
        "url": "https://itachi-md-v2.onrender.com/"
      }
    ]
  }
];

const $ = selector => document.querySelector(selector);
const $$ = selector => [...document.querySelectorAll(selector)];
const STORAGE = {projects:'chhub_projects_v3', favorites:'chhub_favorites_v1', theme:'chhub_theme_v2', recent:'chhub_recent_v1'};
let projects = loadProjects();
let activeCategory = 'Tous';
let searchQuery = '';
let favoritesOnly = false;
let favorites = readJSON(STORAGE.favorites, []);
let recent = readJSON(STORAGE.recent, []);
let compare = [];
let slideIndex = 0;
let slideTimer = null;
let carouselPaused = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
let toastTimer = null;

function readJSON(key, fallback) {
  try { const value = JSON.parse(localStorage.getItem(key)); return value ?? fallback; }
  catch { return fallback; }
}
function loadProjects() {
  const saved = readJSON(STORAGE.projects, readJSON('chhub_projects', null));
  if (!Array.isArray(saved)) return SEED.map(item => ({...item}));
  return saved.map((item, index) => ({...SEED.find(seed => seed.id === item.id), ...item, id:String(item.id || `project-${index}`)}));
}
function persistProjects() { localStorage.setItem(STORAGE.projects, JSON.stringify(projects)); }
async function syncPublishedProjects() {
  try { const response = await fetch('/.netlify/functions/admin', {headers:{'Accept':'application/json'}}); if (!response.ok) return; const data = await response.json(); if (Array.isArray(data.projects)) { projects = data.projects; persistProjects(); render(); initCarousel(); } } catch (error) { console.info('Catalogue distant indisponible : affichage du cache local.', error); }
}
function escapeHTML(value='') {
  return String(value).replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
}
function safeURL(value='') {
  const raw = String(value).trim();
  if (!raw) return '';
  try { const url = new URL(raw, location.origin); return ['https:','http:'].includes(url.protocol) ? url.href : ''; }
  catch { return ''; }
}
function toast(message) {
  const element = $('#toast');
  element.textContent = message;
  element.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => element.classList.remove('show'), 2600);
}
function statusClass(status='') {
  if (status === 'En développement') return 'dev';
  if (status === 'Bientôt') return 'soon';
  return '';
}
function renderCategories() {
  $('#cats').innerHTML = CATEGORIES.map(([name, icon, description]) => `
    <button class="category-card ${activeCategory === name ? 'active' : ''}" type="button" data-category="${escapeHTML(name)}">
      <span class="category-icon">${icon}</span><b>${escapeHTML(name)}</b><p>${escapeHTML(description)}</p>
      <small>${projects.filter(project => project.category === name).length} projet(s) ↗</small>
    </button>`).join('');
}
function renderFilters() {
  $('#filters').innerHTML = ['Tous', ...CATEGORIES.map(category => category[0])].map(name => `
    <button type="button" class="filter-chip ${activeCategory === name ? 'active' : ''}" data-filter="${escapeHTML(name)}">${escapeHTML(name)}</button>`).join('');
}
function filteredProjects() {
  let result = projects.filter(project => {
    const haystack = [project.name, project.description, project.details, project.category, ...(project.features || [])].join(' ').toLowerCase();
    return (activeCategory === 'Tous' || project.category === activeCategory)
      && ($('#statusFilter').value === 'Tous' || project.status === $('#statusFilter').value)
      && (!favoritesOnly || favorites.includes(project.id))
      && haystack.includes(searchQuery);
  });
  const mode = $('#sort').value;
  if (mode === 'az') result.sort((a,b) => a.name.localeCompare(b.name, 'fr'));
  else if (mode === 'za') result.sort((a,b) => b.name.localeCompare(a.name, 'fr'));
  else if (mode === 'status') result.sort((a,b) => (a.status || '').localeCompare(b.status || '', 'fr'));
  else result.sort((a,b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)) || a.name.localeCompare(b.name, 'fr'));
  return result;
}
function apkURL(project) { return project.apk ? `/.netlify/functions/admin?apk=${encodeURIComponent(project.id)}` : ''; }
function renderCards() {
  const list = filteredProjects();
  $('#count').textContent = `${list.length} projet${list.length > 1 ? 's' : ''}`;
  $('#empty').classList.toggle('hidden', list.length > 0);
  $('#cards').innerHTML = list.map(project => {
    const favorite = favorites.includes(project.id);
    const selected = compare.includes(project.id);
    const destination = safeURL(project.download) || safeURL(project.link) || apkURL(project);
    return `<article class="project-card">
      <div class="project-visual project-visual-${escapeHTML((project.category || 'tools').toLowerCase().replace(/[^a-z0-9]+/g,'-'))}">
        <span class="project-visual-orbit"></span>${safeURL(project.image) ? `<img class="project-visual-image" src="${escapeHTML(safeURL(project.image))}" alt="" loading="lazy">` : `<span class="project-emoji">${escapeHTML(project.icon || "🚀")}</span>`}
        <div class="card-actions"><button class="round-action ${favorite ? 'active' : ''}" type="button" data-favorite="${escapeHTML(project.id)}" aria-label="${favorite ? 'Retirer des favoris' : 'Ajouter aux favoris'}">${favorite ? '♥' : '♡'}</button><button class="round-action ${selected ? 'active' : ''}" type="button" data-compare="${escapeHTML(project.id)}" aria-label="${selected ? 'Retirer de la comparaison' : 'Comparer ce projet'}">⇄</button></div>
        <span class="project-visual-name">${escapeHTML(project.name)}</span>
      </div>
      <div class="card-content"><div class="card-meta"><span class="category-label">${escapeHTML(project.category)}</span><span class="status-pill ${statusClass(project.status)}">${escapeHTML(project.status || 'À préciser')}</span></div>
        <h3>${escapeHTML(project.name)}</h3><p>${escapeHTML(project.description)}</p>
        <div class="card-footer"><button class="text-action" type="button" data-detail="${escapeHTML(project.id)}">Découvrir la fiche ↗</button>${destination ? `<a class="card-link" href="${escapeHTML(destination)}" target="_blank" rel="noopener">${safeURL(project.download) || project.apk ? 'Télécharger ↓' : 'Ouvrir ↗'}</a>` : '<span class="soon-label">Bientôt disponible</span>'}</div>
      </div></article>`;
  }).join('');
}
function render() {
  renderCategories(); renderFilters(); renderCards();
  $('#total').textContent = String(projects.length).padStart(2, '0');
  $('#favoriteCount').textContent = favorites.length;
  $('#favoritesOnly').setAttribute('aria-pressed', String(favoritesOnly));
  $('#favoritesQuick').classList.toggle('selected', favoritesOnly);
  updateCompareDock();
}
function updateCompareDock() {
  $('#compareDock').classList.toggle('hidden', compare.length === 0);
  $('#compareCount').textContent = compare.length;
}
function rememberProject(id) {
  recent = [id, ...recent.filter(item => item !== id)].slice(0, 8);
  localStorage.setItem(STORAGE.recent, JSON.stringify(recent));
}
function showModal(html) {
  $('#detail').innerHTML = html;
  $('#modal').classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  $('#close').focus();
}
function closeModal() {
  $('#modal').classList.add('hidden');
  document.body.style.overflow = '';
}
function openProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  rememberProject(id);
  const favorite = favorites.includes(id);
  showModal(`<div class="detail-topline"><span class="category-label">${escapeHTML(project.category)}</span><span class="status-pill ${statusClass(project.status)}">${escapeHTML(project.status || 'À préciser')}</span></div>
    <h2 class="detail-title" id="modalTitle">${escapeHTML(project.icon || '🚀')} ${escapeHTML(project.name)}</h2>
    ${safeURL(project.image) ? `<img class="detail-artwork" src="${escapeHTML(safeURL(project.image))}" alt="Illustration ${escapeHTML(project.name)}" loading="lazy">` : ''}
    <div class="detail-project-symbol"><span>${escapeHTML(project.icon || '🚀')}</span><b>${escapeHTML(project.name)}</b></div>
    <p class="detail-description">${escapeHTML(project.details || project.description)}</p>
    ${(project.prerequisites || []).length ? `<h3>Prérequis</h3><ul class="feature-list">${project.prerequisites.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul>` : ''}
    ${(project.features || []).length ? `<h3>Fonctionnalités prévues</h3><ul class="feature-list">${project.features.map(feature => `<li>${escapeHTML(feature)}</li>`).join('')}</ul>` : ''}
    ${(project.commands || []).length ? `<h3>Guide & commandes</h3><div class="command-list">${project.commands.map(command => typeof command === 'string' ? `<div>${escapeHTML(command)}</div>` : `<div><code>${escapeHTML(command.name)}</code> — ${escapeHTML(command.description)}</div>`).join('')}</div>` : ''}
    ${(project.examples || []).length ? `<h3>Exemples</h3><ul class="feature-list">${project.examples.map(x=>`<li>${escapeHTML(x)}</li>`).join('')}</ul>` : ''}
    ${(project.links || []).length ? `<h3>Liens d’accès</h3><div class="project-link-list">${project.links.map(link=>`<a class="btn btn-ghost btn-small" href="${escapeHTML(safeURL(link.url))}" target="_blank" rel="noopener">${escapeHTML(link.label)} ↗</a>`).join('')}</div>` : ''}
    <div class="detail-actions"><button class="btn btn-ghost btn-small" type="button" data-favorite="${escapeHTML(id)}">${favorite ? '♥ Dans tes favoris' : '♡ Ajouter aux favoris'}</button><button class="btn btn-ghost btn-small" type="button" data-share="${escapeHTML(id)}">Partager ↗</button>${safeURL(project.link) ? `<a class="btn btn-blue btn-small" href="${escapeHTML(safeURL(project.link))}" target="_blank" rel="noopener">Ouvrir le projet ↗</a>` : ''}${safeURL(project.download) ? `<a class="btn btn-blue btn-small" href="${escapeHTML(safeURL(project.download))}" target="_blank" rel="noopener">Télécharger ↓</a>` : ''}${project.apk ? `<a class="btn btn-blue btn-small" href="${escapeHTML(apkURL(project))}">Installer l’APK ↓</a>` : ''}</div>`);
}
function toggleFavorite(id) {
  favorites = favorites.includes(id) ? favorites.filter(item => item !== id) : [...favorites, id];
  localStorage.setItem(STORAGE.favorites, JSON.stringify(favorites));
  render();
  if (!$('#modal').classList.contains('hidden')) openProject(id);
  toast(favorites.includes(id) ? 'Ajouté à tes favoris ♥' : 'Retiré des favoris');
}
function toggleCompare(id) {
  if (compare.includes(id)) compare = compare.filter(item => item !== id);
  else if (compare.length >= 3) { toast('Tu peux comparer 3 projets maximum.'); return; }
  else compare.push(id);
  renderCards(); updateCompareDock();
  toast(compare.includes(id) ? 'Projet ajouté à la comparaison' : 'Projet retiré de la comparaison');
}
function compareProjects() {
  const items = compare.map(id => projects.find(project => project.id === id)).filter(Boolean);
  if (items.length < 2) { toast('Sélectionne au moins 2 projets pour les comparer.'); return; }
  const rows = [
    ['Catégorie', item => item.category], ['Statut', item => item.status || 'À préciser'],
    ['Description', item => item.description], ['Fonctionnalités', item => (item.features || []).join(' • ') || 'À préciser'],
    ['Lien', item => safeURL(item.link) ? 'Disponible' : 'Pas encore configuré'],
    ['Téléchargement', item => safeURL(item.download) ? 'Disponible' : 'Pas encore configuré']
  ];
  showModal(`<span class="kicker">COMPARATEUR</span><h2 class="detail-title" id="modalTitle">Comparer les projets</h2><div style="overflow:auto;margin-top:16px"><table class="compare-table"><thead><tr><th>Critère</th>${items.map(item => `<th>${escapeHTML(item.name)}</th>`).join('')}</tr></thead><tbody>${rows.map(([label,get]) => `<tr><th>${label}</th>${items.map(item => `<td>${escapeHTML(get(item))}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`);
}
async function shareProject(id) {
  const project = projects.find(item => item.id === id);
  if (!project) return;
  const url = new URL(location.href); url.hash = `project-${encodeURIComponent(id)}`;
  const shareData = {title:`${project.name} — CENTRAL-HEX`,text:project.description,url:url.href};
  try {
    if (navigator.share) await navigator.share(shareData);
    else if (navigator.clipboard?.writeText) { await navigator.clipboard.writeText(`${shareData.title}\n${shareData.text}\n${shareData.url}`); toast('Lien du projet copié'); }
    else toast('Le partage n’est pas disponible sur ce navigateur.');
  } catch (error) { if (error.name !== 'AbortError') toast('Impossible de partager pour le moment.'); }
}
function initCarousel() {
  const slides = projects.filter(project => safeURL(project.image)).slice(0, 8);
  if (!slides.length) return;
  $('#heroSlides').innerHTML = slides.map((project,index) => `<div class="hero-slide ${index === 0 ? 'active' : ''}"><img src="${escapeHTML(safeURL(project.image))}" alt="${escapeHTML(project.name)}" ${index ? 'loading="lazy"' : 'fetchpriority="high"'} onerror="this.onerror=null;this.src='${ICON}'"></div>`).join('');
  $('#slideDots').innerHTML = slides.map((_,index) => `<button type="button" class="slide-dot ${index === 0 ? 'active' : ''}" data-dot="${index}" aria-label="Afficher l'image ${index+1}"></button>`).join('');
  function go(index) {
    slideIndex = (index + slides.length) % slides.length;
    $$('.hero-slide').forEach((element,i) => element.classList.toggle('active', i === slideIndex));
    $$('.slide-dot').forEach((element,i) => element.classList.toggle('active', i === slideIndex));
    $('#slideTitle').textContent = slides[slideIndex].name;
    $('#slideCaption').textContent = slides[slideIndex].description;
    clearInterval(slideTimer);
    if (!carouselPaused && slides.length > 1) slideTimer = setInterval(() => go(slideIndex + 1), 4000);
  }
  $('#prevSlide').onclick = () => go(slideIndex - 1);
  $('#nextSlide').onclick = () => go(slideIndex + 1);
  $$('.slide-dot').forEach(button => button.onclick = () => go(Number(button.dataset.dot)));
  $('#pauseSlide').onclick = () => {
    carouselPaused = !carouselPaused;
    $('#pauseSlide').textContent = carouselPaused ? '▶' : 'Ⅱ';
    $('#pauseSlide').setAttribute('aria-label', carouselPaused ? 'Reprendre le carrousel' : 'Mettre le carrousel en pause');
    go(slideIndex);
  };
  $('#heroCarousel').onmouseenter = () => clearInterval(slideTimer);
  $('#heroCarousel').onmouseleave = () => { if (!carouselPaused) go(slideIndex); };
  $('#heroCarousel').onfocusin = () => clearInterval(slideTimer);
  $('#heroCarousel').onfocusout = () => { if (!carouselPaused) go(slideIndex); };
  document.onvisibilitychange = () => { if (document.hidden) clearInterval(slideTimer); else if (!carouselPaused) go(slideIndex); };
  go(0);
}
function validateFileSelection(files) {
  const tooLarge = files.filter(file => file.size > 10 * 1024 * 1024);
  const total = files.reduce((sum,file) => sum + file.size, 0);
  if (tooLarge.length || total > 20 * 1024 * 1024) return 'Limite dépassée : 10 Mo par fichier et 20 Mo au total.';
  return '';
}
function formatBytes(bytes) { return bytes < 1024*1024 ? `${Math.round(bytes/1024)} Ko` : `${(bytes/1024/1024).toFixed(1)} Mo`; }

// Navigation, filtres et recherche
$('#search').addEventListener('input', event => { searchQuery = event.target.value.trim().toLowerCase(); renderCards(); });
$('#sort').addEventListener('change', renderCards);
$('#statusFilter').addEventListener('change', renderCards);
$('#filters').addEventListener('click', event => { const button = event.target.closest('[data-filter]'); if (!button) return; activeCategory = button.dataset.filter; render(); });
$('#cats').addEventListener('click', event => { const button = event.target.closest('[data-category]'); if (!button) return; activeCategory = activeCategory === button.dataset.category ? 'Tous' : button.dataset.category; render(); $('#projects').scrollIntoView({behavior:'smooth'}); });
$('#reset').addEventListener('click', () => { activeCategory='Tous'; searchQuery=''; favoritesOnly=false; $('#search').value=''; $('#statusFilter').value='Tous'; $('#sort').value='featured'; render(); });
$('#favoritesOnly').addEventListener('click', () => { favoritesOnly=!favoritesOnly; render(); });
$('#favoritesQuick').addEventListener('click', () => { favoritesOnly=true; activeCategory='Tous'; render(); $('#projects').scrollIntoView({behavior:'smooth'}); });
$('#cards').addEventListener('click', event => {
  const detailButton = event.target.closest('[data-detail]');
  const favoriteButton = event.target.closest('[data-favorite]');
  const compareButton = event.target.closest('[data-compare]');
  if (detailButton) openProject(detailButton.dataset.detail);
  else if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  else if (compareButton) toggleCompare(compareButton.dataset.compare);
});
$('#detail').addEventListener('click', event => {
  const favoriteButton = event.target.closest('[data-favorite]');
  const shareButton = event.target.closest('[data-share]');
  const galleryButton = event.target.closest('[data-gallery-image]');
  if (favoriteButton) toggleFavorite(favoriteButton.dataset.favorite);
  if (shareButton) shareProject(shareButton.dataset.share);
  if (galleryButton) { $('#detailMainImage').src = galleryButton.dataset.galleryImage; $$('.detail-gallery button').forEach(button => button.classList.toggle('active', button === galleryButton)); }
});
$('#compareNow').addEventListener('click', compareProjects);
$('#clearCompare').addEventListener('click', () => { compare=[]; renderCards(); updateCompareDock(); });
// Thème, menu mobile, navigation clavier et petits conforts.
const savedTheme = localStorage.getItem(STORAGE.theme);
if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) document.body.classList.add('dark');
$('#theme').textContent = document.body.classList.contains('dark') ? '☾' : '☼';
$('#theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const dark = document.body.classList.contains('dark');
  localStorage.setItem(STORAGE.theme, dark ? 'dark' : 'light');
  $('#theme').textContent = dark ? '☾' : '☼';
});
$('#menu').addEventListener('click', () => {
  const open = $('#nav').classList.toggle('open');
  $('#menu').setAttribute('aria-expanded', String(open));
  $('#menu').setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
});
$('#nav').addEventListener('click', event => { if (event.target.closest('a')) { $('#nav').classList.remove('open'); $('#menu').setAttribute('aria-expanded','false'); } });
$('#close').addEventListener('click', closeModal);
$('#modal').addEventListener('click', event => { if (event.target === $('#modal')) closeModal(); });
document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closeModal();
  if (event.key === '/' && !['INPUT','TEXTAREA','SELECT'].includes(document.activeElement.tagName)) { event.preventDefault(); $('#search').focus(); }
});
window.addEventListener('scroll', () => {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  $('#scrollProgress').style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
  $('#backTop').classList.toggle('visible', window.scrollY > 500);
}, {passive:true});
$('#backTop').addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
$$('.faq-list details').forEach(detail => detail.addEventListener('toggle', () => { const sign = detail.querySelector('summary span'); if (sign) sign.textContent = detail.open ? '−' : '＋'; }));
$('#year').textContent = new Date().getFullYear();

render();
initCarousel();
syncPublishedProjects();
