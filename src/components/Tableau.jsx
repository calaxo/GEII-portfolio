import React, { Fragment, lazy, Suspense } from "react";

import Ligne from "@components/Ligne";

const Tableau = (props) => {
  return (
    <table className="lestableaux">
      <thead>
        <tr>
          <th className={`${props.stile}-Titre`}>Tâches réalisées </th>
          <th className={`${props.stile}-Description`}>Ressources utilisées</th>
          <th className={`${props.stile}-Ressource`}>Traces</th>
          <th className={`${props.stile}-Evaluation`}>Auto Evaluation</th>
          <th className={`${props.stile}-Date`}>Date</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((ligne) => (
          <Ligne key={ligne.id} stile={props.stile} ligne={ligne} />
        ))}
      </tbody>
    </table>
  );
};

export default Tableau;
