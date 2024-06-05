
import { NavLink } from "react-router-dom";

import fire from "@assets/fire.jpg";
import switchr from "@assets/switch.jpg";
const But1 = () => {
  return (
    <div>
      <div className="text-center pt-6	 text-lg font-bold">
        Quand j'étais plus jeune, Internet fonctionnait tout seul. Puis, j'ai eu mes premiers cours d'informatique au lycée, qui expliquaient les bases du fonctionnement des réseaux. Depuis, j'essaie toujours de comprendre plus en profondeur le fonctionnement des réseaux informatiques.
      </div>

      <div className="mt-8 flex-row justify-center lg:flex">
        <NavLink to="/travail/reseaux/Firewall" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={fire}
              alt="SAE2"
            />
            <span className="mt-2 block text-center hover:text-cyan-500">
              Firewall/Pare-Feu
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
              Switch/Commutateur de reseau
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
