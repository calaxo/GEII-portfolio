import { Intro, Tableau, Conclu } from "@pages/Base";

import data from "@data/Git";

const Git = () => {
  return (
    <div>
      <Intro titre={data.titre} intro={data.intro}></Intro>

      <Tableau data={data.content} stile="tableauperso" />
      <Conclu conclu={data.conclu}></Conclu>
    </div>
  );
};

export default Git;
