import imgaltium1 from "@assetspreuve/altium1.png";
const titre = "But 2 : SAE 1";

const intro =
  "Le but de ce projet etait de realiser un ''stylo-voltemetre'',un apareil leger et pratique qui permeterait de lire la tension de n'importe quel apareil";

const content = [
  {
    id: 1,
    titretache: "documentatiion",
    tache: "Nous avons premierement realiser un document pour expliqeru ou nous en etiions au demarage du projet",
    granddescription: "dans une demarche professionnelle nous avons colelcter et agencer des informations tels qui resument: les diférentes lois et normes applicables a la prise tension, les sollution existante, et les point positif ou negetif que nous allion apport via notre projet",
    ressource: "",
    trace: [imgaltium1],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "decouverte de la programmtion pour systeme embarquée",
    tache: "nous devons utliser des carte de development stm32 qui sont des microntrolleur capabla de beaucoup de chose",
    granddescription: "pour programmer cs carte nous devonsutliser le language C, nous avons appris via des TP a utiliser ce language et ces spécificité tel que les pointeur et adresse mémoire",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },
    {
    id: 2,
    titretache: "utlisation de l'ecran lcd",
    tache: "pour afficher quelque chose sur l'ecran de notre stm32 nous devions avoir quelque chose a afficher",
    granddescription: "nous avons dabbord créer des image sur le logiciel inkscape pour avoir une demarche professionnelle de dessin vectoriel, nous avon ensuite converti cette image en texte compréensible par du code C, puis nous avons ecrit et effacer des chose sur l'ecran pour apprendre les bonnes demarche de programmation qui evite permet d'utiliser le moin de ressourcce de la machine possible",
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
    granddescription: "la tensio est une mesure phisique qui defini la diference de potenteil entre 2 point d'un circuit electronique, or nous avions besoin de cette valeur sous forme de données numerique, nous avons donc appris a utliser un composant ADC(analogue to digital converter) ",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

    {
    id: 2,
    titretache: "circuit electroniques",
    tache: "un systeme de mesure de tension doi etre capable se proteger lui meme et ses utilisateurs",
    granddescription: "nous avons realiser 2 morceau de circuit electronique:l'un permet de créer un court circuit si la tension depasse 15V, pour eviter que trop de tension rentre dans le convertisseur,l'autre permet de diviser la tension pour mesurer des tension allant jusqu'a 15V avec un circuit de mesure qui peut accepter jusqu'a 5V",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

    {
    id: 2,
    titretache: "creation de la carte electronique avec adc",
    tache: "nous avons realiser notre circuit final en reliant les diférentes parties ensemble",
    granddescription: "le convertisseur analogique vers digitale est le pluc couteux dans le produit final, nous avons donc realiser de nombreux test avant de l'incorporer dans les circuit",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },


    {
    id: 2,
    titretache: "lecture de données",
    tache: "notre carte stm32 recoit donc via son bus spi des trames de données, nous devons les exploiter",
    granddescription: "Nous avon realiser un petit algorithme permettant de lire les données, de les arrondir et de les afficher sous forme de texte, tout ces conversion ce font dans le code C que nous avons créer",
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

const conclu = "durant ce projet nous avons entierement realiser un circuit complexe liant de la programmaion embarqué de l'electronique";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
