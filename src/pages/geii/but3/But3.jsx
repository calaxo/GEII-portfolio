import React from "react";
import geii from "@assets/geii.gif";
import iut from "@assets/iut.png";
import Tableau from "@components/Tableau";
import Collaborateurs from "@components/Collaborateurs";



const But3 = () => {
  const ladata = [
    { id: 1, tache: "dev", ressource: "description1", trace: "image1" , evaluation: "evaluation1" },
    { id: 2, tache: "base de donnée", ressource: "on a appris a faire des base de données",trace: "image1", evaluation: "evaluation1" },
    { id: 3, tache: "react", ressource: "comme je sais fair j'ai fait un site react",trace: "image1", evaluation: "evaluation1" },
  ];

  const collaborateurs = [
    { id: 1, nom: "NIVEAU", prenom: "Clément", lien: "https://bv.univ-poitiers.fr/access/content/user/cnivea01/portfolio/index.html" },
    { id: 2, nom: "SOURIAU", prenom: "Thomas", lien: "https://bv.univ-poitiers.fr/access/content/user/tsouriau/portfolio/index.html" },
    { id: 3, nom: "CREUZAU", prenom: "Kevin", lien: "https://bv.univ-poitiers.fr/access/content/user/kcreuzea/pflSAE5-6/Portfolio.html" },
    { id: 4, nom: "CARRIER", prenom: "Amaury", lien: "https://bv.univ-poitiers.fr/access/content/user/acarri04/monportfolio/index.html" }
];


  return (
    <div>
      <div className="intro">
        <h1>But3</h1>
        <p>description du but3</p>

        <Collaborateurs colabo={collaborateurs} >Collaborateurs</Collaborateurs>
        
      </div>
      
      <Tableau data={ladata} stile="tableaugeii" />



    </div>
  );
};

export default But3;
