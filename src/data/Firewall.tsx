import imgbloque from "@assetspreuve/bloque.png";
import imgfire from "@assetspreuve/fire.png";
import imgfirevlan from "@assetspreuve/firevlan.png";
import imgliste from "@assetspreuve/liste.png";
import imgvpn from "@assetspreuve/vpn.png";

const titre = "Edition de regle de firewall";

const intro =
  "on ne laisser pa sa maison ouverte tout le temp car on ne veut pas que n'importe qui puisse rentrer, un reseaux internet privé fonctionne sur le meme principe, on utliser un pare-feu en tant que que porte pour reguler qui peut rentrer et fair quoi";

const content = [
  {
    id: 2,
    titretache: "apprentisssage des fonction principale des firewall",
    tache: "dans l'entreprise HUTC ou j'ai effectuer mon alternance j'ai du apprendre a administrer un pare-feu que qui est le centre du reseaux ",
    granddescription: "un pare-feu permet d'autoriser/bloquer le trafic entre l'exterieur et l'interieur d'un reseaux mais il peut arriver qu'une entreprise ai plusieur reseaux internet tel que celui pour les employé et celui pourles client, le pare-feu devient donc le coeur du reseaux",
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
    granddescription: "une regle de base d'un pare-feu fonctionen comme ceci, l'adresse de plusieur apareil sont contenue dans une liste, cette liste est contenus dans un groupe, ce groupe a le droit ou nom de comnuqiuer a d'autre entité sur le meme reseaux ou sur un reseaux diferents",
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
    granddescription: "protegeant des hacker un pare-feu peu aussi servir de filtre de contenu, il permet de restreindre aux utlisateur interne l'accées a des service qui ne sont pas adapté au trvail, il peut arriver que ces services soit mal classé, il faut donc adapter des regles pour avoir accés a certain sites",
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
      "un VPN( Virtual Private Network) est un systeme qui permet de creer un tunnel entre deux machine pour leur permetre d'echange de maniere sécurisé comme si elle etait vraiment interconectées entre elle",
    granddescription: "certain de mes colluege peuvent travailler en teletravail, pour avoir accés au reseaux de l'entreprise nous utlisont un VPN qui crée un tunnel entre leur machine chez eux et notre reseaux, j'ai du apprendre a dépanner ce systeme a distance ",
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
      "un LAN(local area network) est un reseaux interet privé contenu par des machines, or pour créer plusieur reseaux dans un seul reseaux il faut utliser des VLAN(Virtual Local Area Network)",
    granddescription: " en réalisant un projet de renouvelement de bornes wifi j'ai appris a manipuler des vlan et j'ai decouverte a mes depends que lorsque tout est bien parametré cela rend reduit les vecteur d'ataque cyberinformatique,ceci permet de pouvoir realiser tout et n'importe quoi en terme de creatino de regle et de sécurité",
    ressource: " ",
    trace: [imgfirevlan],
    evaluation: " ",
    date: "01/02/2023",
    note: 3,
  },
];

const conclu = "cet equipement est trés lié a la cybersécurité, c'est une des base pour apprendre les metier liées a la cybersécurité, son utlisation nécessite de conaitre de vaste domaine du protocol Ethernet";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
