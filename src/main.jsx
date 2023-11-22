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

import But1 from "@pages/but1/But1.jsx";
import But1_sae1 from "@pages/but1/But1_sae1";
import But1_sae2 from "@pages/but1/But1_sae2";
import But1_sae3 from "@pages/but1/But1_sae3";

import But2 from "@pages/but2/But2.jsx";
import But2_sae1 from "@pages/but2/But2_sae1";
import But2_sae2 from "@pages/but2/But2_sae2";

import But3 from "@pages/but3/But3.jsx";
import But3_sae1 from "@pages/but3/But3_sae1.jsx";

import Condition from "@pages/Condition.jsx";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";

function App() {
  const [hamburgerOpen, setHamburgerOpen] = useState(false);

  const toggleHamburger = () => {
    setHamburgerOpen(!hamburgerOpen);
  };

  const navigationLinkStyles = ({ isActive }) => ({
    color: isActive ? "#F4F4F5" : "#2f343d",
    fontSize: isActive ? "1.2em" : "1em",
    background: isActive ? "brown" : "#f0f0f0",
    borderRadius: "10px", // Ajout de la bordure arrondie
  });

  const navigationLinks = [
    { to: "/Accueil", text: "Accueil" },
    { to: "/But1", text: "BUT1" },
    { to: "/But2", text: "BUT2" },
    { to: "/But3", text: "BUT3" },
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
              <NavLink key={link.to} to={link.to} className={`b${link.text.charAt(link.text.length - 1)} rounded-button`} style={navigationLinkStyles}>
                {link.text}
              </NavLink>
            ))}
          </div>
          <div className="burger-button" onClick={toggleHamburger}>
            <a className="burger-button_menu">menu</a>
            <div
              className="burger-button__line line1"
              style={
                hamburgerOpen
                  ? {
                      rotate: "-33deg",
                      transform: `translate(-0.05em, -0.15em)`,
                      borderRadius: "10px", // Ajout de la bordure arrondie
                    }
                  : { rotate: "0deg" }
              }
            ></div>

            {/* ... (similar changes for line2 and line3) */}
          </div>
        </div>
      </div>

      <div className="burger-menu" style={{ display: hamburgerOpen ? "block" : "none" }}>
        <div className="burger-nav-links">
          {navigationLinks.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={toggleHamburger} className={`burger-b${link.text.charAt(link.text.length - 1)}`} style={navigationLinkStyles}>
              {link.text}
            </NavLink>
          ))}
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
