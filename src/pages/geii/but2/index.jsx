import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React from "react";
import voltmetre from "@assets/voltmetre.jpg";
import onde from "@assets/onde.jpg";

const But2 = () => {
  return (
    <>
      <div className="intropage">
        cette année fut trés interessante, nous avons pu apprendre beaucoup de
        choses, et nous avons pu mettre en pratique nos connaissances dans des
        projets.
      </div>

      <div className="choix">
        <a
          key="But2_sae1"
          href="#geii/but2/But2_sae1"
          className="moitiemilieu3"
        >
          <div>
            <div className="bouton-page btn1">
              <img className="imgchoix3" src={voltmetre} alt="SAE1" />
              <span>vers le premiere projet de cette année</span>
            </div>
          </div>
        </a>

        <a
          key="But2_sae2"
          href="#geii/but2/But2_sae2"
          className="moitiedroite3"
        >
          <div>
            <div className="bouton-page btn2">
              <img className="imgchoix3" src={onde} alt="SAE1" />
              <span>vers le deuxieme projet de cette année</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default But2;
