import imgmtn from "@assetspreuve/mtn.png";
import imgsimaint from "@assetspreuve/simaint.png";
import imgclim from "@assetspreuve/clim.png";
import imgdijoncteur from "@assetspreuve/dijoncteur.png";
import imgprojo from "@assetspreuve/projo.png";

const titre = "Maintenance en condition opérative de simulateur d'hélicoptère";

const intro =
  "Un simulateur permet d'effectuer de vrais vols sans risque et de pouvoir simuler les pires pannes possibles sans risque pour les vies ou le matériel.";

const content = [
  {
    id: 1,
    titretache: "Apprentissage du fonctionnement",
    tache:
      "Lors des premières semaines, j'ai appris les différents systèmes majeurs des simulateurs tels que les parties : énergie, calculateur, mouvement, cockpit, visuel.",
    granddescription: "Ceci est une grande description.",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "06/09/2022",
    note: 3,
  },
  {
    id: 2,
    titretache: "Démarrage",
    tache:
      "J'ai appris grâce à mes collègues à démarrer le simulateur et à le préparer pour les séances de la journée.",
    granddescription: "Ceci est une grande description.",
    ressource: "",
    trace: [],
    evaluation: " ",
    date: "01/10/2022",
    note: 3,
  },

  {
    id: 3,
    titretache: "Maintenance",
    tache:
      "Des systèmes aussi techniques nécessitent une maintenance adaptée et organisée.",
    granddescription:
      "N'ayant encore jamais participé à de la maintenance aussi complexe, j'ai dû apprendre à raisonner, à comprendre grâce aux procédures, à communiquer avec mon équipe et à participer aux différentes tâches.",
    ressource: "",
    trace: [imgmtn],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "Simaint",
    tache:
      "Nous en avons parlé en cours, mais j'ai pu découvrir les concepts avec des choses réelles.",
    granddescription:
      "Nous avons un logiciel de GMAO (gestion de la maintenance assistée par ordinateur) qui nous permet de suivre le stock de pièces, les maintenances et tout ce qui peut y être lié. J'ai dû apprendre à m'en servir.",
    ressource: "",
    trace: [imgsimaint],
    evaluation: " ",
    date: "05/10/2022",
    note: 3,
  },

  {
    id: 5,
    titretache: "Découverte du système de climatisation",
    tache:
      "Lors d'un démarrage du simulateur seul un matin, il y a eu une panne de climatisation, ce qui a causé une surchauffe des systèmes. Durant la panne et après, mon maître d'apprentissage m'a expliqué comment fonctionnaient les différents systèmes des simulateurs.",
    granddescription: "Ceci est une grande description.",
    ressource: " ",
    trace: [imgclim],
    evaluation: " ",
    date: "01/04/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "Extinction",
    tache:
      "Très tôt, j'ai appris à éteindre le simulateur, ce qui est beaucoup plus simple que l'allumage. Il faut seulement s'assurer que les calculateurs sont bien éteints avant de couper le courant.",
    granddescription: "Ceci est une grande description.",
    ressource: " ",
    trace: [imgdijoncteur],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "Pannes",
    tache:
      "J'ai appris à déclencher et gérer les pannes de l'hélicoptère. Cela nécessite de connaître les systèmes principaux d'un hélicoptère et de savoir à peu près ce que les pannes provoquent.",
    granddescription: "Ceci est une grande description.",
    ressource: "",
    trace: [],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "Météo",
    tache:
      "Dans un simulateur, toute la météo est contrôlable, de la neige aux tempêtes maritimes en passant par le vent et les orages. Il faut pour cela connaître la météo liée à l'aéronautique.",
    granddescription: "Ceci est une grande description.",
    ressource: "",
    trace: [],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 9,
    titretache: "Premier vol en tant 'qu'instructeur'",
    tache:
      "Lors d'un test pour une maintenance, j'ai été amené à gérer un exercice avec un véritable pilote d'hélicoptère. Je devais gérer chaque élément lié à la simulation de l'hélicoptère en temps réel en essayant de comprendre tous les termes et aspects d'un vol tel que celui-ci.",
    granddescription: "Ceci est une grande description.",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "09/11/2023",
    note: 3,
  },

  {
    id: 10,
    titretache: "Installation d'un PC pour stocker les backups",
    tache:
      "Auparavant, il y avait seulement des disques durs externes pour sauvegarder les simulateurs. J'ai décidé de mettre en place un PC équipé de disques durs redondants pour pallier les risques de perte de données.",
    granddescription: "Ceci est une grande description.",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "20/12/2023",
    note: 3,
  },

  {
    id: 11,
    titretache: "Remplacement de projecteur",
    tache:
      "Un projecteur a de la lumière grâce à une ampoule qu'il faut parfois changer. Nous avons défait des projecteurs de leur support pour les envoyer en réparation en prenant toutes les précautions possibles dues à leur poids, leur fragilité et au travail en hauteur.",
    granddescription: "Ceci est une grande description.",
    ressource: " ",
    trace: [imgprojo],
    evaluation: " ",
    date: "03/01/2024",
    note: 3,
  },

  {
    id: 12,
    titretache: "Warping",
    tache:
      "Avec des projecteurs décalés de quelques millimètres, il fallait quand même refaire le warping, c'est-à-dire modifier la façon dont l'image carrée est projetée pour qu'elle puisse se mettre sur une sphère.",
    granddescription: "Ceci est une grande description.",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "05/01/2024",
    note: 3,
  },
];

const conclu =
  "J'ai découvert l'utilité de la simulation dans le monde professionnel. Que ce soit pour les hélicoptères ou n'importe quel autre moyen de locomotion complexe, c'est l'opposé de tous les jeux de simulation que j'ai connus.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
