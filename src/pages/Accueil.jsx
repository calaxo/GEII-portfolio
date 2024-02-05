import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
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
    <Canvas camera={{ position: [2, 3, 15] }}>
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

  const passeen = () => {
    if (languefr == true) {
      setlanguefr(false);
    }
    console.log(languefr);
  };

  const passefr = () => {
    if (languefr == false) {
      setlanguefr(true);
    }
  };

  const magiefr = {
    display: languefr == false ? "none" : "block",
  };

  const magieen = {
    display: languefr == false ? "block" : "none",
  };

  return (
    <div className="accueil">
      <button style={magiefr} className="drapeaubtn" onClick={passeen}>
        <img src={drapen} className="drapeau" />
      </button>
      <button className="drapeaubtn" style={magieen} onClick={passefr}>
        <img src={drapfr} className="drapeau" />
      </button>
      <img className="imgmoi" src={imgmoi} alt="ma photo" />
      <div className="lecanvas">
        <LeCanvas className="lecanvas" />
      </div>
      <h1 style={magiefr}>MON PORTFOLIO</h1>
      <div className="textfren " style={magiefr}>
        Un Portfolio est un receuil de documents et d'exemples pratiques
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
        dans lequel je suis actuellement et recevori des formation professionnel
        sur la cybersécrutié, je sais que si j'en ai l'envie et que je trouve
        des études passionante je pourrait les rejoindre grace a ma rigueur
        <br></br>
        <br></br>
        En dehors de mes activités académiques et professionnelles, j'aime
        profiter de la vie en compagnie de mes amis, nourrir ma curiosité,
        explorer le monde et engager des conversations enrichissantes avec les
        personnes que je rencontre. Par ailleurs, démonter et réparer des objets
        pour mes amis est l'une de mes activités préférées dans ma vie
        personnelle.
      </div>

      <div className="contactdiv" style={magiefr}>
        <a className="cvlien" href={cvfr}>
          afficher mon CV en français
        </a>
        <p></p>
        Calendreau Axel
        <p></p>
        06-16-75-16-50
        <p></p>
        cal.axel2@gmail.com
        <p></p>
        <a
          className="imggithubdiv"
          href="https://github.com/calaxo/geii-portfolio"
        >
          <img className="imggithub" src={github} alt="github" />
        </a>
        <p></p>
        <a
          className="imglinkedindiv "
          href="https://www.linkedin.com/in/calendreau-axel"
        >
          <img className="imglinkedin" src={linkedin} alt="linkedin" />
        </a>
      </div>

      <h1 style={magieen}>MY PORTFOLIO</h1>
      <div className="textfren" style={magieen}>
        A portfolio is a collection of documents and practical examples. The
        objective of this portfolio is to highlight skills; it serves to
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
      <div className="contactdiv" style={magieen}>
        <a className="cvlien" href={cven}>
          display my resumee in english
        </a>
        <p></p>
        Calendreau Axel
        <p></p>
        06-16-75-16-50
        <p></p>
        cal.axel2@gmail.com
        <p></p>
        <a
          className="imggithubdiv"
          href="https://github.com/calaxo/geii-portfolio"
        >
          <img className="imggithub" src={github} alt="github" />
        </a>
        <p></p>
        <a
          className="imglinkedindiv "
          href="https://www.linkedin.com/in/calendreau-axel"
        >
          <img className="imglinkedin" src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};
export default Accueil;
