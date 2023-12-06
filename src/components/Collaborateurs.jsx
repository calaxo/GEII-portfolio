const Collaborateurs = ({ colabo }) => {

    return (
        <div>
            <h2>Collaborateurs</h2>
            <ul>
            {colabo.map((colabo) => (
    <li key={colabo.nom} className="colaborateur">
        <a href={colabo.lien} target="_blank" className="liencolaborateur" rel="noopener noreferrer">
            {colabo.nom} {colabo.prenom}
        </a>
    </li>
))}

            </ul>
        </div>
    );
}

export default Collaborateurs;


