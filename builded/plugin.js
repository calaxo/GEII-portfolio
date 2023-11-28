import{r as v,a as b,N as r,H as g,R as f,b as t,c as N}from"./chunk.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))a(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&a(o)}).observe(document,{childList:!0,subtree:!0});function c(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(i){if(i.ep)return;i.ep=!0;const s=c(i);fetch(i.href,s)}})();var j={exports:{}},d={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var y=v,B=Symbol.for("react.element"),S=Symbol.for("react.fragment"),_=Object.prototype.hasOwnProperty,w=y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};function m(l,n,c){var a,i={},s=null,o=null;c!==void 0&&(s=""+c),n.key!==void 0&&(s=""+n.key),n.ref!==void 0&&(o=n.ref);for(a in n)_.call(n,a)&&!C.hasOwnProperty(a)&&(i[a]=n[a]);if(l&&l.defaultProps)for(a in n=l.defaultProps,n)i[a]===void 0&&(i[a]=n[a]);return{$$typeof:B,type:l,key:s,ref:o,props:i,_owner:w.current}}d.Fragment=S;d.jsx=m;d.jsxs=m;j.exports=d;var e=j.exports,p,x=b;p=x.createRoot,x.hydrateRoot;const k="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/perdu.jpg",E=()=>e.jsxs("div",{className:"container",children:[e.jsx("h1",{className:"error-code",children:"404"}),e.jsx("p",{className:"error-message",children:"Page introuvable"}),e.jsx("p",{className:"error-message",children:"Désolé, la page que vous recherchez n'existe pas."}),e.jsx("img",{className:"error-img",src:k,alt:"Page introuvable",width:"300"}),e.jsxs("p",{className:"error-message",children:["Retournez à ",e.jsx("a",{href:"/",children:"l'accueil"}),"."]})]}),R=()=>e.jsxs("div",{children:[e.jsx("h1",{children:"Mon Portfolio"}),e.jsx("p",{children:"Bienvenue sur mon portfolio !"}),e.jsx("p",{children:"Je suis actuellement en Bachelor Génie Électrique et Informatique Industrielle."}),e.jsx("p",{children:"En tant qu'alternant, je travaille en tant que technicien simulateur d'hélicoptère et administrateur informatique dans une entreprise école de pilotage d'hélicoptère depuis 1 an et demi."}),e.jsx("p",{children:"En dehors de mon parcours académique, je suis également un bricoleur passionné et un développeur web."})]}),A=()=>e.jsxs("div",{className:"choix",children:[e.jsx(r,{to:"/But1_sae1",className:"moitiegauche3",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page btn1",children:e.jsx("span",{children:"vers la premiere sae"})})})},"But1_sae1"),e.jsx(r,{to:"/But1_sae2",className:"moitiemilieu3",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page btn2",children:e.jsx("span",{children:"vers la deuxieme sae"})})})},"But1_sae2"),e.jsx(r,{to:"/But1_sae3",className:"moitiedroite3",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page btn3",children:e.jsx("span",{children:"vers la troisième sae"})})})},"But1_sae3")]}),u=()=>e.jsx("div",{children:"verifier moteur"}),h=()=>e.jsx("div",{children:"Sonometre"}),L=()=>e.jsx("div",{children:"trieur de dechet"}),F=()=>e.jsxs("div",{className:"choix",children:[e.jsx(r,{to:"/But2_sae1",className:"moitiegauche2",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page btn1",children:e.jsx("span",{children:"vers la premiere sae"})})})},"But2_sae1"),e.jsx(r,{to:"/But2_sae2",className:"moitiedroite2",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page btn2",children:e.jsx("span",{children:"vers la deuxieme sae"})})})},"But2_sae2")]}),P=()=>e.jsx("div",{children:"stylo voltmetre avec fils"}),D=()=>e.jsx("div",{children:"stylo voltmetre sans fils"}),q="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/geii.gif",O="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/iut.png",H=()=>{const l={border:"solid",width:"100%"},n={backgroundColor:"#FFCC33",fontSize:"28px",color:"darkred",textAlign:"center"};return e.jsxs("div",{children:[e.jsxs("table",{style:l,children:[e.jsx("thead",{children:e.jsx("tr",{children:e.jsx("td",{colSpan:"5",style:n,children:"SAE Badgeuse RFID"})})}),e.jsxs("tbody",{children:[e.jsx("tr",{children:e.jsxs("td",{colSpan:"5",children:[e.jsx("p",{style:{color:"darkred"},children:e.jsx("b",{children:e.jsx("u",{children:"Objectifs:"})})}),e.jsx("p",{children:e.jsx("a",{href:"https://bv.univ-poitiers.fr/access/content/group/7d0bd2dd-1dd5-42d4-b5b7-501daecddf3f/Enseignants/Michel%20Garcier/SAE2/Sonometre/SAE1_S1_C1_presentation.pdf",children:"MGA Sujet 2021/2022"})})]})}),e.jsxs("tr",{style:{backgroundColor:"yellow"},align:"center",children:[e.jsx("td",{width:"25%",children:"Activités réalisées"}),e.jsx("td",{width:"25%",children:"Ressources utilisées"}),e.jsx("td",{width:"25%",children:"Traces"}),e.jsx("td",{width:"25%",children:"Autoévaluation"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"case1"}),e.jsx("td",{children:"case2"}),e.jsx("td",{children:"case3"}),e.jsx("td",{children:"case5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"case1"}),e.jsx("td",{children:"case2"}),e.jsx("td",{children:"case3"}),e.jsx("td",{children:"case5"})]}),e.jsxs("tr",{children:[e.jsx("td",{children:"case1"}),e.jsx("td",{children:"case2"}),e.jsx("td",{children:"case3"}),e.jsx("td",{children:"case5"})]}),e.jsx("tr",{children:e.jsx("td",{colSpan:"5",style:n,children:"ANALYSE REFLEXIVE"})}),e.jsx("tr",{children:e.jsx("td",{colSpan:"5",children:e.jsxs("p",{children:["Réflexions sur les traces conservées, sur les raisons qui justifient leur choix, sur les apprentissages qu’elles démontrent, sur la construction de connaissances qu’elles révèlent, sur les liens entre théorie et pratique, sur les apprentissages à réaliser… Vous décrivez ce que vous avez appris depuis le début de la SAE et ce qu’il vous reste à apprendre. Vous portez un jugement global sur votre progression (degré de satisfaction, perception).",e.jsx("br",{}),"Comment ai-je appris ?",e.jsx("br",{}),"Qu’ai-je réussi à accomplir ? Ai-je rencontré des difficultés ?",e.jsx("br",{}),"Quels savoirs ai-je acquis ? Quels savoirs ai-je démontrés ?",e.jsx("br",{}),"À quelles compétences visées par le programme du BUT ces savoirs se rattachent-ils ?",e.jsx("br",{}),"Quelles connaissances, habiletés, attitudes … aurais-je dû mobiliser pour mieux faire face aux situations rencontrées ?",e.jsx("br",{}),"Que dois-je apprendre pour continuer à développer mes compétences ??",e.jsx("br",{}),"Comment vais-je m’y prendre pour accomplir ces apprentissages ?"]})})})]})]}),e.jsx("img",{className:"imggeii",src:q,alt:"geii"}),e.jsx("img",{className:"imgiut",src:O,alt:"iut"})]})},G=()=>e.jsx("div",{children:"Montage de PC"}),I=()=>e.jsxs("div",{className:"choix4",children:[e.jsx(r,{to:"/Back",className:"moitiegauchehaut4",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"vers le back"})})})},"Back"),e.jsx(r,{to:"/Front",className:"moitiedroitehaut4",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"vers le front"})})})},"Front"),e.jsx(r,{to:"/Git",className:"moitiegauchebas4",children:e.jsx("div",{className:"moitiemilieu24",children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"vers git"})})})},"Git"),e.jsx(r,{to:"/Hebergement",className:"moitiedroitebas4",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"vers l'Hebergement"})})})},"Hebergement")]}),T=()=>e.jsx("div",{children:"develeopment web back"}),z=()=>e.jsx("div",{children:"develeopment web Front"}),V=()=>e.jsx("div",{children:"develeopment avec git"}),U=()=>e.jsx("div",{children:"Hebergement o2switch"}),M=()=>e.jsxs("div",{className:"choix",children:[e.jsx("div",{className:"moitiegauche3",children:e.jsx(r,{to:"/DGAC",className:"boutondepagegeii",children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"cybersecurite"})})},"DGAC")}),e.jsx("div",{className:"moitiemilieu3",children:e.jsx(r,{to:"/Formation",className:"boutondepagegeii",children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"formation"})})},"Formation")}),e.jsx(r,{to:"/Veille",className:"moitiedroite3",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"veille"})})})},"Veille")]}),W=()=>e.jsx("div",{children:"develeopment web back"}),Q=()=>e.jsx("div",{children:"Formation des employés"}),$=()=>e.jsx("div",{children:"Veille info"}),Y=()=>e.jsxs("div",{className:"choix",children:[e.jsx(r,{to:"/Simu",className:"moitiegauche2",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page btn1",children:e.jsx("span",{children:"simulateur"})})})},"Simu"),e.jsx(r,{to:"/Aero",className:"moitiedroite2",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page btn2",children:e.jsx("span",{children:"aeronautique"})})})},"Aero")]}),J=()=>e.jsx("div",{children:"aeronautique"}),K=()=>e.jsx("div",{children:"les simulateur"}),X=()=>e.jsxs("div",{className:"choix",children:[e.jsx(r,{to:"/Cable",className:"moitiegauche3",children:e.jsx("div",{className:"moitiegauche3",children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"cable"})})})},"Cable"),e.jsx(r,{to:"/Firewall",className:"moitiemilieu3",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"firewall"})})})},"Firewall"),e.jsx(r,{to:"/Switch",className:"moitiedroite3",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"switch reseaux"})})})},"Switch")]}),Z=()=>e.jsx("div",{children:"Cable management"}),ee=()=>e.jsx("div",{children:"Firewall regle et tout"}),se=()=>e.jsx("div",{children:"Switch reseaux"}),te=()=>e.jsxs("div",{className:"choix4",children:[e.jsx(r,{to:"/AD",className:"moitiegauchehaut4",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"active directory"})})})},"AD"),e.jsx(r,{to:"/Docker",className:"moitiedroitehaut4",children:e.jsx("div",{className:"moitie droite",children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"docker"})})})},"Docker"),e.jsx(r,{to:"/Learning",className:"moitiegauchebas4",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"learning"})})})},"Learning"),e.jsx(r,{to:"/Linux",className:"moitiedroitebas4",children:e.jsx("div",{children:e.jsx("div",{className:"bouton-page",children:e.jsx("span",{children:"linux"})})})},"Linux")]}),re=()=>e.jsx("div",{children:"AD droit admin etc"}),ie=()=>e.jsx("div",{children:"Docker"}),ne=()=>e.jsx("div",{children:"Learning moodle"}),ae=()=>e.jsx("div",{children:"linux"}),le=()=>e.jsx("div",{children:e.jsxs("div",{className:"textecontact",children:[e.jsx("h1",{children:"Condition légales"}),e.jsx("h2",{children:"Webmaster"}),e.jsx("p",{children:"Coordonnées du webmaster:"}),"Axel Calendreau",e.jsx("br",{}),"mail : contact@faury-lionel.fr",e.jsx("p",{children:"entreprise FY"}),e.jsx("p",{children:"Numéro de SIREN: 530.283.639"}),"eurl ou entreprise individuelle representée par Lionel Faury code APE 43.91B (Travaux de couverture par éléments)",e.jsx("br",{}),"RESPONSABLE DU SITE : société FY société de travaux de couverture et d'étanchéité",e.jsx("br",{}),e.jsx("br",{}),"Les images présentes sur le site sont notre propriété et ne peuvent être utilisé sans notre accord.",e.jsx("br",{}),e.jsx("br",{}),"SITE HÉBERGÉ PAR",e.jsx("br",{}),"o2switch",e.jsx("br",{}),"Chemin des Pardiaux",e.jsx("br",{}),"63000 Clermont-Ferrand",e.jsx("br",{}),"Capital de 100000€",e.jsx("br",{}),"Siret 510 909 80700024",e.jsx("br",{})]})}),ce="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/github.png",oe="https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/linkedin.png";function de(){const l=({isActive:s})=>({color:s?"#black":"#2f343d",fontSize:"1.2em",background:s?"white":"#05f140",borderRadius:"10px",border:"3px solid #2cda9d"}),n=({isActive:s})=>({color:s?"#black":"#2f343d",fontSize:"1.2em",background:s?"white":"brown",borderRadius:"10px",border:"3px solid #2cda9d"}),c=({isActive:s})=>({color:s?"#black":"#2f343d",fontSize:"1.2em",background:s?"white":"#006EB3",borderRadius:"10px",border:"3px solid #2cda9d"}),i=[{to:"/Accueil",text:"Accueil",style:({isActive:s})=>({color:s?"#black":"#2f343d",fontSize:"1.2em",background:s?"white":"#EF921C",borderRadius:"10px",border:"3px solid #2cda9d"})},{to:"/But1",text:"BUT1",class:"but3",style:l},{to:"/But2",text:"BUT2",class:"but3",style:l},{to:"/But3",text:"BUT3",class:"but3",style:l},{to:"/Cyber",text:"Cyber",class:"but3",style:c},{to:"/Helico",text:"Helico",class:"but3",style:c},{to:"/Reseaux",text:"Reseaux",class:"but3",style:c},{to:"/Serveur",text:"Serveur",class:"but3",style:c},{to:"/WEB",text:"WEB",class:"but3",style:n},{to:"/PC",text:"PC",class:"but3",style:n}];return e.jsxs(g,{children:[e.jsxs("div",{className:"header",children:[e.jsx(r,{to:"/Accueil",className:"logo",children:e.jsx("div",{className:"titre",children:"Mon Portfolio"})}),e.jsx("div",{className:"header-right",children:e.jsxs("div",{className:"nav-links",children:[e.jsx("a",{className:"imggithubdiv",href:"https://github.com/calaxo/geii-portfolio",children:e.jsx("img",{className:"imggithub",src:ce,alt:"github"})}),e.jsx("a",{className:"imglinkedindiv ",href:"https://www.linkedin.com/in/calendreau-axel",children:e.jsx("img",{className:"imglinkedin",src:oe,alt:"linkedin"})}),i.map(s=>e.jsx(r,{to:s.to,className:"b-".concat(s.class," rounded-button nav-link"),style:s.style,children:s.text},s.to))]})})]}),e.jsx("div",{className:"content",children:e.jsxs(f,{children:[e.jsx(t,{path:"/",element:e.jsx(N,{to:"/Accueil"})}),e.jsx(t,{path:"/Accueil",element:e.jsx(R,{})}),e.jsx(t,{path:"/But1",element:e.jsx(A,{})}),e.jsx(t,{path:"/But1_sae1",element:e.jsx(u,{})}),e.jsx(t,{path:"/But1_sae2",element:e.jsx(h,{})}),e.jsx(t,{path:"/But1_sae3",element:e.jsx(L,{})}),e.jsx(t,{path:"/But2",element:e.jsx(F,{})}),e.jsx(t,{path:"/But2_sae1",element:e.jsx(P,{})}),e.jsx(t,{path:"/But2_sae2",element:e.jsx(D,{})}),e.jsx(t,{path:"/But3",element:e.jsx(H,{})}),e.jsx(t,{path:"/But1_sae1",element:e.jsx(u,{})}),e.jsx(t,{path:"/But1_sae2",element:e.jsx(h,{})}),e.jsx(t,{path:"/WEB",element:e.jsx(I,{})}),e.jsx(t,{path:"/Back",element:e.jsx(T,{})}),e.jsx(t,{path:"/Front",element:e.jsx(z,{})}),e.jsx(t,{path:"/Git",element:e.jsx(V,{})}),e.jsx(t,{path:"/Hebergement",element:e.jsx(U,{})}),e.jsx(t,{path:"/PC",element:e.jsx(G,{})}),e.jsx(t,{path:"/Cyber",element:e.jsx(M,{})}),e.jsx(t,{path:"/DGAC",element:e.jsx(W,{})}),e.jsx(t,{path:"/Formation",element:e.jsx(Q,{})}),e.jsx(t,{path:"/Veille",element:e.jsx($,{})}),e.jsx(t,{path:"/Helico",element:e.jsx(Y,{})}),e.jsx(t,{path:"/Aero",element:e.jsx(J,{})}),e.jsx(t,{path:"/Simu",element:e.jsx(K,{})}),e.jsx(t,{path:"/Reseaux",element:e.jsx(X,{})}),e.jsx(t,{path:"/Cable",element:e.jsx(Z,{})}),e.jsx(t,{path:"/Firewall",element:e.jsx(ee,{})}),e.jsx(t,{path:"/Switch",element:e.jsx(se,{})}),e.jsx(t,{path:"/Serveur",element:e.jsx(te,{})}),e.jsx(t,{path:"/AD",element:e.jsx(re,{})}),e.jsx(t,{path:"/Docker",element:e.jsx(ie,{})}),e.jsx(t,{path:"/Learning",element:e.jsx(ne,{})}),e.jsx(t,{path:"/Linux",element:e.jsx(ae,{})}),e.jsx(t,{path:"/Condition",element:e.jsx(le,{})}),e.jsx(t,{path:"*",element:e.jsx(E,{})})]})}),e.jsxs("footer",{className:"footer",children:[e.jsx("p",{children:"Site © 2023"}),e.jsx(r,{to:"/Condition",children:"Condition légales"})]})]})}const xe=p(document.getElementById("root"));xe.render(e.jsx(de,{}));
