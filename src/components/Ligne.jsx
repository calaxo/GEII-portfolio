import Cadre from "@components/Cadre.jsx";

import Descript from "@components/Descript.jsx";
import Rating from "@components/Rating.jsx";


const Ligne = (props) => {
  return (
    <tr className="laligne">
      <td className={`${props.stile}-LigneTitre`}>
        <Descript
          granddescription={props.ligne.granddescription}
          titretache={props.ligne.titretache}
          tache={props.ligne.tache}
          stile={props.stile}
        >
          {" "}
        </Descript>
      </td>

      <td className={`${props.stile}-LigneRessource`}>
        {props.ligne.ressource}
      </td>
      <td className={`${props.stile}-Lignetrace`}>
        <Cadre image={props.ligne.trace} title={props.ligne.titretache}></Cadre>
      </td>
      <td className={`${props.stile}-LigneEvaluation`}>
      <Rating evaluation={props.ligne.note} />
        {props.ligne.evaluation}
      </td>
      <td className={`${props.stile}-Lignedate`}>{props.ligne.date}</td>
    </tr>
  );
};

export default Ligne;
