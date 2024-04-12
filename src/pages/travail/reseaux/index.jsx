import React from "react";
import { NavLink } from "react-router-dom";

import fire from "@assets/fire.jpg";
import switchr from "@assets/switch.jpg";
const But1 = () => {
  return (
    <div className="pt-36">
      <div className=" mx-16 justify-center	 text-lg font-bold">
        plus jeune que internet fonctionnait tout seul puis j'ai eu mes premier
        cours d'informatique au lycée qui expliquait les base de fonctionment du
        reseaux depuis j'essaie toujour de comprendre plus en profondeur le
        fonctionnement des reseaux informatique
      </div>

      <div className="mt-8 flex justify-center">
        <NavLink to="/travail/reseaux/Firewall" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={fire}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              firewall
            </span>
          </div>
        </NavLink>

        <NavLink to="/travail/reseaux/Switch" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={switchr}
              alt="SAE3"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              switch reseaux
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
