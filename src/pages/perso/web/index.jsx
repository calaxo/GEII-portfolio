import React from "react";
import { NavLink } from "react-router-dom";

import back from "@assets/back.jpg";
import front from "@assets/front.jpg";
import git from "@assets/git.png";
import hebergement from "@assets/hebergement.jpg";

const But1 = () => {
  return (
    <div >
      <div className=" mx-16 justify-center	 text-lg font-bold">
        il y'a de nombreuse "brique" informatique qui ensemble forme un systeme
        complexe avec beaucoup d'interaction et de synergie pour simplifer le
        developement web
      </div>

      <div className="mt-8 flex justify-center">
        <NavLink to="/perso/web/Back" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={back}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              vers le back
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
              vers le front
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
              vers git
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
              vers l'hebergement
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
