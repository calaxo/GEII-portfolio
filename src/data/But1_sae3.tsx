import imgtrieur1 from "@assetspreuve/trieur1.png";
import imgtrieur2 from "@assetspreuve/trieur2.png";
const titre = "But 1 : SAE 3";

const intro =
  "durant ce projet notre mission etait de créer la prtie elctronique d'un systeme de trireur de dechet via un capteur inductif et un moteur";

const content = [
  {
    id: 1,
    titretache: "creation d'un algorigramme",
    tache:
      "nous avons premierement créer un algorigramme pour savoir les diférentes tache que nous allions avoir a faire",
    granddescription: "Notre role etait de savoir de quelle matiere etait faites diferent dechets tel que des cannette en aluminium et des bouteille ne plastique, via des capteur, nous avons realiser pour ceci un shéma logique qui resulte en ceci,si un objet et detecte les moteur doivent d'actiner dans un sens, et si un objet est detecté et que  notre capteur inductif(sensible au metal) etait activé il fallait fair tourner les moteur dans l'autre sens",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "utilisation du capteur inductif",
    tache:
      "nous avons appris a tuliser un capteur industruel qui permert de detecter la présence de metal",
    granddescription: "Notre professeur nous a distribuer des capteur inductif, et nous avons du nous debrouiller, c'etait des capteur industriel que l'on peut retrouver dans des machine d'usine",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache:
      "abaissement de la tension logique de sortie du capteur inductif",
    tache:
      "nous avons créer un circuit electronique simple pour nous permtre d'uliser un capteur induisriel avec de circuit utlisant des tension plus faibles",
    granddescription: "Notre capteur etait fair pour fonctionner avec automates industriel en 25V, or notre circuit allait fonctionner en 5V, grace a nos base de compétence d'electronhique nosu avons realiser un interface entre ces deux environment",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "utilisation du moteur",
    tache:
      "comme vu lors de nos premier projet nous avons redécouvert l'ulisation d'une carte de controlle de moteur",
    granddescription: "dans un precedent projet nous avions appris a utliser des moteur via des signaux logique créer par des equipement de laboratoire,cette fois ci nous allions devoir realiser ces signaux logique dans nos prorpe circuit electronique",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 5,
    titretache: "creation de petit circuit logique",
    tache:
      "nous avons créer des circuit logique qui pemetre de fair un choix sur le sens de rotation du moteur selon les infos donnée par les capteurs",
    granddescription: "nous avons pour ceci utliser des équation logique qui permete de passer de l'algorithme precedement créer a des circuit logique simple via des operation tel que et/ou, ce sont des porte logique",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "verification et amelioration",
    tache:
      "nous avons chercher a ameliore chaque fonctionr pour ameliore le projet",
    granddescription: "pour etre sur que le projet allait marcher a la fin nous avons deja commencer a ameliorer nos circuit pour otenir les signaux electronique les plus propre possible",
    ressource: "",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "interconnection des circuits",
    tache:
      "nous avons relié nos diférente circuit un a un en verifiant que tout fonctionne bien a chque fois ",
    granddescription: "",
    ressource: "",
    trace: [imgtrieur1, imgtrieur2],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },





  {
    id: 10,
    titretache: "interconexion avec la maquette",
    tache:
      "nous avons utliser une maquette de prototypage pour nous permetre de virifer que notre systeme etait contionnel",
    granddescription: "",
    ressource: "Nos professuer on créer une maquette qui contenait seulement les moteur et les capteur, nous avons pu realiser la premiere utilisation réel de nos circuit,nous avons conclu que les systeme marchait trés bien",
    trace: [],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },
];

//https://bv.univ-poitiers.fr/access/content/user/fvila/portfolio/but3/missions/m1/index.html

const conclu = "ce projet nous raprochait beaucoup plus de systeme industriel que electronique, malgrés le fait qu'il y en avait besoin de nos competences en eletronique du demarage jusque a la fin";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
