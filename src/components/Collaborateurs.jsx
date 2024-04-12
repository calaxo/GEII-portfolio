import React from "react";

const Collaborateurs = ({ colabo }) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <p className="mb-2 text-lg font-bold text-gray-800">Collègues</p>
      <ul>
        {colabo.map((colabo) => (
          <li key={colabo.nom} className="mb-2">
            <a
              href={colabo.lien}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
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
