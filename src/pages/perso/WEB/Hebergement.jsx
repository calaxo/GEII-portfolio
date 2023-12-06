

import {Intro,  Tableau,  Conclu} from  "@pages/Base";


import data from "@data/Hebergement";


const Hebergement = () => {





  return (
    <div>



<Intro titre={data.titre} intro={data.intro} ></Intro>


      <Tableau data={data.content} stile="tableauperso" />
      <Conclu conclu={data.conclu}></Conclu>



    </div>
  );
};

export default Hebergement;
