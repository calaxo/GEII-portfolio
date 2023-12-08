import Cadre from '@components/Cadre.jsx';

const Ligne = ( props ) => {
    return (
        <tr className="laligne">
        <td className={`${props.stile}-LigneTitre`}>{props.ligne.tache}</td>
        <td className={`${props.stile}-LigneRessource`}>{props.ligne.ressource}</td>
        <td className={`${props.stile}-Lignetrace`}>


        <Cadre image={props.ligne.trace} ></Cadre>
        
        </td>
        <td className={`${props.stile}-LigneEvaluation`}>{props.ligne.evaluation}</td>
        </tr>
    );
    }

export default Ligne;






