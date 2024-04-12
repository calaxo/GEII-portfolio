import { Intro, Collaborateurs, Tableau, Conclu } from "@pages/Base";
import React from "react";
import { collaborateurs_But1_sae3 } from "@data/Colabo";
import data from "@data/But1_sae3";

const But1_sae3 = () => {
  return (
    <div className="pt-36">
      <Intro titre={data.titre} intro={data.intro}></Intro>
      <Collaborateurs colabo={collaborateurs_But1_sae3}></Collaborateurs>

      <Tableau data={data.content} stile="tableaugeii" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default But1_sae3;
