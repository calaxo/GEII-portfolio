import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const Serveur = () => {
  return (
    <div className="choix4">


        <NavLink key="AD" to="/AD" className="moitiegauchehaut4">
        <div>
          <div className="bouton-page">
            <span>active directory</span>
          </div>
          </div>
        </NavLink>
      


        <NavLink key="Docker" to="/Docker" className="moitiedroitehaut4">
        <div className="moitie droite">
          <div className="bouton-page">
            <span>docker</span>
          </div>
          </div>
        </NavLink>

        <NavLink key="Learning" to="/Learning" className="moitiegauchebas4">
          <div>
          <div className="bouton-page">
            <span>learning</span>
          </div>
          </div>
        </NavLink>

        <NavLink key="Linux" to="/Linux" className="moitiedroitebas4">
         <div>
          <div className="bouton-page">
            <span>linux</span>
          </div>
          </div>
        </NavLink>




    </div>
  );
};

export default Serveur;
