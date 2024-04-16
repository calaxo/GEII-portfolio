import React from "react";
import Ligne from "@liste/Ligne";

const Tableau = (props) => {
  return (
    <table className="border-collapse overflow-hidden rounded-lg border">
      <thead className="bg-gray-200">
        <tr>
          <th className="px-4 py-2">Tâches réalisées</th>
          <th className="px-4 py-2">Ressources utilisées</th>
          <th className="px-4 py-2">Traces</th>
          <th className="px-4 py-2">Auto Evaluation</th>
          <th className="px-4 py-2">Date</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((ligne) => (
          <Ligne key={ligne.id} ligne={ligne} />
        ))}
      </tbody>
    </table>
  );
};

export default Tableau;
