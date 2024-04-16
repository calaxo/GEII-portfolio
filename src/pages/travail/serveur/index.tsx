import React from "react";
import { NavLink } from "react-router-dom";

import ad from "@assets/ad.jpg";
import docker from "@assets/docker.jpg";
const But1 = () => {
  return (
    <div>
      <div className=" mx-16 justify-center	 text-lg font-bold">
        j'ai toujour heberger tout et n'importe quoi des serveur de jeux pour
        jouer entre amis pendant le confinement des serveur web plus complexe
        pour mon entreprise et des site web pour de la famille qui est artisant
        je me suis vite rendu compte qu'il faut une machine dédié a ca
      </div>

      <div className="mt-8 flex-row justify-center lg:flex">
        <NavLink to="/travail/serveur/AD" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={ad}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              active directory
            </span>
          </div>
        </NavLink>

        <NavLink to="/travail/serveur/Docker" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={docker}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              docker
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
