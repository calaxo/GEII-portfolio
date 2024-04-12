import imggithub from "@assetspreuve/github.png";
import imgrepo from "@assetspreuve/repo.png";
import imgcommit from "@assetspreuve/commit.png";

const titre = "Utlisation de Git";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 1,
    titretache: "creation d'un compte github",
    tache:
      "par curiosité je me suis renseigné sur le monde du logiciel de l'open source et ses avantage et j'ai deuverte github une platforme qui herbegre de nomhrteux projet open source",
    granddescription: "ceci est une grande description",
    ressource: "description1",
    trace: [imggithub],
    date: "01/02/2023",
    evaluation: "evaluation1",
    note: 3,
  },

  {
    id: 2,
    titretache: "decouverte du fonctionement de GIT/Ghithub",
    tache:
      "j'ai ensuite decouvert que github etait une amelioration d'un systeme de gestion de code appelé git qui permet de travailleren équipe sur le meme projet de developement",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "création de repositori",
    tache:
      "pour de nombreux projet de development personnel j'ai pris une démarche professionnel pour apprendre les base",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgrepo],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "decouverte de la pratique du DevOps",
    tache:
      "dans ma recherche d'avenir professionnel j'ai decouverte les base du metier de devops qui permet de fair le lien entre les developpeur et les admisntrateur de serveur pour permetre de gerer sans probleme le code",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "utlisation de github pour developer",
    tache:
      "depuis dés que je programme quelque chose j'utilise github pour touts ses avantages",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [imgcommit],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },
];

const conclu =
  "depuis que j'utlise git je n'ai fait aucune erreur de gestion de code, avant c'etait tjour complis de gerer plusieur version de plusieur code entre plursieur espace de stockage en passant seulement par des fichier et des clé usb";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
