import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";


import geii from "@assets/geii.gif";
import iut from "@assets/iut.png";

import "@styles/footer.css";


const Footer = () => {

    return (

<footer className="footer">
<p className="textefooter">Calendreau Axel © 2023</p>
<NavLink className="condition" to="/Condition">Condition légales</NavLink>
<img className="imggeii" src={geii} alt="geii" />
<img className="imggeii" src={iut} alt="iut" />


</footer>

    );
    };

export default Footer;