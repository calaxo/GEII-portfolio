import Cadre from '@components/Cadre.jsx';

const Ligne = ( props ) => {
    return (
        <tr className="laligne">
        <td className={`${props.stile}-LigneTitre`}><p className={`${props.stile}-sous-titre`}>{props.ligne.titretache}</p>{props.ligne.tache}</td>
        <td className={`${props.stile}-LigneRessource`}>{props.ligne.ressource}</td>
        <td className={`${props.stile}-Lignetrace`}>


        <Cadre image={props.ligne.trace} ></Cadre>
        
        </td>
        <td className={`${props.stile}-LigneEvaluation`}>{props.ligne.evaluation}</td>
        <td className={`${props.stile}-Lignedate`}>{props.ligne.date}</td>
        </tr>
    );
    }

export default Ligne;






