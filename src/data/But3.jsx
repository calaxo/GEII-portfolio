import imgsite from "@assetspreuve/site.png";
import imgrelation from "@assetspreuve/relation.png";
// import imgpassage from '@assetspreuve/passagestructure.png';
import imgsender from "@assetspreuve/sender.png";
import imgquery from "@assetspreuve/query.png";
import imgpassagerempli from "@assetspreuve/passagerempli.png";
// import imgovh from '@assetspreuve/ovh.png';
import imgovh2 from "@assetspreuve/ovh2.png";
import imgnotion from "@assetspreuve/notion.png";
import imgink from "@assetspreuve/ink.png";
import imginformation from "@assetspreuve/information.png";
import imgesp from "@assetspreuve/esp.png";
import imgchoix from "@assetspreuve/choix.png";
// import imgindex from '@assetspreuve/index.png';
import imgreact from "@assetspreuve/react.png";
import imgarduino from "@assetspreuve/arduino.png";

const titre = "But 3 : SAE";

const intro = "durant cette derniere année de BUT en Genie electrique et informatique industriel nous somme spécialisé dans de nombreux domaine pointu tel que l'electronique embarqué dédié au Iot <br> L'internet des objet decrit le reseaux crée par de nombreux objet electronique intelligent<br>nous avions pour mission d'utiliser des carte stm32 pour créer ce genre d'objet<br>due a mes connaissance je me suis penché sur l'informatique qu'il y a derrire ces objet";

const content = [
  {
    id: 1,
    titretache: "choix projet/groupe",
    tache:
      "En groupe, nous avons décidé du projet sur lequel nous allions travailler selon nos différentes aptitudes et qualités.",
    granddescription: "de par sa complexité  et ses enjeux technique nous avon choisi de travailler sur le projet qui consiste a fabriquer un lecteur de carte rfid pour pouvoir <pointer> les eleve comme dans le usines",
    ressource: "les idées de projet que Mr Lucas nous a proposé et dess idée d'objet connecté que nous avons deja rencontré",
    trace: imgchoix,
    evaluation: "4/",
    date: "01/02/2023",
  },

  {
    id: 2,
    titretache: "réflexion/exploration datasheet du esp32",
    tache:
      "Nous nous sommes renseignés sur la carte que nous allions utiliser, une carte ESP32 capable de communiquer en wifi.",
    granddescription: "Ceci est une grande description.",
    ressource: "On a appris à faire des bases de données.",
    trace: imgesp,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 3,
    titretache:
      "prise d'information et conseil à mes collègues durant mon alternance",
    tache:
      "Durant mon alternance, j'ai contacté mes collègues pour connaître l'avancement du projet et leur donner des conseils.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgink,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 4,
    titretache: "création de documentation sur l'aspect serveur et requête",
    tache:
      "Pour permettre l'explication du fonctionnement d'un serveur web, j'ai réalisé des schémas et des explications pour mes collègues.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgnotion,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 5,
    titretache: "lien entre serveur existant et DNS",
    tache:
      "J'ai fait la liaison entre un serveur DNS et le serveur pour permettre d'avoir une adresse internet plus pratique.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgovh2,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 6,
    titretache: "mise en place d'une API web simple",
    tache:
      "J'ai créé une API simple qui permet la communication entre un serveur et notre carte ESP32.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgsender,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 7,
    titretache: "édition de la base de données",
    tache: "J'ai créé une table simple dans une base de données.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgpassagerempli,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 8,
    titretache:
      "connexion simple entre le serveur Node.js et la base de données",
    tache:
      "J'ai connecté le serveur à la base de données via une bibliothèque destinée à la base de données MySQL.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgarduino,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 9,
    titretache: "utilisation d'une pool de connexions",
    tache:
      "Pour améliorer la rapidité du serveur, j'ai changé le mode de connexion à la base de données.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgquery,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 10,
    titretache: "création de page web pour afficher les données",
    tache:
      "J'ai créé une page web qui permet d'afficher la présence des élèves sur une page internet via React, une solution récente et réputée pour programmer des sites web modernes.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgreact,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 11,
    titretache: "couleur et style appliqués à la page web",
    tache:
      "Pour améliorer la lisibilité et l'ergonomie, j'ai amélioré la disposition des éléments sur le site et j'ai changé les couleurs.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgsite,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 12,
    titretache:
      "création de nouvelles routes pour l'édition de données depuis le web",
    tache:
      "Pour permettre l'édition de la base de données depuis le WEB pour changer les noms des étudiants, j'ai dû créer de nouvelles routes et requêtes pour faire parvenir les données entrées sur le site vers le serveur et du serveur jusqu'à la base de données.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imginformation,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 13,
    titretache: "amélioration de la base de données et création de relations",
    tache:
      "Nous avons amélioré la base de données pour y inclure des relations. Ceci permet de séparer des tableaux d'étudiants et de passage de carte et de les relier via certaines colonnes.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgrelation,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },

  {
    id: 14,
    titretache: "aide pour la mise en route d'une carte Raspberry Pi",
    tache:
      "J'ai expliqué et aidé à mettre en place une carte Raspberry Pi fonctionnant sous Linux qui sera le futur serveur WEB.",
    granddescription: "Ceci est une grande description.",
    ressource: "Comme je sais faire, j'ai fait un site react.",
    trace: imgrelation,
    evaluation: "evaluation1",
    date: "01/02/2023",
  },
];

const conclu = "finito";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
