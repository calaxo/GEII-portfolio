// import imgaltium1 from "@assetspreuve/altium1.png";

import imgftd1 from "@assetspreuve/ftd1.png";
import imgmfd1 from "@assetspreuve/mfd1.png";
import imghelico1 from "@assetspreuve/helico1.png";
import imgturbine from "@assetspreuve/turbine.png";
// import imgefb from "@assetspreuve/efb.png";
import imgcafe from "@assetspreuve/cafe.png";
import imgpa from "@assetspreuve/pa.png";
import imgils from "@assetspreuve/ils.png";
import commande1 from "@assetspreuve/commande1.png";
import commande2 from "@assetspreuve/commande2.png";
import commande3 from "@assetspreuve/commande3.png";
import commande4 from "@assetspreuve/commande4.png";
const titre = "Connaissance Aéronautique.";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 1,
    titretache: "Découverte de l'intérieur d'un hélicoptère.",
    tache:
      "Durant mes premières semaines en alternance, je me suis familiarisé avec le bâtiment, puis les simulateurs, puis l'intérieur des simulateurs qui est en tout point un cockpit d'hélicoptère.",
    granddescription: "Je n'avais jamais pu voir un hélicoptère d'aussi près. C'est une machine complexe qui est très intéressante à découvrir.",
    ressource: "",
    trace: [imghelico1],
    evaluation: "",
    date: "2021.",
    note: 3,
  },

  {
    id: 2,
    titretache: "Découverte des commandes principales.",
    tache:
      "Lors des démarrages, nous devons piloter le simulateur pour pouvoir tester si toutes les commandes répondent bien.",
    granddescription: "Je pensais que les commandes seraient similaires à celles d'un avion, mais j'ai découvert qu'il y a le manche cyclique dans la main droite, la commande de puissance dans la main gauche et les palonniers aux pieds, qui sont très sensibles. Même sans les toucher, le moindre fait de penser à les bouger peut influer sur la position de l'hélicoptère.",
    ressource: "Mes collègues de l'équipe de techniciens simulateurs.",
    trace: [],
    evaluation: "",
    date: "2021.",
    note: 3,
  },

  {
    id: 3,
    titretache: "Découverte du pilote automatique.",
    tache:
      "La plupart du temps, le pilote utilise un pilote automatique qui permet d'aider à contrôler la machine.",
    granddescription: "Il permet d'adoucir les commandes et de mieux comprendre les actions du pilote. Avec des paramètres, il peut aussi totalement contrôler l'hélicoptère.",
    ressource: "",
    trace: [imgpa],
    evaluation: "",
    date: "2022.",
    note: 3,
  },

  {
    id: 4,
    titretache: "Découverte des approches ILS.",
    tache:
      "Pour la procédure de démarrage, nous devons faire une approche ILS.",
    granddescription: "L'hélicoptère se fait guider par des balises au sol situées devant la piste d'atterrissage. Plus tard, en visitant la tour de contrôle et en discutant avec des instructeurs, j'ai découvert comment fonctionnait vraiment ce système.",
    ressource: "Mes collègues de l'équipe de techniciens simulateurs.",
    trace: [imgils],
    date: "2022.",
    note: 3,
  },

  {
    id: 5,
    titretache: "Piloter un hélicoptère (simulateur).",
    tache:
      "Lors de visites ou de tests après une maintenance, je peux tester le simulateur en volant au-dessus d'Angoulême et me promener pour vérifier que tout marche bien.",
    granddescription: "",
    ressource: "",
    trace: [imgftd1],
    evaluation: "",
    date: "2022.",
    note: 3,
  },

  {
    id: 6,
    titretache: "Utiliser les MFD.",
    tache:
      "Les Multi-Function Displays permettent d'aider le pilote en affichant ce qui est nécessaire, tels que les caps, l'altitude et les lignes d'horizon, avec une interface plus compréhensible que les équipements analogiques.",
    granddescription: "",
    ressource: "",
    trace: [imgmfd1],
    evaluation: "",
    date: "2023.",
    note: 3,
  },

  {
    id: 7,
    titretache: "Perfectionnement des atterrissages et décollages.",
    tache:
      "J'ai découvert différentes manipulations en vol, telles que le sur place, l'autorotation et des choses plus complexes qui permettent de savoir comment un hélicoptère fonctionne vraiment.",
    granddescription: "",
    ressource: "",
    trace: [commande1, commande2, commande3, commande4],
    evaluation: "",
    date: "2023.",
    note: 3,
  },

  {
    id: 8,
    titretache: "Apprentissage des termes aéronautiques.",
    tache:
      "Lors de discussions avec des collègues ou des pilotes, j'ai commencé à comprendre leur langage parsemé de mots compliqués qui est toujours utilisé dans une entreprise en lien avec l'aéronautique.",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2023.",
    note: 3,
  },

  {
    id: 9,
    titretache: "Découverte du fonctionnement interne des hélicoptères.",
    tache:
      "En écoutant des anecdotes de vol et en demandant des conseils, j'ai découvert les différents systèmes complexes d'un hélicoptère tels que les radars, les ballons flotteurs d'urgence, les extincteurs, etc.",
    granddescription: "",
    ressource: "",
    trace: [imgturbine],
    evaluation: "",
    date: "2024.",
    note: 3,
  },

  {
    id: 11,
    titretache: "Suivi de l'actualité et des nouveaux modèles d'hélicoptères.",
    tache:
      "Durant mon alternance, j'ai aussi adoré suivre les dernières nouveautés du monde aéronautique, qui est toujours passionnant en raison des évolutions techniques.",
    granddescription: "J'ai pu suivre ce qui se passe dans le monde fermé de l'aéronautique, qui est très lié à la géopolitique par les contrats avec les pays et les forces armées.",
    ressource: "Toutes les personnes du domaine.",
    trace: [imgcafe],
    evaluation: "",
    date: "2023.",
    note: 3,
  },
];

const conclu =
  "L'aéronautique est vitale aussi bien pour les forces armées que pour le monde civil. Il permet au monde moderne de fonctionner, et je trouve ça passionnant.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
