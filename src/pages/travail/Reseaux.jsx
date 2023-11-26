import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const Reseaux = () => {
  return (
    <div>
      <NavLink key="Cable" to="/Cable" className="boutondepagetravail">
        cable
      </NavLink>

      <NavLink key="Firewall" to="/Firewall" className="boutondepagetravail">
        firewall
      </NavLink>

      <NavLink key="Switch" to="/Switch" className="boutondepagetravail">
        switch reseaux
      </NavLink>

    </div>
  );
};

export default Reseaux;
