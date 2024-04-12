import imgdocker2 from "@assetspreuve/docker2.png";
import imgdockerdk from "@assetspreuve/dockerdk.png";
const titre = "Introduction a la conteneurisation via docker";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 1,
    titretache:
      "decouverte des métode pour herberger plusieur service sur la meme machine",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "description1",
    trace: [imgdockerdk],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "decouverte de docker",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "creation d'environment de test",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  // {
  //   id: 4,
  //   titretache: "creaton de mes propre conteneurs",
  //   tache: "vrai description",
  //   granddescription: "ceci est une grande description",
  //   ressource: "on a appris a faire des base de données",
  //   trace: [],
  //   evaluation: "evaluation1",
  //   date: "01/02/2023",
  //   note: 3,
  // },

  {
    id: 5,
    titretache: "interconnexion des conteneur via des reseaux virtuel",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "resolution des probleme",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "passage en infrasctucture de production",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "tentative de reparation de docker sur windows",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  // {
  //   id: 9,
  //   titretache: "installation de linux",
  //   tache: "vrai description",
  //   granddescription: "ceci est une grande description",
  //   ressource: "comme je sais fair j'ai fait un site react",
  //   trace: [],
  //   evaluation: "evaluation1",
  //   date: "01/02/2023",
  //   note: 3,
  // },

  {
    id: 10,
    titretache: "installation de service complexe",
    tache: "vrai description",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [imgdocker2],
    evaluation: "evaluation1",
    date: "01/02/2024",
    note: 3,
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
