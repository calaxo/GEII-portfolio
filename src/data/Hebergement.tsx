import imghtml from "@assetspreuve/html.png";
// import imgxampp from "@assetspreuve/xampp.png";
import imgnoip from "@assetspreuve/noip.png";
import imgo2 from "@assetspreuve/o2.png";
import imgovh1 from "@assetspreuve/ovh.png";
import imgovh2 from "@assetspreuve/ovh2.png";
import imgpm2 from "@assetspreuve/pm2.png";

const titre = "Hebergement local et distant";

const intro =
  "depuis quelque année, je veux  metre des chose a dispotsiotn sur internet,sans m'embeter utiliser mon propre PC, je doit donc heberger des sites en ligne dans des serveur distant";

const content = [
  {
    id: 1,
    titretache: "hebergement local simple via les fichier ",
    tache:
      "pour herberger des site simple statique qui sont sous formes de fichier html javascript et css j'ai dabord utiliser un simmple navigateur internet pour lire ces fichiers",
    granddescription:
      "ceci bien pour des site simple en ouvrant simplement le fichier dans un navigateur mais se se reveler dangereux car  il faut que l'utilisateur ai accés au dossier, or pour des sites internet sur le web ceci necesitte de donner accées aux fichiers d'un ordinateur",
    ressource: "",
    trace: [imghtml],
    evaluation: "simple mais dangereux",
    date: "01/01/2017",
    note: 1,
  },

  {
    id: 4,
    titretache: "decouverte des port et requete internet",
    tache:
      "durant mon BAC en numérique et sience informatique et pendant de nombreuse heure a bricoler chez moi j'ai pu apprendre plus sur les base du protocol ethernet",
    granddescription: "j'ai appris les grand principe de fonctionement du WEB avec des requètes, des port, et des adresse",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "01/02/2016",
    note: 3,
  },

  {
    id: 5,
    titretache: "ouverture de port de box et uylisation de DNS dynamique",
    tache:
      "j'ai decouverte qu'il etait possible en modifiant les parametre d'une box internet d'hberger des sites sur son propre reseaux",
    granddescription: "en parametrant des regle NAT il est est possible de rediriger des requete internet qui vienne sur le box vers des machines interne a des reseaux internet domestique, j'ai du apprendre a fair ceci pour jouer a certain jeux ren reseaux",
    ressource: " ",
    trace: [imgnoip],
    evaluation: " ",
    date: "01/02/2017",
    note: 3,
  },

  {
    id: 6,
    titretache: "decouverte d'hebergemetn via Cpannel",
    tache:
      "pour eviter d'avoir un ordinateur allumé en permanence chez moi j'ai choisi d'utilier des hebergement en ligne, la meilleur sollution que j'ai trouver au fil des test est l'hebergeur o2switch, ",
    granddescription: "ce  type d'hbergement permet d'acceder a de nombreux service tel que: la gestion des mail,des base de données, des serveur et zone dns,etc... le tout via des interface simplfié et accesible de n'importe ou",
    ressource: " ",
    trace: [imgo2],
    evaluation: " ",
    date: "01/05/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "achat et configuration d'un DNS",
    tache:
      "un DNS permet de convertir un domaine/URL tel que google.com en adresse IP lisible par des machine tel que 216.239.38.120",
    granddescription: "pour avoir mon propre nom de domaine(adresse URL personalisé)j'ai appris a configure un service DNS qui permet de lié un serveur a une adress internet, ainsi je peux créer des site sur des adresse WEB personéalisée",
    ressource: " ",
    trace: [imgovh1, imgovh2],
    evaluation: " ",
    date: "01/06/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "hebergement nodejs sous linux pm2",
    tache:
      "pour heberger des sites dans le reseaux local de mon entreprise j'ai appris a utliser des outils en ligne de commande linux pour heberger efficacement des sites",
    granddescription: "je suis revenu a un niveau de programmation plus bas( plus de code et de parametrage/moin d'interface graphique) pour heberger des services directement sur linux via des lignes de commande et des service entierement parametrable",
    ressource: " ",
    trace: [imgpm2],
    evaluation: " ",
    date: "01/11/2023",
    note: 3,
  },
];

const conclu =
  "un hebergement sur fiable sans panne et sans faille de sécurité et trés compliqué a metre en place soit mmeme, mais en deleguant sa a des entreprise spécilisé on gagne beaucou de temp, néanmoin il faut trouver le juste milieur entre prix de l'bergement et la libertéé de parametrage";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
