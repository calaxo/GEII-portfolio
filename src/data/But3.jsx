
import imgsite from '@assetspreuve/site.png';
import imgrelation from '@assetspreuve/relation.png';
import imgpassage from '@assetspreuve/passagestructure.png';
import imgsender from '@assetspreuve/sender.png';
import imgquery from '@assetspreuve/query.png';
import imgpassagerempli from '@assetspreuve/passagerempli.png';
import imgovh from '@assetspreuve/ovh.png';
import imgovh2 from '@assetspreuve/ovh2.png';
import imgnotion from '@assetspreuve/notion.png';
import imgink from '@assetspreuve/ink.png';
import imginformation from '@assetspreuve/information.png';
import imgesp from '@assetspreuve/esp.png';
import imgchoix from '@assetspreuve/choix.png';
import imgindex from '@assetspreuve/index.png';
import imgreact from '@assetspreuve/react.png';
import imgarduino from '@assetspreuve/arduino.png';

const titre = "But 3 : SAE ";

const intro = " "


const content  = [
    { id: 1, titretache: "choix projet/groupe",tache:"vrai description", ressource: "description1", trace: imgchoix , evaluation: "evaluation1" },
    { id: 2, titretache: "reflexion/ exploration datasheet du esp32",tache:"vrai description", ressource: "on a appris a faire des base de données",trace: imgesp, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 3, titretache: "prise d'information et conseil a mes collegue durant mon alternance",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgink, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 4, titretache: "creation de documentation sur l'aspect serveur et requete",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgnotion, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 5, titretache: "achat d'un nom de domaine",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgovh, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 6, titretache: "lien entre serveur existant et dns",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgovh2, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 7, titretache: "mise en place d'une api web simple",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgsender, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 8, titretache: "creation d'une base de données mysql",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgpassage, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 9, titretache: "edition de la base de données",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgpassagerempli, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 10, titretache: "conection simple entre le serveur nodejs et la base de données",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgarduino, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 11, titretache: "amelioration de serveur pour recuperér les données",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgindex, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 12, titretache: "utlisation d'une pool de connection",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgquery, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 13, titretache: "creation de page web pour aficher les données",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgreact, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 14, titretache: "couleur et style appliqué a la page web",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgsite, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 15, titretache: "creation de nouvelle route pour l'edition de données depuis le web",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imginformation, evaluation: "evaluation1", date: "01/02/2023" },
    { id: 16, titretache: "amelioration de la base de données et creation de relation",tache:"vrai description", ressource: "comme je sais fair j'ai fait un site react",trace: imgrelation, evaluation: "evaluation1", date: "01/02/2023" },
];

const conclu = "finito"

const data = { 
    titre,
    intro,
    content,
    conclu,
}


export default data;