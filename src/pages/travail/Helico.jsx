import React from "react";
import { NavLink } from "react-router-dom";

import simu from "@assets/simu.jpg";
import aero from "@assets/aero.jpg";

const Helico = () => {
  return (
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
  );
};

export default Helico;
