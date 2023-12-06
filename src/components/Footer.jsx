import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";


import geii from "@assets/geii.gif";
import iut from "@assets/iut.png";


const Footer = () => {

    return (

<footer className="footer">
<p>Site © 2023</p>
<NavLink to="/Condition">Condition légales</NavLink>
<img className="imggeii" src={geii} alt="geii" />
<img className="imggeii" src={iut} alt="iut" />


</footer>

    );
    };

export default Footer;