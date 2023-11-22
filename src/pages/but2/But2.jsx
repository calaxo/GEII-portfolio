import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

const But3 = () => {
  return (
    <div>
      <NavLink key="But2_sae1" to="/But2_sae1" className="boutonsaenfc">
        vers la premiere sae
      </NavLink>

      <NavLink key="But2_sae2" to="/But2_sae2" className="boutonsae">
        vers la deuxime sae
      </NavLink>
    </div>
  );
};

export default But3;
