# CENTRAL-HEX HUB V6

Portail responsive en français, avec catalogue public, page de proposition dédiée et espace d'administration séparé.

## Arborescence
- `index.html`, `style.css`, `script.js` : site public.
- `assets/central-hex-icon.png` : icône et favicon.
- `assets/visuals/` : illustrations vectorielles dédiées aux domaines (bots, IA, outils, assistant, capture, musique, vidéo et communauté).
- `admin/` : connexion et tableau de bord privé (`/admin/`).
- `proposer/` : formulaire de proposition (`/proposer/`).
- `netlify/functions/admin.mjs` : API serveur (authentification, catalogue, propositions).
- `data/projects.json` : catalogue initial.
- `netlify.toml`, `package.json` : configuration Netlify et dépendance Netlify Blobs.

## Déploiement requis
Cette V5 comprend des Netlify Functions et Netlify Blobs. **Ne déploie pas seulement les fichiers statiques par glisser-déposer Netlify Drop** : connecte ce dossier à un dépôt GitHub ou déploie avec Netlify CLI afin que Netlify installe `@netlify/blobs` et publie la fonction.

Dans les paramètres du site Netlify, ajoute ces variables d'environnement pour le contexte de production :
- `ADMIN_PASSWORD` : mot de passe fort choisi par toi (jamais dans les fichiers).
- `ADMIN_SESSION_SECRET` : secret aléatoire long, différent du mot de passe (au moins 32 caractères).

Redéploie ensuite le site. L’administration n’est pas liée dans le menu public : ouvre directement `https://TON-SITE.netlify.app/admin/`. Le cookie de session est HttpOnly, Secure, SameSite=Strict, valable 8 heures. La fonction vérifie le mot de passe côté serveur ; aucun mot de passe par défaut n'est fourni.

## Propositions
Le formulaire `/proposer/` enregistre les propositions dans un espace Netlify Blobs privé. Elles sont visibles uniquement après connexion admin. Cette version ne déclenche pas encore d'e-mail automatique et n'accepte pas de pièces jointes.

## Catalogue et liens intégrés
- CENTRAL-HEX BOT : 4 liens d’accès + guide indicatif `.menu`, `.ping`, `.help`, prérequis et exemples. Les commandes restent à confirmer selon la version du bot.
- ITACHI-MD V2 : 2 liens d’accès dans une fiche Bots séparée.
- HEX TOOLS : 9 liens classés dans la fiche Tools.
- HEX-AI : 2 liens dans sa fiche Applications.
- JARVIS et HEX-REC : pages prêtes à recevoir les APK depuis l’administration quand les fichiers seront fournis.

## Fonctionnalités publiques
- Carrousel supérieur automatique avec les images configurées dans les projets.
- Cartes projets sans grandes photos, avec visuels graphiques compacts par catégorie.
- Recherche, catégories, filtres statut, tri, favoris, comparaison, fiches détaillées et partage.
- Préférences de thème et favoris enregistrés localement dans le navigateur.
- Navigation responsive et icône de l'application intégrée.

## Sécurité et limites
- Ne jamais mettre `ADMIN_PASSWORD` ou `ADMIN_SESSION_SECRET` dans `script.js`, dans un fichier HTML, ni dans Git.
- Les modifications de projets sont enregistrées côté serveur dans Netlify Blobs et deviennent visibles sur le site public.
- Les propositions sont privées côté serveur ; prévoir une politique de conservation et de suppression.
- Utilise HTTPS (Netlify le fournit sur le domaine du site).


## Générer ADMIN_SESSION_SECRET
Sur un terminal avec OpenSSL : `openssl rand -base64 48`. Copie le résultat dans Netlify > Site configuration > Environment variables, clé `ADMIN_SESSION_SECRET`. Sinon avec Node.js : `node -e "console.log(require('crypto').randomBytes(48).toString('base64'))"`. Ne partage jamais cette valeur et ne la mets pas dans Git. Ajoute aussi `ADMIN_PASSWORD` comme variable secrète séparée.

## Mise à jour V6
Les nouvelles fiches et liens sont présents dans `data/projects.json`, dans les données de démarrage du site et dans la fonction Netlify. Les liens externes s’ouvrent dans un nouvel onglet. Les APK JARVIS et HEX-REC ne sont pas inclus car ils n’ont pas encore été fournis.


## Import direct des APK (version 6.1)

Depuis `/admin/`, connecte-toi puis modifie l’un des projets `hexrec`, `jarvis`, `hexapp` ou `hexsonic`. Le champ **Fichier APK Android** permet de sélectionner le fichier `.apk` depuis le téléphone. L’envoi est découpé en blocs de 3 Mo pour limiter la taille des requêtes Netlify. Le fichier est stocké dans Netlify Blobs et le site affiche automatiquement un bouton de téléchargement public sur la fiche du projet.

- Taille maximale configurée : 120 Mo par APK.
- Le fichier doit avoir l’extension `.apk` et être une archive ZIP Android valide.
- L’import et l’enregistrement du catalogue nécessitent une session administrateur valide.
- Les APK sont stockés dans le store privé `central-hex-hub-private`; seul le point de téléchargement du projet expose le fichier correspondant.

Variables Netlify requises :
- `ADMIN_PASSWORD` : mot de passe de connexion à `/admin/`.
- `ADMIN_SESSION_SECRET` : secret long et aléatoire pour signer les sessions.

Après déploiement, configure ces deux variables dans **Netlify → Site configuration → Environment variables**, puis redéploie le site.
 
