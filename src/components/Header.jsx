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

const Header = () => {
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
    <div className="fixed z-50 flex h-24 w-full items-center justify-between bg-slate-800 px-6">
      <a href="/Accueil" className="text-xl font-bold text-white">
        Calendreau Axel
      </a>

      <div className="flex items-center space-x-4">
        <a
          href="https://github.com/calaxo/geii-portfolio"
          className="text-white hover:text-blue-500"
        >
          <img src={github} alt="github" className="w-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/calendreau-axel"
          className="text-white hover:text-blue-500"
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="w-8 rounded-full bg-white"
          />
        </a>

        {navigationLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className="text-white hover:text-blue-500"
          >
            {link.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Header;
