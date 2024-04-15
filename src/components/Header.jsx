import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { Fragment, lazy, Suspense, useState } from "react";
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
  const [menuOpen, setMenuOpen] = useState(false);
  const menu = () => {
    setMenuOpen(!menuOpen);
    console.log(menuOpen);
  };
  return (
    <>
      <div className="sticky z-50  h-24 w-full items-center justify-between bg-slate-800 px-6">
        <a
          href="/Accueil"
          className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-5xl font-black text-transparent hover:from-blue-500 hover:via-green-500 hover:to-emerald-500"
        >
          Calendreau Axel
        </a>
        {/* text-xl font-bold text-white */}

        <section className="MOBILE-MENU z-50 flex lg:hidden">
          <div
            className={`HAMBURGER-ICON absolute right-0 top-0 space-y-2 px-8 py-8 ${menuOpen ? "hidden" : "flex-row"} `}
            onClick={menu}
          >
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
            <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
          </div>

          <div>
            <div
              className={`absolute right-0 top-0 cursor-pointer px-8 py-8 ${menuOpen ? "flex" : "hidden"}`}
              onClick={menu}
            >
              <svg
                className="h-8 w-8 text-red-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
          </div>
        </section>

        <div className=" hidden items-center space-x-12  lg:flex">
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
              className="bg-clip-text font-black text-white hover:animate-text  hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-500 hover:to-emerald-500 hover:font-black hover:text-transparent"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>

      <ul
        className={`sticky w-full  space-y-2 bg-slate-600 px-8 py-2 lg:hidden ${menuOpen ? "flex-col" : "hidden"} `}
      >
        <a
          href="https://github.com/calaxo/geii-portfolio"
          className=" mx-auto block h-8 w-8 text-white hover:text-blue-500"
          onClick={menu}
        >
          <img src={github} alt="github" className="h-8 w-8" />
        </a>

        <a
          href="https://www.linkedin.com/in/calendreau-axel"
          className=" mx-auto block h-8 w-8 text-white hover:text-blue-500"
          onClick={menu}
        >
          <img
            src={linkedin}
            alt="linkedin"
            className="h-8 w-8 rounded-full bg-white"
          />
        </a>

        {navigationLinks.map((link) => (
          <a
            key={link.to}
            href={link.to}
            className=" mx-auto block  w-32 border border-blue-600 bg-clip-text text-center font-black text-white hover:animate-text  hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-500 hover:to-emerald-500 hover:font-black hover:text-transparent"
            onClick={menu}
          >
            {link.text}
          </a>
        ))}
      </ul>
    </>
  );
};

export default Header;
