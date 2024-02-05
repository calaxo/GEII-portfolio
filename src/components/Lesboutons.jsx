import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";

const Lesboutons = () => {
  const navigationLinkStylesBase = ({ isActive }) => ({
    color: isActive ? "#black" : "#2f343d",
    fontSize: isActive ? "1.2em" : "1.2em",
    background: isActive ? "#E0E1DD" : "#8884ff",
    borderRadius: "10px", // Ajout de la bordure arrondie
  });

  const navigationLinks = [
    { to: "/Accueil", text: "Accueil" },
    { to: "/But1", text: "BUT1", class: "but3" },
    { to: "/But2", text: "BUT2", class: "but3" },
    { to: "/But3", text: "BUT3", class: "but3" },
    { to: "/Cyber", text: "Cyber", class: "but3" },
    { to: "/Helico", text: "Helico", class: "but3" },
    { to: "/Reseaux", text: "Reseaux", class: "but3" },
    { to: "/Serveur", text: "Serveur", class: "but3" },
    { to: "/WEB", text: "WEB", class: "but3" },
    { to: "/PC", text: "PC", class: "but3" },
  ];

  return (
    <div>
      <a
        className="imggithubdiv"
        href="https://github.com/calaxo/geii-portfolio"
      >
        <img className="imggithub" src={github} alt="github" />
      </a>

      <a
        className="imglinkedindiv "
        href="https://www.linkedin.com/in/calendreau-axel"
      >
        <img className="imglinkedin" src={linkedin} alt="linkedin" />
      </a>

      {navigationLinks.map((link) => (
        <NavLink
          key={link.to}
          to={link.to}
          className={`b-${link.class} rounded-button nav-link`}
          style={navigationLinkStylesBase}
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Lesboutons;
