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
import explicationserveur from "@assetspreuve/explicationserveur.png";

import arduinoserv4 from "@assetspreuve/arduinoserv4.png";
import arduinoserv3 from "@assetspreuve/arduinoserv3.png";
import arduinoserv2 from "@assetspreuve/arduinoserv2.png";
import arduinoserv1 from "@assetspreuve/arduinoserv1.png";


const titre = "But 3 : SAE";
const intro = "Durant cette dernière année de BUT en Génie électrique et informatique industrielle, nous nous sommes spécialisés dans de nombreux domaines pointus tels que l'électronique embarquée dédiée à l'IoT.<br> L'Internet des objets décrit le réseau créé par de nombreux objets électroniques intelligents. Nous avions pour mission d'utiliser des cartes STM32 pour créer ce genre d'objet en raison de mes connaissances, je me suis penché sur l'informatique qu'il y a derrière ces objets.";

const content = [
  {
    id: 1,
    titretache: "choix projet/groupe",
    tache:
      "En groupe, nous avons décidé du projet sur lequel nous allions travailler selon nos différentes aptitudes et qualités.",
    granddescription: "De par sa complexité et ses enjeux techniques, nous avons choisi de travailler sur le projet qui consiste à fabriquer un lecteur de carte RFID pour pouvoir <pointer> les élèves comme dans les usines.",
    ressource: "Les idées de projet que M. Lucas nous a proposées et des idées d'objets connectés que nous avons déjà rencontrées.",
    trace: [imgchoix],
    evaluation: "<br>Notre choix paraissait évident.",
    date: "03/09/2023",
    note: 4,
  },

  {
    id: 2,
    titretache: "réflexion/exploration datasheet du ESP32",
    tache:
      "Nous nous sommes renseignés sur la carte que nous allions utiliser, une carte ESP32 capable de communiquer en wifi.",
    granddescription: "Nous avons recherché en même temps les différents cas d'utilisation, les limites et les possibilités offertes par l'ESP32.",
    ressource: "De nombreux sites qui expliquent/décrivent le fonctionnement de l'ESP32 via des projets.",
    trace: [imgesp],
    evaluation: "Nous avons bien mis les différentes ressources et informations que nous avions trouvées en commun.",
    date: "03/09/2023",
    note: 5,
  },

  {
    id: 3,
    titretache:
      "échange d'informations et conseils à mes collègues durant mon alternance et à mon retour en cours",
    tache:
      "Durant mon alternance, j'ai contacté mes collègues pour connaître l'avancement du projet et leur donner des conseils.",
    granddescription: "Lorsque je suis revenu en cours, je leur ai expliqué via des schémas le fonctionnement du web et des API pour qu'ils comprennent ce que j'étais en train de faire. Je leur ai expliqué le passage des requêtes HTTP aux serveurs web en utilisant un DNS et en leur précisant pourquoi on ne pouvait pas utiliser la connexion réseau de l'IUT.",
    ressource: "Mes connaissances",
    trace: [imgink, imgnotion, explicationserveur],
    evaluation: "J'ai vulgarisé et condensé les informations.",
    date: "01/07/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "mise en place d'une API web simple",
    tache:
      "J'ai créé une API simple qui permet la communication entre un serveur et notre carte ESP32.",
    granddescription: "Pour créer des codes simples mais puissants, j'ai toujours utilisé Node.js qui est un programme permettant de faire tourner du JavaScript (normalement destiné à une utilisation sur un navigateur) sur un serveur web. J'ai créé des routes simples destinées à recevoir et envoyer des données via des requêtes POST et GET du protocole HTTP.",
    ressource: "Mon expérience",
    trace: [imgsender],
    evaluation: "Cela a été une belle preuve de concept pour mes collègues et moi-même.",
    date: "20/07/2023",
    note: 5,
  },

  {
    id: 7,
    titretache: "création d'une base de données",
    tache: "J'ai créé une base de données MySQL sur un serveur mutualisé que je loue pour de multiples usages.",
    granddescription: "Je loue un serveur mutualisé chez l'hébergeur O2switch, c'est une interface web opaque qui permet quand même de faire beaucoup de configurations et d'installations. J'ai créé une base de données MySQL qui peut être administrée via phpMyAdmin.",
    ressource: "Mon expérience professionnelle pour des sites complexes",
    trace: [imgpassagerempli],
    evaluation: "Trop simple en raison du pré-mâchage du travail par l'hébergeur.",
    date: "01/02/2023",
    note: 2,
  },

  {
    id: 8,
    titretache:
      "connexion entre le serveur Node.js et la base de données",
    tache:
      "J'ai connecté le serveur à la base de données via une bibliothèque destinée à la base de données MySQL.",
    granddescription: "Au départ, j'ai seulement utilisé une connexion simple. À chaque requête, la connexion avec la base de données était ouverte puis fermée. J'ai ensuite utilisé une pool de connexions pour améliorer la rapidité et la simplicité des requêtes.",
    ressource: "Des tutoriels sur les pools de connexions MySQL en Node.js",
    trace: [imgarduino],
    evaluation: "Je n'ai pas cherché à comprendre le sujet plus en profondeur.",
    date: "02/11/2023",
    note: 3,
  },





  {
    id: 10,
    titretache: "création de page web pour afficher les données",
    tache:
      "J'ai créé une page web qui permet d'afficher la présence des élèves sur une page internet via React, une solution récente et réputée pour programmer des sites web modernes.",
    granddescription: "Ceci est une grande description.",
    ressource: "mon expérience en développement web ",
    trace: [imgreact],
    evaluation: "une page efficace pour afficher des données",
    date: "20/08/2023",
    note: 4,
  },
  
  {
    id: 11,
    titretache: "couleur et style appliqués à la page web",
    tache:
      "Pour améliorer la lisibilité et l'ergonomie, j'ai amélioré la disposition des éléments sur le site et j'ai changé les couleurs.",
    granddescription: "j'ai d'abord demandé à ChatGPT de rendre la page plus jolie puis j'ai appliqué des couleurs et des images qui ont du sens",
    ressource: "ChatGPT",
    trace: [imgsite],
    evaluation: "le site est très joli",
    date: "24/11/2023",
    note: 3,
  },
  {
    id: 12,
    titretache: "amélioration de la base de données et création de relations",
    tache:
      "J'ai amélioré la base de données pour y inclure des informations sur les étudiants et des relations. Cela permet de séparer des tableaux d'étudiants et de passages de carte et de les relier via certaines colonnes.",
    granddescription: "j'ai eu du mal à recréer les clés principales qui devaient être identiques et reliées entre elles pour que les données soient bien liées et que les requêtes soient simples à faire",
    ressource: "",
    trace: [imgrelation],
    evaluation: "j'ai eu du mal car je ne connaissais que la création de relation sur Access",
    date: "26/11/2023",
    note: 3,
  },
  
  {
    id: 13,
    titretache:
      "creation de nouvelles interactions pour les utilisateurs sur le site",
    tache:
      "pour permettre une utilisation simple du lecteur de carte et du site qui est lié j'ai créé une interaction qui permet d'afficher tous les passages de carte d'un étudiant et de changer ses informations",
    granddescription: "Pour permettre l'édition de la base de données depuis le WEB pour changer les noms des étudiants, j'ai dû créer de nouvelles routes et requêtes pour faire parvenir les données entrées sur le site vers le serveur et du serveur jusqu'à la base de données. J'ai modifié le code JavaScript sur les parties front et serveur pour gérer ses les données",
    ressource: "ChatGPT et mes connaissances en programmation ReactJS et Node.js",
    trace: [imginformation],
    evaluation: "je pense avoir évolué sur certains aspects de JavaScript et l'interface est pratique et simple",
    date: "26/11/2023",
    note: 5,
  },
  
  {
    id: 14,
    titretache: "aide pour la mise en route d'une carte Raspberry Pi",
    tache:
      "J'ai expliqué et aidé à mettre en place une carte Raspberry Pi fonctionnant sous Linux qui sera le futur serveur WEB.",
    granddescription: "durant mon alternance le reste de mon équipe a eu une carte raspberry pi pour l'utiliser en tant que serveur, j'ai expliqué comment utiliser une base de données PHP et phpmyadmin pour simplifier la gestion des bases de données",
    ressource: "mon expérience personnelle et professionnelle sur le sujet, et des commandes qui viennent de différents tutos",
    trace: [imgrelation],
    evaluation: "je pense avoir bien condensé les informations",
    date: "11/01/2024",
    note: 3,
  },
  {
    id: 15,
    titretache: "création d'une page de configuration WIFI",
    tache:
      "j'ai créé une page web qui permet de rentrer des informations de connexions dans la carte esp32",
    granddescription: "lors de notre projet, il a fallu rentrer les informations de connexion de chaque WIFI, pour éviter cela j'ai codé l'ESP32 pour que l'on puisse rentrer les informations de connexion sur son point d'accès  et que l'on puisse ensuite scanner les badges NFC, je me suis inspiré des objets connectés basiques que j'ai déjà paramétrés",
    ressource: "<a href=\"https://github.com/me-no-dev/ESPAsyncWebServer\">page github de ESPAsyncWebServer</a> <a href=\"https://randomnerdtutorials.com/esp32-http-get-post-arduino/\">tuto sur la création de serveur sur un ESP32</a>",
    trace: [arduinoserv1, arduinoserv2, arduinoserv3, arduinoserv4],
    evaluation: "je pense avoir fait un code réutilisable qui sera pratique, mais il manque une résilience des infos de connexion dans la carte pour les prochains boot",
    date: "08/02/2024",
    note: 4,
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
