import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const Helico = () => {
  return (
    <div>
      <NavLink key="Simu" to="/Simu" className="boutondepagetravail">
        simulateur
      </NavLink>

      <NavLink key="Aero" to="/Aero" className="boutondepagetravail">
        aeronautique
      </NavLink>


    </div>
  );
};

export default Helico;
