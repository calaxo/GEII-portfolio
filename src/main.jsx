import { HashRouter as Router } from "react-router-dom";

import { createRoot } from "react-dom/client";
import React, { Fragment, lazy, Suspense } from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";

// Import des styles
import "@styles/index.css";
import "@styles/accueil.css";
import "@styles/page.css";
import "@styles/choix.css";
import "@styles/tableau.css";

// Import des composants
// import Mesroutes from "@context/Mesroutes.jsx";
import Header from "@components/Header";
import Footer from "@components/Footer.jsx";

import routes from "~react-pages";
const router = createHashRouter(routes);
console.log(routes);
// Fonction principale App
function App() {
  return (
    <Suspense fallback={null}>
    <React.StrictMode>
      {/* Composant Header */}
      <Header />
      
      <RouterProvider router={router} />

      <Footer />
    </React.StrictMode>
    </Suspense>
  );
}

// Création de la racine de l'application et rendu du composant App dans l'élément avec l'ID "root"
const root = createRoot(document.getElementById("root"));
root.render(<App />);
