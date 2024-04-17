import imgaltium1 from "@assetspreuve/altium1.png";

import imgftd1 from "@assetspreuve/ftd1.png";
import imgmfd1 from "@assetspreuve/mfd1.png";
import imghelico1 from "@assetspreuve/helico1.png";
import imgturbine from "@assetspreuve/turbine.png";
import imgefb from "@assetspreuve/efb.png";
import imgcafe from "@assetspreuve/cafe.png";

const titre = "connaissance Aéronautique";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 1,
    titretache: "decouverte de l'interieur d'un helicoptere",
    tache:
      "durant mes premiere semaine en aleternance je me susi familiarisé avec le batiment puis les simualteur puis l'interieur des simualteur qui est en tout poin un cockpit d'hlicoptere",
    granddescription: "Je n'avais jammais pu voir un helicoptere d'aussi pres, c'est une machine complexe qui est trés interessante a decouvrir",
    ressource: "",
    trace: [imghelico1],
    evaluation: "",
    date: "15/07/2022",
    note: 3,
  },

  {
    id: 2,
    titretache: "decouverte des commande principale",
    tache:
      "lors des démarage nous devont piloter le simualteur pour pouvoir tester si tout les commande reponde bien",
    granddescription: "je pensait que les commande serait similaire a celle d'un avion mais j'ai decouvert qu'il y a le manche cyclique dans la main droite, la commande de puissance dans la main gauche et les palonier au pieds, qui sont trés sensible,meme si on ne le touche le moindre faite de penser les fair bouger bouger peut influer sur la postion de l'helicoptere",
    ressource: "mes collegue de l'équipe de technicien simulateur",
    trace: [],
    evaluation: "",
    date: "15/07/2022",
    note: 3,
  },

  {
    id: 3,
    titretache: "decouverte du pilote automatique",
    tache:
      "la plupart du temp le pilote utlise un pilote automatique, qui permet d'aider le pilote a controller la machine,",
    granddescription: " il permet d'adoucier les commande et de mieux comprendre les action du pilote, avec des parametre il peut aussi totalement ontroller l'helicotpere",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "15/07/2022",
    note: 3,
  },

  {
    id: 4,
    titretache: "decouverte des approche ILS",
    tache:
      "pour la procédure de demarage nous devont faire une approche ILS ",
    granddescription: "ou l'helciotpere se fait guider par des blaise au sol situé au devant la piste d'atterisage, plus tard en visitant la tour de controlle et en discutant avec des intructeur j'ai dcouverte comment focntioonait vraiment ce systeme",
    ressource: "mes collegue de l'équipe de technicien simulateurs",
    trace: [],
    date: "15/07/2022",
    note: 3,
  },

  {
    id: 5,
    titretache: "piloter un helicoptere(simulateur)",
    tache:
      "lors de visite ou de test aprés une mainteance je peux tester le simualateur en volant eau dessu d'angoulememe et me promenant pour virifier que tout marche bien",
    granddescription: "",
    ressource: "",
    trace: [imgftd1],
    evaluation: "",
    date: "2022",
    note: 3,
  },

  {
    id: 6,
    titretache: "utiliser les MFD",
    tache:
      "Les Multi Fonction Display permettent d'aider le pilote en affichant ce qui est nécessaire tel que les cap l'altitue et les ligne d'horizon avec une interface plus compréhensible que les equipent analogique",
    granddescription: "ceci est une grande description",
    ressource: "",
    trace: [imgmfd1],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "perfectionement des atterissage et decollage",
    tache:
      "j'au dcouverte diferente manipualtion en vol tel que le sur place l'autorotation et des chose plus complexe qui permete de savoir comment un helicopter focntinne vraiemnt",
    granddescription: "ceci est une grande description",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "apprentisage de terme aéronautique",
    tache:
      "lors de discussion avec des coluege ou des pilotes j'ai commencer a comprendre leur language parsemé de mot complique qui est tujour utlise dans une entreprise en lien avec l'aéronautique",
    granddescription: "",
    ressource: "",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 9,
    titretache: "decouverte du fonctionement interne des helicoptere",
    tache:
      "en ecoutant des anecdote de vol et en demandant des conseil j'ai couverte les diferente systeme complex d'un helicoptere te lque les radar, les ballon floteur d'urgence, les extincteur,etc...",
    granddescription: "",
    ressource: "",
    trace: [imgturbine],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },



  {
    id: 11,
    titretache: "suivi de l'actualité et des nouveau modele d'helico",
    tache:
      "durant mon alternance j'ai aussi adoré suivre les derniere nouveauté du monde aérnautique est tjour passionant due aux evolution technique",
    granddescription: "j'ai pu suivre ce qui ce passe dans le monde fermé de l'aéraunotique qui est trés lié a la géopolitique de par les contract avec les pays et les force armée",
    ressource: "tout les personnes du domaine",
    trace: [imgcafe],
    evaluation: "",
    date: "2023",
    note: 3,
  },
];

const conclu =
  "l'aéronautique est vitale aussi bien pour les force armées que pour le monde civil et il permet au monde moderne de fonctionner, je trouve ca passionant";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
