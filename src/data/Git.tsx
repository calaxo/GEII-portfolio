import imggithub from "@assetspreuve/github.png";
import imgrepo from "@assetspreuve/repo.png";
import imgcommit from "@assetspreuve/commit.png";

const titre = "Utlisation de Git";

const intro =
  "git est un systeme de gestion de version de texte/code qui permet de gerer les diférentes version d'un programme entre plusieur équipe de developement";

const content = [
  {
    id: 1,
    titretache: "creation d'un compte github",
    tache:
      "par curiosité je me suis renseigné sur le monde du logiciel de l'open source et ses avantage",
    granddescription: "J'ai découvert github, une platforme d'echange et de collaboration de code open source, qui permet a n'importe qui d'apporter ces connaissance",
    ressource: "",
    trace: [imggithub],
    date: "",
    evaluation: "",
    note: 3,
  },

  {
    id: 2,
    titretache: "decouverte du fonctionement de GIT/Ghithub",
    tache:
      "comme toujour par curiosité j'ai voulu comprendre comment les chose foncionait en leurs coeurs",
    granddescription: " j'ai  decouvert que github etait une amelioration d'un systeme de gestion de code appelé git qui permet de travailleren équipe sur le meme projet de developement, git permet de travailler sur plusieur machines avec plusieur version d'un meme code ",
    ressource: " ",
    trace: [],
    evaluation: "",
    date: "",
    note: 3,
  },

  {
    id: 3,
    titretache: "création de repositori",
    tache:
      "J'ai donc choisi d'utiliser github pour tout mes nouveaus projet de programmation",
    granddescription: "etant souvent tou seul pour developper, plein de fontion m'etait inutile, mais le fait de pouvoir gerer proprement la liste des changement dans mes projets et le fait de pouvoir travailler sur plusisuer machine etait essentiel pour moi",
    ressource: " ",
    trace: [imgrepo],
    evaluation: "",
    date: "",
    note: 3,
  },

  {
    id: 6,
    titretache: "decouverte de la pratique du DevOps",
    tache:
      "dans ma recherche d'avenir professionnel j'ai decouverte les base du metier de devops qui permet de fair le lien entre les developpeur et les admisntrateur de serveur pour permetre de gerer sans probleme le code",
    granddescription: "j'ai decouvert a un petit niveau le role de devops, en effet un code a deux etape: la production durant laquelle des fonction sont ajouter et des beug sont resolues, et la production durant lequel les code est utlisé et tourne sur des serveur, il y'a des methode et des etapes pour gerer les liens entre ces deux partie",
    ressource: " ",
    trace: [],
    evaluation: "",
    date: "",
    note: 3,
  },


];

const conclu =
  "depuis que j'utlise git je n'ai fait aucune erreur de gestion de code, avant c'etait tjour complis de gerer plusieur version de plusieur code entre plursieur espace de stockage en passant seulement par des fichier et des clé usb";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
