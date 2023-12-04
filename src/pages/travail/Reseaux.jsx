import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";
import info from "@assets/info.jpg";
const Reseaux = () => {
  return (
    <div className="choix">

        
        <NavLink key="Cable" to="/Cable" className="moitiegauche3">
        <div className="moitiegauche3">
        <img className="imgchoix3" src={info} alt="SAE1" />
          <div className="bouton-page">
            <span>cable</span>
          </div>
          </div>
        </NavLink>
      

      
        <NavLink key="Firewall" to="/Firewall" className="moitiemilieu3">
        <div >
          <div className="bouton-page">
            <span>firewall</span>
          </div>
          </div>
        </NavLink>
      

      
        <NavLink key="Switch" to="/Switch" className="moitiedroite3">
        <div >
          <div className="bouton-page">
            <span>switch reseaux</span>
          </div>
          </div>
        </NavLink>
      
    </div>
  );
};

export default Reseaux;
