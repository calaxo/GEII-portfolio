import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { Fragment, lazy, Suspense } from "react";
import geii from "@assets/geii.gif";
import iut from "@assets/iut.png";



const Footer = () => {
  return (
    <footer className="mt-auto bottom-0 relative z-50 bg-gray-800 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center">
        <p className="mb-2 text-white">Calendreau Axel © 2023</p>
        <a className="mb-2 text-white hover:underline" href="#/Condition">
          Conditions légales
        </a>
        <div className="flex items-center justify-center">
          <img
            className="mx-2 h-20 w-20 rounded-lg bg-white"
            src={geii}
            alt="geii"
          />
          <img
            className="mx-2 h-20 w-20 rounded-lg bg-white"
            src={iut}
            alt="iut"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
