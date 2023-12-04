import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import moteur from "@assets/moteur.jpg";
import son from "@assets/son.jpg";
import trieur from "@assets/trieur.jpg";

const But1 = () => {
  return (
    <div className="choix">


        <NavLink key="But1_sae1" to="/But1_sae1" className="moitiegauche3">
        <div >
          <div className="bouton-page btn1">
            <img className="imgchoix3" src={moteur} alt="SAE1" />
            <span>vers la premiere sae</span>

          </div>
          </div>
        </NavLink>


        <NavLink key="But1_sae2" to="/But1_sae2" className="moitiemilieu3">
        <div >
          <div className="bouton-page btn2">
          <img className="imgchoix3" src={son} alt="SAE1" />
            <span>vers la deuxieme sae</span>
          </div>
          </div>
        </NavLink>
       
        

        <NavLink key="But1_sae3" to="/But1_sae3" className="moitiedroite3">
          <div >
          <div className="bouton-page btn3">
          <img className="imgchoix3" src={trieur} alt="SAE1" />
            <span>vers la troisième sae</span>
          </div>
          </div>
        </NavLink>
      
    </div>
  );
};

export default But1;
