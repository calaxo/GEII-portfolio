import {  useState,lazy, Suspense  } from "react";


import cvfr from "@assets/cvfr.pdf";
import cven from "@assets/cvfr.pdf";
// import ref_geii from "@assets/ref_geii.pdf";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";
import imgmoi from "@assets/imgmoi.jpg";


import drapfr from "@assets/drapfr.jpg";
import drapen from "@assets/drapen.png";
import TimelineFR from "@components/TimelineFR";

import TimelineEN from "@components/TimelineEN";
// import LeCanvas from "@3d/LeCanvas.jsx";
const LeCanvas = lazy(() => import("@3d/LeCanvas.jsx"));
// import { TextureLoader } from 'three/src/loaders/TextureLoader'

// function Box(props) {
//   // This reference will give us direct access to the mesh
//   const meshRef = useRef()
//   // Set up state for the hovered and active state
//   const [hovered, setHover] = useState(false)
//   const [active, setActive] = useState(false)

//   // Subscribe this component to the render-loop, rotate the mesh every frame

//   // Return view, these are regular three.js elements expressed in JSX
//   return (
//     <mesh
//       {...props}
//       ref={meshRef}
//       scale={active ? 1.5 : 1}
//       onClick={(event) => setActive(!active)}
//       onPointerOver={(event) => setHover(true)}
//       onPointerOut={(event) => setHover(false)}>
//       <boxGeometry args={[20, 20, 1]} />
//       <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//     </mesh>
//   )
// }

// const Scene = () => {
//   useThree(({ camera }) => {
//     camera.rotation.set(THREE.MathUtils.degToRad(0),THREE.MathUtils.degToRad(0), THREE.MathUtils.degToRad(0));
//     //                                                    tourne      droite gauche            de haut en bas

//   });
//   const materials = useLoader(MTLLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.mtl");
//   const obj2 = useLoader(OBJLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.obj")

//   console.log(obj2);
//   return <primitive object={obj2} position={[200, -10, 0]}  scale={0.4}  />;
// };



