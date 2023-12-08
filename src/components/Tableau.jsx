import Ligne from '@components/Ligne';

const Tableau = (props) => {
  return (
    <table className='lestableaux'>
      <thead>
        <tr>
          <th className={`${props.stile}-Titre`}>Titre</th>
          <th className={`${props.stile}-Description`}>Description</th>
          <th className={`${props.stile}-Image`}>Image</th>
          <th className={`${props.stile}-Evaluation`}>Evaluation</th>
        </tr>
      </thead>
      <tbody>
        {props.data.map((ligne) => (
          <Ligne key={ligne.id} stile={props.stile} ligne={ligne} />
          
        ))}
      </tbody>
    </table>
  );
}

export default Tableau;
