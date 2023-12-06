import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import voltmetre from "@assets/voltmetre.jpg";
import onde from "@assets/onde.jpg";

const But2 = () => {
  return (
    <div className="choix">


        <NavLink key="But2_sae1" to="/But2_sae1" className="moitiegauche2">
        <div >
          <div className="bouton-page btn1">
            <img className="imgchoix3" src={voltmetre} alt="SAE1" />
            <span>vers la premiere sae</span>
          </div>
          </div>
        </NavLink>
      

      
        <NavLink key="But2_sae2" to="/But2_sae2" className="moitiedroite2">
        <div >
          <div className="bouton-page btn2">
          <img className="imgchoix3" src={onde} alt="SAE1" />
            <span>vers la deuxieme sae</span>
          </div>
          </div>
        </NavLink>
      

    </div>
  );
};

export default But2;