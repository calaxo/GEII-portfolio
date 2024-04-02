
import imghtml from "@assetspreuve/html.png";
import imgxampp from "@assetspreuve/xampp.png";
import imgnoip from "@assetspreuve/noip.png";
import imgo2 from "@assetspreuve/o2.png";
import imgovh1 from "@assetspreuve/ovh.png";
import imgovh2 from "@assetspreuve/ovh2.png";
import imgpm2 from "@assetspreuve/pm2.png";


const titre = "Hebergement local et distant";

const intro =
  "depuis quelque année, je veux activer metre des chose a dispotsiotn sur internet,sans m'embeter utiliser mon propre PC";

const content = [
  {
    id: 1,
    titretache: "hebergement local simple via les fichier ",
    tache: "pour herberger des site simple statique qui sont sous formes de fichier html javascript et css j'ai dabord placer ces fichier dans un dossier ",
    granddescription: "ceci bien pour des site simple en ouvrant simplement le fichier dans un navigateur mais se se reveler dangereux car  il faut que l'utilisateur ai accés au dossier",
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
      "en bricoloant des chose et en regardant des tuto j'ai appris les grand principe de fonctionement du WEB avec des requètes, des port, et des adresse",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2016",
    note: 3,
  },

  {
    id: 5,
    titretache: "ouverture de port de box et uylisation de DNS dynamique",
    tache:
      "j'ai decouverte qu'il etait possible en modifiant les parametre d'une box internet d'hberger des sites sur son propre reseaux",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgnoip],
    evaluation: "evaluation1",
    date: "01/02/2017",
    note: 3,
  },

  {
    id: 6,
    titretache: "decouverte d'hebergemetn via Cpannel",
    tache:
      "pour des site personnel j'ai appris a gerer un serveur via un site internet dédié a ceci ou tout est configurable",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [imgo2],
    evaluation: "evaluation1",
    date: "01/05/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "achat et configuration d'un DNS",
    tache:
      "pour avoir mon propre nom de domaine(adresse URL personalisé)j'ai appris a configure un service DNS qui permet de lié un serveur a une adress internet",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [imgovh1,imgovh2],
    evaluation: "evaluation1",
    date: "01/06/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "hebergement nodejs sous linux pm2",
    tache:
      "pour heberger des sites dans le reseaux local de mon entreprise j'ai appris a utliser des outils en ligne de commande linux pour heberger efficacement des sites",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [imgpm2],
    evaluation: "evaluation1",
    date: "01/11/2023",
    note: 3,
  },
];

const conclu =
  "un hebergement sur fiable sans panne et sans faille de sécurité et trés compliqué a metre en place soit mmeme, mais en deleguant sa a des entreprise spécilisé on gagne beaucou de temp, néanmoin il faut trouver le juste milieur entre prix de l'bergement liberté daction et simplifcation";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
