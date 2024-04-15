import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Pagedescription = () => {
  // Fonction pour revenir en arrière
  const goBack = () => {
    navigate(-1); // Naviguer en arrière d'une page
  };

  // Hook pour la navigation
  const navigate = useNavigate();

  // États locaux
  const [textPosition, setTextPosition] = useState({ left: 0, top: 0 });
  const [displayText, setDisplayText] = useState("");

  // Gestionnaires d'événements pour le survol de la souris
  const handleMouseEnter = (event) => {
    setDisplayText("Cliquez pour revenir en arrière");
    updateTextPosition(event);
  };

  const handleMouseMove = (event) => {
    updateTextPosition(event);
  };

  const handleMouseLeave = () => {
    setDisplayText("");
  };

  // Met à jour la position du texte en fonction de la position de la souris
  const updateTextPosition = (event) => {
    setTextPosition({ left: event.pageX + 10, top: event.pageY + 10 });
  };

  // Obtient l'objet de l'emplacement actuel
  const location = useLocation();
  const traceFileName = location.state.from[0];
  const titre = location.state.from[1];

  return (
    <div
      className="flex items-center justify-center hover:text-blue-700"
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <button onClick={goBack}>
        <img
          data-text="Texte à afficher"
          className="image-en-grand rounded-lg shadow-lg"
          src={`${traceFileName}`}
          alt="PC"
        />
        {displayText && (
          <div
            className="absolute rounded bg-gray-100 px-2 py-1 shadow"
            style={{
              left: textPosition.left,
              top: textPosition.top,
            }}
          >
            <a className="font-semibold">{displayText}</a>
          </div>
        )}
        <p className="mt-2 text-center text-4xl">{titre}</p>
      </button>
    </div>
  );
};

export default Pagedescription;
