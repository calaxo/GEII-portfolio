
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

const intro = "Le but de ce projet est de réaliser un site web qui permettra de mettre en avant les projets réalisés par les étudiants de DUT GEII."


const content  = [
    { id: 1, tache: "choix projet/groupe", ressource: "description1", trace: imgchoix , evaluation: "evaluation1" },
    { id: 2, tache: "reflexion/ exploration datasheet du esp32", ressource: "on a appris a faire des base de données",trace: imgesp, evaluation: "evaluation1" },
    { id: 3, tache: "prise d'information et conseil a mes collegue durant mon alternance", ressource: "comme je sais fair j'ai fait un site react",trace: imgink, evaluation: "evaluation1" },
    { id: 4, tache: "creation de documentation sur l'aspect serveur et requete", ressource: "comme je sais fair j'ai fait un site react",trace: imgnotion, evaluation: "evaluation1" },
    { id: 5, tache: "achat d'un nom de domaine", ressource: "comme je sais fair j'ai fait un site react",trace: imgovh, evaluation: "evaluation1" },
    { id: 6, tache: "lien entre serveur existant et dns", ressource: "comme je sais fair j'ai fait un site react",trace: imgovh2, evaluation: "evaluation1" },
    { id: 7, tache: "mise en place d'une api web simple", ressource: "comme je sais fair j'ai fait un site react",trace: imgsender, evaluation: "evaluation1" },
    { id: 8, tache: "creation d'une base de données mysql", ressource: "comme je sais fair j'ai fait un site react",trace: imgpassage, evaluation: "evaluation1" },
    { id: 9, tache: "edition de la base de données", ressource: "comme je sais fair j'ai fait un site react",trace: imgpassagerempli, evaluation: "evaluation1" },
    { id: 10, tache: "conection simple entre le serveur nodejs et la base de données", ressource: "comme je sais fair j'ai fait un site react",trace: imgarduino, evaluation: "evaluation1" },
    { id: 11, tache: "amelioration de serveur pour recuperér les données", ressource: "comme je sais fair j'ai fait un site react",trace: imgindex, evaluation: "evaluation1" },
    { id: 12, tache: "utlisation d'une pool de connection", ressource: "comme je sais fair j'ai fait un site react",trace: imgquery, evaluation: "evaluation1" },
    { id: 13, tache: "creation de page web pour aficher les données", ressource: "comme je sais fair j'ai fait un site react",trace: imgreact, evaluation: "evaluation1" },
    { id: 14, tache: "couleur et style appliqué a la page web", ressource: "comme je sais fair j'ai fait un site react",trace: imgsite, evaluation: "evaluation1" },
    { id: 15, tache: "creation de nouvelle route pour l'edition de données depuis le web", ressource: "comme je sais fair j'ai fait un site react",trace: imginformation, evaluation: "evaluation1" },
    { id: 16, tache: "amelioration de la base de données et creation de relation", ressource: "comme je sais fair j'ai fait un site react",trace: imgrelation, evaluation: "evaluation1" },
];

const conclu = "finito"

const data = { 
    titre,
    intro,
    content,
    conclu,
}


export default data;