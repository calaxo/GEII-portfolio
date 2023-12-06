import React from "react";
import geii from "@assets/geii.gif";
import iut from "@assets/iut.png";
import Tableau from "@components/Tableau";
import Collaborateurs from "@components/Collaborateurs";
import collaborateurs_But3 from "@data/Colabo";
import data from "@data/But3";


const But3 = () => {





  return (
    <div>
      <div className="intro">
        <h1>But3</h1>
        <p>description du but3</p>
        <Collaborateurs colabo={collaborateurs_But3}>Collaborateurs</Collaborateurs>

      </div>
      
      <Tableau data={data} stile="tableaugeii" />



    </div>
  );
};

export default But3;
