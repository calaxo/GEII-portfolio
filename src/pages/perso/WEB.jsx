import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const WEB = () => {
  return (
    <div>
      <NavLink key="Back" to="/Back" className="boutondepageperso">
        vers le back
      </NavLink>

      <NavLink key="Front" to="/Front" className="boutondepageperso">
        vers le front
      </NavLink>

      <NavLink key="Git" to="/Git" className="boutondepageperso">
        vers git
      </NavLink>

      <NavLink key="Hebergement" to="/Hebergement" className="boutondepageperso">
        vers l'Hebergement
      </NavLink>
    </div>
  );
};

export default WEB;
