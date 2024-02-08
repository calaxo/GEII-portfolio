import { Intro, Tableau, Conclu } from "@pages/Base";

import data from "@data/Dgac";

const Dgac = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>

      <Tableau data={data.content} stile="tableautravail" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default Dgac;
