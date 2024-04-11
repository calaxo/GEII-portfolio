import {
  HashRouter as Router,
  Routes,
  Route,
  NavLink,
  Navigate,
} from "react-router-dom";
import React, { Fragment, lazy, Suspense } from "react";

import back from "@assets/back.jpg";
import front from "@assets/front.jpg";
import git from "@assets/git.png";
import hebergement from "@assets/hebergement.jpg";

const WEB = () => {
  return (
    <>
      <div className="intropage">
        il y'a de nombreuse "brique" informatique qui ensemble forme un systeme
        complexe avec beaucoup d'interaction et de synergie pour simplifer le
        developement web
      </div>

      <div className="choix">
        <a key="Back" href="#/perso/web/Back" className="moitiegauchehaut4">
          <div>
            <div className="bouton-page btn1">
              <img className="imgchoix3" src={back} alt="SAE1" />
              <span>vers le back</span>
            </div>
          </div>
        </a>

        <a key="Front" href="#/perso/web/Front" className="moitiedroitehaut4">
          <div>
            <div className="bouton-page">
              <img className="imgchoix3" src={front} alt="SAE1" />
              <span>vers le front</span>
            </div>
          </div>
        </a>

        <a key="Git" href="#/perso/web/Git" className="moitiegauchebas4">
          <div className="moitiemilieu24">
            <div className="bouton-page">
              <img className="imgchoix3" src={git} alt="SAE1" />
              <span>vers git</span>
            </div>
          </div>
        </a>

        <a
          key="Hebergement"
          href="#/perso/web/Hebergement"
          className="moitiedroitebas4"
        >
          <div>
            <div className="bouton-page">
              <img className="imgchoix3" src={hebergement} alt="SAE1" />
              <span>vers l'hebergement</span>
            </div>
          </div>
        </a>
      </div>
    </>
  );
};

export default WEB;
