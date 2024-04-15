import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createHashRouter } from "react-router-dom";

import "@styles/index.css";

import Header from "@layout/Header";
import Footer from "@layout/Footer.jsx";

import routes from "~react-pages";
const router = createHashRouter(routes);

// Définition du composant App
function App() {
  return (
    <Suspense fallback={<a>Loading</a>}>
      <React.StrictMode>
        {/* Conteneur principal avec en-tête, contenu et pied de page */}
        <div className="flex min-h-screen flex-col">
          <Header /> {/* En-tête */}
          <RouterProvider router={router} /> {/* Contenu */}
          <Footer /> {/* Pied de page */}
        </div>
      </React.StrictMode>
    </Suspense>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />); // Rendu du composant App dans le DOM
