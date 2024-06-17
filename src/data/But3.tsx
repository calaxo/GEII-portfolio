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

const titre = "But 3 : SAE.";
const intro =
  "Durant cette dernière année de BUT en Génie électrique et informatique industrielle, nous nous sommes spécialisés dans de nombreux domaines pointus tels que l'électronique embarquée dédiée à l'IoT. <br> L'Internet des objets décrit le réseau créé par de nombreux objets électroniques intelligents. Nous avions pour mission d'utiliser des cartes STM32 pour créer ce genre d'objet. En raison de mes connaissances, je me suis penché sur l'informatique qu'il y a derrière ces objets.";

const content = [
  {
    id: 1,
    titretache: "Choix projet/groupe.",
    tache:
      "En groupe, nous avons décidé du projet sur lequel nous allions travailler selon nos différentes aptitudes et qualités.",
    granddescription:
      "<h3>Un choix à faire.</h3> De par sa complexité et ses enjeux techniques, nous avons choisi de travailler sur le projet qui consiste à fabriquer un lecteur de carte RFID pour pouvoir <pointer> les élèves comme dans les usines.",
    ressource:
      "Les idées de projet que M. Lucas nous a proposées et des idées d'objets connectés que nous avons déjà rencontrés.",
    trace: [imgchoix],
    evaluation: "<br>Notre choix paraissait évident.",
    date: "03/09/2023.",
    note: 4,
  },

  {
    id: 2,
    titretache: "Réflexion/exploration datasheet du ESP32.",
    tache:
      "Nous nous sommes renseignés sur la carte que nous allions utiliser, une carte ESP32 capable de communiquer en Wi-Fi.",
    granddescription:
      "<h3>Prise d'informations.</h3> Nous avons recherché en même temps les différents cas d'utilisation, les limites et les possibilités offertes par l'ESP32.",
    ressource:
      "De nombreux sites qui expliquent/décrivent le fonctionnement de l'ESP32 via des projets.",
    trace: [imgesp],
    evaluation:
      "Nous avons bien mis les différentes ressources et informations que nous avions trouvées en commun.",
    date: "03/09/2023.",
    note: 5,
  },

  {
    id: 3,
    titretache:
      "Échange d'informations et conseils à mes collègues durant mon alternance et à mon retour en cours.",
    tache:
      "Durant mon alternance, j'ai contacté mes collègues pour connaître l'avancement du projet et leur donner des conseils.",
    granddescription:
      "<h3>Des études partagées entre cours et entreprise.</h3> Lorsque je suis revenu en cours, je leur ai expliqué via des schémas le fonctionnement du web et des API pour qu'ils comprennent ce que j'étais en train de faire. Je leur ai expliqué le passage des requêtes HTTP aux serveurs web en utilisant un DNS et en leur précisant pourquoi on ne pouvait pas utiliser la connexion réseau de l'IUT.",
    ressource: "Mes connaissances.",
    trace: [imgink, imgnotion, explicationserveur],
    evaluation: "J'ai vulgarisé et condensé les informations.",
    date: "01/07/2023.",
    note: 3,
  },

  {
    id: 6,
    titretache: "Mise en place d'une API web simple.",
    tache:
      "J'ai créé une API simple qui permet la communication entre un serveur et notre carte ESP32.",
    granddescription:
      "<h3>Choix technologique.</h3> Pour créer des codes simples mais puissants, j'ai toujours utilisé Node.js qui est un programme permettant de faire tourner du JavaScript (normalement destiné à une utilisation sur un navigateur) sur un serveur web. J'ai créé des routes simples destinées à recevoir et envoyer des données via des requêtes POST et GET du protocole HTTP.",
    ressource: "Mon expérience.",
    trace: [imgsender, imagejson],
    evaluation:
      "Cela a été une belle preuve de concept pour mes collègues et moi-même.",
    date: "20/07/2023.",
    note: 5,
  },

  {
    id: 7,
    titretache: "Création d'une base de données.",
    tache:
      "J'ai créé une base de données MySQL sur un serveur mutualisé que je loue pour de multiples usages.",
    granddescription:
      "<h3>Un serveur dans le CLOUD.</h3> Je loue un serveur mutualisé chez l'hébergeur O2switch, c'est une interface web opaque qui permet quand même de faire beaucoup de configurations et d'installations. J'ai créé une base de données MySQL qui peut être administrée via phpMyAdmin.",
    ressource: "Mon expérience professionnelle pour des sites complexes.",
    trace: [imgpassagerempli, imgpassage],
    evaluation:
      "Trop simple en raison du pré-mâchage du travail par l'hébergeur.",
    date: "01/02/2023.",
    note: 2,
  },

  {
    id: 8,
    titretache: "Connexion entre le serveur Node.js et la base de données.",
    tache:
      "J'ai connecté le serveur à la base de données via une bibliothèque destinée à la base de données MySQL.",
    granddescription:
      "<h3>Une preuve de concept.</h3> Au départ, j'ai seulement utilisé une connexion simple. À chaque requête, la connexion avec la base de données était ouverte puis fermée. J'ai ensuite utilisé une pool de connexions pour améliorer la rapidité et la simplicité des requêtes.",
    ressource: "Des tutoriels sur les pools de connexions MySQL en Node.js.",
    trace: [imgpool1, imgpool2, imgpool3],
    evaluation: "Je n'ai pas cherché à comprendre le sujet plus en profondeur.",
    date: "02/11/2023.",
    note: 3,
  },

  {
    id: 10,
    titretache: "Création de page web pour afficher les données.",
    tache:
      "J'ai créé une page web qui permet d'afficher la présence des élèves sur une page internet via React, une solution récente et réputée pour programmer des sites web modernes et efficaces.",
    granddescription:
      "<h3>Une page WEB moderne.</h3> Les données concernant les élèves et leurs passages ne sont pas fournies via le code du site en lui-même. Le site envoie un fichier JavaScript compilé (qu'on ne peut pas comprendre lorsqu'il est créé) développé dans un environnement spécial. Ce code fonctionne ensuite sur le navigateur WEB du client pour afficher la page et lui ordonne de faire une requête vers le serveur pour obtenir les informations voulues. C'est une méthode plus pragmatique.",
    ressource: "Mon expérience en développement web.",
    trace: [imgreact],
    evaluation: "Une page efficace pour afficher des données.",
    date: "20/08/2023.",
    note: 4,
  },

  {
    id: 11,
    titretache: "Couleur et style appliqués à la page web.",
    tache:
      "Pour améliorer la lisibilité et l'ergonomie, j'ai amélioré la disposition des éléments sur le site et j'ai changé les couleurs.",
    granddescription:
      "J'ai d'abord demandé à ChatGPT de rendre la page plus jolie, puis j'ai appliqué des couleurs et des images qui ont du sens.",
    ressource: "ChatGPT.",
    trace: [imgsite, imgcss],
    evaluation: "Le site est très joli.",
    date: "24/11/2023.",
    note: 3,
  },
  {
  id: 12,
  titretache: "Amélioration de la base de données et création de relations.",
  tache:
    "J'ai amélioré la base de données pour y inclure des informations sur les étudiants et des relations. Cela permet de séparer des tableaux d'étudiants et de passages de carte et de les relier via certaines colonnes.",
  granddescription:
    "J'ai eu du mal à recréer les clés principales qui devaient être identiques et reliées entre elles pour que les données soient bien liées et que les requêtes soient simples à faire.",
  ressource: "Les cours de BDD de Mr Wateau.",
  trace: [imgrelation],
  evaluation:
    "J'ai eu du mal car je ne connaissais que la création de relations sur Access.",
  date: "26/11/2023",
  note: 3,
},

{
  id: 13,
  titretache: "Création de nouvelles interactions pour les utilisateurs sur le site.",
  tache:
    "Pour permettre une utilisation simple du lecteur de carte et du site qui est lié, j'ai créé une interaction qui permet d'afficher tous les passages de carte d'un étudiant et de changer ses informations.",
  granddescription:
    "Pour permettre l'édition de la base de données depuis le web pour changer les noms des étudiants, j'ai dû créer de nouvelles routes et requêtes pour faire parvenir les données entrées sur le site vers le serveur et du serveur jusqu'à la base de données. J'ai modifié le code JavaScript sur les parties front et serveur pour gérer les données.",
  ressource: "ChatGPT et mes connaissances en programmation ReactJS et Node.js.",
  trace: [imginformation],
  evaluation:
    "Je pense avoir évolué sur certains aspects de JavaScript et l'interface est pratique et simple.",
  date: "26/11/2023",
  note: 5,
},

{
  id: 14,
  titretache: "Aide pour la mise en route d'une carte Raspberry Pi.",
  tache:
    "J'ai expliqué et aidé à mettre en place une carte Raspberry Pi fonctionnant sous Linux qui sera le futur serveur web.",
  granddescription:
    "Durant mon alternance, le reste de mon équipe a eu une carte Raspberry Pi pour l'utiliser en tant que serveur. J'ai expliqué comment utiliser une base de données MySQL et phpMyAdmin pour simplifier la gestion des bases de données.",
  ressource:
    "Mon expérience personnelle et professionnelle sur le sujet, et des commandes qui viennent de différents tutos.",
  trace: [],
  evaluation: "Je pense avoir bien condensé les informations.",
  date: "11/01/2024",
  note: 3,
},

{
  id: 15,
  titretache: "Création d'une page de configuration WiFi.",
  tache:
    "J'ai créé une page web qui permet de rentrer des informations de connexion dans la carte ESP32.",
  granddescription:
    "Lors de notre projet, il a fallu rentrer les informations de connexion de chaque WiFi. Pour éviter cela, j'ai codé l'ESP32 pour que l'on puisse rentrer les informations de connexion sur son point d'accès via une page web et que l'on puisse ensuite scanner les badges NFC. Je me suis inspiré d'objets connectés basiques que j'ai déjà paramétrés. <br><br> Dans le code, je crée d'abord un point d'accès sans fil, puis je crée un serveur HTTP asynchrone qui renvoie du HTML (contenant du CSS et du JavaScript) en interagissant avec la page web. Des informations sont envoyées à l'ESP qui exécute ensuite du code pour se connecter au réseau WiFi voulu. <br><br> Pour me simplifier la tâche, j'ai créé un script Python qui transforme un fichier HTML classique en chaîne de caractères qui peut être envoyé par l'ESP. <br><br> En utilisant un serveur asynchrone, l'ESP32 peut faire plusieurs choses en même temps, ainsi nous n'avons pas à utiliser la boucle loop() généralement utilisée sur du code basé pour Arduino (l'IDE que j'utilise).",
  ressource:
    '<a href="https://github.com/me-no-dev/ESPAsyncWebServer">Page GitHub de ESPAsyncWebServer</a><br><br> <a href="https://randomnerdtutorials.com/esp32-http-get-post-arduino/">Tuto sur la création de serveur sur un ESP32</a>',
  trace: [arduinoserv1, arduinoserv2, arduinoserv3, arduinoserv4, imgarduino],
  evaluation:
    "Je pense avoir fait un code réutilisable qui sera pratique, mais il manque une résilience des infos de connexion dans la carte pour les prochains boots.",
  date: "08/02/2024",
  note: 4,
},

{
  id: 16,
  titretache: "Tentative d'utilisation de communication WiFi entre ESP32.",
  tache:
    "Utilisation de ESP-NOW pour que des ESP communiquent entre elles et qu'elles utilisent le WiFi en même temps.",
  granddescription:
    "Pour améliorer les possibilités en termes d'IOT de notre projet, j'ai voulu que l'ESP qui contenait le projet déjà fait puisse communiquer avec d'autres ESP via un protocole appelé ESP-NOW. Néanmoins, après avoir tenté plusieurs choses, l'ESP n'arrive pas à partager sa partie WiFi entre ce protocole et le WiFi classique qu'elle utilise déjà. <br><br> L'ESP est une solution opaque, le constructeur 'Expressif' ne communique pas sur la technologie à l'intérieur du microcontrôleur. Cela aurait pu nous permettre de trouver une faille pour contourner ce problème.",
  ressource:
    '<a href="https://randomnerdtutorials.com/esp32-esp-now-wi-fi-web-server/">Tuto de ESP-NOW qui permet de se connecter à un WiFi en même temps</a><br><br> <a href="https://randomnerdtutorials.com/esp-now-esp32-arduino-ide/">Tuto sur l\'ESP-NOW</a>',
  trace: [],
  evaluation:
    "Une solution aurait pu être de prendre deux ESP qui communiquent entre elles via communication série et d'en dédier une à chaque tâche.",
  date: "14/02/2024",
  note: 2,
},

{
  id: 11,
  titretache: "Utilisation du multitâche.",
  tache:
    "Pour un être vivant, il est ''simple'' de faire plusieurs choses en même temps. Or pour une machine, ceci est beaucoup plus compliqué car il faut qu'elle comprenne où doivent aller les données et la puissance de calcul.",
  granddescription: "Pour optimiser notre application, sa consommation de ressources et donc d'énergie, nous devions utiliser du multitâche pour que l'ESP32 puisse effectuer plusieurs actions en parallèle. Nous avons utilisé des librairies de code permettant de coder de manière asynchrone, ceci permet de faire plusieurs tâches en parallèle grâce à l'ordonnancement interne de l'ESP32.",
  ressource:
    "La tâche de Mr Vila <a href='https://bv.univ-poitiers.fr/access/content/user/fvila/portfolio/but3/missions/m1/index.html'>son portfolio</a>.",
  trace: [],
  evaluation: "Nous ne pouvons pas rajouter beaucoup plus de tâches parallèles car l'ESP32 est limité en ressources.",
  date: "01/02/2023",
  note: 3,
},


  {
    id: 16,
    titretache: "Communication entre ESP.",
    tache:
      "J'ai tenté d'incorporer dans le même code le système de communication entre différentes ESP via le réseau ESP-MESH.",
    granddescription:
      "Pour réaliser un Internet des objets, il faut que plusieurs objets communiquent entre eux pour échanger des informations. Le réseau adapté à notre usage est l'ESP-MESH. Cependant, nous avons besoin d'utiliser le module WIFI de la carte que nous utilisons déjà pour se connecter à un WIFI et créer un point d'accès. Même avec des interruptions et un système temps réel, je n'ai pas réussi.",
    ressource:
      '<a href="https://randomnerdtutorials.com/esp32-esp-now-wi-fi-web-server/">Tuto pour l’utilisation du WIFI et de ESP-NOW en même temps</a><br></br> <a href="https://randomnerdtutorials.com/esp32-http-get-post-arduino/">Tuto sur la création de serveur sur un ESP32</a>',
    trace: [],
    evaluation:
      "Une solution de contournement serait de décomposer le système en plusieurs ESP, une qui s'occupe du réseau ESP-MESH et une autre qui s'occupe de la connexion WIFI. Les deux seraient interconnectées par liaison série.",
    date: "15/02/2024",
    note: 1,
  },
]

const conclu =
  "En faisant ce projet, je me rends compte de la complexité de coder des choses dédiées au web adaptées pour de l'électronique embarquée, car tout est à un niveau de programmation beaucoup plus bas. Pour coder la moindre route HTTP, il faut savoir précisément comment les données sont et comment les utiliser. En programmant jusqu'à la gestion des caractères qui sont reçus, je comprends que c'est quelque chose d'essentiel dans toute IOT. Nous avons utilisé l'IDE Arduino donc beaucoup de choses étaient 'pré-mâchées'. Je pense que pour des cas plus professionnels, il faut des développeurs avec de gros bagages techniques.<br>Je pense que je mettrai les codes que je fais en open source (sur GitHub par exemple) pour que tout le monde y ait accès, car j'ai eu du mal à trouver des exemples de code qui fonctionnent.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
