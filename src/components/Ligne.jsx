import React from "react";
import Descript from "@components/Descript.jsx";
import Cadre from "@components/Cadre.jsx";
import Rating from "@components/Rating.jsx";

const Ligne = (props) => {
  const { ligne } = props;

  return (
    <tr className="border-b border-gray-200">
      <td className="px-4 py-2">
        <Descript
          granddescription={ligne.granddescription}
          titretache={ligne.titretache}
          tache={ligne.tache}
        />
      </td>
      <td
        className="px-4 py-2"
        dangerouslySetInnerHTML={{ __html: ligne.ressource }}
      ></td>
      <td className="px-4 py-2">
        <Cadre image={ligne.trace} title={ligne.titretache} />
      </td>
      <td className="px-4 py-2">
        <Rating evaluation={ligne.note} />
        <p dangerouslySetInnerHTML={{ __html: ligne.evaluation }}></p>
      </td>
      <td className="px-4 py-2">{ligne.date}</td>
    </tr>
  );
};

export default Ligne;
