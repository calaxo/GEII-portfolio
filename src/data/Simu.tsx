import imgmtn from "@assetspreuve/mtn.png";
import imgsimaint from "@assetspreuve/simaint.png";
import imgclim from "@assetspreuve/clim.png";
import imgdijoncteur from "@assetspreuve/dijoncteur.png";
import imgprojo from "@assetspreuve/projo.png";
import imgmire from "@assetspreuve/mire.png";
import imgpanne from "@assetspreuve/panne.png";
import imgmeteo from "@assetspreuve/meteo.png";
import imgftd from "@assetspreuve/ftd.png";
import imgffs from "@assetspreuve/ffs.png";
import imgios from "@assetspreuve/ios.png";
import imgmtbf from "@assetspreuve/mtbf.png";
import imgplanche from "@assetspreuve/planche.png";
import img3d from "@assetspreuve/3d.png";
import imgneige from "@assetspreuve/neige.png";
import imgrack from "@assetspreuve/rack.png";
const titre = "Maintenance en condition opérative de simulateur d'hélicoptère.";

const intro =
  "Un simulateur permet d'effectuer de vrais vols sans risque et de pouvoir simuler les pires pannes possibles sans risque pour les vies ou le matériel.";

const content = [
  {
    id: 1,
    titretache: "Apprentissage du fonctionnement.",
    tache:
      "Lors des premières semaines de mon alternance dans l'entreprise HUTC, j'ai d'abord découvert les différentes parties des simulateurs.",
    granddescription: "J'ai dû me familiariser à reconnaître ces parties : énergie, calculateur, mouvement, cockpit, visuel.",
    ressource: " ",
    trace: [imgftd,imgffs,imgplanche],
    evaluation: " ",
    date: "06/09/2022",
    note: 3,
  },
  {
    id: 2,
    titretache: "Démarrage.",
    tache:
      "J'ai appris grâce à mes collègues à démarrer le simulateur et à le préparer pour les séances de la journée.",
    granddescription: "Tous les matins en tant que techniciens simulateur, notre rôle est de préparer les simulateurs en les allumant, nettoyant et vérifiant leur bon fonctionnement.",
    ressource: "",
    trace: [imgdijoncteur],
    evaluation: " ",
    date: "01/10/2022",
    note: 3,
  },

  {
    id: 3,
    titretache: "Maintenance.",
    tache:
      "Des systèmes aussi techniques nécessitent une maintenance adaptée et organisée.",
    granddescription:
      "N'ayant encore jamais participé à de la maintenance aussi complexe, j'ai dû apprendre à raisonner, à comprendre grâce aux procédures, à communiquer avec mon équipe et à participer aux différentes tâches.",
    ressource: "",
    trace: [imgmtn,img3d,imgrack],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "Simaint.",
    tache:
      "Nous en avons parlé en cours, mais j'ai pu découvrir les concepts avec des choses réelles.",
    granddescription:
      "Nous avons un logiciel de GMAO (gestion de la maintenance assistée par ordinateur) qui nous permet de suivre le stock de pièces, les maintenances et tout ce qui peut y être lié. J'ai dû apprendre à m'en servir.",
    ressource: "",
    trace: [imgsimaint,imgmtbf],
    evaluation: " ",
    date: "05/10/2022",
    note: 3,
  },

  {
    id: 5,
    titretache: "Découverte du système de climatisation.",
    tache:
      "Lors d'un démarrage du simulateur seul un matin, il y a eu une panne de climatisation, ce qui a causé une surchauffe des systèmes. Durant la panne et après, mon maître d'apprentissage m'a expliqué comment fonctionnaient les différents systèmes des simulateurs.",
    granddescription: "Ce genre de panne imprévue permet d'apprendre 'sur le tas' le fonctionnement et l'utilité de certains systèmes complexes.",
    ressource: " ",
    trace: [imgclim],
    evaluation: " ",
    date: "01/04/2023",
    note: 3,
  },



  {
    id: 7,
    ancre:"verifier",
    titretache: "Pannes.",
    tache:
      "Les pannes sont le cœur de la simulation, c'est elles qui permettent aux pilotes de se préparer à toutes éventualités.",
    granddescription: "J'ai appris à déclencher et gérer les pannes de l'hélicoptère. Cela nécessite de connaître les systèmes principaux d'un hélicoptère et de savoir à peu près ce que les pannes provoquent.",
    ressource: "",
    trace: [imgpanne],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "Météo.",
    tache:
      "En plus des pannes, la météo est contrôlable, notamment pour faire du vol aux instruments. Pour certaines formations, il faut que les pilotes apprennent à manier l'hélicoptère malgré une visibilité nulle.",
    granddescription: "Dans un simulateur, toute la météo est contrôlable, de la neige aux tempêtes maritimes en passant par le vent et les orages. Il faut pour cela connaître la météo et ses termes liés à l'aéronautique.",
    ressource: "",
    trace: [imgmeteo,imgneige],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
{
  id: 9,
  titretache: "Premier vol en tant 'qu'instructeur'.",
  tache:
    "Les différents éléments que j'avais appris étaient surtout utiles pour de la maintenance ou de la présentation des simulateurs. Lors d'un test pour une maintenance, pour un test technique, j'ai été amené à gérer un exercice avec un véritable pilote d'hélicoptère.",
  granddescription: ". Je devais gérer chaque élément lié à la simulation de l'hélicoptère en temps réel en essayant de comprendre tous les termes et aspects d'un vol tel que celui-ci. Le tout en prenant des notes sur les différents éléments défaillants.",
  ressource: " ",
  trace: [imgios],
  evaluation: " ",
  date: "09/11/2023",
  note: 3,
},

{
  id: 11,
  titretache: "Remplacement de projecteur.",
  tache:
    "Une entreprise externe vient réaliser la maintenance de nos projecteurs, or il faut quand même les démonter des simulateurs.",
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
  titretache: "Warping.",
  tache:
    "Quand le simulateur effectue des mouvements ou à cause de maintenance, il peut arriver qu'on ait besoin de recalibrer les projecteurs.",
  granddescription: "Les projecteurs diffusent leurs images sur un dôme, au moindre décalage l'image devient distordue et ceci est très visible notamment à l'image entre deux projecteurs, il faut refaire le warping, c'est-à-dire modifier la façon dont l'image carrée est projetée pour qu'elle puisse se mettre sur une sphère. Nous affichons une mire qui consiste en plein de carrés, ceci permet d'aligner les carrés et de s'assurer qu'ils soient tous de la même taille.",
  ressource: " ",
  trace: [imgmire],
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

