import imgportfolio from "@assetspreuve/portfolio.png";
import imgfy from "@assetspreuve/fy.png";
import imgjsx from "@assetspreuve/jsx.png";

const titre = "Développement web Front-end";

const intro =
  "Le front design toute la partie web qui s'exécute du côté client sur le navigateur.";

const content = [
  {
    id: 1,
    titretache: "Développement de site en HTML/CSS",
    tache: "Durant mon bac général grâce à l'option numérique et science informatique, j'ai découvert le développement web.",
    granddescription: "Nous faisions des sites simples en HTML et CSS qui sont pour l'un un langage de balisage pour structurer le contenu tel que le texte et les images, et le CSS permet d'apporter du style à ces éléments.",
    ressource: "",
    trace: [],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
  {
    id: 6,
    titretache: "Choix de React",
    tache: "En me demandant comment était vraiment réalisé des sites web modernes, j'ai suivi des tutos et ai découvert React.",
    granddescription: "React est un framework pour le langage JavaScript, c'est une suite de librairies qui permet de créer des sites web dynamiques. Je peux écrire du code JavaScript qui va venir afficher directement des éléments sur le navigateur. Il n'y a plus besoin d'écrire du code HTML puis de créer du code JavaScript qui est annexé. Par exemple, tout ce site est codé via du JavaScript, qui vient directement modifier la structure objet (appelée DOM pour le WEB).",
    ressource: " ",
    trace: [imgjsx],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
  {
    id: 10,
    titretache: "Création d'un site pour un artisan",
    tache: "Un proche de moi avait besoin d'un site internet vitrine pour promouvoir son entreprise de zinguerie sur le WEB.",
    granddescription: "J'ai pu ainsi apprendre la méthode pour bien publier et référencer un site sur Google. J'ai aussi dû réfléchir pour créer un site robuste, beau et qui donne envie de contacter cet artisan pour réaliser des travaux.",
    ressource: " ",
    trace: [imgfy],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
  {
    id: 11,
    ancre:"concevoir",
    titretache: "Création de ce portfolio",
    tache: "Pour prouver nos compétences professionnelles résultantes de notre diplôme de GEII et de notre alternance, il nous a été demandé de créer un portfolio.",
    granddescription: "J'ai d'abord choisi rapidement les différents domaines que je voulais afficher sur ce portfolio pour savoir à peu près la quantité d'informations qu'il allait contenir. J'ai d'abord codé une structure qui permet d'afficher les titres, descriptions et images de façon ordonnée sur chaque page. Je lui ai ensuite appliqué un style veillant à créer un site qui soit joli et dans lequel il est simple de se 'promener'. J'ai pu ensuite rentrer très simplement seulement les différentes textes et images sans avoir à refaire des pages via du code HTML.",
    ressource: " ",
    trace: [imgportfolio],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
  {
    id: 12,
    titretache: "Découverte d'infrastructure plus optimisée",
    tache: "À force de faire des sites et d'améliorer mes précédents projets, je consolide mes compétences en créant des codes plus lisibles et plus pratiques.",
    granddescription: "Il peut arriver que j'aie codé des codes simples sans réfléchir directement à leur utilisation future. Je rencontre la plupart du temps des problèmes lorsque je veux modifier ces codes. C'est pour cela que je réfléchis au futur d'une application lorsque je la code.",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
  {
    id: 14,
    titretache: "Découverte de bibliothèques et de patterns (façon de coder) utiles",
    tache: "Je me renseigne régulièrement sur les nouveautés du développement web.",
    granddescription: "Régulièrement de nouvelles technologies sont créées et utilisées. Je choisis les 'briques' les plus utiles pour mes projets, ce qui me permet de me former dans ces technologies.",
    ressource: " ",
    trace: [],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
];

const conclu =
  "Je trouve la programmation de site web front très intéressante notamment du fait de la réflexion qu'il faut avoir par rapport à son utilisation et sa lecture, mais il faut avoir un aspect artistique que je n'ai pas encore.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
