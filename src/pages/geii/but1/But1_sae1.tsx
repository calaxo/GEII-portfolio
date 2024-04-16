import { Intro, Collaborateurs, Tableau, Conclu } from "@/Base";
import React from "react";
import { collaborateurs_But1_sae1 } from "@data/Colabo";
import data from "@data/But1_sae1";

const But1_sae1 = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>
      <Collaborateurs colabo={collaborateurs_But1_sae1}></Collaborateurs>

      <Tableau data={data.content} stile="tableaugeii" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default But1_sae1;
