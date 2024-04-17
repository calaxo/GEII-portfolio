import { Intro, Collaborateurs, Tableau, Conclu } from "@/Base";

import { collaborateurs_But2_sae1 } from "@data/Colabo";
import data from "@data/But2_sae1";

const But2_sae1 = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>
      <Collaborateurs colabo={collaborateurs_But2_sae1}></Collaborateurs>

      <Tableau data={data.content}  />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default But2_sae1;
