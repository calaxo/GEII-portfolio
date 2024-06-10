// import imgaltium1 from "@assetspreuve/altium1.png";
// import imgaltium12 from "@assetspreuve/altium1.png";
const titre = "But 1 : SAE 2";

const intro =
  "durant ce projet notre mission etait de créer la partie elctronique et informatique d'un systeme de mesure de l'intensité sonore pour créer un sonometre";

const content = [
  {
    id: 1,
    titretache: "decouverte de altium designer",
    tache:
      "notre professeur nous a fait découvrir altium designer ",
    granddescription: "Altium Deisnger est un logiciel professionnel de concepttion de circuit imprimé, aprés avoir designer un circuit electronique fonctionnel c'est l'etape la plus importante pour realiser un prototype qui se rapproche de la réalité",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "creation du circuit deja fonctionel sur altium",
    tache: "Nous avons reproduit un circuit electronqiue sur altium designer",
    granddescription: "Notre professeur nous a fait refaire notre PCB sur altium plusieur fois jusqu'a que nous comprenions le raisonement nécessaire pour placer des composant et les relier en respectant des regle essentielles",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: " soudure sur une carte de debutant pour s'entrainer",
    tache:
      "C'etait la premier fois que nous apprenios vraiment la soudure( en réalité appelés brasure a l'etain) de composant electronique ",
    granddescription: "nous avons pour ceci realiser une petite carte avec un circuit bistable qui faisait clignoter deux LED en alternance, nous avons ensuite passer autant de temp a resoudre les probleme que nous avions causer en realisant la maintenance de nos cartes",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },



  {
    id: 5,
    titretache: "routage de notre carte",
    tache:
      "nous avons créer chaque chemin reliant les comosant electronique entre eux ",
    granddescription: "Il fallait s'assurer que chaque piste etait bien dimmensionnée et avait assez d'espace pour respecter les regles liées au puissance electriques",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "creation et soudure de notre carte",
    tache:
      "nous avons vu comment developper une carte elctronique avec des plaque de depart simple ",
    granddescription: "Nous avons realiser nos carte via des proceder chimique qui permettent de tracer nos circuit sur du cuivre.Nous avons ensuite souder nos composant sur notre carte definitive qui venait d'etre produite mais qui etait a nu",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },


  {
    id: 8,
    titretache: "verification du bon fonctionement de la carte",
    tache:
      "comme nous l'avons appris, nous avons verifier que notre carte fonctionne avant de l'utiliser",
    granddescription: "Nous avons du réaliser la maintenance de nos carte pour que tout soit correct  avant d'installer dessus les composant sensible pour s'assurer de ne pas les griller",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 10,
    titretache: "developement de l'interface utilsateur",
    tache:
      "Nous somme ensuite passer sur la partie logiciele de notre projet",
    granddescription: "Nous avons realiser une interface utlisateur en python, le programme peut etre lancer sur un ordinateur et permet de visualser les niveaux de sons, ous avions carte blanche pour l'interface et le style, j'ai choisi de realiser un programmer qui peut changer selon les parametre que l'utilisateur selectionne",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 12,
    titretache: "creation du code pour lire les données",
    tache:
      "il manque seulement le bloc de programme qui relie la lecture de de donnée incompréensible par un humain a l'interface graphique",
    granddescription: "nous avons du créer du code pour lire les donnée recu par notre carte electronique et le microcontrolleur, nous recevions de l'information en continu et nous avons donc du fair un code rapide et optimisé, de plus nous avons du trouver les bonnes valeur pour permetre de realiser des moyennes et afficher des valeur pendant assez de temp pour que l'utilisateur puisse les comprendre",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 13,
    titretache: "creation du programme final",
    tache:
      "Nous avons ensuite relié les diferentes partie du projet et reparer et ameliore les probleme de comunication",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },
];

const conclu =
  "ce projet a été passionnant, nous avons pu voir comment se déroule un projet de A a Z depuis l'electronqiue jusque au logiciel en passant par la soudure et la manipulation de données";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
