import { Intro, Tableau, Conclu } from "@pages/Base";
import React from "react";
import data from "@data/Docker";

const Docker = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>

      <Tableau data={data.content} stile="tableautravail" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default Docker;
