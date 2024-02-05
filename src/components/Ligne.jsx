import Cadre from '@components/Cadre.jsx';

import Descript from '@components/Descript.jsx'

const Ligne = ( props ) => {
    return (
        <tr className="laligne">
            <Descript titretache={props.ligne.titretache}
                    ressource={props.ligne.ressource}
                    tache={props.ligne.tache}
            
            >         </Descript>

        <td className={`${props.stile}-Lignetrace`}>
        
        


        <Cadre image={props.ligne.trace} ></Cadre>
        
        </td>
        <td className={`${props.stile}-LigneEvaluation`}>{props.ligne.evaluation}</td>
        <td className={`${props.stile}-Lignedate`}>{props.ligne.date}</td>
        </tr>
    );
    }

export default Ligne;






