import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

import Lesboutons from "@components/Lesboutons.jsx";




const Header = () => {

    return (
      
        <div className="header">
        <NavLink to="/Accueil" className="logo">
          <div className="titre">Mon Portfolio</div>
        </NavLink>
        <div className="header-right">
          <div className="nav-links">
 
            <Lesboutons></Lesboutons>

          </div>

        </div>
        
      </div>

    );
    }


export default Header;