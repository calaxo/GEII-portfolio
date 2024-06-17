import imgdocker2 from "@assetspreuve/docker2.png";
import imgdockerdk from "@assetspreuve/dockerdk.png";
const titre = "Introduction à la conteneurisation via Docker";

const intro =
"Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [

{
id: 2,
titretache: "Virtualisation",
tache: "Lors des débuts de mon alternance, j'ai découvert la virtualisation.",
granddescription: "La virtualisation consiste à créer des machines virtuelles. Ceci permet de placer plusieurs systèmes d'exploitation tels que Windows ou Linux sur un autre système d'exploitation. Nous pouvons ainsi avoir un seul gros serveur qui contient plusieurs petits serveurs avec des tâches différentes.",
ressource: "",
trace: [],
evaluation: "",
date: "10/07/2023",
note: 3,
},
{
id: 2,
titretache: "Découverte de Docker",
tache: "Le problème de la virtualisation est que cela prend beaucoup de ressources et d'espace.",
granddescription: "Il faut qu'il y ait plusieurs systèmes d'exploitation qui sont compliqués à interconnecter. Il faut aussi un système pour en prendre le contrôle à distance. En lisant des articles en ligne, j'ai pu découvrir Docker, qui est un système permettant de faire de la conteneurisation. Cela revient à abaisser le niveau de virtualisation en empaquetant dans des conteneurs seulement les applications et dépendances dont un système a besoin.",
ressource: "",
trace: [],
evaluation: "",
date: "15/07/2023",
note: 3,
},

{
id: 5,
titretache: "Interconnexion des conteneurs via des réseaux virtuels",
tache: "Tout ceci étant virtuel, il est possible de créer des réseaux et des interconnexions entre ces conteneurs.",
granddescription: "Une bonne pratique est d'enfermer l'application et sa base de données dans un même réseau et de créer un réseau qui contient seulement les applications, ainsi toutes les bases de données sont séparées.",
ressource: "",
trace: [imgdocker2],
evaluation: "",
date: "01/11/2023",
note: 3,
},

{
id: 6,
titretache: "Résolution des problèmes",
tache: "J'ai passé de nombreuses heures à résoudre les problèmes de réseaux et de conteneurs que j'ai configurés.",
granddescription: "Les réseaux de Docker peuvent être compliqués à configurer, mais il en va de même pour le stockage. Il est possible de partager des espaces de stockage sécurisés avec des droits spécifiques entre différentes conteneurs.",
ressource: "",
trace: [],
evaluation: "",
date: "01/12/2023",
note: 3,
},

{
id: 7,
titretache: "Passage en infrastructure de production",
tache: "J'ai appliqué tout ce que j'ai appris pour que mes conteneurs fonctionnent pendant des mois sans aucune action.",
granddescription: "En créant des services solides et résiliants via Docker, on peut se permettre de déplacer ou redémarrer des conteneurs sans perdre de données ou de configuration.",
ressource: "",
trace: [imgdockerdk],
evaluation: "",
date: "01/03/2024",
note: 3,
},

];

const conclu = "L'empaquetage d'applications via Docker permet à de grosses entreprises de faire de la gestion de services simplifiée. Il peut être possible de multiplier un même conteneur des milliers de fois pour répartir les ressources et requêtes web sur plusieurs machines.";

const data = {
titre,
intro,
content,
conclu,
};

export default data;