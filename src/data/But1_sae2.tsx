// import imgaltium1 from "@assetspreuve/altium1.png";
// import imgaltium12 from "@assetspreuve/altium1.png";
const titre = "But 1 : SAE 2";

const intro =
  "Durant ce projet, notre mission était de créer la partie électronique et informatique d'un système de mesure de l'intensité sonore pour créer un sonomètre.";

const content = [
  {
    id: 1,
    titretache: "Découverte de Altium Designer",
    tache:
      "Notre professeur nous a fait découvrir Altium Designer.",
    granddescription: "Altium Designer est un logiciel professionnel de conception de circuit imprimé. Après avoir conçu un circuit électronique fonctionnel, c'est l'étape la plus importante pour réaliser un prototype qui se rapproche de la réalité.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },

  {
    id: 2,
    titretache: "Création du circuit déjà fonctionnel sur Altium",
    tache: "Nous avons reproduit un circuit électronique sur Altium Designer.",
    granddescription: "Notre professeur nous a fait refaire notre PCB sur Altium plusieurs fois jusqu'à ce que nous comprenions le raisonnement nécessaire pour placer des composants et les relier en respectant des règles essentielles.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },

  {
    id: 3,
    titretache: "Soudure sur une carte de débutant pour s'entraîner",
    tache:
      "C'était la première fois que nous apprenions vraiment la soudure (en réalité appelée brasure à l'étain) de composants électroniques.",
    granddescription: "Nous avons pour cela réalisé une petite carte avec un circuit bistable qui faisait clignoter deux LED en alternance. Nous avons ensuite passé autant de temps à résoudre les problèmes que nous avions causés en réalisant la maintenance de nos cartes.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },



  {
    id: 5,
    titretache: "Routage de notre carte",
    tache:
      "Nous avons créé chaque chemin reliant les composants électroniques entre eux.",
    granddescription: "Il fallait s'assurer que chaque piste était bien dimensionnée et avait assez d'espace pour respecter les règles liées aux puissances électriques.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },

  {
    id: 6,
    titretache: "Création et soudure de notre carte",
    tache:
      "Nous avons vu comment développer une carte électronique avec des plaques de départ simples.",
    granddescription: "Nous avons réalisé nos cartes via des procédés chimiques qui permettent de tracer nos circuits sur du cuivre. Nous avons ensuite soudé nos composants sur notre carte définitive qui venait d'être produite mais qui était à nu.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },


  {
    id: 8,
    titretache: "Vérification du bon fonctionnement de la carte",
    tache:
      "Comme nous l'avons appris, nous avons vérifié que notre carte fonctionnait avant de l'utiliser.",
    granddescription: "Nous avons dû réaliser la maintenance de nos cartes pour que tout soit correct avant d'y installer des composants sensibles pour s'assurer de ne pas les griller.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },

  {
    id: 10,
    titretache: "Développement de l'interface utilisateur",
    tache:
      "Nous sommes ensuite passés sur la partie logicielle de notre projet.",
    granddescription: "Nous avons réalisé une interface utilisateur en Python. Le programme peut être lancé sur un ordinateur et permet de visualiser les niveaux de sons. Nous avions carte blanche pour l'interface et le style. J'ai choisi de réaliser un programmeur qui peut changer selon les paramètres que l'utilisateur sélectionne.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },

  {
    id: 12,
    titretache: "Création du code pour lire les données",
    tache:
      "Il manque seulement le bloc de programme qui relie la lecture de données incompréhensibles par un humain à l'interface graphique.",
    granddescription: "Nous avons dû créer du code pour lire les données reçues par notre carte électronique et le microcontrôleur. Nous recevions de l'information en continu et nous avons donc dû faire un code rapide et optimisé. De plus, nous avons dû trouver les bonnes valeurs pour permettre de réaliser des moyennes et afficher des valeurs pendant assez de temps pour que l'utilisateur puisse les comprendre.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },

  {
    id: 13,
    titretache: "Création du programme final",
    tache:
      "Nous avons ensuite relié les différentes parties du projet et réparé et amélioré les problèmes de communication.",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2021",
    note: 3,
  },
];

const conclu =
  "Ce projet a été passionnant. Nous avons pu voir comment se déroule un projet de A à Z, depuis l'électronique jusqu'au logiciel, en passant par la soudure et la manipulation de données.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
