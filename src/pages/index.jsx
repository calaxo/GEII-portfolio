import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { NavLink } from "react-router-dom";

import React, { Fragment, lazy, Suspense } from "react";

import cvfr from "@assets/cvfr.pdf";
import cven from "@assets/cvfr.pdf";
import ref_geii from "@assets/ref_geii.pdf";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";
import imgmoi from "@assets/imgmoi.jpg";

import { Modelhelico } from "@components/Modelhelico";
import { PCB } from "@components/PCB";
import { Server } from "@components/Server";
import drapfr from "@assets/drapfr.jpg";
import drapen from "@assets/drapen.png";

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

const LeCanvas = () => {
  return (
    <Canvas
      className="h-full w-full"
      style={{
        height: "30em",
        position: "fixed",
        top: "5em",
        zIndex: "1",
      }}
      camera={{ position: [2, 3, 15] }}
    >
      {/* <Box position={[-2.5, 0, 0]} /> */}
      {/* <SpotLight  position={[10, 10, 10]} angle={1} focus={1} color={"red"} penumbra={0} intensity={500} target-position={[0, 0,0]} /> */}
      <directionalLight position={[3.3, 1.0, 4.4]} intensity={5} />
      <directionalLight position={[-3.3, 1.0, -4.4]} intensity={2} />

      <Modelhelico position={[0, 0, 0]} scale={0.5} />
      <PCB position={[7, 0, 6]} scale={0.7} />
      <Server position={[13, 0, 11]} scale={1} />
      {/* <OrbitControls /> */}

      {/* <Box position={[-5, 0, 0]} />
<Box position={[-2.5, 0, 0]} />
<Box position={[0, 0, 0]} />
<Box position={[2.5, 0, 0]} />
<Box position={[5, 0, 0]} /> */}

      {/* <Environment preset="warehouse" background /> */}
    </Canvas>
  );
};

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
    <div className="pt-36">
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
        <div className=" relative left-0 z-30 w-1/2 flex-initial">
          <a key="Front" href="#/perso/web/Front">
            <div className="mx-auto w-36 justify-center rounded-lg bg-slate-300  text-2xl font-bold ">
              <span className="mx-2">concevoir</span>
            </div>
          </a>

          <a key="Simu" href="#travail/helico/Simu" className="">
            <div>
              <div className="  mx-auto my-3 w-36 rounded-lg bg-slate-300 text-2xl font-bold">
                <span className="mx-2">verifier</span>
              </div>
            </div>
          </a>
          <a key="Switch" href="#/travail/reseaux/Switch" className="">
            <div>
              <div className="mx-auto my-3 w-36 rounded-lg bg-slate-300 text-2xl font-bold">
                <span className="mx-2">implanter</span>
              </div>
            </div>
          </a>
          <a key="Simu" href="#/travail/helico/Simu" className="">
            <div>
              <div className="mx-auto my-3 w-36 rounded-lg bg-slate-300 text-2xl font-bold">
                <span className="mx-2">maintenir</span>
              </div>
            </div>
          </a>
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

      <LeCanvas />

      <h1 className="mb-4  max-w-72 justify-center text-6xl font-bold">
        {languefr ? "MON PORTFOLIO" : "MY PORTFOLIO"}
      </h1>
      <div
        className={` relative z-40 mx-8  mt-32 rounded-lg bg-slate-500 bg-opacity-70  p-14 text-lg font-medium ${languefr ? "" : "hidden  "}`}
      >
        Un Portfolio est un recueil de documents et d'exemples pratiques
        L'objectif de ce portfolio est de mettre en lumière des compétences, Il
        permet notamment de montrer a des recruteur ou des enseignant de prouver
        ce dont je suis capable
        <br></br>
        <br></br>
        <br></br>
        Je m'appelle Axel Calendreau et je suis actuellement étudiant en Génie
        électrique et informatique industrielle à l'IUT d'Angoulême.
        <br></br>
        Ce sont des études permettant de devevnir technicien dans de domaine en
        rapport avec l'electricité, l'electornique et les sience industrielle
        <a href={ref_geii}> lien vers le referentiel de compétence </a>
        Je suis en dernière année de mon cursus, me préparant à obtenir mon
        Bachelor Universitaire de Technologie.
        <br></br>
        <br></br>
        Depuis ma deuxième année d'études, je suis également alternant au Heli
        Union Training Center, une école de pilotage d'hélicoptère située à
        l'aéroport de Champniers. qui forme théoriquement et pratiquement des
        pilotes de monde entier d'armée ou de secteur publique trés varié.
        <br></br>
        <br></br>
        Durant mes études, j'ai exploré de nombreuses facettes de
        l'électronique, et au cours de mon alternance, j'ai acquis et mis en
        pratique diverses connaissances liées à l'informatique, telles que le
        développement, la gestion de serveurs, les réseaux internet et la
        cybersécurité. Mon amour initial pour l'électronique s'est élargi au fil
        du temps pour inclure une passion croissante pour l'informatique. Ce
        domaine me permet d'apprendre de manière autodidacte, ce que j'apprécie
        particulièrement.
        <br></br>
        <br></br>
        En tant que projet concret réalisé au cours de mon alternance, j'ai
        développé un site web affichant des informations aéronautiques telles
        que la météo et le planning des vols. Cette expérience m'a introduit au
        développement web professionnel et m'a inspiré à créer ce portfolio,
        ainsi qu'un site pour un artisan, et divers petits sites de test.
        <br></br>
        <br></br>
        pour mon futur professionnel je souahite etre embauché dans l'entreprise
        dans lequel je suis actuellement et recevoit des formation professionnel
        sur la cybersécrutié, je sais que si j'en ai l'envie et que je trouve
        des études passionante je pourrait les rejoindre grace a ma rigueur
        <br></br>
        <br></br>
        Depuis peu je commence aussi a me renseigner pour faire des études
        d'ingénieur dans le domaine de l'informatique pour avoir un meilleur
        avenir professionel, il est possible que je fasse ces études d'ingénieur
        en alternance dans la meme entreprise que mon alternance actuelle
        <br></br>
        <br></br>
        En dehors de mes activités académiques et professionnelles, j'aime
        profiter de la vie en compagnie de mes amis, nourrir ma curiosité,
        explorer le monde et engager des conversations enrichissantes avec les
        personnes que je rencontre. Par ailleurs, démonter et réparer des objets
        pour mes amis est l'une de mes activités préférées dans ma vie
        personnelle.
      </div>
      <div
        className={` relative z-40 mx-8  mt-32 bg-gray-400  bg-opacity-30 p-14 ${languefr ? "hidden" : ""}`}
      >
        A portfolio is a collection of documents and practical examples. The
        objective of this portfolio is to highlight skills it serves to
        demonstrate to recruiters or educators what I am capable of.
        <br></br>
        <br></br>
        <br></br>
        My name is Axel Calendreau, and I am currently a student in Electrical
        Engineering and Industrial Computing at the IUT of Angoulême.
        <br></br>
        These studies aim to become a technician in fields related to
        electricity, electronics, and industrial science.
        <a href={ref_geii}> Link to the competence reference </a>I am in the
        final year of my course, preparing to obtain my University Bachelor of
        Technology.
        <br></br>
        <br></br>
        Since my second year of studies, I have also been an apprentice at Heli
        Union Training Center, a helicopter pilot training school located at
        Champniers Airport. They theoretically and practically train pilots from
        around the world, including those from the military and various public
        sectors.
        <br></br>
        <br></br>
        During my studies, I explored various aspects of electronics, and during
        my apprenticeship, I acquired and applied various computer-related
        knowledge, such as development, server management, internet networks,
        and cybersecurity. My initial love for electronics has expanded over
        time to include a growing passion for computer science. This field
        allows me to learn independently, which I particularly appreciate.
        <br></br>
        <br></br>
        As a concrete project during my apprenticeship, I developed a website
        displaying aeronautical information such as weather and flight
        schedules. This experience introduced me to professional web development
        and inspired me to create this portfolio, as well as a website for a
        craftsman and various small test sites.
        <br></br>
        <br></br>
        For my future professional endeavors, I wish to be hired by the current
        company I am in and receive professional training in cybersecurity. I
        know that if I have the desire and find exciting studies, I could join
        them thanks to my discipline.
        <br></br>
        <br></br>
        Outside of my academic and professional activities, I enjoy life with
        friends, nourish my curiosity, explore the world, and engage in
        enriching conversations with the people I meet. Moreover, dismantling
        and repairing objects for my friends is one of my favorite activities in
        my personal life.
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
