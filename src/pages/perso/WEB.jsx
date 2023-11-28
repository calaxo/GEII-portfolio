import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const WEB = () => {
  return (
    <div className="choix4">


      <NavLink key="Back" to="/Back" className="moitiegauchehaut4">
      <div >
        <div className="bouton-page">
          <span>vers le back</span>
        </div>
        </div>
      </NavLink>
    


      <NavLink key="Front" to="/Front" className="moitiedroitehaut4">
      <div >
        <div className="bouton-page">
          <span>vers le front</span>
        </div>
        </div>
      </NavLink>
    


      <NavLink key="Git" to="/Git" className="moitiegauchebas4">
      <div className="moitiemilieu24">
        <div className="bouton-page">
          <span>vers git</span>
        </div>
        </div>
      </NavLink>


   
      <NavLink key="Hebergement" to="/Hebergement" className="moitiedroitebas4">
      <div>
        <div className="bouton-page">
          <span>vers l'Hebergement</span>
        </div>
        </div>
      </NavLink>
   

  </div>
);
};

export default WEB;
