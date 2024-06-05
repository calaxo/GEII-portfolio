const titre = "Développement Web Back-end";

const intro =
  "La partie back désigne tout le programme qui fonctionne sur un serveur et qui va communiquer avec le client. Si tout est sécurisé, le client n'a jamais accès au code sur le serveur.";

const content = [
  {
    id: 1,
    titretache: "Utilisation de Node.js pour servir de simple site statique",
    tache:
      "Utilisation de Node.js, qui est une application permettant de faire fonctionner du code JavaScript dédié aux navigateurs web sur un serveur.",
    granddescription: "J'ai découvert Node.js en voulant créer des bots pour communiquer avec des utilisateurs sur des réseaux de communication. Depuis, j'ai découvert la fonctionnalité principale de cette plateforme de développement : faire fonctionner des services web en utilisant le langage de programmation JavaScript.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "",
    note: 3,
  },
  {
    id: 3,
    titretache: "Envoi de données statiques plus sécurisé",
    tache:
      "J'ai découvert que simplement fournir le site web via Node.js était dangereux, et j'ai donc appris comment fonctionne la sécurité des pages internet.",
    granddescription: "Il existe de nombreuses failles sur les sites internet qui permettent d'accéder à des données sensibles. Pour cela, il existe des paramètres et des méthodes de programmation à respecter.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "",
    note: 3,
  },
  {
    id: 4,
    titretache: "Création d'API simple",
    tache:
      "Une API permet à des programmes tels que des applications côté client ou d'autres services de communiquer avec un serveur via des méthodes définies et sécurisées.",
    granddescription: "Aucun service web ne laisse un accès directement ouvert à son code ou à ses données. Il faut donc passer par des API pour échanger avec le serveur via des méthodes prévues pour.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "",
    note: 3,
  },
  {
    id: 5,
    titretache: "Création d'API avec manipulation de données",
    tache:
      "Dans le web moderne, le backend permet de faire le lien entre le code client et les bases de données en s'assurant qu'aucune des deux ne puisse communiquer en liaison directe sans sécurité.",
    granddescription: "Une application backend moderne sert les fichiers nécessaires à l'affichage sur le navigateur du client et peut échanger des données avec lui. Il faut ensuite réaliser des opérations sur ces données pour ensuite les faire interagir avec une base de données.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "",
    note: 3,
  },
];

const conclu =
  "C'est la première brique qui permet à l'internet moderne de fonctionner : les serveurs et leurs programmes.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
