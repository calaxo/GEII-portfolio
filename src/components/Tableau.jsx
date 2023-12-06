import Ligne from '@components/Ligne';

const Tableau = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th className={`${props.stile}-Titre`}>Titre</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((ligne) => (
          <Ligne key={ligne.id} ligne={ligne} />
        ))}
      </tbody>
    </table>
  );
}

export default Tableau;
