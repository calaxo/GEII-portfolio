import imghtml from "@assetspreuve/html.png";
// import imgxampp from "@assetspreuve/xampp.png";
import imgnoip from "@assetspreuve/noip.png";
import imgo2 from "@assetspreuve/o2.png";
import imgovh1 from "@assetspreuve/ovh.png";
import imgovh2 from "@assetspreuve/ovh2.png";
import imgpm2 from "@assetspreuve/pm2.png";

const titre = "Hébergement local et distant";

const intro =
  "Depuis quelques années, je veux mettre des choses à disposition sur Internet, sans m'embêter à utiliser mon propre PC. Je dois donc héberger des sites en ligne dans des serveurs distants.";

const content = [
  {
    id: 1,
    titretache: "Hébergement local simple via les fichiers",
    tache:
      "Pour héberger des sites simples statiques qui sont sous forme de fichiers HTML, JavaScript et CSS, j'ai d'abord utilisé un simple navigateur Internet pour lire ces fichiers.",
    granddescription:
      "Ceci est bien pour des sites simples en ouvrant simplement le fichier dans un navigateur, mais cela s'est révélé dangereux car il faut que l'utilisateur ait accès au dossier. Or, pour des sites Internet sur le web, cela nécessite de donner accès aux fichiers d'un ordinateur.",
    ressource: "",
    trace: [imghtml],
    evaluation: "Simple mais dangereux.",
    date: "01/01/2017",
    note: 1,
  },

  {
    id: 4,
    titretache: "Découverte des ports et requêtes Internet",
    tache:
      "Durant mon BAC en numérique et science informatique et pendant de nombreuses heures à bricoler chez moi, j'ai pu apprendre plus sur les bases du protocole Ethernet.",
    granddescription: "J'ai appris les grands principes de fonctionnement du WEB avec des requêtes, des ports et des adresses.",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "01/02/2016",
    note: 3,
  },

  {
    id: 5,
    titretache: "Ouverture de port de box et utilisation de DNS dynamique",
    tache:
      "J'ai découvert qu'il était possible, en modifiant les paramètres d'une box Internet, d'héberger des sites sur son propre réseau.",
    granddescription: "En paramétrant des règles NAT, il est possible de rediriger des requêtes Internet qui viennent sur la box vers des machines internes à des réseaux Internet domestiques. J'ai dû apprendre à faire ceci pour jouer à certains jeux en réseaux.",
    ressource: " ",
    trace: [imgnoip],
    evaluation: " ",
    date: "01/02/2017",
    note: 3,
  },

  {
    id: 6,
    titretache: "Découverte d'hébergement via cPanel",
    tache:
      "Pour éviter d'avoir un ordinateur allumé en permanence chez moi, j'ai choisi d'utiliser des hébergements en ligne. La meilleure solution que j'ai trouvée au fil des tests est l'hébergeur o2switch.",
    granddescription: "Ce type d'hébergement permet d'accéder à de nombreux services tels que la gestion des mails, des bases de données, des serveurs et des zones DNS, etc., le tout via des interfaces simplifiées et accessibles de n'importe où.",
    ressource: " ",
    trace: [imgo2],
    evaluation: " ",
    date: "14/07/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "Achat et configuration d'un DNS",
    tache:
      "Un DNS permet de convertir un domaine/URL tel que Google.com en adresse IP lisible par des machines telles que 216.239.38.120.",
    granddescription: "Pour avoir mon propre nom de domaine (adresse URL personnalisée), j'ai appris à configurer un service DNS qui permet de relier un serveur à une adresse Internet. Ainsi, je peux créer des sites sur des adresses WEB personnalisées.",
    ressource: " ",
    trace: [imgovh1, imgovh2],
    evaluation: " ",
    date: "01/08/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "Hébergement Node.js sous Linux avec PM2",
    tache:
      "Pour héberger des sites dans le réseau local de mon entreprise, j'ai appris à utiliser des outils en ligne de commande Linux pour héberger efficacement des sites.",
    granddescription: "Je suis revenu à un niveau de programmation plus bas (plus de code et de paramétrage/moins d'interface graphique) pour héberger des services directement sur Linux via des lignes de commande et des services entièrement paramétrables.",
    ressource: " ",
    trace: [imgpm2],
    evaluation: " ",
    date: "01/03/2024",
    note: 3,
  },
];

const conclu =
  "Un hébergement sûr, fiable, sans panne et sans faille de sécurité est très compliqué à mettre en place soi-même, mais en déléguant cela à des entreprises spécialisées, on gagne beaucoup de temps. Néanmoins, il faut trouver le juste milieu entre le prix de l'hébergement et la liberté de paramétrage.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
