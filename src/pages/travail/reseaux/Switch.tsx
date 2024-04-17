import { Intro,  Tableau, Conclu } from "@/Base";

import data from "@data/Switch";

const Switch = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>

      <Tableau data={data.content} />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default Switch;
