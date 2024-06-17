import imggithub from "@assetspreuve/github.png";
import imgrepo from "@assetspreuve/repo.png";
import imgcommit from "@assetspreuve/commit.png";

const titre = "Utilisation de Git.";

const intro =
  "Git est un système de gestion de version de texte/code qui permet de gérer les différentes versions d'un programme entre plusieurs équipes de développement.";

const content = [
  {
    id: 1,
    titretache: "Création d'un compte GitHub.",
    tache:
      "Par curiosité, je me suis renseigné sur le monde du logiciel open source et ses avantages.",
    granddescription: "J'ai découvert GitHub, une plateforme d'échange et de collaboration de code open source, qui permet à n'importe qui d'apporter ses connaissances.",
    ressource: "",
    trace: [imggithub],
    date: "",
    evaluation: "",
    note: 3,
  },

  {
    id: 2,
    titretache: "Découverte du fonctionnement de Git/GitHub.",
    tache:
      "Comme toujours, par curiosité, j'ai voulu comprendre comment les choses fonctionnaient dans leurs cœurs.",
    granddescription: "J'ai découvert que GitHub était une amélioration d'un système de gestion de code appelé Git qui permet de travailler en équipe sur le même projet de développement. Git permet de travailler sur plusieurs machines avec plusieurs versions d'un même code.",
    ressource: " ",
    trace: [],
    evaluation: "",
    date: "",
    note: 3,
  },

  {
    id: 3,
    titretache: "Création de dépôts.",
    tache:
      "J'ai donc choisi d'utiliser GitHub pour tous mes nouveaux projets de programmation.",
    granddescription: "Étant souvent seul pour développer, beaucoup de fonctionnalités m'étaient inutiles, mais le fait de pouvoir gérer proprement la liste des changements dans mes projets et le fait de pouvoir travailler sur plusieurs machines était essentiel pour moi.",
    ressource: " ",
    trace: [imgrepo],
    evaluation: "",
    date: "",
    note: 3,
  },

  {
    id: 6,
    titretache: "Découverte de la pratique du DevOps.",
    tache:
      "Dans ma recherche d'avenir professionnel, j'ai découvert les bases du métier de DevOps qui permet de faire le lien entre les développeurs et les administrateurs de serveur pour permettre de gérer sans problème le code.",
    granddescription: "J'ai découvert à un petit niveau le rôle de DevOps. En effet, un code a deux étapes : la production durant laquelle des fonctionnalités sont ajoutées et des bugs sont résolus, et la production durant laquelle le code est utilisé et tourne sur des serveurs. Il y a des méthodes et des étapes pour gérer les liens entre ces deux parties.",
    ressource: " ",
    trace: [imgcommit],
    evaluation: "",
    date: "",
    note: 3,
  },
];

const conclu =
  "Depuis que j'utilise Git, je n'ai fait aucune erreur de gestion de code. Avant, c'était toujours compliqué de gérer plusieurs versions de plusieurs codes entre plusieurs espaces de stockage en passant seulement par des fichiers et des clés USB.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
