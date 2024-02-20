import imgaltium1 from "@assetspreuve/altium1.png";
import imgdroit1 from "@assetspreuve/droit1.png";
import imgdroit2 from "@assetspreuve/droit2.png";
import imgdroit3 from "@assetspreuve/droit3.png";
import imgdroit4 from "@assetspreuve/droit4.png";
const titre = "Active directory";



const intro =
  "un active directory est une suite de logicielle installé et configuré sur un ordinateur windows, plus genereralement sur un serveur via windows serveur qui permt de manager et d'orchster tout ce qui se passe en rapport avec windows dans un reseaux privé";

const content = [
  {
    id: 1,
    titretache: "apprentissage des droit windows",
    tache:
      "pour administrer les droit j'ai dabors du apprendre quell sont ces droit et ce qu'il permettent",
    granddescription: "lorsque je suis arrivé dans mon entreprise, j'ai du dabbord apprendre le fonctionment de la confidentialité dans mon entrpreprise, nous avons des dossier contenant des chose trés inportante tel que des cours aérunautique reconnus pas des autorité qui ne doivent pas etre aceesible a tout le monde, j'ai ensuite decouverte comment tout ceci est orchzstré",
    ressource: "",
    trace: [imgdroit1,imgdroit2,imgdroit3,imgdroit4],
    evaluation: "J'ai bien compris et expliquer a me collegue",
    date: "29/08/2022",
    note: 4,
  },

  {
    id: 2,
    titretache: "création gestion des utilisateur",
    tache:
      "création de compte utlisateur qui peuvent utlisé sur tout les PC de l'entreprise",
    granddescription: "dés mon arrivé, l'ancien informaticien ma aidé a créer les droit pour mon compte qui sont aprorpié a mes tache, j'ai ainsi decouvert le focntionment et pu créer des dizaine de compte varié pour des employé ou des vacataires",
    ressource: "",
    trace: [],
    evaluation: "depuis je m'occuê de toute les créations de compte",
    date: "29/08/2022",
    note: 5,
  },

  {
    id: 3,
    titretache: "creation de dossier avec des droit spécifique",
    tache:
      "il m'arrive des fois de devoir créer des dossier avec des droit plus spécifique et sécurisé",
    granddescription: "une entreprise evolue en continu au gréer des ligslation de la clientele et des employé, c'est pour ca que j'ai du adapté certain droit dans des dossier en verifiant que suele les personne acrédité y avait accés",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "08/05/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "modification de groupe de droit",
    tache:
      "lorsque je doit modifier des droit je modifie directement les attribus des utlisteur ",
    granddescription: "pour se simplifier la tache il est courant d'utiliser des groupes, par exmple le groupe technicient ou direction qui vont tous avoir le meme droit. Cela permet d'etre sur de ne jammais mofifier les droits dans les dossier directement et d'eviter les erreurs",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "08/08/2023",
    note: 3,
  },



  {
    id: 5,
    titretache: "verification des droits pour les fichiers et dossier",
    tache:
      "verification des droit pour eviter des fuites de données",
    granddescription: "reguliemrnet et pas soucis de sécurité je doit m'assurer que chaque utlisateur est dans le bon groupe, et chaque dossier est accesible par le bon groupe pour permetre de heirachsier les droits, je doit ensuite fair par des mes obesrvation a ma direction",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "05/01/2024",
    note: 5,
  },


];

const conclu =
  "grace a ce systeme de gestion nous pouvons adminsitrer toute une flotte de PC d'utilisateru et de dossier via la meme interface ce qui est trés pratique en entreprise";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
