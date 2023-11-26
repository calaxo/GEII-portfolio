import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const Serveur = () => {
  return (
    <div>
      <NavLink key="AD" to="/AD" className="boutondepagetravail">
        active directory
      </NavLink>

      <NavLink key="Docker" to="/Docker" className="boutondepagetravail">
        docker
      </NavLink>

      <NavLink key="Learning" to="/Learning" className="boutondepagetravail">
        learning
      </NavLink>

      <NavLink key="Linux" to="/Linux" className="boutondepagetravail">
        linux
      </NavLink>

      <NavLink key="Proxy" to="/Proxy" className="boutondepagetravail">
        proxy
      </NavLink>

    </div>
  );
};

export default Serveur;
