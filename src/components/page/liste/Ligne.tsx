
import Descript from "@liste/Descript";
import Cadre from "@liste/Cadre";
import Rating from "@liste/Rating";

interface PropsLigne {
  ligne: {
    granddescription: string;
    ancre: string;
    titretache: string;
    tache: string;
    ressource: string;
    trace: string[];
    note: number;
    evaluation: string;
    date: string;
  };
}

const Ligne = ({ligne}:PropsLigne) => {


  return (
    <tr className="border-b border-gray-200" id={ligne.ancre}>
      <td className="px-4 py-2">
        <Descript
          granddescription={ligne.granddescription}
          titretache={ligne.titretache}
          tache={ligne.tache}

        />
      </td>
      <td
        className="px-4 py-2 text-center"
        dangerouslySetInnerHTML={{ __html: ligne.ressource }}
      ></td>
      <td className="px-4 py-2">
        <Cadre image={ligne.trace} title={ligne.titretache} />
      </td>
      <td className="px-4 py-2 text-center">
        <Rating evaluation={ligne.note} />
        <p dangerouslySetInnerHTML={{ __html: ligne.evaluation }}></p>
      </td>
      <td className="px-4 py-2 text-center">{ligne.date}</td>
    </tr>
  );
};

export default Ligne;
