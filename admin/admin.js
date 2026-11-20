'use strict';
const API='/.netlify/functions/admin';const $=s=>document.querySelector(s);let projects=[],proposals=[];
async function call(method,body,query=''){const r=await fetch(API+query,{method,credentials:'same-origin',headers:{'Content-Type':'application/json','Accept':'application/json'},...(body?{body:JSON.stringify(body)}:{})});const j=await r.json().catch(()=>({}));if(!r.ok)throw new Error(j.error||`Erreur ${r.status}`);return j;}
function esc(v=''){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));}
function showDashboard(data){projects=data.projects||[];proposals=data.proposals||[];$('#loginPanel').classList.add('hidden');$('#dashboard').classList.remove('hidden');renderProjects();renderProposals();}
function renderProjects(){$('#projectCount').textContent=`${projects.length} projet(s) dans le catalogue`;$('#adminProjects').innerHTML=projects.map(p=>`<article class="admin-project"><div><b>${esc(p.icon||'🚀')} ${esc(p.name)}</b><small>${esc(p.category)} · ${esc(p.status)}</small></div><div><button data-edit="${esc(p.id)}">Modifier</button><button data-delete="${esc(p.id)}">Supprimer</button></div></article>`).join('')||'<p>Aucun projet enregistré.</p>';}
function renderProposals(){$('#proposalCount').textContent=proposals.length;$('#proposalList').innerHTML=proposals.map(p=>`<article class="proposal-item"><small>${esc(new Date(p.createdAt).toLocaleString('fr-FR'))} · ${esc(p.pays||'')}</small><h3>${esc(p.titre||'Projet sans titre')}</h3><p><b>${esc(p.prenom||'')} ${esc(p.nom||'')}</b> · ${esc(p.whatsapp||'')}</p><p>${esc(p.description||'')}</p></article>`).join('')||'<p>Aucune proposition reçue pour le moment.</p>';}
async function refresh(){const d=await call('GET',null,'?admin=1');showDashboard(d);}
$('#loginForm').addEventListener('submit',async e=>{e.preventDefault();const b=e.currentTarget.querySelector('button');b.disabled=true;$('#loginStatus').textContent='Vérification…';try{await call('POST',{action:'login',password:new FormData(e.currentTarget).get('password')});await refresh();}catch(err){$('#loginStatus').textContent=err.message;}finally{b.disabled=false;}});
$('#logout').addEventListener('click',async()=>{try{await call('POST',{action:'logout'});}catch{}location.reload();});
function openEditor(p){const f=$('#projectEditor');f.reset();f.classList.remove('hidden');$('#editorTitle').textContent=p?'Modifier le projet':'Nouveau projet';if(p){for(const [k,v] of Object.entries({...p,features:(p.features||[]).join('\n'),commands:(p.commands||[]).map(x=>typeof x==='string'?x:`${x.name} — ${x.description}`).join('\n'),links:(p.links||[]).map(x=>`${x.label} | ${x.url}`).join('\n'),prerequisites:(p.prerequisites||[]).join('\n'),examples:(p.examples||[]).join('\n')})){if(f.elements[k]){if(f.elements[k].type==='checkbox')f.elements[k].checked=!!v;else f.elements[k].value=v??'';}}f.dataset.originalId=p.id;}else{delete f.dataset.originalId;}f.scrollIntoView({behavior:'smooth',block:'start'});}
$('#addProject').addEventListener('click',()=>openEditor(null));$('#cancelEditor').addEventListener('click',()=>$('#projectEditor').classList.add('hidden'));
$('#adminProjects').addEventListener('click',async e=>{const edit=e.target.closest('[data-edit]'),del=e.target.closest('[data-delete]');if(edit)openEditor(projects.find(p=>p.id===edit.dataset.edit));if(del&&confirm('Supprimer définitivement ce projet du catalogue public ?')){projects=projects.filter(p=>p.id!==del.dataset.delete);try{await call('PUT',{projects});await refresh();}catch(err){alert(err.message);}}});
async function uploadApk(file, projectId){
 if(!file)return null;
 if(!file.name.toLowerCase().endsWith('.apk'))throw new Error('Sélectionne un fichier .apk.');
 if(file.size>120*1024*1024)throw new Error('APK trop volumineux (maximum 120 Mo).');
 const start=await call('POST',{action:'apk-start',projectId,name:file.name,size:file.size});
 const chunkSize=3*1024*1024,total=Math.ceil(file.size/chunkSize);
 for(let index=0;index<total;index++){
  const bytes=new Uint8Array(await file.slice(index*chunkSize,Math.min(file.size,(index+1)*chunkSize)).arrayBuffer());
  let binary='';for(let k=0;k<bytes.length;k+=0x8000)binary+=String.fromCharCode(...bytes.subarray(k,k+0x8000));
  await call('POST',{action:'apk-chunk',uploadId:start.uploadId,index,data:btoa(binary)});
  $('#saveStatus').textContent=`Envoi de l’APK : ${Math.round((index+1)/total*100)} %`;
 }
 return await call('POST',{action:'apk-finish',uploadId:start.uploadId});
}
$('#projectEditor').addEventListener('submit',async e=>{
 e.preventDefault();
 const f=e.currentTarget,d=Object.fromEntries(new FormData(f).entries()),old=f.dataset.originalId;delete d.apkFile;
 const p={...d,id:d.id.trim(),featured:f.elements.featured.checked,image:d.image||'',gallery:d.image?[d.image]:[],features:d.features.split('\n').map(x=>x.trim()).filter(Boolean),commands:d.commands.split('\n').map(x=>x.trim()).filter(Boolean),links:d.links.split('\n').map(x=>x.split('|')).filter(x=>x.length>=2).map(x=>({label:x[0].trim(),url:x.slice(1).join('|').trim()})).filter(x=>x.label&&x.url),prerequisites:d.prerequisites.split('\n').map(x=>x.trim()).filter(Boolean),examples:d.examples.split('\n').map(x=>x.trim()).filter(Boolean)};
 const existing=projects.find(x=>x.id===(old||p.id));if(existing?.apk)p.apk=existing.apk;
 const file=f.elements.apkFile.files[0];
 $('#saveStatus').textContent='Préparation de l’enregistrement…';
 try{
  if(file){const result=await uploadApk(file,p.id);p.apk=result.apk;p.status='Disponible';}
  projects=old?projects.map(x=>x.id===old?p:x):[p,...projects];
  $('#saveStatus').textContent='Enregistrement du catalogue…';
  await call('PUT',{projects});await refresh();f.classList.add('hidden');$('#saveStatus').textContent='Projet et APK enregistrés.';
 }catch(err){$('#saveStatus').textContent=err.message;}
});
$('#exportProjects').addEventListener('click',()=>{const a=document.createElement('a'),u=URL.createObjectURL(new Blob([JSON.stringify(projects,null,2)],{type:'application/json'}));a.href=u;a.download='central-hex-hub-projets.json';a.click();URL.revokeObjectURL(u);});
document.querySelectorAll('[data-tab]').forEach(b=>b.addEventListener('click',()=>{document.querySelectorAll('[data-tab]').forEach(x=>x.classList.toggle('active',x===b));$('#projectsTab').classList.toggle('hidden',b.dataset.tab!=='projects');$('#proposalsTab').classList.toggle('hidden',b.dataset.tab!=='proposals');}));
call('GET',null,'?admin=1').then(showDashboard).catch(()=>{});
