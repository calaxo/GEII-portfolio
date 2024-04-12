import imgwifi from "@assetspreuve/wifi.png";
import imgdlink from "@assetspreuve/dlink.png";
import imgswitch from "@assetspreuve/switch.png";
import imgap from "@assetspreuve/ap.png";

import imgportsecu from "@assetspreuve/portsecu.png";
import imgvlan from "@assetspreuve/vlan.png";
import imgport from "@assetspreuve/port.png";

const titre = "gestion de switch Réseaux";

const intro =
  "un switch reseaux est un appareil qui permet de connecter plusieurs apareil ensemble via ethernet";

const content = [
  {
    id: 1,
    titretache: "Mise à jour",
    tache:
      "ent tan qu'equipemtn snsible ce genre de materiel recois trés souvent des mise a jour pour eviter les moindre faille de sécurité, j'ai du apprendre a les mettre a jour en respectant certaine regles",
    granddescription: "ceci est une grande description",
    ressource: "",
    trace: [imgswitch],
    evaluation: "",
    date: "05/10/2022",
    note: 5,
  },

  {
    id: 2,
    titretache: "Gestion de la sécurité des ports",
    tache:
      "un port ethernet libre fait partie des premier vecteur d'attaque dans un reseaux informatique",
    granddescription:
      "despui que je suis dans des batiment ou il y a des port internet en librs accés je mesuis toujour demandé pour quoi ils se bloquait lorsque on branche le mauvais équipement dessu, j'ai mainteantn aprrise a regler ce gerne de sécurité qui permet d'eviter que n'import qui rentre dans un resaeux privé",
    ressource: "",
    trace: [imgportsecu],
    evaluation: "",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "Gestion des VLAN	",
    tache: "sur chaque port pour chaque apareil un VLAN est configuré",
    granddescription:
      "pour permetre de separer des equipemtn sur des reseaux on peut crér des sous reseaux virtuel dans des reseaux phisyqye pour separer effecicatent les équipement",
    ressource: "",
    trace: [imgvlan],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 4,
  },

  {
    id: 4,
    titretache: "Gestion des ports",
    tache:
      "dans un reseaux de particulier il ya a quelque apareil et au maximum 2 switch mais dans une reseaux d'entreprise tout est plus grand",
    granddescription:
      "pour gere tout les equipemtn dans mon entreprise il y a au moins 2 port ethernet dans plus de 30 salle et ilfaut gerer et numeroté tout ces port pour savoir lequel va ou",
    ressource: "on a appris a faire des base de données",
    trace: [imgport],
    evaluation: "",
    date: "05/10/2022",
    note: 4,
  },

  {
    id: 5,
    titretache: "isntallation de bornes wifi",
    tache: "nous avons du changer de bornes wifi",
    granddescription:
      "nous avons recement changer de borne wifi ce qui m'a permis de vierifeir mes compétencce en genstion de reseaux car ces bornes sont gerer a distance via un seruveru via diferetne VLAN",
    ressource: "",
    trace: [imgwifi, imgdlink, imgap],
    evaluation:
      "le reseaux fonctionne bien et c'est du materiel dont nous sommes maintenant proprietaire",
    date: "04/01/2024",
    note: 5,
  },
];

const conclu =
  "c'est le coeur de tout les reseaux informatique: l'interconnection mais il faut qu'il y est des regles";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
