import imgbloque from "@assetspreuve/bloque.png";
import imgfire from "@assetspreuve/fire.png";
import imgfirevlan from "@assetspreuve/firevlan.png";
import imgliste from "@assetspreuve/liste.png";
import imgvpn from "@assetspreuve/vpn.png";
import imgfirevlan2 from "@assetspreuve/firevlan2.png";
const titre = "Édition de règle de pare-feu";

const intro =
  "On ne laisse pas sa maison ouverte tout le temps car on ne veut pas que n'importe qui puisse rentrer. Un réseau Internet privé fonctionne sur le même principe. On utilise un pare-feu en tant que porte pour réguler qui peut rentrer et faire quoi.";

const content = [
  {
    id: 2,
    titretache: "Apprentissage des fonctions principales des pare-feu",
    tache: "Dans l'entreprise HUTC où j'ai effectué mon alternance, j'ai dû apprendre à administrer un pare-feu qui est le centre du réseau.",
    granddescription: "Un pare-feu permet d'autoriser/bloquer le trafic entre l'extérieur et l'intérieur d'un réseau. Mais il peut arriver qu'une entreprise ait plusieurs réseaux Internet tels que celui pour les employés et celui pour les clients. Le pare-feu devient donc le cœur du réseau.",
    ressource: " ",
    trace: [imgfire],
    evaluation: " ",
    date: "01/10/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "Découverte des objets et des listes",
    tache:
      "Pour gérer des centaines d'appareils et de sites et d'objets, j'ai dû apprendre à utiliser des listes.",
    granddescription: "Une règle de base d'un pare-feu fonctionne comme ceci : l'adresse de plusieurs appareils est contenue dans une liste. Cette liste est contenue dans un groupe. Ce groupe a le droit ou non de communiquer à d'autres entités sur le même réseau ou sur des réseaux différents.",
    ressource: " ",
    trace: [imgliste],
    evaluation: " ",
    date: "15/04/2023",
    note: 3,
  },

  {
    id: 5,
    titretache: "Déblocage de site bloqué par défaut",
    tache: "J'ai appris à débloquer des sites web dans un pare-feu.",
    granddescription: "Protégeant des hackers, un pare-feu peut aussi servir de filtre de contenu. Il permet de restreindre aux utilisateurs internes l'accès à des services qui ne sont pas adaptés au travail. Il peut arriver que ces services soient mal classés. Il faut donc adapter des règles pour avoir accès à certains sites.",
    ressource: " ",
    trace: [imgbloque],
    evaluation: " ",
    date: "10/11/2022",
    note: 3,
  },

  {
    id: 6,
    titretache: "VPN pour télétravail",
    tache:
      "Un VPN (Virtual Private Network) est un système qui permet de créer un tunnel entre deux machines pour leur permettre d'échanger de manière sécurisée comme si elles étaient vraiment interconnectées entre elles.",
    granddescription: "Certains de mes collègues peuvent travailler en télétravail. Pour avoir accès au réseau de l'entreprise, nous utilisons un VPN qui crée un tunnel entre leur machine chez eux et notre réseau. J'ai dû apprendre à dépanner ce système à distance.",
    ressource: " ",
    trace: [imgvpn],
    evaluation: " ",
    date: "10/06/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "Découverte de la vraie utilité des VLAN",
    tache:
      "Un LAN (Local Area Network) est un réseau interne privé contenu par des machines. Or, pour créer plusieurs réseaux dans un seul réseau, il faut utiliser des VLAN (Virtual Local Area Network).",
    granddescription: "En réalisant un projet de renouvellement de bornes WiFi, j'ai appris à manipuler des VLAN et j'ai découvert à mes dépens que lorsque tout est bien paramétré, cela réduit les vecteurs d'attaque cyberinformatique. Ceci permet de pouvoir réaliser tout et n'importe quoi en termes de création de règles et de sécurité.",
    ressource: " ",
    trace: [imgfirevlan,imgfirevlan2],
    evaluation: " ",
    date: "15/02/2024",
    note: 3,
  },
];

const conclu = "Cet équipement est très lié à la cybersécurité. C'est une des bases pour apprendre les métiers liés à la cybersécurité. Son utilisation nécessite de connaître de vastes domaines du protocole Ethernet.";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
