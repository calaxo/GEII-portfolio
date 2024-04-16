import React from "react";
import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";

const Menupc = ({ navigationLinks }) => {
  return (
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
        <NavLink
          key={link.to}
          to={link.to}
          className="bg-clip-text font-black text-white hover:animate-text  hover:bg-gradient-to-r hover:from-blue-500 hover:via-green-500 hover:to-emerald-500 hover:font-black hover:text-transparent"
        >
          {link.text}
        </NavLink>
      ))}
    </div>
  );
};

export default Menupc;