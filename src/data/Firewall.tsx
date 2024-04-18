import imgbloque from "@assetspreuve/bloque.png";
import imgfire from "@assetspreuve/fire.png";
import imgfirevlan from "@assetspreuve/firevlan.png";
import imgliste from "@assetspreuve/liste.png";
import imgvpn from "@assetspreuve/vpn.png";

const titre = "Edition de regle de firewall";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 2,
    titretache: "apprentisssage des fonction principale des firewall",
    tache: "j'ai appris a quoi sert  un firewall et comment il focntionne",
    granddescription: " ",
    ressource: " ",
    trace: [imgfire],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "decouverte des objet et des liste",
    tache:
      "pour gere des centaines d'apareil et de site et d'objet j'ai du apprenndre  utliser des liste",
    granddescription: " ",
    ressource: " ",
    trace: [imgliste],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 5,
    titretache: "debloquage de site bloqué par défault",
    tache: "j'ai appris a décloquer des site web dans un firewall",
    granddescription: " ",
    ressource: " ",
    trace: [imgbloque],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "VPN pour télétravail",
    tache:
      "certain de mes colluege peuvent travailler en teletravail, pour avoir accés au reseaux de l'entreprise nous utlisont un VPN qui crée un tunnel entre leur machine chez eux et notre reseaux, j'ai du apprendre a dépanner ce systeme a distance ",
    granddescription: " ",
    ressource: " ",
    trace: [imgvpn],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "decouverte de la vrai utlité des vlan",
    tache:
      "en réalisant un projet de renouvelement de bornes wifi j'ai apprise a manipuler des vlan et j'ai decouverte a mes depends que lorsque tout est bien parametré cela rend reduit les vecteur d'ataque cyberinformatique",
    granddescription: " ",
    ressource: " ",
    trace: [imgfirevlan],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
];

const conclu = "finito";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
