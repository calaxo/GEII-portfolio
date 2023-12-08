// Import des modules nécessaires
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
// Import des styles
import "@styles/index.css";
import "@styles/accueil.css";
import "@styles/page.css";
import "@styles/choix.css";
import "@styles/tableau.css";

// Import des composants
import Mesroutes from "@context/Mesroutes.jsx";
import Header from "@components/Header";
import Footer from "@components/Footer.jsx";

// Fonction principale App
function App() {

  return (
    <Router>
      {/* Composant Header */}
      <Header />


        <Mesroutes />



      <Footer />
    </Router>
  );
}

// Création de la racine de l'application et rendu du composant App dans l'élément avec l'ID "root"
const root = createRoot(document.getElementById("root"));
root.render(<App />);
