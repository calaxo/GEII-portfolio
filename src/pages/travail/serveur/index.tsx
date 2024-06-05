
import { NavLink } from "react-router-dom";

import ad from "@assets/ad.jpg";
import docker from "@assets/docker.jpg";
const But1 = () => {
  return (
    <div>
      <div className=" text-center pt-6 px-11 text-lg font-bold">
        J'ai toujours hébergé tout et n'importe quoi : des serveurs de jeux pour jouer entre amis pendant le confinement, des serveurs web plus complexes pour mon entreprise et des sites web pour des membres de ma famille qui sont artisans. Je me suis vite rendu compte qu'il fallait une machine dédiée à cela.
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
              Active Directory
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
              Docker et conteunirisation
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
