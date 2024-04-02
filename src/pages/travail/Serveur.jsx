import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import ad from "@assets/ad.jpg";
import docker from "@assets/docker.jpg";
import learning from "@assets/learning.jpg";
import linux from "@assets/linux.jpg";

const Serveur = () => {
  return (
    <>
      <div className="intropage">
        j'ai toujour heberger tout et n'importe quoi des serveur de jeux pour
        jouer entre amis pendant le confinement des serveur web plus complexe
        pour mon entreprise et des site web pour de la famille qui est artisant
        je me suis vite rendu compte qu'il faut une machine dédié a ca
      </div>

      <div className="choix">
        <NavLink key="AD" to="/AD" className="moitiegauchehaut4">
          <div>
            <div className="bouton-page">
              <img className="imgchoix3" src={ad} alt="SAE1" />
              <span>active directory</span>
            </div>
          </div>
        </NavLink>

        <NavLink key="Docker" to="/Docker" className="moitiedroitehaut4">
          <div className="moitie droite">
            <div className="bouton-page">
              <img className="imgchoix3" src={docker} alt="SAE1" />
              <span>docker</span>
            </div>
          </div>
        </NavLink>

        {/* <NavLink key="Learning" to="/Learning" className="moitiegauchebas4">
          <div>
            <div className="bouton-page">
              <img className="imgchoix3" src={learning} alt="SAE1" />
              <span>learning</span>
            </div>
          </div>
        </NavLink>

        <NavLink key="Linux" to="/Linux" className="moitiedroitebas4">
          <div>
            <div className="bouton-page">
              <img className="imgchoix3" src={linux} alt="SAE1" />
              <span>linux</span>
            </div>
          </div>
        </NavLink> */}
      </div>
    </>
  );
};

export default Serveur;
