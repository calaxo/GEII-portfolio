import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";

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

  const markuptache = { __html: props.tache };
  const markuptitretache = { __html: props.titretache };
  return (
    <div className="cadre">
      <div>
        <NavLink
          className="clickable"
          to="/Pagedescription"
          state={{ from: [props.titretache, props.granddescription] }}
        >
          <p
            dangerouslySetInnerHTML={markuptitretache}
            className={`${props.stile}-sous-titre`}
          ></p>
          <p dangerouslySetInnerHTML={markuptache} className={`textetache`}></p>
        </NavLink>
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export default Descript;
