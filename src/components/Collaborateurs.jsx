import React from "react";

const Collaborateurs = ({ colabo }) => {
  return (
    <div>
      <p className="collabo">collègues</p>
      <ul>
        {colabo.map((colabo) => (
          <li key={colabo.nom} className="colaborateur">
            <a
              href={colabo.lien}
              target="_blank"
              className="liencolaborateur"
              rel="noopener noreferrer"
            >
              {colabo.nom} {colabo.prenom}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Collaborateurs;
