import imgsite from "@assetspreuve/site.png";
import imgrelation from "@assetspreuve/relation.png";
import imgpassage from "@assetspreuve/passagestructure.png";
import imgsender from "@assetspreuve/sender.png";
import imagejson from "@assetspreuve/json.png";
import imgpassagerempli from "@assetspreuve/passagerempli.png";
// import imgovh from '@assetspreuve/ovh.png';
// import imgovh2 from "@assetspreuve/ovh2.png";
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

import imgpool1 from "@assetspreuve/pool1.png";
import imgpool2 from "@assetspreuve/pool2.png";
import imgpool3 from "@assetspreuve/pool3.png";

import imgcss from "@assetspreuve/css.png";

const titre = "But 3 : SAE";
const intro =
  "Durant cette dernière année de BUT en Génie électrique et informatique industrielle, nous nous sommes spécialisés dans de nombreux domaines pointus tels que l'électronique embarquée dédiée à l'IoT.<br> L'Internet des objets décrit le réseau créé par de nombreux objets électroniques intelligents. Nous avions pour mission d'utiliser des cartes STM32 pour créer ce genre d'objet en raison de mes connaissances, je me suis penché sur l'informatique qu'il y a derrière ces objets.";

const content = [
  {
    id: 1,
    titretache: "choix projet/groupe",
    tache:
      "En groupe, nous avons décidé du projet sur lequel nous allions travailler selon nos différentes aptitudes et qualités.",
    granddescription:
      "<h3>Un choix a faire</h3>De par sa complexité et ses enjeux techniques, nous avons choisi de travailler sur le projet qui consiste à fabriquer un lecteur de carte RFID pour pouvoir <pointer> les élèves comme dans les usines.",
    ressource:
      "Les idées de projet que M. Lucas nous a proposées et des idées d'objets connectés que nous avons déjà rencontrées.",
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
    granddescription:
      "<h3>Prise d'informations</h3>Nous avons recherché en même temps les différents cas d'utilisation, les limites et les possibilités offertes par l'ESP32.",
    ressource:
      "De nombreux sites qui expliquent/décrivent le fonctionnement de l'ESP32 via des projets.",
    trace: [imgesp],
    evaluation:
      "Nous avons bien mis les différentes ressources et informations que nous avions trouvées en commun.",
    date: "03/09/2023",
    note: 5,
  },

  {
    id: 3,
    titretache:
      "échange d'informations et conseils à mes collègues durant mon alternance et à mon retour en cours",
    tache:
      "Durant mon alternance, j'ai contacté mes collègues pour connaître l'avancement du projet et leur donner des conseils.",
    granddescription:
      "<h3>Des études partagés entre cours et entreprise</h3>Lorsque je suis revenu en cours, je leur ai expliqué via des schémas le fonctionnement du web et des API pour qu'ils comprennent ce que j'étais en train de faire. Je leur ai expliqué le passage des requêtes HTTP aux serveurs web en utilisant un DNS et en leur précisant pourquoi on ne pouvait pas utiliser la connexion réseau de l'IUT.",
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
    granddescription:
      "<h3>choix technologique</h3>Pour créer des codes simples mais puissants, j'ai toujours utilisé Node.js qui est un programme permettant de faire tourner du JavaScript (normalement destiné à une utilisation sur un navigateur) sur un serveur web. J'ai créé des routes simples destinées à recevoir et envoyer des données via des requêtes POST et GET du protocole HTTP.",
    ressource: "Mon expérience",
    trace: [imgsender, imagejson],
    evaluation:
      "Cela a été une belle preuve de concept pour mes collègues et moi-même.",
    date: "20/07/2023",
    note: 5,
  },

  {
    id: 7,
    titretache: "création d'une base de données",
    tache:
      "J'ai créé une base de données MySQL sur un serveur mutualisé que je loue pour de multiples usages.",
    granddescription:
      "<h3>Un serveur dans le CLOUD</h3>Je loue un serveur mutualisé chez l'hébergeur O2switch, c'est une interface web opaque qui permet quand même de faire beaucoup de configurations et d'installations. J'ai créé une base de données MySQL qui peut être administrée via phpMyAdmin.",
    ressource: "Mon expérience professionnelle pour des sites complexes",
    trace: [imgpassagerempli, imgpassage],
    evaluation:
      "Trop simple en raison du pré-mâchage du travail par l'hébergeur.",
    date: "01/02/2023",
    note: 2,
  },

  {
    id: 8,
    titretache: "connexion entre le serveur Node.js et la base de données",
    tache:
      "J'ai connecté le serveur à la base de données via une bibliothèque destinée à la base de données MySQL.",
    granddescription:
      "<h3>Une preuve de concept</h3>Au départ, j'ai seulement utilisé une connexion simple. À chaque requête, la connexion avec la base de données était ouverte puis fermée. J'ai ensuite utilisé une pool de connexions pour améliorer la rapidité et la simplicité des requêtes.",
    ressource: "Des tutoriels sur les pools de connexions MySQL en Node.js",
    trace: [imgpool1, imgpool2, imgpool3],
    evaluation: "Je n'ai pas cherché à comprendre le sujet plus en profondeur.",
    date: "02/11/2023",
    note: 3,
  },

  {
    id: 10,
    titretache: "création de page web pour afficher les données",
    tache:
      "J'ai créé une page web qui permet d'afficher la présence des élèves sur une page internet via React, une solution récente et réputée pour programmer des sites web modernes et efficaces.",
    granddescription:
      "<h3>Une page WEB moderne</h3>Les données concernant les élèves et leur passages ne sont pas fournis via le code du site en lui meme, le site envoit un fichier javascript compilé(qu'on ne peut pas comprendre lorsque il est créer) developé dans un environement spécial, ce code fonctionne ensuite sur la navigateur WEB du client pour afficher la page et lui ordonne de fair une requete vers le serveur pour obtenir les informations voulues, c'est une méthode plus pragmatique ",
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
    granddescription:
      "j'ai d'abord demandé à ChatGPT de rendre la page plus jolie puis j'ai appliqué des couleurs et des images qui ont du sens",
    ressource: "ChatGPT",
    trace: [imgsite, imgcss],
    evaluation: "le site est très joli",
    date: "24/11/2023",
    note: 3,
  },
  {
    id: 12,
    titretache: "amélioration de la base de données et création de relations",
    tache:
      "J'ai amélioré la base de données pour y inclure des informations sur les étudiants et des relations. Cela permet de séparer des tableaux d'étudiants et de passages de carte et de les relier via certaines colonnes.",
    granddescription:
      "j'ai eu du mal à recréer les clés principales qui devaient être identiques et reliées entre elles pour que les données soient bien liées et que les requêtes soient simples à faire",
    ressource: "Les cours de BDD de Mr Wateau",
    trace: [imgrelation],
    evaluation:
      "j'ai eu du mal car je ne connaissais que la création de relation sur Access",
    date: "26/11/2023",
    note: 3,
  },

  {
    id: 13,
    titretache:
      "creation de nouvelles interactions pour les utilisateurs sur le site",
    tache:
      "pour permettre une utilisation simple du lecteur de carte et du site qui est lié j'ai créé une interaction qui permet d'afficher tous les passages de carte d'un étudiant et de changer ses informations",
    granddescription:
      "Pour permettre l'édition de la base de données depuis le WEB pour changer les noms des étudiants, j'ai dû créer de nouvelles routes et requêtes pour faire parvenir les données entrées sur le site vers le serveur et du serveur jusqu'à la base de données. J'ai modifié le code JavaScript sur les parties front et serveur pour gérer ses les données",
    ressource:
      "ChatGPT et mes connaissances en programmation ReactJS et Node.js",
    trace: [imginformation],
    evaluation:
      "je pense avoir évolué sur certains aspects de JavaScript et l'interface est pratique et simple",
    date: "26/11/2023",
    note: 5,
  },

  {
    id: 14,
    titretache: "aide pour la mise en route d'une carte Raspberry Pi",
    tache:
      "J'ai expliqué et aidé à mettre en place une carte Raspberry Pi fonctionnant sous Linux qui sera le futur serveur WEB.",
    granddescription:
      "durant mon alternance le reste de mon équipe a eu une carte raspberry pi pour l'utiliser en tant que serveur, j'ai expliqué comment utiliser une base de données mySQL et phpmyadmin pour simplifier la gestion des bases de données",
    ressource:
      "mon expérience personnelle et professionnelle sur le sujet, et des commandes qui viennent de différents tutos",
    trace: [],
    evaluation: "je pense avoir bien condensé les informations",
    date: "11/01/2024",
    note: 3,
  },
  {
    id: 15,
    titretache: "création d'une page de configuration WIFI",
    tache:
      "j'ai créé une page web qui permet de rentrer des informations de connexions dans la carte esp32",
    granddescription:
      "lors de notre projet, il a fallu rentrer les informations de connexion de chaque WIFI, pour éviter cela j'ai codé l'ESP32 pour que l'on puisse rentrer les informations de connexion sur son point d'accès via une page web  et que l'on puisse ensuite scanner les badges NFC, je me suis inspiré d'objets connectés basiques que j'ai déjà paramétrés<br></br> dans le code je créer dabord un point d'accés sans fil, puis je créer un serveru http asynchrone qui renvoi du html(contenant du css et du javascript) en interagissant avec la page web envoyé des information sont envoyé a l'ESP qui execute ensuite du code pour se connecter au reseaux wifi voulu. <br></br> Pour me simplifier la tache j'ai créer un script python qui transforme un fichier html classique en chaine de caractere qui peut etre envoyé par l'ESP.<br></br>en utilisant un serveur asynchrone l'ESP32 peut fair plusieurs chose en meme temps, ainsi nous n'avons pas a utiliser la boucle loop()généralement utlisé sur du code basé pour arduino(l'IDE que j'utilise).",
    ressource:
      '<a href="https://github.com/me-no-dev/ESPAsyncWebServer">page github de ESPAsyncWebServer</a><br></br> <a href="https://randomnerdtutorials.com/esp32-http-get-post-arduino/">tuto sur la création de serveur sur un ESP32</a>',
    trace: [arduinoserv1, arduinoserv2, arduinoserv3, arduinoserv4, imgarduino],
    evaluation:
      "je pense avoir fait un code réutilisable qui sera pratique, mais il manque une résilience des infos de connexion dans la carte pour les prochains boot",
    date: "08/02/2024",
    note: 4,
  },
  {
    id: 16,
    titretache: "tentative d'utilisation de comunication wifi entre ESP32",
    tache:
      "Utilisation de ESP NOW pour que des ESP comunique entre elle et quelle utilisent le wifi en meme temp",
    granddescription:
      " Pour ameliorer les possiblité et terme d'IOT de notre projet  j'ai voulu que l'ESP qui contenait le projet deja fait puise comuniquer avec d'autre ESP via un protocol appelé ESP NOW, néanmoin aprés avoir tenter plusieurs choses l'ESP n'arive pas a partager ca partie wifi entre ce protocol et le wifi classique quelle utilise deja,<br></br> L'ESP est une sollution opaque, le constructeur 'expressif' ne comunique pas sur la technologie a l'interieur de microcontrolluer,cela aurait pu nous permetre de trouver une faille pour contourner ce probleme.",
    ressource:
      '<a href="https://randomnerdtutorials.com/esp32-esp-now-wi-fi-web-server/">tuto de ESP-NOW qui permet de se connecter a un wifi en meme temps</a><br></br> <a href="https://randomnerdtutorials.com/esp-now-esp32-arduino-ide/">tuto sur l\'ESP NOW\'</a>',
    trace: [],
    evaluation:
      "une sollution aurait pu etre prendre 2 ESP qui comunique entre elle via comunication serie est d'en dedier une a chaque tache",
    date: "14/02/2024",
    note: 2,
  },
  {
    id: 11,
    titretache: "utlisation du multitache",
    tache:
      "nous avons utliser une maquette de prototypage pour nous permetre de virifer que notre systeme etait contionnel",
    granddescription: "ceci est une grande description",
    ressource:
      "la tache de Mr vila <a href='https://bv.univ-poitiers.fr/access/content/user/fvila/portfolio/but3/missions/m1/index.html'>son portfolio</a>",
    trace: [arduinoserv1, arduinoserv1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 15,
    titretache: "création d'une page de configuration WIFI",
    tache:
      "j'ai créé une page web qui permet de rentrer des informations de connexions dans la carte esp32",
    granddescription:
      "lors de notre projet, il a fallu rentrer les informations de connexion de chaque WIFI, pour éviter cela j'ai codé l'ESP32 pour que l'on puisse rentrer les informations de connexion sur son point d'accès via une page web  et que l'on puisse ensuite scanner les badges NFC, je me suis inspiré d'objets connectés basiques que j'ai déjà paramétrés<br></br> dans le code je créer dabord un point d'accés sans fil, puis je créer un serveru http asynchrone qui renvoi du html(contenant du css et du javascript) en interagissant avec la page web envoyé des information sont envoyé a l'ESP qui execute ensuite du code pour se connecter au reseaux wifi voulu. <br></br> Pour me simplifier la tache j'ai créer un script python qui transforme un fichier html classique en chaine de caractere qui peut etre envoyé par l'ESP.<br></br>en utilisant un serveur asynchrone l'ESP32 peut fair plusieurs chose en meme temps, ainsi nous n'avons pas a utiliser la boucle loop()généralement utlisé sur du code basé pour arduino(l'IDE que j'utilise).",
    ressource:
      '<a href="https://github.com/me-no-dev/ESPAsyncWebServer">page github de ESPAsyncWebServer</a><br></br> <a href="https://randomnerdtutorials.com/esp32-http-get-post-arduino/">tuto sur la création de serveur sur un ESP32</a>',
    trace: [arduinoserv1, arduinoserv2, arduinoserv3, arduinoserv4, imgarduino],
    evaluation:
      "je pense avoir fait un code réutilisable qui sera pratique, mais il manque une résilience des infos de connexion dans la carte pour les prochains boot",
    date: "08/02/2024",
    note: 4,
  },
  {
    id: 15,
    titretache: "comunication entre ESP",
    tache:
      "j'ai tenter d'incorporer dans le meme code le systeme de comunication entre diferente ESP via le reseaux ESP-MESH",
    granddescription:
      "pour réaliser un internet des objet il faut que plusieur objet comunique entre eux pour echanger des information, le reseax adapté a notre usage est l'ESP-MESH, or nous il besoin d'utiliser le module wifi de la carte qe nous utlisons deja pour se concter a un wifi et créer un point d'accés, meme avec des interuption et un systeme temp réel je n'ai pas réussi",
    ressource:
      '<a href="https://randomnerdtutorials.com/esp32-esp-now-wi-fi-web-server/">tuto pour utlisation du wifi et de esp now en meme temp</a><br></br> <a href="https://randomnerdtutorials.com/esp32-http-get-post-arduino/">tuto sur la création de serveur sur un ESP32</a>',
    trace: [],
    evaluation:
      "une sollution de contournemnt serait de decomposer le systeme en plusieurs ESP, une qui s'occupe du reseaux ESP-MESH et une autre qui s'occupe de la connexion wifi, les deux serait interconecté par liason serie",
    date: "15/02/2024",
    note: 1,
  },
];

const conclu =
  "En faisant ce projet je me rend compte de la compléxité de coder des choses dédié au web adapté pour de l'electronique embarqué car tout est a un niveau de programmation beaucoup plus bas: pour coder la moindre route http il faut savoir précisement comment les données sont et comment les utiliser, En programmant jusqu'a la gestion des caractères qui sont recu mais je comprend que c'esst quelque chose d'essentiel dans toute IOT,nous avont utilisé l'IDE arduino donc beaucoups de chose etaient 'pré-machées' je pense que pour des cas plus professionnel il faut des developpeurs avec des gros baguages techniques.<br>Je pense que je mettrai les codes que je fait en opensource(sur github par exemple)pour que tout le monde y est accés car j'ai eu du mal a trouver des exemple de code qui marche.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