const Accueil = () => {
  // const materials = useLoader(MTLLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.mtl");
  // const obj2 = useLoader(OBJLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.obj", (loader) => {
  //   materials.preload();
  //   loader.setMaterials(materials);
  // });

  const [languefr, setlanguefr] = useState(true);

  const changelangu = () => {
    setlanguefr(!languefr);
  };

  return (
    <div>
      <button
        className="relative z-40 w-32 bg-fixed  px-4 py-2  "
        onClick={changelangu}
      >
        <img
          src={languefr ? drapen : drapfr}
          className="fixed w-32 rounded-lg"
        />
      </button>
      <div className=" flex">
        <div className=" relative left-0 z-30 w-1/2 flex-row  ">
          <a
            key="Front"
            href="#/perso/web/Front"
            className="mx-auto block w-40"
          >
            <div
              className="before:ease relative mx-auto my-3 w-40 overflow-hidden rounded-lg  text-center text-2xl font-bold
           shadow-2xl transition-all before:absolute before:top-1/2
          before:h-0 before:w-64 before:origin-center before:-translate-x-20
          before:rotate-45 before:bg-blue-500 before:duration-300
          hover:text-white hover:shadow-blue-500 hover:before:h-64
          hover:before:-translate-y-32 "
            >
              <span className="mx-2">concevoir</span>
            </div>
          </a>
          <a
            key="Simu"
            href="#travail/helico/Simu"
            className="mx-auto block w-40"
          >
            <div>
              <div
                className="before:ease relative mx-auto my-3 w-40 overflow-hidden rounded-lg  text-center text-2xl font-bold
           shadow-2xl transition-all before:absolute before:top-1/2
          before:h-0 before:w-64 before:origin-center before:-translate-x-20
          before:rotate-45 before:bg-blue-500 before:duration-300
          hover:text-white hover:shadow-blue-500 hover:before:h-64
          hover:before:-translate-y-32"
              >
                <span className="mx-2">verifier</span>
              </div>
            </div>
          </a>
          <a
            key="Switch"
            href="#/travail/reseaux/Switch"
            className="mx-auto block w-40"
          >
            <div>
              <div
                className="before:ease relative mx-auto my-3 w-40 overflow-hidden rounded-lg  text-center text-2xl font-bold
           shadow-2xl transition-all before:absolute before:top-1/2
          before:h-0 before:w-64 before:origin-center before:-translate-x-20
          before:rotate-45 before:bg-blue-500 before:duration-300
          hover:text-white hover:shadow-blue-500 hover:before:h-64
          hover:before:-translate-y-32"
              >
                <span className="mx-2">implanter</span>
              </div>
            </div>
          </a>
          <a
            key="Simu"
            href="#/travail/helico/Simu"
            className="mx-auto block w-40"
          >
            <div>
              {/* hover: mx-auto my-3 w-36 rounded-lg bg-slate-300 text-2xl
              font-bold */}
              <div
                className="before:ease relative mx-auto my-3 w-40 overflow-hidden rounded-lg  text-center text-2xl font-bold
           shadow-2xl transition-all before:absolute before:top-1/2
          before:h-0 before:w-64 before:origin-center before:-translate-x-20
          before:rotate-45 before:bg-blue-500 before:duration-300
          hover:text-white hover:shadow-blue-500 hover:before:h-64
          hover:before:-translate-y-32"
              >
                <span className="mx-2">maintenir</span>
              </div>
            </div>
          </a>
          {/* before:ease relative h-12 w-40 overflow-hidden border border-blue-500
          text-blue-500 shadow-2xl transition-all before:absolute before:top-1/2
          before:h-0 before:w-64 before:origin-center before:-translate-x-20
          before:rotate-45 before:bg-blue-500 before:duration-300
          hover:text-white hover:shadow-blue-500 hover:before:h-64
          hover:before:-translate-y-32 */}
        </div>
        <div className="right-0 w-1/2">
          <img
            className=" mx-auto mb-8 h-40  rounded-full"
            src={imgmoi}
            alt="Ma photo"
          />
        </div>
      </div>
      {/* position: fixed; top: 5em; right: 0; margin-top: 5em; margin-left: 5em;
      margin-right: 5em; margin-bottom: 5em; height: 70%; width: 100%; */}
<Suspense fallback={<a>Loading</a>}>
      <LeCanvas />
</Suspense>
      <h1 className="relative z-40 mb-4 ml-11 max-w-72 justify-center text-6xl font-bold">
        {languefr ? "MON PORTFOLIO" : "MY PORTFOLIO"}
      </h1>
      <div
        className={` relative z-40 mx-8  mt-32 rounded-lg bg-slate-500 bg-opacity-70  p-14 text-lg font-medium ${languefr ? "" : "hidden  "}`}
      >

        <TimelineFR />
      </div>
      <div
        className={` relative z-40 mx-8  mt-32 rounded-lg bg-slate-500 bg-opacity-70  p-14 text-lg font-medium ${languefr ? "hidden" : ""}`}
      >

        <TimelineEN />
      </div>

      <div className={languefr ? "visible" : "collapse"}>
        <a
          className=" relative z-50 mx-auto my-8 mb-2 block w-32 rounded-lg bg-slate-200 font-bold text-black"
          href={cvfr}
        >
          Afficher mon CV en français
        </a>
        {/* Other French content */}
      </div>
      <div className={languefr ? "collapse" : "visible"}>
        <a
          className="mx-auto my-8 mb-2 block w-32 rounded-lg bg-slate-200 font-bold text-black"
          href={cven}
        >
          Display my resumé in English
        </a>
        {/* Other English content */}
      </div>
      <div className=" relative z-50 mt-4 flex justify-center">
        <a className="mr-4" href="https://github.com/calaxo/geii-portfolio">
          <img className="my-8 h-20 w-20" src={github} alt="Github" />
        </a>
        <a href="https://www.linkedin.com/in/calendreau-axel">
          <img
            className="my-8 h-20 w-20 rounded-full bg-white"
            src={linkedin}
            alt="Linkedin"
          />
        </a>
      </div>
    </div>
  );
};

export default Accueil;

//       <div className="" style={magiefr}>
//         <a className="" href={cvfr}>
//           afficher mon CV en français
//         </a>
//         <p></p>
//         Calendreau Axel
//         <p></p>
//         06-16-75-16-50
//         <p></p>
//         cal.axel2@gmail.com
//         <p></p>
//         <a className="" href="https://github.com/calaxo/geii-portfolio">
//           <img className="" src={github} alt="github" />
//         </a>
//         <p></p>
//         <a
//           className="imglinkedindiv "
//           href="https://www.linkedin.com/in/calendreau-axel"
//         >
//           <img className="" src={linkedin} alt="linkedin" />
//         </a>
//       </div>

//       <div className="" style={magieen}>
//         <a className="" href={cven}>
//           display my resumee in english
//         </a>
//         <p></p>
//         Calendreau Axel
//         <p></p>
//         06-16-75-16-50
//         <p></p>
//         cal.axel2@gmail.com
//         <p></p>
//         <a className="" href="https://github.com/calaxo/geii-portfolio">
//           <img className="" src={github} alt="github" />
//         </a>
//         <p></p>
//         <a className=" " href="https://www.linkedin.com/in/calendreau-axel">
//           <img className="" src={linkedin} alt="linkedin" />
//         </a>
//       </div>
//     </div>
//   );
// };
// export default Accueil;
