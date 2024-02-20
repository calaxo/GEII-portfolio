import imgaltium1 from "@assetspreuve/altium1.png";

const titre = "But 2 : SAE 1";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 1,
    titretache: "creation du circuit sur altium",
    tache: "nousda  vons créer le cirut sur altium designer",
    granddescription: "ceci est une grande description",
    ressource: "description1",
    trace: [imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "aide pour le routage de la carte",
    tache: "j'ai aider mes colluege a router la carte sur altium",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "code pour lire les donnée depuis la carte de test",
    tache:
      "j'ai participer au development du programme qui lis et affiche les donnée sur l'ecran d'un microcontroleur stm32",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
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
