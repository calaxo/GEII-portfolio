
import { NavLink } from "react-router-dom";

import simu from "@assets/simu.jpg";
import aero from "@assets/aero.jpg";
const But1 = () => {
  return (
    <div>
      <div className=" mx-16 justify-center	 text-lg font-bold">
        je nai jammais pris l'avion mais j'ai toujour trouver le technologies
        aeronautique trés interessante lorsque j'ai été pris en tant
        qu'alternant chez heli union training center j'ai commencé a apprendre
        plein de chose sur l'aéenornautique appliquée aux helicoptere je sais
        que ces connaissance ne me permetron pas grand chose mais en tant que
        culture generale c'est bien
      </div>

      <div className="mt-8 flex-row justify-center lg:flex">
        <NavLink to="/travail/helico/Simu" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={simu}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              simulateur
            </span>
          </div>
        </NavLink>

        <NavLink to="/travail/helico/Aero" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={aero}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              aeronautique
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
