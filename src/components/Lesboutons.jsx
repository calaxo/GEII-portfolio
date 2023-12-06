

import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";


const Lesboutons = () => {



    const navigationLinkStylesBut = ({ isActive }) => ({
        color: isActive ? "#black" : "#2f343d",
        fontSize: isActive ? "1.2em" : "1.2em",
        background: isActive ? "#E0E1DD" : "#218380",
        borderRadius: "10px", // Ajout de la bordure arrondie
        border: "3px solid #2cda9d", 
      });
    
      const navigationLinkStylesPerso = ({ isActive }) => ({
        color: isActive ? "#black" : "#2f343d",
        fontSize: isActive ? "1.2em" : "1.2em",
        background: isActive ? "#E0E1DD" : "#F58F29",
        borderRadius: "10px", // Ajout de la bordure arrondie
        border: "3px solid #2cda9d", 
      });
    
      const navigationLinkStylesTravail = ({ isActive }) => ({
        color: isActive ? "#black" : "#2f343d",
        fontSize: isActive ? "1.2em" : "1.2em",
        background: isActive ? "#E0E1DD" : "#5C95FF",
        borderRadius: "10px", // Ajout de la bordure arrondie
        border: "3px solid #2cda9d", 
      });
    
    
      const navigationLinkStylesBase = ({ isActive }) => ({
        color: isActive ? "#black" : "#2f343d",
        fontSize: isActive ? "1.2em" : "1.2em",
        background: isActive ? "#E0E1DD" : "#E85D75",
        borderRadius: "10px", // Ajout de la bordure arrondie
        border: "3px solid #2cda9d", 
      });


        const navigationLinks = [
          { to: "/Accueil", text: "Accueil", style: navigationLinkStylesBase },
          { to: "/But1", text: "BUT1", class: "but3", style: navigationLinkStylesBut },
          { to: "/But2", text: "BUT2", class: "but3", style: navigationLinkStylesBut },
          { to: "/But3", text: "BUT3", class: "but3", style: navigationLinkStylesBut },
          { to: "/Cyber", text: "Cyber", class: "but3", style: navigationLinkStylesTravail },
          { to: "/Helico", text: "Helico", class: "but3", style: navigationLinkStylesTravail },
          { to: "/Reseaux", text: "Reseaux", class: "but3", style: navigationLinkStylesTravail },
          { to: "/Serveur", text: "Serveur", class: "but3", style: navigationLinkStylesTravail },
          { to: "/WEB", text: "WEB", class: "but3", style: navigationLinkStylesPerso },
          { to: "/PC", text: "PC", class: "but3", style: navigationLinkStylesPerso },
        ];
      
        return (
          <div>

<a className="imggithubdiv" href="https://github.com/calaxo/geii-portfolio">
              <img className="imggithub" src={github} alt="github" />
            </a>

            <a className="imglinkedindiv " href="https://www.linkedin.com/in/calendreau-axel">
              <img className="imglinkedin" src={linkedin} alt="linkedin" />
            </a>


            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} className={`b-${link.class} rounded-button nav-link`} style={link.style}>
                {link.text}
              </NavLink>
            ))}
          </div>
        );
      };

    




export default Lesboutons;