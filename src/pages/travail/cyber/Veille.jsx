

import {Intro,  Tableau,  Conclu} from  "@pages/Base";


import data from "@data/Veille";


const Veille = () => {





  return (
    <div>



<Intro titre={data.titre} intro={data.intro} ></Intro>


      <Tableau data={data.content} stile="tableautravail" />
      <Conclu conclu={data.conclu}></Conclu>



    </div>
  );
};

export default Veille;
