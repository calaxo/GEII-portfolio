import React from "react";
import { NavLink } from "react-router-dom";
import moteur from "@assets/moteur.jpg";
import son from "@assets/son.jpg";
import trieur from "@assets/trieur.jpg";

const But1 = () => {
  return (
    <div >
      <div className=" mx-16 justify-center	 text-lg font-bold">
        première année dans GEII que j'ai rejoint car j'ai toujours été
        intéressé par l'électrique et l'électronique
      </div>

      <div className="mt-8 flex justify-center">
        <NavLink to="/geii/but1/But1_sae1" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={moteur}
              alt="SAE1"
            />
            <span className=" mt-2 block text-center hover:text-cyan-500">
              Vers le premier projet de cette année
            </span>
          </div>
        </NavLink>

        <NavLink to="/geii/but1/But1_sae2" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={son}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Vers le deuxième projet de cette année
            </span>
          </div>
        </NavLink>

        <NavLink to="/geii/but1/But1_sae3" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={trieur}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Vers la troisième projet de cette année
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
