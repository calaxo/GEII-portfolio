import imgaltium1 from "@assetspreuve/altium1.png";

import imgaltium2 from "@assetspreuve/altium2.png";

const titre = "But 2 : SAE 2";

const intro =
  "le but de ce projet etait de repredre le projet de stylovoltemetre pour lui incorporer ne comunication sans fil, ainsi nous pouvons avoir notre prise de mesure et son affichage a deux endroits séparé";

const content = [
  {
    id: 1,
    titretache: "tout recommencer",
    tache:
      "suite a une separation en deux de notre precedent groupe nous avons tout recommencer",
    granddescription: "en refaisant toute la partie electronique nous avons pu ameliorer la propreté du circuit et realiser des connexion plus compréensible",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },



  {
    id: 3,
    titretache: "recration du circuit sur altium",
    tache:
      "nous avons du refair notre circuit sur altium car nous avions changer certain composant",
    granddescription: "",
    ressource: "",
    trace: [imgaltium1],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "finalisation",
    tache:
      "en tant qu'alternant nous avons etait pris par le temp et nous n'avons pas pur realiser la carte electronique finale",
    granddescription: "néanmoins avec les carte de test de nos professeur le programme etait fonctionnel malgrés la transmission sans fils",
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
