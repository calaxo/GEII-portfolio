import imgdockerdk from "@assetspreuve/dockerdk.png";
import imgxrdp from "@assetspreuve/xrdp.png";
import imgrpi1 from "@assetspreuve/rpi1.png";
import imgrpi2 from "@assetspreuve/rpi2.png";
import imgrpi3 from "@assetspreuve/rpi3.png";

const titre = "Introduction aux base de linux";

const intro =
  "Linux est un systeme d'exploitation libre et gratuit il est beacoup moin complexe que windows mais plus compliqué a utliser, il peut etre dans des carte electronique, des serveur, et tout ce qui a un processeur";

const content = [
  {
    id: 1,
    titretache: "Installation et configuration de Raspberry Pi ",
    tache:
      "j'ai eu une carte raspberry pour esasyer de fair des porjet et j'ai été confronté pour la premier fois a linux, a force j'ai",
    granddescription: "ceci est une grande description",
    ressource: "description1",
    trace: [imgrpi1, imgrpi2, imgrpi3],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "Découverte de différentes distributions de Linux",
    tache:
      "je me suis ensuite rensigner sur les base de linux pour le grand public: la raison de diférentes distribution",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "Tentative de mise à jour de la carte réseau via Ubuntu",
    tache:
      "a mon alternance je me suis rendu compte qu'un serveur linux etait plus pratique que windows pour nombre d'avantage mais que c'est beucoup plus comple a utliser,j'ai galeere pendant 1 semaine pour seuelemt metre un pilotes a jour",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 5,
    titretache: "Installation dun service de bureau a distance",
    tache:
      "ce fut ma premiere tache pour pour pouvoir controller un serveur linux a distance via ethernet",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgxrdp],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "Installation de Docker",
    tache: "",
    granddescription: "ceci est une grande description",
    ressource:
      "j'ai du me ploger dans les droits et fichier complexe pour pouvoir fair unitanlaltion de docker propre et pratique",
    trace: [imgdockerdk],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },
];

const conclu =
  "j'ai toujour trouver que linux etait moin bien, mais depuis que je comprend qu'il est trés util pour les serveur car il est résilients";

const data = {
  titre,
  intro,
  content,
  conclu,
};

export default data;
