import React from "react";
import { NavLink } from "react-router-dom";

import simu from "@assets/simu.jpg";
import aero from "@assets/aero.jpg";

const Helico = () => {
  return (


    <>
    <div className="intropage"> 
    je nai jammais pris l'avion mais j'ai toujour trouver le technologies aeronautique trés interessante 
    lorsque j'ai été pris en tant qu'alternant chez heli union training center
    j'ai commencé a apprendre plein de chose sur l'aéenornautique
    appliquée aux helicoptere
    je sais que ces connaissance ne me permetron pas grand chose mais en tant que culture generale c'est bien
    </div>

    <div className="choix">


        <NavLink key="Simu" to="/Simu" className="moitiegauche2">
        <div >
          <div className="bouton-page btn1">
          <img className="imgchoix3" src={simu} alt="SAE1" />
            <span>simulateur</span>
          </div>
          </div>
        </NavLink>



        <NavLink key="Aero" to="/Aero" className="moitiedroite2">
        <div >
          <div className="bouton-page btn2">
          <img className="imgchoix3" src={aero} alt="SAE1" />
            <span>aeronautique</span>
          </div>
          </div>
        </NavLink>


    </div>

    </>

  );
};

export default Helico;
