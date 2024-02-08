import imgaltium1 from "@assetspreuve/altium1.png";

import imgaltium2 from "@assetspreuve/altium2.png";

const titre = "But 2 : SAE 2";

const intro =
  "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII.";

const content = [
  {
    id: 1,
    titretache: "recreation du circuit suite a la separation en 2 groupe",
    tache:
      "Nous etiaons trop dans le meme groupe donc il a été décidé de se separer en deux groupes et nous avons donc tout refair une deuxieme fois",
    granddescription: "ceci est une grande description",
    ressource: "description1",
    trace: [imgaltium1,imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 2,
    titretache: "amelioration de la propreté du circuit",
    tache:
      "nous avon tout refait mieux car nous savions a deja comment fair la base du projet",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgaltium1,imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 3,
    titretache: "cration du circuit sur altium",
    tache:
      "nous avons créer notre circuit sur altium pour nous permetre de créer un PCB avec",
    granddescription: "ceci est une grande description",
    ressource: "comme je sais fair j'ai fait un site react",
    trace: [imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 4,
    titretache: "passage de programme stm32 en mode sans fils",
    tache:
      "nous avons modiofier le porgramme contenu dans le microntrolleur pour pourvoir recevoir les tension via des modules sans fils ",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgaltium1,imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 5,
    titretache: "dessin d'une nouvelle interface pour l'ecran du stm32",
    tache:
      "nousa vons créer une nouvelle interface pour l'ecran du microcontrolleur qui est plus simple a lire",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgaltium1,imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 6,
    titretache: "amelioration du code et creation de l' aiguille analogique ",
    tache:
      "nousa ason ameliore le code pour qu'il soit plus réactif et qu'il permette la lecture sous forme d'aiguille anagloqiue comme sur un votmmettrre ancien",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgaltium1,imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 7,
    titretache: "amelioration de la propreté du circuit",
    tache:
      "pour permetre une meilleur compréhension et de meilleur répartion nous avons ameliorer la proprété du circuit electronique",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgaltium1,imgaltium1],
    evaluation: "evaluation1",
    date: "01/02/2023",
    note: 3,
  },

  {
    id: 8,
    titretache: "routage de la carte sur altium",
    tache:
      "comme nous l'avons deja fait dans d'autre projet nous avons relier tout les comopsant sur notre carte elctronqiue",
    granddescription: "ceci est une grande description",
    ressource: "on a appris a faire des base de données",
    trace: [imgaltium2],
    evaluation: "evaluation1",
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
