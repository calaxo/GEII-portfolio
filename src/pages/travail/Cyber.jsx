import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const Cyber = () => {
  return (
    <div>
      <NavLink key="DGAC" to="/DGAC" className="boutondepagetravail">
        cybersecurite
      </NavLink>

      <NavLink key="Formation" to="/Formation" className="boutondepagetravail">
        formation
      </NavLink>

      <NavLink key="Veille" to="/Veille" className="boutondepagetravail">
        veille
      </NavLink>


    </div>
  );
};

export default Cyber;
