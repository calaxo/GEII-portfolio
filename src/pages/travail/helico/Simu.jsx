import { Intro, Tableau, Conclu } from "@pages/Base";
import React from "react";
import data from "@data/Simu";

const Simu = () => {
  return (
    <div className="pt-36">
      <Intro titre={data.titre} intro={data.intro}></Intro>

      <Tableau data={data.content} stile="tableautravail" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default Simu;
