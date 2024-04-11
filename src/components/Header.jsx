import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { Fragment, lazy, Suspense } from "react";
import Lesboutons from "@components/Lesboutons.jsx";

const Header = () => {
  return (
    <div className="header">
      <a href="/Accueil" className="logo">
        <div className="titre">Calendreau Axel</div>
      </a>
      <div className="header-right">
        <div className="nav-links">
          <Lesboutons></Lesboutons>
        </div>
      </div>
    </div>
  );
};

export default Header;
