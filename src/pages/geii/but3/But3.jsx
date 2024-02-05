import { Intro, Collaborateurs, Tableau, Conclu } from "@pages/Base";

import { collaborateurs_But3 } from "@data/Colabo";
import data from "@data/But3";

const But3 = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>
      <Collaborateurs colabo={collaborateurs_But3}></Collaborateurs>

      <Tableau data={data.content} stile="tableaugeii" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default But3;
