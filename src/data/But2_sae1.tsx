import imgaltium1 from "@assetspreuve/altium1.png";
const titre = "But 2 : SAE 1";

const intro =
  "Le but de ce projet était de réaliser un ''stylo-voltmètre'', un appareil léger et pratique qui permettrait de lire la tension de n'importe quel appareil.";

const content = [
  {
    id: 1,
    titretache: "documentation",
    tache: "Nous avons premièrement réalisé un document pour expliquer où nous en étions au démarrage du projet.",
    granddescription: "Dans une démarche professionnelle, nous avons collecté et agencé des informations telles que résumées : les différentes lois et normes applicables à la prise de tension, les solutions existantes, et les points positifs ou négatifs que nous allions apporter via notre projet.",
    ressource: "",
    trace: [imgaltium1],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 2,
    titretache: "découverte de la programmation pour systèmes embarqués",
    tache: "Nous devons utiliser des cartes de développement STM32 qui sont des microcontrôleurs capables de beaucoup de choses.",
    granddescription: "Pour programmer ces cartes, nous devons utiliser le langage C. Nous avons appris, via des TP, à utiliser ce langage et ses spécificités telles que les pointeurs et les adresses mémoire.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },
    {
    id: 2,
    titretache: "utilisation de l'écran LCD",
    tache: "Pour afficher quelque chose sur l'écran de notre STM32, nous devions avoir quelque chose à afficher.",
    granddescription: "Nous avons d'abord créé des images sur le logiciel Inkscape pour avoir une démarche professionnelle de dessin vectoriel. Nous avons ensuite converti cette image en texte compréhensible par du code C, puis nous avons écrit et effacé des choses sur l'écran pour apprendre les bonnes démarches de programmation qui évitent de permettre le moins de ressources de la machine possible.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

    {
    id: 2,
    titretache: "implémentation d'une fonction supplémentaire",
    tache: "Nous nous sommes rendu compte que notre écran n'affichait pas beaucoup d'informations par rapport à la place que nous disposions, nous avons choisi d'implémenter une fonction supplémentaire.",
    granddescription: "En cours, nous avions déjà utilisé des voltmètres analogiques qui affichaient la tension via une aiguille qui tournait sur un cadran. Nous avions aussi réalisé en code Python une horloge numérique, en nous aidant de nos idées et des solutions techniques nous avons ajouté un écran analogique sur notre voltmètre qui permet, en plus d'afficher la tension sous forme digitale, d'afficher une aiguille qui bouge en fonction du courant.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },


    {
    id: 2,
    titretache: "conversion de tension en valeur numérique",
    tache: "Nous avons dû apprendre à utiliser un convertisseur analogique vers numérique pour lire une tension et la convertir en valeur numérique.",
    granddescription: "La tension est une mesure physique qui définit la différence de potentiel entre 2 points d'un circuit électronique. Or, nous avions besoin de cette valeur sous forme de données numériques. Nous avons donc appris à utiliser un composant ADC (analogique to digital converter).",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

    {
    id: 2,
    titretache: "circuit électroniques",
    tache: "Un système de mesure de tension doit être capable de se protéger lui-même et ses utilisateurs.",
    granddescription: "Nous avons réalisé 2 morceaux de circuits électroniques : l'un permet de créer un court-circuit si la tension dépasse 15V, pour éviter que trop de tension rentre dans le convertisseur, l'autre permet de diviser la tension pour mesurer des tensions allant jusqu'à 15V avec un circuit de mesure qui peut accepter jusqu'à 5V.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

    {
    id: 2,
    titretache: "création de la carte électronique avec ADC",
    tache: "Nous avons réalisé notre circuit final en reliant les différentes parties ensemble.",
    granddescription: "Le convertisseur analogique vers digital est le plus coûteux dans le produit final, nous avons donc réalisé de nombreux tests avant de l'incorporer dans le circuit.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },


    {
    id: 2,
    titretache: "lecture de données",
    tache: "Notre carte STM32 reçoit donc via son bus SPI des trames de données, nous devons les exploiter.",
    granddescription: "Nous avons réalisé un petit algorithme permettant de lire les données, de les arrondir et de les afficher sous forme de texte. Toutes ces conversions se font dans le code C que nous avons créé.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 3,
    titretache: "réglage des problèmes graphiques et logiciels",
    tache:
      "Nous avons passé du temps à peaufiner notre interface pour la rendre plus juste et lisible.",
    granddescription: "Nous nous sommes rendus compte que nous avions certains bugs graphiques avec l'écran du STM32 et que nous devions réaliser des ''arrangements'' avec nos valeurs pour ne pas avoir trop de chiffres significatifs et que notre aiguille de mesure aille bien jusqu'aux extrêmes de notre cadran.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },
];

const conclu = "Durant ce projet, nous avons entièrement réalisé un circuit complexe liant de la programmaion embarqué et de l'electronique";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
