import { getStore } from "@netlify/blobs";
import { createHmac, timingSafeEqual, randomUUID } from "node:crypto";
const store = getStore("central-hex-hub-private");
const COOKIE = "ch_admin_session";
const enc = (v) => Buffer.from(v).toString("base64url");
const secret = () => process.env.ADMIN_SESSION_SECRET || "";
function sign(value){return createHmac("sha256",secret()).update(value).digest("base64url");}
function cookieOptions(){return `${COOKIE}=; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=0`;}
function response(status,body,headers={}){return new Response(JSON.stringify(body),{status,headers:{"Content-Type":"application/json; charset=utf-8","Cache-Control":"no-store",...headers}});}
function sameOrigin(request){const origin=request.headers.get("origin");if(!origin)return true;return origin===new URL(request.url).origin;}
function tokenFrom(request){const raw=request.headers.get("cookie")||"";const part=raw.split(";").map(x=>x.trim()).find(x=>x.startsWith(COOKIE+"="));return part?decodeURIComponent(part.slice(COOKIE.length+1)):"";}
function validSession(request){if(!secret())return false;const token=tokenFrom(request);const [payload,sig]=token.split(".");if(!payload||!sig)return false;const expected=sign(payload);const a=Buffer.from(sig),b=Buffer.from(expected);if(a.length!==b.length||!timingSafeEqual(a,b))return false;try{return JSON.parse(Buffer.from(payload,"base64url").toString()).exp>Date.now();}catch{return false;}}
const DEFAULT_PROJECTS = [{"id":"hexai","name":"HEX-AI","category":"Applications","icon":"🧠","description":"Assistant IA CENTRAL-HEX pour discuter, apprendre, coder, traduire et développer ses idées.","status":"En développement","image":"assets/visuals/hex-ai.svg","gallery":["assets/visuals/hex-ai.svg"],"link":"","download":"","featured":true,"details":"HEX-AI regroupe les expériences d’assistance par intelligence artificielle associées à CENTRAL-HEX. Les deux accès ci-dessous correspondent aux versions actuellement communiquées.","features":["Chat IA","Aide au développement","Traduction et rédaction","Assistant de projets"],"commands":[],"links":[{"label":"HEX-AI — Version Lovable","url":"https://hex-ai-cem.lovable.app"},{"label":"CENTRAL-HEX IA — Version Base44","url":"https://central-hex-ia-copy-cff1d280.base44.app/?is_new_user=true"}]},{"id":"hexrec","name":"HEX-REC","category":"Applications","icon":"🎥","description":"Projet d’enregistreur d’écran Android pour capturer des vidéos, du son et du gameplay.","status":"En développement","image":"assets/apps/hex-rec.jpg","gallery":["assets/apps/hex-rec.jpg"],"link":"","download":"","featured":true,"details":"HEX-REC est le projet d’application de capture d’écran et d’enregistrement vidéo. Cette fiche accueillera les fonctions réellement présentes dans l’APK, les informations de compatibilité et le téléchargement dès que le fichier sera fourni.","features":["Capture d’écran","Enregistrement vidéo","Détails audio et options à confirmer avec l’APK"],"commands":[]},{"id":"centralbot","name":"CENTRAL-HEX BOT","category":"Bots","icon":"🤖","description":"Bot WhatsApp communautaire : commandes, outils et automatisations.","status":"En développement","image":"assets/visuals/central-hex-bot.svg","gallery":["assets/visuals/central-hex-bot.svg"],"link":"","download":"","featured":true,"details":"CENTRAL-HEX BOT est le bot WhatsApp de la communauté. Cette fiche rassemble ses points d’accès actuellement fournis par l’équipe. Choisis un serveur pour ouvrir son panneau ou son interface de connexion. La disponibilité de chaque hébergement peut varier.","features":["Commandes WhatsApp","Outils communautaires","Automatisations","Réponses utiles"],"commands":[{"name":".menu","description":"Afficher le menu des commandes, si cette commande est activée sur la version choisie."},{"name":".ping","description":"Tester la réponse du bot, si cette commande est activée."},{"name":".help","description":"Demander de l’aide ou la liste des commandes, si disponible."}],"prerequisites":["Un compte WhatsApp actif sur ton téléphone.","Une connexion Internet stable.","Ouvrir un seul serveur à la fois et suivre les instructions affichées.","Ne jamais partager un code de vérification WhatsApp avec quelqu’un."],"examples":["Exemple indicatif : envoyer .menu dans la conversation avec le bot.","Exemple indicatif : envoyer .ping pour tester sa réponse.","Les commandes exactes peuvent varier selon la version et le serveur. Vérifie le menu renvoyé par le bot."],"links":[{"label":"CENTRAL-HEX BOT — Serveur 1 (Railway)","url":"https://central-hex-production-ib.up.railway.app/"},{"label":"CENTRAL-HEX BOT — Serveur 2 (Render)","url":"https://central-hex-2cxh.onrender.com/"},{"label":"CENTRAL-HEX BOT — Serveur 3 (Render)","url":"https://central-hex-1-17ji.onrender.com/"},{"label":"CENTRAL-HEX BOT — Serveur 4 (SkyHost)","url":"https://central-hex-bot.skyhost.tech/"}]},{"id":"jarvis","name":"JARVIS","category":"Applications","icon":"🦾","description":"Assistant personnel expérimental pour l’écosystème HEX.","status":"Bientôt","image":"assets/apps/jarvis.jpg","gallery":["assets/apps/jarvis.jpg"],"link":"","download":"","featured":true,"details":"JARVIS est présenté comme un assistant personnel de l’écosystème CENTRAL-HEX. Cette fiche accueillera sa présentation, ses fonctions confirmées, les captures et le fichier APK. Le téléchargement sera ajouté depuis l’administration lorsque l’APK sera fourni.","features":["Présentation de l’assistant","Fonctions et cas d’usage à documenter à partir de l’APK","Téléchargement Android à ajouter après réception"],"commands":[]},{"id":"hextools","name":"HEX TOOLS","category":"Tools","icon":"🧰","description":"Collection d’utilitaires et d’outils web réunis au même endroit.","status":"En développement","image":"assets/visuals/hex-tools.svg","gallery":["assets/visuals/hex-tools.svg"],"link":"","download":"","featured":true,"details":"HEX TOOLS est le regroupement des utilitaires et mini-applications de l’écosystème CENTRAL-HEX. Ouvre un outil depuis la liste ci-dessous. Les services restent hébergés sur leurs plateformes respectives.","features":["Outils web","Utilitaires","Accès centralisé"],"commands":[],"links":[{"label":"HEX TOOLS — Portail principal","url":"https://central-hex-tools.netlify.app/"},{"label":"HEX PROMP","url":"https://hex-promp.netlify.app/"},{"label":"HEX RADAR","url":"https://hex-radar.netlify.app/"},{"label":"HEX PROMP TEXTE","url":"https://hex-promp-texte.netlify.app/"},{"label":"HEX IDEA CREATOR","url":"https://hex-idea-creator.netlify.app/"},{"label":"CENTRAL-HEX SIGNAL","url":"https://central-hex-signal.netlify.app/"},{"label":"HEX TOOLS LAB","url":"https://hex-tools-lab.netlify.app/"},{"label":"HEX AI STUDIOS","url":"https://hex-ai-studios.lovable.app/"},{"label":"CENTRAL-HEX RÉSEAUX","url":"https://central-hex-reseau-s.netlify.app/"}]},{"id":"hexsonic","name":"HEXSONIC","category":"Applications","icon":"🎵","description":"Projet mobile expérimental autour de la reconnaissance musicale.","status":"En développement","image":"assets/apps/hexsonic.jpg","gallery":["assets/apps/hexsonic.jpg"],"link":"","download":"","featured":false,"details":"HEXSONIC est un concept d’application de reconnaissance musicale. La fiche sera mise à jour avec les avancées et le téléchargement lorsqu’ils seront prêts.","features":["Reconnaissance musicale — objectif","Historique","Projet mobile"],"commands":[]},{"id":"telechex","name":"TELECHEX","category":"Applications","icon":"📥","description":"Projet de gestion de liens vidéo issus de plateformes sociales.","status":"En développement","image":"assets/visuals/telechex.svg","gallery":["assets/visuals/telechex.svg"],"link":"","download":"","featured":false,"details":"TELECHEX explorera les liens vidéo des plateformes prises en charge, avec une interface simple et mobile. Les possibilités dépendront des règles et capacités de chaque plateforme.","features":["Interface mobile","Gestion de liens","Plateformes prises en charge à préciser"],"commands":[]},{"id":"hexapp","name":"HEX-APP","category":"Applications","icon":"✨","description":"Application communautaire pour suivre l’univers et les annonces CENTRAL-HEX.","status":"En développement","image":"assets/apps/hex-app.jpg","gallery":["assets/apps/hex-app.jpg"],"link":"","download":"","featured":false,"details":"HEX-APP sera un espace de rassemblement pour les annonces, contenus et projets de la communauté CENTRAL-HEX.","features":["Actualités","Communauté","Projets et annonces"],"commands":[]},{"id":"itachi-md-v2","name":"ITACHI-MD V2","category":"Bots","icon":"🥷","description":"Bot WhatsApp ITACHI-MD V2 — deux points d’accès communiqués.","status":"Disponible","image":"assets/visuals/central-hex-bot.svg","gallery":["assets/visuals/central-hex-bot.svg"],"link":"","download":"","featured":false,"details":"ITACHI-MD V2 est présenté ici dans la catégorie Bots. Les deux accès ci-dessous sont ceux fournis par CENTRAL-HEX. La liste de commandes et les prérequis spécifiques seront ajoutés après vérification de cette version.","features":["Deux points d’accès fournis","Ouverture des interfaces d’hébergement","Commandes spécifiques à documenter"],"prerequisites":["Compte WhatsApp actif.","Connexion Internet.","Suivre les instructions affichées par le service."],"commands":[],"examples":[],"links":[{"label":"ITACHI-MD V2 — Serveur 1 (Railway)","url":"https://itachi-md-v2-production.up.railway.app/"},{"label":"ITACHI-MD V2 — Serveur 2 (Render)","url":"https://itachi-md-v2.onrender.com/"}]}];
async function getProjects(){return await store.get("projects.json",{type:"json"}) || DEFAULT_PROJECTS;}
export default async (request) => {
 if(!sameOrigin(request))return response(403,{error:"Origine refusée"});
 const url=new URL(request.url); const method=request.method;
 if(method==="GET" && url.searchParams.has("apk")){
  const projectId=url.searchParams.get("apk");
  const project=(await getProjects()).find(p=>p.id===projectId);
  if(!project?.apk?.key)return response(404,{error:"APK non disponible."});
  const bytes=await store.get(project.apk.key,{type:"arrayBuffer"});
  if(!bytes)return response(404,{error:"Fichier APK introuvable."});
  const filename=String(project.apk.name||`${projectId}.apk`).replace(/[^a-zA-Z0-9._-]/g,"_");
  return new Response(bytes,{status:200,headers:{
   "Content-Type":"application/vnd.android.package-archive",
   "Content-Disposition":`attachment; filename="${filename}"`,
   "Content-Length":String(bytes.byteLength),
   "Cache-Control":"public, max-age=300"
  }});
 }
 if(method==="GET" && url.searchParams.get("admin")!=="1"){return response(200,{projects:await getProjects()});}
 if(method==="POST"){
  let body;try{body=await request.json();}catch{return response(400,{error:"JSON invalide"});}
  if(body.action==="login"){
   const password=process.env.ADMIN_PASSWORD||"";if(!password||!secret())return response(503,{error:"Backend non configuré : ajoute ADMIN_PASSWORD et ADMIN_SESSION_SECRET dans Netlify."});
   const provided=Buffer.from(String(body.password||""));const expected=Buffer.from(password);if(provided.length!==expected.length||!timingSafeEqual(provided,expected))return response(401,{error:"Mot de passe incorrect."});
   const payload=enc(JSON.stringify({exp:Date.now()+8*60*60*1000,nonce:randomUUID()}));const token=payload+"."+sign(payload);
   return response(200,{ok:true},{"Set-Cookie":`${COOKIE}=${encodeURIComponent(token)}; Path=/; HttpOnly; Secure; SameSite=Strict; Max-Age=28800`});
  }
  if(body.action==="logout")return response(200,{ok:true},{"Set-Cookie":cookieOptions()});
  if(body.action==="apk-start"){
   if(!validSession(request))return response(401,{error:"Connexion administrateur requise."});
   const allowed=["hexrec","jarvis","hexapp","hexsonic"];
   if(!allowed.includes(body.projectId))return response(400,{error:"Import APK autorisé uniquement pour HEX-REC, JARVIS, HEX-APP et HEXSONIC."});
   if(!String(body.name||"").toLowerCase().endsWith(".apk")||!Number.isFinite(body.size)||body.size<1||body.size>120*1024*1024)return response(400,{error:"Fichier APK invalide ou supérieur à 120 Mo."});
   const uploadId=randomUUID();
   await store.setJSON(`apk-temp/${uploadId}/meta.json`,{projectId:body.projectId,name:String(body.name).slice(0,120),size:body.size,createdAt:Date.now()});
   return response(200,{uploadId,chunkSize:3*1024*1024});
  }
  if(body.action==="apk-chunk"){
   if(!validSession(request))return response(401,{error:"Connexion administrateur requise."});
   if(!/^[0-9a-f-]{36}$/i.test(String(body.uploadId||""))||!Number.isInteger(body.index)||body.index<0||body.index>50||typeof body.data!=="string"||body.data.length>4*1024*1024)return response(400,{error:"Bloc de fichier invalide."});
   const meta=await store.get(`apk-temp/${body.uploadId}/meta.json`,{type:"json"});
   if(!meta)return response(404,{error:"Session d’import introuvable."});
   const bytes=Buffer.from(body.data,"base64");
   if(bytes.length>3*1024*1024)return response(400,{error:"Bloc trop volumineux."});
   await store.set(`apk-temp/${body.uploadId}/${body.index}.bin`,new Uint8Array(bytes));
   return response(200,{ok:true,index:body.index});
  }
  if(body.action==="apk-finish"){
   if(!validSession(request))return response(401,{error:"Connexion administrateur requise."});
   const meta=await store.get(`apk-temp/${body.uploadId}/meta.json`,{type:"json"});
   if(!meta)return response(404,{error:"Session d’import introuvable."});
   const count=Math.ceil(meta.size/(3*1024*1024)),parts=[];
   let total=0;
   for(let index=0;index<count;index++){
    const part=await store.get(`apk-temp/${body.uploadId}/${index}.bin`,{type:"arrayBuffer"});
    if(!part)return response(400,{error:`Bloc ${index+1}/${count} manquant. Recommence l’import.`});
    parts.push(new Uint8Array(part));total+=part.byteLength;
   }
   if(total!==meta.size)return response(400,{error:"La taille du fichier reçu ne correspond pas au fichier envoyé."});
   const merged=new Uint8Array(total);let offset=0;for(const part of parts){merged.set(part,offset);offset+=part.byteLength;}
   if(merged[0]!==0x50||merged[1]!==0x4b)return response(400,{error:"Le fichier sélectionné ne semble pas être un APK valide."});
   const key=`apks/${meta.projectId}/${randomUUID()}.apk`;
   await store.set(key,merged,{metadata:{name:meta.name,size:String(meta.size),projectId:meta.projectId}});
   const projects=await getProjects();const project=projects.find(p=>p.id===meta.projectId);
   if(!project)return response(404,{error:"Projet introuvable dans le catalogue."});
   const apk={key,name:meta.name,size:meta.size,uploadedAt:new Date().toISOString()};
   project.apk=apk;project.status="Disponible";await store.setJSON("projects.json",projects);
   for(let index=0;index<count;index++)await store.delete(`apk-temp/${body.uploadId}/${index}.bin`);
   await store.delete(`apk-temp/${body.uploadId}/meta.json`);
   return response(200,{ok:true,apk});
  }
  if(body.action==="proposal"){
   const p=body.proposal||{};for(const key of ["nom","prenom","pays","whatsapp","titre","description"]){if(typeof p[key]!=="string"||!p[key].trim())return response(400,{error:"Tous les champs obligatoires doivent être remplis."});}
   if(p.description.length<20||p.description.length>5000)return response(400,{error:"La description doit contenir entre 20 et 5000 caractères."});
   const record={...p,id:randomUUID(),createdAt:new Date().toISOString()};await store.setJSON(`proposals/${record.id}.json`,record);return response(201,{ok:true});
  }
  return response(400,{error:"Action inconnue"});
 }
 if(url.searchParams.get("admin")==="1"&&!validSession(request))return response(401,{error:"Connexion requise"});
 if(method==="GET"){
  const listing=await store.list({prefix:"proposals/"});const proposals=[];for(const item of listing.blobs||[]){const value=await store.get(item.key,{type:"json"});if(value)proposals.push(value);}proposals.sort((a,b)=>b.createdAt.localeCompare(a.createdAt));return response(200,{projects:await getProjects(),proposals});
 }
 if(method==="PUT"){
  if(!validSession(request))return response(401,{error:"Connexion requise"});let body;try{body=await request.json();}catch{return response(400,{error:"JSON invalide"});}
  if(!Array.isArray(body.projects)||body.projects.length>200)return response(400,{error:"Catalogue invalide"});
  const ids=new Set();for(const p of body.projects){if(!p||typeof p.id!=="string"||!p.id||ids.has(p.id)||typeof p.name!=="string"||!p.name.trim())return response(400,{error:"Chaque projet doit avoir un identifiant unique et un nom."});ids.add(p.id);}
  await store.setJSON("projects.json",body.projects);return response(200,{ok:true,updated:body.projects.length});
 }
 return response(405,{error:"Méthode non autorisée"},{Allow:"GET, POST, PUT"});
};
