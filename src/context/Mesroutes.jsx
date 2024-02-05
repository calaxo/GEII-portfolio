import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import { lazy } from "react";

const Page404 = lazy(() => import("@pages/Page404"));

import Accueil from "@pages/Accueil.jsx";

import But1 from "@geii/but1/But1.jsx";
import But1_sae1 from "@geii/but1/But1_sae1";
import But1_sae2 from "@geii/but1/But1_sae2";
import But1_sae3 from "@geii/but1/But1_sae3";

import But2 from "@geii/but2/But2.jsx";
import But2_sae1 from "@geii/but2/But2_sae1";
import But2_sae2 from "@geii/but2/But2_sae2";

import But3 from "@geii/but3/But3.jsx";

import PC from "@perso/PC.jsx";

import WEB from "@perso/WEB.jsx";

import Back from "@perso/WEB/Back.jsx";
import Front from "@perso/WEB/Front.jsx";
import Git from "@perso/WEB/Git.jsx";
import Hebergement from "@perso/WEB/Hebergement.jsx";

import Cyber from "@travail/Cyber.jsx";

import DGAC from "@travail/cyber/DGAC.jsx";
import Formation from "@travail/cyber/Formation.jsx";
import Veille from "@travail/cyber/Veille.jsx";

import Helico from "@travail/Helico.jsx";

import Aero from "@travail/helico/Aero.jsx";
import Simu from "@travail/helico/Simu.jsx";

import Reseaux from "@travail/Reseaux.jsx";

import Firewall from "@travail/reseaux/Firewall.jsx";
import Switch from "@travail/reseaux/Switch.jsx";

import Serveur from "@travail/Serveur.jsx";

import ADir from "@travail/serveur/AD.jsx";
import Docker from "@travail/serveur/Docker.jsx";
import Learning from "@travail/serveur/Learning.jsx";
import Linux from "@travail/serveur/Linux.jsx";

import Pagedescription from "@pages/Pagedescription.jsx";

import Condition from "@pages/Condition.jsx";

import Pageimage from "@pages/Pageimage.jsx";

const Mesroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/Accueil" />} />
        <Route path="/Accueil" element={<Accueil />} />

        <Route path="/But1" element={<But1 />} />
        <Route path="/But1_sae1" element={<But1_sae1 />} />
        <Route path="/But1_sae2" element={<But1_sae2 />} />
        <Route path="/But1_sae3" element={<But1_sae3 />} />

        <Route path="/But2" element={<But2 />} />
        <Route path="/But2_sae1" element={<But2_sae1 />} />
        <Route path="/But2_sae2" element={<But2_sae2 />} />

        <Route path="/But3" element={<But3 />} />

        <Route path="/But1_sae1" element={<But1_sae1 />} />
        <Route path="/But1_sae2" element={<But1_sae2 />} />

        <Route path="/WEB" element={<WEB />} />
        <Route path="/Back" element={<Back />} />
        <Route path="/Front" element={<Front />} />
        <Route path="/Git" element={<Git />} />
        <Route path="/Hebergement" element={<Hebergement />} />

        <Route path="/PC" element={<PC />} />

        <Route path="/Cyber" element={<Cyber />} />
        <Route path="/DGAC" element={<DGAC />} />
        <Route path="/Formation" element={<Formation />} />
        <Route path="/Veille" element={<Veille />} />

        <Route path="/Helico" element={<Helico />} />
        <Route path="/Aero" element={<Aero />} />
        <Route path="/Simu" element={<Simu />} />

        <Route path="/Reseaux" element={<Reseaux />} />

        <Route path="/Firewall" element={<Firewall />} />
        <Route path="/Switch" element={<Switch />} />

        <Route path="/Serveur" element={<Serveur />} />
        <Route path="/AD" element={<ADir />} />
        <Route path="/Docker" element={<Docker />} />
        <Route path="/Learning" element={<Learning />} />
        <Route path="/Linux" element={<Linux />} />

        <Route path="/Pageimage" element={<Pageimage />} />

        <Route path="/Pagedescription" element={<Pagedescription />} />

        <Route path="/Condition" element={<Condition />} />

        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default Mesroutes;
