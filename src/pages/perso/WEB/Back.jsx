import { Intro, Tableau, Conclu } from "@pages/Base";
import React, { Fragment, lazy, Suspense } from "react";
import data from "@data/Back";

const Back = () => {
  return (
    <div >
      <Intro titre={data.titre} intro={data.intro}></Intro>

      <Tableau data={data.content} stile="tableauperso" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default Back;
