const Ligne = ( {ligne} ) => {
    return (
        <tr>
        <td>{ligne.tache}</td>
        <td>{ligne.ressource}</td>
        <td>{ligne.trace}</td>
        <td>{ligne.evaluation}</td>
        </tr>
    );
    }

export default Ligne;