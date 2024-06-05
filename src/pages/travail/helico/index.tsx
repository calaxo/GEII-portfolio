
import { NavLink } from "react-router-dom";

import simu from "@assets/simu.jpg";
import aero from "@assets/aero.jpg";
const But1 = () => {
  return (
    <div>
      <div className=" text-center pt-6	 text-lg font-bold">
        Je n'ai jamais pris l'avion, mais j'ai toujours trouvé les technologies aéronautiques très intéressantes. Lorsque j'ai été pris en tant qu'alternant chez Heli Union Training Center, j'ai commencé à apprendre plein de choses sur l'aéronautique appliquée aux hélicoptères. Je sais que ces connaissances ne me permettront pas de faire grand-chose, mais en tant que culture générale, c'est bien.
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
              Simulateur
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
              Aeronautique
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
