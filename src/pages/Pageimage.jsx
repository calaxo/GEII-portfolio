import { useLocation } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React, { Fragment, lazy, Suspense } from "react";

const Pagedescription = () => {
  const goBack = () => {
    navigate(-"1");
  };

  const navigate = useNavigate();

  const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });
  const [displayText, setDisplayText] = useState("");

  const handleMouseEnter = (event) => {
    setDisplayText("cliquez pour revenir en arriere");
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

  const location = useLocation();
  const traceFileName = location.state.from[0]; // Accédez à la propriété from de state
  const titre = location.state.from[1]; // Accédez à la propriété from de state
  return (
    <div
      className="flex items-center justify-center pt-36"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button className="relative" onClick={goBack}>
        <img
          data-text="Texte yà afficher"
          className="imageengrand rounded-lg shadow-lg"
          src={`${traceFileName}`}
          alt="PC"
        />

        {displayText && (
          <div
            className="absolute rounded-md bg-gray-800 px-2 py-1 text-white shadow"
            style={{
              left: textPosition.left - 400,
              top: textPosition.top,
            }}
          >
            <a className="font-semibold">{displayText}</a>
          </div>
        )}
        <p className="mt-2 text-center">{titre}</p>
      </button>
    </div>
  );
};

export default Pagedescription;
