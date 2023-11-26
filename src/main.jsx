import { createRoot } from "react-dom/client";
import "@styles/index.css";
import "@styles/accueil.css";
import "@styles/but1.css";
import "@styles/but2.css";

import "@styles/but3.css";

import Page404 from "@pages/Page404";
import { useState } from "react";
import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

import Accueil from "@pages/Accueil.jsx";

import But1 from "@geii/but1/But1.jsx";
import But1_sae1 from "@geii/but1/But1_sae1";
import But1_sae2 from "@geii/but1/But1_sae2";
import But1_sae3 from "@geii/but1/But1_sae3";

import But2 from "@geii/but2/But2.jsx";
import But2_sae1 from "@geii/but2/But2_sae1";
import But2_sae2 from "@geii/but2/But2_sae2";

import But3 from "@geii/but3/But3.jsx";
import But3_sae1 from "@geii/but3/But3_sae1.jsx";


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

import Cable from "@travail/reseaux/Cable.jsx";
import Firewall from "@travail/reseaux/Firewall.jsx";
import Switch from "@travail/reseaux/Switch.jsx";


import Serveur from "@travail/Serveur.jsx";

import ADir from "@travail/serveur/AD.jsx";
import Docker from "@travail/serveur/Docker.jsx";
import Learning from "@travail/serveur/Learning.jsx";
import Linux from "@travail/serveur/Linux.jsx";
import Proxy from "@travail/serveur/Proxy.jsx";



import Condition from "@pages/Condition.jsx";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";

function App() {


  const navigationLinkStylesBut = ({ isActive }) => ({
    color: isActive ? "#black" : "#2f343d",
    fontSize: isActive ? "1.2em" : "1em",
    background: isActive ? "white" : "#05f140",
    borderRadius: "10px", // Ajout de la bordure arrondie
  });

  const navigationLinkStylesPerso = ({ isActive }) => ({
    color: isActive ? "#black" : "#2f343d",
    fontSize: isActive ? "1.2em" : "1em",
    background: isActive ? "white" : "brown",
    borderRadius: "10px", // Ajout de la bordure arrondie
  });

  const navigationLinkStylesTravail = ({ isActive }) => ({
    color: isActive ? "#black" : "#2f343d",
    fontSize: isActive ? "1.2em" : "1em",
    background: isActive ? "white" : "#006EB3",
    borderRadius: "10px", // Ajout de la bordure arrondie
  });

  const navigationLinks = [
    { to: "/Accueil", text: "Accueil" },

    { to: "/But1", text: "BUT1", class: "but3",style: navigationLinkStylesBut },
    { to: "/But2", text: "BUT2", class: "but3",style: navigationLinkStylesBut },
    { to: "/But3", text: "BUT3", class: "but3",style: navigationLinkStylesBut },



    { to: "/Cyber", text: "Cyber", class: "but3",style: navigationLinkStylesTravail },
    { to: "/Helico", text: "Helico", class: "but3",style: navigationLinkStylesTravail },
    { to: "/Reseaux", text: "Reseaux", class: "but3",style: navigationLinkStylesTravail },
    { to: "/Serveur", text: "Serveur", class: "but3",style: navigationLinkStylesTravail },



    { to: "/WEB", text: "WEB", class: "but3",style: navigationLinkStylesPerso },
    { to: "/PC", text: "PC", class: "but3",style: navigationLinkStylesPerso },



  ];

  return (
    <Router>
      <div className="header">
        <NavLink to="/Accueil" className="logo">
          <div className="titre">Mon Portfolio</div>
        </NavLink>
        <div className="header-right">
          <div className="nav-links">
            <a className="imggithubdiv" href="https://github.com/calaxo/geii-portfolio">
              <img className="imggithub" src={github} alt="github" />
            </a>

            <a className="imglinkedindiv " href="https://www.linkedin.com/in/calendreau-axel">
              <img className="imglinkedin" src={linkedin} alt="linkedin" />
            </a>

            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={`b-${link.class} rounded-button`} style={link.style}>
                {link.text}
              </NavLink>
            ))}
          </div>

        </div>
      </div>



      <div className="content">
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
          <Route path="/But3_sae1" element={<But3_sae1 />} />

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
          <Route path="/Cable" element={<Cable />} />
          <Route path="/Firewall" element={<Firewall />} />
          <Route path="/Switch" element={<Switch />} />

          <Route path="/Serveur" element={<Serveur />} />
          <Route path="/AD" element={<ADir />} />
          <Route path="/Docker" element={<Docker />} />
          <Route path="/Learning" element={<Learning />} />
          <Route path="/Linux" element={<Linux />} />
          <Route path="/Proxy" element={<Proxy />} />




          <Route path="/Condition" element={<Condition />} />

          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>

      <footer className="footer">
        <p>Site © 2023</p>
        <NavLink to="/Condition">Condition légales</NavLink>
      </footer>
    </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
