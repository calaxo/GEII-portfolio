
import { NavLink } from "react-router-dom";
import moteur from "@assets/moteur.jpg";
import son from "@assets/son.jpg";
import trieur from "@assets/trieur.jpg";

const But1 = () => {
  return (
    <div>
      <div className="text-center pt-6	 text-lg font-bold">
      Voici mes projets de ma première année de GEII, dans laquelle je me suis engagé parce que j'ai toujours été intéressé par l'électricité et l'électronique.
      </div>

      <div className="mt-8  flex-row justify-center lg:flex">
        <NavLink to="/geii/but1/But1_sae1" className="mx-4">
          <div className="transform rounded-lg border p-4 transition duration-300 ease-in-out hover:scale-105">
            <img
              className="mx-auto h-72 w-72 object-cover"
              src={moteur}
              alt="SAE1"
            />
            <span className=" mt-2 block text-center hover:text-cyan-500">
              Premier projet de cette année
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
              Deuxième projet de cette année
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
              Troisième projet de cette année
            </span>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default But1;
