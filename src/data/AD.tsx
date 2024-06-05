import imgdroit1 from "@assetspreuve/droit1.png";
import imgdroit2 from "@assetspreuve/droit2.png";
import imgdroit3 from "@assetspreuve/droit3.png";
import imgdroit4 from "@assetspreuve/droit4.png";

const titre = "Active Directory";

const intro = "Un Active Directory est une suite de logiciels installée et configurée sur un ordinateur Windows, plus généralement sur un serveur via Windows Server, qui permet de gérer et d'orchestrer tout ce qui se passe en rapport avec Windows dans un réseau privé.";

const content = [
  {
    id: 1,
    titretache: "Apprentissage des droits Windows",
    tache: "Pour administrer les droits, j'ai d'abord dû apprendre quels sont ces droits et ce qu'ils permettent.",
    granddescription: "Lorsque je suis arrivé dans mon entreprise, j'ai dû d'abord apprendre le fonctionnement de la confidentialité. Nous avons des dossiers contenant des choses très importantes telles que des cours aéronautiques reconnus par des autorités qui ne doivent pas être accessibles à tout le monde. J'ai ensuite découvert comment tout ceci est orchestré.",
    ressource: "",
    trace: [imgdroit1, imgdroit2, imgdroit3, imgdroit4],
    evaluation: "J'ai bien compris et expliqué à mes collègues.",
    date: "29/08/2022",
    note: 4,
  },
  {
    id: 2,
    titretache: "Création et gestion des utilisateurs",
    tache: "Création de comptes utilisateurs qui peuvent être utilisés sur tous les PC de l'entreprise.",
    granddescription: "Dès mon arrivée, l'ancien informaticien m'a aidé à créer les droits pour mon compte, appropriés à mes tâches. J'ai ainsi découvert le fonctionnement et pu créer des dizaines de comptes variés pour des employés ou des vacataires.",
    ressource: "",
    trace: [],
    evaluation: "Depuis, je m'occupe de toutes les créations de comptes.",
    date: "29/08/2022",
    note: 5,
  },
  {
    id: 3,
    titretache: "Création de dossiers avec des droits spécifiques",
    tache: "Il m'arrive parfois de devoir créer des dossiers avec des droits plus spécifiques et sécurisés.",
    granddescription: "Une entreprise évolue en continu au gré de la législation, de la clientèle et des employés. C'est pour cela que j'ai dû adapter certains droits dans des dossiers en vérifiant que seules les personnes accréditées y avaient accès.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "08/05/2023",
    note: 3,
  },
  {
    id: 4,
    titretache: "Modification de groupes de droits",
    tache: "Lorsque je dois modifier des droits, je modifie directement les attributs des utilisateurs.",
    granddescription: "Pour se simplifier la tâche, il est courant d'utiliser des groupes, par exemple le groupe technicien ou direction, qui vont tous avoir les mêmes droits. Cela permet d'être sûr de ne jamais modifier les droits dans les dossiers directement et d'éviter les erreurs.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "08/08/2023",
    note: 3,
  },
  {
    id: 5,
    titretache: "Vérification des droits pour les fichiers et dossiers",
    tache: "Vérification des droits pour éviter des fuites de données.",
    granddescription: "Régulièrement, et par souci de sécurité, je dois m'assurer que chaque utilisateur est dans le bon groupe et que chaque dossier est accessible par le bon groupe pour permettre de hiérarchiser les droits. Je dois ensuite faire part de mes observations à ma direction.",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "05/01/2024",
    note: 5,
  },
];

const conclu = "Grâce à ce système de gestion, nous pouvons administrer toute une flotte de PC d'utilisateurs et de dossiers via la même interface, ce qui est très pratique en entreprise.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
