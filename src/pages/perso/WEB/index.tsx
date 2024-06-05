
import { NavLink } from "react-router-dom";

import back from "@assets/back.jpg";
import front from "@assets/front.jpg";
import git from "@assets/git.png";
import hebergement from "@assets/hebergement.jpg";

const But1 = () => {
  return (
    <div>
      <div className=" pt-6 text-center	 text-lg font-bold">
        Il y a de nombreuses "briques" informatiques qui, ensemble, forment un système complexe avec beaucoup d'interactions et de synergies pour simplifier le développement web.
      </div>

      <div className="mt-8 flex-row justify-center lg:flex">
        <NavLink to="/perso/web/Back" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={back}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Back/serveur
            </span>
          </div>
        </NavLink>

        <NavLink to="/perso/web/Front" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={front}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Front/Navigateur
            </span>
          </div>
        </NavLink>

        <NavLink to="/perso/web/Git" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={git}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Git:gestionairte de version
            </span>
          </div>
        </NavLink>

        <NavLink to="/perso/web/Hebergement" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={hebergement}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Hebergement
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
