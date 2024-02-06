import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { useState } from "react";

import "@styles/Cadre.css";

const Cadre = (props) => {
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
      <div className="cadreimg">
        
      {props.image.map((url, index) => (
          <NavLink key={index} to="/Pageimage" state={{ from: [url, props.title] }}>
            <img
              key={index}
              className="grosseimg"
              src={url}
              alt={`${props.title}-${index}`}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </NavLink>
        ))}
          
        
      </div>
    </div>
  );
};

export default Cadre;
