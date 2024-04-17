interface PropsColabo {
  colabo: {
    nom: string;
    prenom: string;
    lien: string;
  }[];
}



const Collaborateurs = ({ colabo }:PropsColabo) => {
  return (
    <div className="rounded-lg bg-white p-4 shadow-md">
      <p className="mx-auto mb-2 w-52 text-lg font-bold text-gray-800">
        Collègues
      </p>
      <ul>
        {colabo.map((colabo) => (
          <li
            key={colabo.nom}
            className="mx-auto mb-2 w-52 rounded-lg border border-blue-500"
          >
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
