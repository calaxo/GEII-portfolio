import imgaltium1 from "@assetspreuve/altium1.png";

import imgaltium2 from "@assetspreuve/altium2.png";

const titre = "But 2 : SAE 2";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 1,
    titretache: "recreation du circuit suite a la separation en 2 groupe",
    tache:
      "Nous etiaons trop dans le meme groupe donc il a été décidé de se separer en deux groupes et nous avons donc tout refair une deuxieme fois",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "amelioration de la propreté du circuit",
    tache:
      "nous avon tout refait mieux car nous savions a deja comment fair la base du projet",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "cration du circuit sur altium",
    tache:
      "nous avons créer notre circuit sur altium pour nous permetre de créer un PCB avec",
    granddescription: "",
    ressource: "",
    trace: [imgaltium1],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "passage de programme stm32 en mode sans fils",
    tache:
      "nous avons modiofier le porgramme contenu dans le microntrolleur pour pourvoir recevoir les tension via des modules sans fils ",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },


];

const conclu = "";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
