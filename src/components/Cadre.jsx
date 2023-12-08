
import { HashRouter as Router, Routes, Route, NavLink, Navigate } from "react-router-dom";



import "@styles/Cadre.css";

const Cadre = (props) => {
    return (
        <div className="cadre">
            <div className="cadreimg">
            <NavLink to="/Pageimage" state= {{from:props.image}}>
            <img className="grosseimg" src={'./src/assetspreuve/'+props.image+'.jpg'} alt={props.title} />
            
              </NavLink>
           
            </div>
            <p>{props.title}</p>
        </div>
    )
}

export default Cadre;