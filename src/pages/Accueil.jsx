/* eslint-disable react/no-unescaped-entities */
import cvfr from "@assets/cvfr.pdf";
import cven from "@assets/cvfr.pdf";
const Accueil = () => {
    return (
      <div>
<h1>Mon Portfolio</h1>
        <p>Bienvenue sur mon portfolio !</p>
        <p>Je suis actuellement en Bachelor Génie Électrique et Informatique Industrielle.</p>
        <p>En tant qu'alternant, je travaille en tant que technicien simulateur d'hélicoptère et administrateur informatique dans une entreprise école de pilotage d'hélicoptère depuis 1 an et demi.</p>
        <p>En dehors de mon parcours académique, je suis également un bricoleur passionné et un développeur web.</p>




      <a href={cvfr} >afficher mon CV en français</a>
      <a href={cven} >afficher mon CV en anglais</a>


     </div>
    );
  };
  
  export default Accueil;
  