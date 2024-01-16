
import { NavLink } from "react-router-dom";

import veille from "@assets/veille.jpg";
import formation from "@assets/formation.jpg";
import cyber from "@assets/cyber.jpg";


const Cyber = () => {
  return (

    <>
    <div className="intropage">
      j'ai toujour aimé la sécurité informatique, des deux coté, rendre mon pc plus sécurisé et essayer de de le pirater plus jeune,
      a force j'ai appris les aspect professionel de la sécurité informaituqe
    </div>

    <div className="choix">

        <NavLink key="DGAC" to="/DGAC" className="moitiegauche3">
        <div >
          <div className="bouton-page">
          <img className="imgchoix3" src={cyber} alt="SAE1" />
            <span>cybersecurite</span>
          </div>
          </div>
        </NavLink>



        <NavLink key="Formation" to="/Formation" className="moitiemilieu3">
        <div >

          <div className="bouton-page">
          <img className="imgchoix3" src={formation} alt="SAE1" />
            <span>formation</span>

          </div>
          </div>
        </NavLink>



        <NavLink key="Veille" to="/Veille" className="moitiedroite3">
        <div >
          
          <div className="bouton-page">
          <img className="imgchoix3" src={veille} alt="SAE1" />

            <span>veille</span>
          </div>

          </div>
        </NavLink>



    </div>

    </>

  );
};

export default Cyber;
