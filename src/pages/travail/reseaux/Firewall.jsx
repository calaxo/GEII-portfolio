import { Intro, Collaborateurs, Tableau, Conclu } from "@/Base";
import React from "react";
import data from "@data/Firewall";

const Firewall = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>

      <Tableau data={data.content} stile="tableautravail" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default Firewall;
