import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import info from "@assets/info.jpg";
import fire from "@assets/fire.jpg";
import switchr from "@assets/switch.jpg";
const Reseaux = () => {
  return (
    <div className="choix">

        
        <NavLink key="Cable" to="/Cable" className="moitiegauche3">
        <div >
        <div className="bouton-page">
        <img className="imgchoix3" src={info} alt="SAE1" />
          
            <span>cable</span>
          </div>
          </div>
        </NavLink>
      

      
        <NavLink key="Firewall" to="/Firewall" className="moitiemilieu3">
        <div >
          <div className="bouton-page">
          <img className="imgchoix3" src={fire} alt="SAE1" />
            <span>firewall</span>
          </div>
          </div>
        </NavLink>
      

      
        <NavLink key="Switch" to="/Switch" className="moitiedroite3">
        <div >
          <div className="bouton-page">
          <img className="imgchoix3" src={switchr} alt="SAE1" />
            <span>switch reseaux</span>
          </div>
          </div>
        </NavLink>
      
    </div>
  );
};

export default Reseaux;
