import imgaltium1 from "@assetspreuve/altium1.png";


const titre = "But 2 : SAE 2.";

const intro =
  "Le but de ce projet était de reprendre le projet de stylovoltemètre pour lui incorporer une communication sans fil. Ainsi, nous pouvons avoir notre prise de mesure et son affichage à deux endroits séparés.";

const content = [
  {
    id: 1,
    titretache: "Tout recommencer.",
    tache:
      "Suite à une séparation en deux de notre précédent groupe, nous avons tout recommencé.",
    granddescription: "En refaisant toute la partie électronique, nous avons pu améliorer la propreté du circuit et réaliser des connexions plus compréhensibles.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2023.",
    note: 3,
  },
  {
    id: 3,
    titretache: "Re-création du circuit sur Altium.",
    tache:
      "Nous avons dû refaire notre circuit sur Altium car nous avions changé certains composants.",
    granddescription: "",
    ressource: "",
    trace: [imgaltium1],
    evaluation: "",
    date: "2023.",
    note: 3,
  },
  {
    id: 4,
    titretache: "Finalisation.",
    tache:
      "En tant qu'alternants, nous avons été pris par le temps et nous n'avons pas pu réaliser la carte électronique finale.",
    granddescription: "Néanmoins, avec les cartes de test de nos professeurs, le programme était fonctionnel malgré la transmission sans fil.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2023.",
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
