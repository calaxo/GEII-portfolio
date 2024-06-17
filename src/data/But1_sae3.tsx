import imgtrieur1 from "@assetspreuve/trieur1.png";
import imgtrieur2 from "@assetspreuve/trieur2.png";
const titre = "But 1 : SAE 3";

const intro =
  "Durant ce projet, notre mission était de créer la partie électronique d'un système de trieur de déchets via un capteur inductif et un moteur.";

const content = [
  {
    id: 1,
    titretache: "Création d'un algorigramme",
    tache:
      "Nous avons premièrement créé un algorigramme pour savoir les différentes tâches que nous allions avoir à faire.",
    granddescription: "Notre rôle était de savoir de quelle matière étaient faits différents déchets tels que des cannettes en aluminium et des bouteilles en plastique. Via des capteurs, nous avons réalisé pour cela un schéma logique qui résulte en ceci : si un objet est détecté, les moteurs doivent s'activer dans un sens, et si un objet est détecté et que notre capteur inductif (sensible au métal) est activé, il fallait faire tourner les moteurs dans l'autre sens.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 2,
    titretache: "Utilisation du capteur inductif",
    tache:
      "Nous avons appris à utiliser un capteur industriel qui permet de détecter la présence de métal.",
    granddescription: "Notre professeur nous a distribué des capteurs inductifs, et nous avons dû nous débrouiller. C'étaient des capteurs industriels que l'on peut retrouver dans des machines d'usine.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 3,
    titretache:
      "Abaissement de la tension logique de sortie du capteur inductif",
    tache:
      "Nous avons créé un circuit électronique simple pour nous permettre d'utiliser un capteur industriel avec des circuits utilisant des tensions plus faibles.",
    granddescription: "Notre capteur était fait pour fonctionner avec des automates industriels en 25V, alors que notre circuit allait fonctionner en 5V. Grâce à nos bases de compétences en électronique, nous avons réalisé une interface entre ces deux environnements.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 4,
    titretache: "Utilisation du moteur",
    tache:
      "Comme vu lors de nos premiers projets, nous avons redécouvert l'utilisation d'une carte de contrôle de moteur.",
    granddescription: "Dans un précédent projet, nous avions appris à utiliser des moteurs via des signaux logiques créés par des équipements de laboratoire. Cette fois-ci, nous allions devoir réaliser ces signaux logiques dans nos propres circuits électroniques.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 5,
    titretache: "Création de petits circuits logiques",
    tache:
      "Nous avons créé des circuits logiques qui permettent de faire un choix sur le sens de rotation du moteur selon les infos données par les capteurs.",
    granddescription: "Nous avons pour cela utilisé des équations logiques qui permettent de passer de l'algorithme précédemment créé à des circuits logiques simples via des opérations telles que et/ou. Ce sont des portes logiques.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 6,
    titretache: "Vérification et amélioration",
    tache:
      "Nous avons cherché à améliorer chaque fonction pour améliorer le projet.",
    granddescription: "Pour être sûr que le projet allait marcher à la fin, nous avons déjà commencé à améliorer nos circuits pour obtenir les signaux électroniques les plus propres possible.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 7,
    titretache: "Interconnexion des circuits",
    tache:
      "Nous avons relié nos différentes circuits un à un en vérifiant que tout fonctionne bien à chaque fois.",
    granddescription: "",
    ressource: "",
    trace: [imgtrieur1, imgtrieur2],
    evaluation: "",
    date: "2022",
    note: 3,
  },





  {
    id: 10,
    titretache: "Interconnexion avec la maquette",
    tache:
      "Nous avons utilisé une maquette de prototypage pour nous permettre de vérifier que notre système était fonctionnel.",
    granddescription: "",
    ressource: "Nos professeurs ont créé une maquette qui contenait seulement les moteurs et les capteurs. Nous avons pu réaliser la première utilisation réelle de nos circuits. Nous avons conclu que le système marchait très bien.",
    trace: [],
    evaluation: "",
    date: "2022",
    note: 3,
  },
];

//https://bv.univ-poitiers.fr/access/content/user/fvila/portfolio/but3/missions/m1/index.html

const conclu = "Ce projet nous rapprochait beaucoup plus de systèmes industriels que électroniques, malgré le fait qu'il y en avait besoin de nos compétences en électronique du démarrage jusqu'à la fin.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
