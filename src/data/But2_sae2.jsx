import imgaltium1 from '@assetspreuve/altium1.png';

import imgaltium2 from '@assetspreuve/altium2.png';


const titre = "But 2 : SAE 2";

const intro = "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII."


const content  = [
    { id: 1, titretache: "recreation du circuit suite a la separation en 2 groupe",tache:"vrai description", ressource: "description1", trace: "image1" , evaluation: "evaluation1", date: "01/02/2023" },
    { id: 2, titretache: "amelioration de la propreté du circuit",tache:"vrai description", ressource: "on a appris a faire des base de données",trace: "image1", evaluation: "evaluation1", date: "01/02/2023" },
    { id: 3, titretache: "cration du circuit sur altium",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgaltium1, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 4, titretache: "passage de programme stm32 en mode sans fils",tache:"vrai description", ressource: "on a appris a faire des base de données",trace: "image1", evaluation: "evaluation1", date: "01/02/2023" },
    { id: 5, titretache: "dessin d'une nouvelle interface pour l'ecran du stm32",tache:"vrai description", ressource: "on a appris a faire des base de données",trace: "image1", evaluation: "evaluation1", date: "01/02/2023" },
    { id: 6, titretache: "amelioration du code et creation de l' aiguille analogique ",tache:"vrai description", ressource: "on a appris a faire des base de données",trace: "image1", evaluation: "evaluation1", date: "01/02/2023" },
    { id: 7, titretache: "amelioration de la propreté du circuit",tache:"vrai description", ressource: "on a appris a faire des base de données",trace: "image1", evaluation: "evaluation1", date: "01/02/2023" },
    { id: 8, titretache: "routage de la carte sur altium",tache:"vrai description", ressource: "on a appris a faire des base de données",trace: imgaltium2, evaluation: "evaluation1", date: "01/02/2023" },
];

const conclu = "finito"

const data = { 
    titre,
    intro,
    content,
    conclu,
}


export default data;

