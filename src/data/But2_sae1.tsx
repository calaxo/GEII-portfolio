import imgaltium1 from "@assetspreuve/altium1.png";
const titre = "But 2 : SAE 1";

const intro =
  "Le but de ce projet etait de realiser un ''stylo-voltemetre'',un apareil leger et pratique qui permeterait de lire la tension de n'importe quel apareil";

const content = [
  {
    id: 1,
    titretache: "documentatiion",
    tache: "Nous avons premierement realiser un document pour expliqeru ou nous en etiions au demarage du projet",
    granddescription: "dans une demarche professionnelle nous avons colelcter et agencer des informations tels qui resument: les diférentes lois applicable a la prise tension, les sollution existante, et les point positif ou negetif que nous allion apport via notre projet",
    ressource: "",
    trace: [imgaltium1],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "decouverte de la programmtion pour systeme embarquée",
    tache: "j'ai aider mes colluege a router la carte sur altium",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },
    {
    id: 2,
    titretache: "utlisation de l'ecran lcd",
    tache: "image vectorielle inteface ihm inkscape et transfert d'image via conversion",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

    {
    id: 2,
    titretache: "implementation d'une fonctione suplementaire",
    tache: "nous nous somme rendu compte que notre ecran n'affichait pas beaucoup d'information par rapport a la place que nous disposion,nous avon chois d'implementer une fonction suplementaire",
    granddescription: "en cours nous avions deja utlisé des voltemere analoguique qui affichait  la tension via une aiguille qui tournait sur un cadran,<br></br> nous avions aussi realiser en code python une horloge numerique, ennous aidans de nos idée et des sollutions tehcnique nous avons ajouter un ecran analogique sur notre voltemter qui permet en plus d'affiche la tnesion sou forme digitale' d'afficherune aiqguille qui bouge en focntin du courant",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },


    {
    id: 2,
    titretache: "conversion de tension en valeur numerique",
    tache: "nous avons du apprendre a utliser un convertisseur analogique vers numerique pour lire une tension et la convertir en valeur numerique",
    granddescription: "en cours nous avions deja utlisé des voltemere analoguique qui affichait  la tension via une aiguille qui tournait sur un cadran,<br></br> nous avions aussi realiser en code python une horloge numerique, ennous aidans de nos idée et des sollutions tehcnique nous avons ajouter un ecran analogique sur notre voltemter qui permet en plus d'affiche la tnesion sou forme digitale' d'afficherune aiqguille qui bouge en focntin du courant",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

    {
    id: 2,
    titretache: "circuit electroniques",
    tache: "protection de circuit et conversion pour abbaiser la tension mais quant meme pouvoir lire la tension",
    granddescription: "diode zener et division via résistance car premier composant cher que nous utlisions",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },



    {
    id: 2,
    titretache: "lecture de données",
    tache: "données recu en bit sortie en tension avec moyenage",
    granddescription: "en cours nous avions deja utlisé des voltemere analoguique qui affichait  la tension via une aiguille qui tournait sur un cadran,<br></br> nous avions aussi realiser en code python une horloge numerique, ennous aidans de nos idée et des sollutions tehcnique nous avons ajouter un ecran analogique sur notre voltemter qui permet en plus d'affiche la tnesion sou forme digitale' d'afficherune aiqguille qui bouge en focntin du courant",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "reglage des probleme graphique et logiciel",
    tache:
      "Nous avons passer du temp a pauffiner notre interface pour la rendre plus  juste et lisible",
    granddescription: "Nous sommes rendu compte que nous avions certains bug graphique avec l'ecran du stm32 et que nour devions realiser des ''arrangement'' avec nos valeur pour ne pas avoir trop de chiffre significatif et que notre auiguille de mesure aiile bien jusqu'aux extreme de notre cadran",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },
];

const conclu = "";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
