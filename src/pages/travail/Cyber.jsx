import React from "react";
import { NavLink } from "react-router-dom";

const Cyber = () => {
  return (
    <div className="choix">
      <div className="moitiegauche3">
        <NavLink key="DGAC" to="/DGAC" className="boutondepagegeii">
          <div className="bouton-page">
            <span>cybersecurite</span>
          </div>
        </NavLink>
      </div>

      <div className="moitiemilieu3">
        <NavLink key="Formation" to="/Formation" className="boutondepagegeii">
          <div className="bouton-page">
            <span>formation</span>
          </div>
        </NavLink>
      </div>

      
        <NavLink key="Veille" to="/Veille" className="moitiedroite3">
        <div >
          
          <div className="bouton-page">
            <span>veille</span>
          </div>

          </div>
        </NavLink>

    </div>
  );
};

export default Cyber;
