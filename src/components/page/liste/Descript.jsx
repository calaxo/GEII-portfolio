import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React from "react";

const Descript = (props) => {


  const markuptache = { __html: props.tache };
  const markuptitretache = { __html: props.titretache };
  return (
    <div className="cadre">
      <div>
        <NavLink
          className="clickable"
          to="/Pagedescription"
          state={{ from: [props.titretache, props.granddescription] }}
        >
          <p
            dangerouslySetInnerHTML={markuptitretache}
            className={`${props.stile}-sous-titre`}
          ></p>
          <p dangerouslySetInnerHTML={markuptache} className={`textetache`}></p>
        </NavLink>
      </div>
      <p>{props.title}</p>
    </div>
  );
};

export default Descript;
