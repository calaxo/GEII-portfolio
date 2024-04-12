import React, { useState } from "react";
import { NavLink } from "react-router-dom";

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
    <div className="relative">
      <div className="flex items-center justify-center">
        {props.image.map((url, index) => (
          <NavLink
            key={index}
            to="/Pageimage"
            state={{ from: [url, props.title] }}
            className="mx-2"
          >
            <img
              key={index}
              className="h-32 w-32 rounded-lg object-cover"
              src={url}
              alt={`${props.title}-${index}`}
              onMouseEnter={handleMouseEnter}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            />
          </NavLink>
        ))}
      </div>
      {displayText && (
        <div
          className="absolute rounded-lg border border-gray-300 bg-white p-2 shadow-md"
          style={{ left: textPosition.left, top: textPosition.top }}
        >
          {displayText}
        </div>
      )}
    </div>
  );
};

export default Cadre;
