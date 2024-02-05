import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";

import "@styles/Cadre.css";

const Descript = (props) => {
  const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });
  const [displayText, setDisplayText] = useState("");

  const handleMouseEnter = (event) => {
    setDisplayText("Texte à afficher");
    updateTextPosition(event);
  };

  const handleMouseMove = (event) => {
    updateTextPosition(event);
  };

  const handleMouseLeave = () => {
    setDisplayText("");
  };

  const updateTextPosition = (event) => {
    setTextPosition({ left: event.pageX, top: event.pageY });
  };

  return (
    <div className="cadre">
      <div>
        <NavLink
          className="clickable"
          to="/Pagedescription"
          state={{ from: [props.titretache, props.granddescription] }}
        >
          <p className={`${props.stile}-sous-titre`}>{props.titretache}</p>
          <p className={`textetache`}>{props.tache}</p>
        </NavLink>
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export default Descript;
