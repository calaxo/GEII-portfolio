import { Intro, Collaborateurs, Tableau, Conclu } from "@/Base";
import React from "react";
import { collaborateurs_But2_sae2 } from "@data/Colabo";
import data from "@data/But2_sae2";

const But2_sae2 = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>
      <Collaborateurs colabo={collaborateurs_But2_sae2}></Collaborateurs>

      <Tableau data={data.content} stile="tableaugeii" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default But2_sae2;
