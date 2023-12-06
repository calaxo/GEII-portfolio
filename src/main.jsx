import { createRoot } from "react-dom/client";
import "@styles/index.css";
import "@styles/accueil.css";
import "@styles/page.css";
import "@styles/choix.css";
import "@styles/tableau.css";



import Mesroutes from "@context/Mesroutes.jsx";
import Header from "@components/Header";
import Footer from "@components/Footer.jsx";


import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";





function App() {




  return (
    <Router>
        <Header></Header>


      <div className="content">
        
        <Mesroutes></Mesroutes>
        
      </div>
      <Footer></Footer>

    </Router>
  );
}

const root = createRoot(document.getElementById("root"));
root.render(<App />);
