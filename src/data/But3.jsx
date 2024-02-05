
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
    { id: 1, titretache: "choix projet/groupe",
    tache:"en groupe nous avons décidé le prjet sur lequet nous allions travailler selon nos diférentes apetence et qualité",
    granddescription:"ceci est une grande description",
     ressource: "description1",
      trace: imgchoix ,
       evaluation: "evaluation1",
        date: "01/02/2023" },


    { id: 2,
         titretache: "reflexion/ exploration datasheet du esp32",
         tache:"nous nous somme renseigner sur la carte que nous allions utliser, une carte  ESP32 capable de comuniquer en wifi",
         granddescription:"ceci est une grande description",
          ressource: "on a appris a faire des base de données",
          trace: imgesp,
           evaluation: "evaluation1",
           date: "01/02/2023" },


    { id: 3,
         titretache: "prise d'information et conseil a mes collegue durant mon alternance",
         tache:"durant mon alternance j'ai contacté mes colleuge pour connaitre l'avancement du projet et leur donner des conseil ",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgink,
           evaluation: "evaluation1",
           date: "01/02/2023" },


    { id: 4,
         titretache: "creation de documentation sur l'aspect serveur et requete",
         tache:"pour permetre l'explication du fonctionement d'un serveur web j'ai relisé des shéma et des explication pour mes collueges",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
         trace: imgnotion, evaluation: "evaluation1",
          date: "01/02/2023" },


    { id: 5,
         titretache: "lien entre serveur existant et dns",
         tache:"j'ai fait la liaison entre un serveru DNS et le serveur pour permetre d'avoir une adresse internet plus pratique",
         granddescription:"ceci est une grande description", 
         ressource: "comme je sais fair j'ai fait un site react",
         trace: imgovh2,
          evaluation: "evaluation1",
          date: "01/02/2023" },


    { id: 6,
         titretache: "mise en place d'une api web simple",
         tache:"j'ai créer une api simple qui permet la comuniation entre un serveru et notre carte ESP32",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgsender,
           evaluation: "evaluation1",
           date: "01/02/2023" },

  
    { id: 7,
         titretache: "edition de la base de données",
         tache:"j'ai créer une table simple dans une base données",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgpassagerempli, 
          evaluation: "evaluation1",
           date: "01/02/2023" },


    { id: 8, titretache: "conection simple entre le serveur nodejs et la base de données",
    tache:"j'ai connecter le serveur a la bse de données via une bibliotèque destiné a la base deonnes mysql",
    granddescription:"ceci est une grande description", 
    ressource: "comme je sais fair j'ai fait un site react",
    trace: imgarduino,
     evaluation: "evaluation1",
     date: "01/02/2023" },


    { id: 9,
         titretache: "utlisation d'une pool de connection",
         tache:"pour ameliorer la rapdidité du serveur j'ai chnager le mode de cpnnetion a la base deonnées",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgquery,
           evaluation: "evaluation1",
           date: "01/02/2023" },

           
    { id: 10,
         titretache: "creation de page web pour aficher les données",
         tache:"j'ai créer une page web qui permet d'aficher la présence des eleve sur une page internet via react, une sollution recente et reputée pour programmer des ites web moderne",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgreact,
           evaluation: "evaluation1",
           date: "01/02/2023" },
    
    
         { id: 11,
         titretache: "couleur et style appliqué a la page web",
         tache:"pour ameliore la lisiblité et l'ergonomie j'ai ameliore la dispotion des élement sur le site et j'ai changer les couleurs",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgsite,
           evaluation: "evaluation1",
           date: "01/02/2023" },


    { id: 12,
         titretache: "creation de nouvelle route pour l'edition de données depuis le web",
         tache:"pour permetre l'édition de la base de donnée depuis le WEB pour chnager les noms des étudiant j'ai du créer des nouvelle route et requetes pour fair parvenir les données rentrée sur le site vers le serveur et du serveru jusque a la base de données",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imginformation,
           evaluation: "evaluation1",
            date: "01/02/2023" },


    { id: 13,
         titretache: "amelioration de la base de données et creation de relation",
         tache:"nous avons ameliore la base de donnée pour y inclure des reliation, ceci permet de separer des tableau d'etudiant et de pasage de carte et de les relié via certaine collones",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgrelation,
           evaluation: "evaluation1",
            date: "01/02/2023" },

            
    { id: 14,
         titretache: "aide pour la mise en route d'une carte raspberyy pi",
         tache:"j'ai expliquer et aider a metre en place une carte raspberry pi focntionnant sous linux qui sera le future serveur WEB",
         granddescription:"ceci est une grande description",
          ressource: "comme je sais fair j'ai fait un site react",
          trace: imgrelation,
           evaluation: "evaluation1",
            date: "01/02/2023" },
];

const conclu = "finito"

const data = { 
    titre,
    intro,
    content,
    conclu,
}


export default data;