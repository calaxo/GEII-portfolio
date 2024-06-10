import imgwifi from "@assetspreuve/wifi.png";
import imgdlink from "@assetspreuve/dlink.png";
import imgswitch from "@assetspreuve/switch.png";
import imgap from "@assetspreuve/ap.png";

import imgportsecu from "@assetspreuve/portsecu.png";
import imgvlan from "@assetspreuve/vlan.png";
import imgport from "@assetspreuve/port.png";

const titre = "Gestion de Switch Réseaux";

const intro =
  "Un switch réseau est un appareil qui permet de connecter plusieurs appareils ensemble via Ethernet.";

const content = [
  {
    id: 1,
    titretache: "Mise à jour",
    tache:
      "comme pour tout apareil informatique des mise a jour sont regulierement créer par les constructeur.",
    granddescription: "En tant qu'équipement sensible, ce genre de matériel reçoit très souvent des mises à jour pour éviter les moindres failles de sécurité. J'ai dû apprendre à les mettre à jour en respectant certaines règles.",
    ressource: "Les conseils d'un ingénieur informatique.",
    trace: [imgswitch],
    evaluation: "",
    date: "05/10/2022",
    note: 5,
  },

  {
    id: 2,
    titretache: "Gestion de la sécurité des ports",
    tache:
      "Un port Ethernet libre fait partie des premiers vecteurs d'attaque dans un réseau informatique.",
    granddescription:
      "Depuis que je suis dans des bâtiments où il y a des ports Internet en libre accès, je me suis toujours demandé pourquoi ils se bloquaient lorsque l'on branche le mauvais équipement dessus. J'ai maintenant appris à régler ce genre de sécurité, qui permet d'éviter que n'importe qui ne rentre dans un réseau privé.",
    ressource: "",
    trace: [imgportsecu],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "Gestion des VLAN",
    tache: "Sur chaque port pour chaque appareil, un VLAN est configuré.",
    granddescription:
      "Pour permettre de séparer des équipements sur des réseaux, on peut créer des sous-réseaux virtuels dans des réseaux physiques pour séparer efficacement les équipements.",
    ressource: "",
    trace: [imgvlan],
    evaluation: "",
    date: "01/02/2023",
    note: 4,
  },

  {
    id: 4,
    titretache: "Gestion des ports",
    tache:
      "Dans un réseau de particulier, il y a quelques appareils et au maximum 2 switchs. Mais dans un réseau d'entreprise, tout est plus grand.",
    granddescription:
      "Pour gérer tous les équipements dans mon entreprise, il y a au moins 2 ports Ethernet dans plus de 30 salles et il faut gérer et numéroter tous ces ports pour savoir lequel va où.",
    ressource: "",
    trace: [imgport],
    evaluation: "",
    date: "05/10/2022",
    note: 4,
  },

  {
    id: 5,
    titretache: "Installation de bornes wifi",
    tache: "Nous avons dû changer de bornes wifi.",
    granddescription:
      "Nous avons récemment changé de borne wifi, ce qui m'a permis de vérifier mes compétences en gestion de réseaux car ces bornes sont gérées à distance via un serveur et différents VLAN.",
    ressource: "",
    trace: [imgwifi, imgdlink, imgap],
    evaluation:
      "Le réseau fonctionne bien et c'est du matériel dont nous sommes maintenant propriétaires.",
    date: "04/01/2024",
    note: 5,
  },
];

const conclu =
  "C'est le cœur de tous les réseaux informatiques : l'interconnexion. Mais il faut qu'il y ait des règles strict liées a la cybersecurité pour que tout ce passer bien";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
