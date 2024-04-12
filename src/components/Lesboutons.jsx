import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { Fragment, lazy, Suspense } from "react";
import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";

const Lesboutons = () => {
  const navigationLinks = [
    { to: "/", text: "Accueil" },
    { to: "#/geii/but1", text: "BUT1", class: "but3" },
    { to: "#/geii/But2", text: "BUT2", class: "but3" },
    { to: "#/geii/But3", text: "BUT3", class: "but3" },
    { to: "#/travail/Cyber", text: "Cyber", class: "but3" },
    { to: "#/travail/Helico", text: "Helico", class: "but3" },
    { to: "#/travail/Reseaux", text: "Reseaux", class: "but3" },
    { to: "#/travail/Serveur", text: "Serveur", class: "but3" },
    { to: "#/perso/web", text: "WEB", class: "but3" },
    // { to: "/PC", text: "PC", class: "but3" },
  ];

  return (
    <div className="flex items-center space-x-4">
      <a className="w-8" href="https://github.com/calaxo/geii-portfolio">
        <img src={github} alt="github" />
      </a>

      <a className="w-8" href="https://www.linkedin.com/in/calendreau-axel">
        <img className="rounded-full bg-white" src={linkedin} alt="linkedin" />
      </a>

      {navigationLinks.map((link) => (
        <a
          key={link.to}
          href={link.to}
          className="text-blue-500 hover:underline"

        >
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default Lesboutons;
