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
      "Lors des premieres semaine de mon alternance dans l'entreprise HUTC, j'ai d'abbord decouvert les diferentes partie des simulateur",
    granddescription: "j'ai du me familiariser a reconaitre ces  parties : énergie, calculateur, mouvement, cockpit, visuel.",
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
    granddescription: "tout les matin en tant que techniciens simulateur notre role et de preparer les simulateur en allumant, etoyant et en verifiant leur bon fonctionement",
    ressource: "",
    trace: [imgdijoncteur],
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
    granddescription: "Ce genre de panne impronptue permet d'apprendre ''a la dur'' le fonctionement et l'utilité de certain systeme complexe",
    ressource: " ",
    trace: [imgclim],
    evaluation: " ",
    date: "01/04/2023",
    note: 3,
  },



  {
    id: 7,
    ancre:"verifier",
    titretache: "Pannes",
    tache:
      "Les pannes sont le coeur de la simulation, c'est elles qui permettent aux pilote de se preparer a toutes eventualité",
    granddescription: "J'ai appris à déclencher et gérer les pannes de l'hélicoptère. Cela nécessite de connaître les systèmes principaux d'un hélicoptère et de savoir à peu près ce que les pannes provoquent.",
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
      "En plus des panne, la météo est controllable, nottament pour fair du vol aux instruments, pour certaine formation, il faut que les pilote apprene a manier l'helicopter malgrés une visibilité nulle",
    granddescription: "Dans un simulateur, toute la météo est contrôlable, de la neige aux tempêtes maritimes en passant par le vent et les orages. Il faut pour cela connaître la météo et ces terme liée à l'aéronautique.",
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
      "Les diférents element que j'avais appris etait surtout util pour de la mainteance ou de la presentation des simulateur.Lors d'un test pour une maintenance, pour un test techique j'ai été amené à gérer un exercice avec un véritable pilote d'hélicoptère",
    granddescription: ". Je devais gérer chaque élément lié à la simulation de l'hélicoptère en temps réel en essayant de comprendre tous les termes et aspects d'un vol tel que celui-ci.le tout en prennant des notes sur les diferents element defaillants",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "09/11/2023",
    note: 3,
  },


  {
    id: 11,
    titretache: "Remplacement de projecteur",
    tache:
      "Une entreprise externe vient realiser la maintenance de nos projecteur, or il faut quand meme les demonter des simulateur",
    granddescription: "Un projecteur a de la lumière grâce à une ampoule qu'il faut parfois changer. Nous avons défait des projecteurs de leur support pour les envoyer en réparation en prenant toutes les précautions possibles dues à leur poids, leur fragilité et au travail en hauteur.",
    ressource: " ",
    trace: [imgprojo],
    evaluation: " ",
    date: "03/01/2024",
    note: 3,
  },

  {
    id: 12,
    ancre:"maintenir",
    titretache: "Warping",
    tache:
      "quand le simulateur effectue des mouvement ou a cause de mainteance il peut arriver qu'on ai besoin de recalibrer les projecteurs",
    granddescription: "Les projecteurs diffusent leurs images sur un dome, au moindre decalage l'image devient distordue et ceci est trés visible nottament a l'image entre deux projecteurs, il faut  refaire le warping, c'est-à-dire modifier la façon dont l'image carrée est projetée pour qu'elle puisse se mettre sur une sphère.Nous affichon une mire qui consite en plein de carré, ceci permet d'alligner les carrés et s'assurer qu'il soit tout de la meme tailles",
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

