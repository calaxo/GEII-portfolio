import {  NavLink,} from "react-router-dom";

interface PropsDescript {
  titretache: string;
  granddescription: string;
  tache: string;

}

const Descript = ({titretache,granddescription,tache}:PropsDescript) => {


  const markuptache = { __html: tache };
  const markuptitretache = { __html: titretache };
  return (
    <div className="cadre">
      <div>
        <NavLink
          className="clickable"
          to="/Pagedescription"
          state={{ from: [titretache, granddescription] }}
        >
          <p className="text-l font-bold text-blue-700 text-center"
            dangerouslySetInnerHTML={markuptitretache}

          ></p>
          <p dangerouslySetInnerHTML={markuptache} className="text-center"></p>
        </NavLink>
      </div>

    </div>
  );
};

export default Descript;
