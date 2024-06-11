import imgdocker2 from "@assetspreuve/docker2.png";
import imgdockerdk from "@assetspreuve/dockerdk.png";
const titre = "Introduction a la conteneurisation via docker";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  
  {
    id: 2,
    titretache: "virtualisation",
    tache: "lors des debut de mon alternance j'ai decouvert la virtualisation",
    granddescription: "la virtualisation consiste a créer des machine virtuel, ceci permet de placer plusieur systeme d'exploitation tel que windows ou linux sur un autre systeme d'eploitation.Nous pouvons ainsi avoir un seul gros serveur qui contient plusieur petit serveur avec des tache diférentes",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },
  {
    id: 2,
    titretache: "decouverte de docker",
    tache: "le probleme de la virtualisation est que cela prend beaucoup de ressource et d'espace.",
    granddescription: "il faut qu'il y ai plusieur systeme d'exploitation qui sont compliqué a interconecter, il faut aussi un systeme pour en prendre le control a distance, en lisant des article en ligne j'ai pu decouvrir docker, qui est un systeme permettant de fair de la conteneurisation,cela revient a abbaisser le niveau de virtualisation en empaqquetant dans des conteneur seuelement les application et dependance dont un systeme a besoin",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },





  {
    id: 5,
    titretache: "interconnexion des conteneur via des reseaux virtuel",
    tache: "tout ceci etant virtuel, il est possible de créer des reseaux et des interconnexion entre ces conteneur ",
    granddescription: "une bonne pratique est d'enfermer l'application est sa base de données dans un meme reseaux et de créer un reseaux qui contient seuelemtn les apllication, ainsin toutes les base de de donnes sont séparées",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "resolution des probleme",
    tache: "j'ai passer de nombreuse heure a resoudre les probleme de reseaux et de conteneur que j'ai configurer",
    granddescription: "les reseaux de docker peuvent etre compliqué a configurer, mais il en va de meme pour le stockage, il est possible de partage des espace de stockage sécurisé evec des droit spéecfique entre difernetes conteneurs",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "passage en infrasctucture de production",
    tache: "j'ai appliquer tout ce que j'ai appris pour que mes conteneur fonctionne pendant des mois sans aucune action",
    granddescription: "en créeant des services solides et resiliant via docker, on peut se permetre de deplacer ou redemarer des conteneurs sans perdre de de de donnée ou de configuration",
    ressource: "",
    trace: [imgdockerdk],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

];

const conclu = "l'empaquetage d'applciation via docker permet a de grosse entrprise de fair de la gestion de service simplifié, il peut etre possible de multiplier un meme conteneur des millier de fois pour repartir les ressource et requette web sur plusieur machine";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
