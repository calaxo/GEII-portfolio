
import { useRef, useState, useEffect  } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'

import cvfr from "@assets/cvfr.pdf";
import cven from "@assets/cvfr.pdf";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";


import { Modelhelico } from '@components/Modelhelico'

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


  const [mousePos, setMousePos] = useState({});

  useEffect(() => {
    const handleMouseMove = (event) => {
      setMousePos({ x: event.clientX, y: event.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener(
        'mousemove',
        handleMouseMove
      );
    };
  }, []);

 let x = 0;
  let y = mousePos.x/200;
  let z = 0;
  let helicox = -50+mousePos.y/10;
  let helicoy = mousePos.x/200;
  let helicoz = 0;

  return (
    <div className="accueil">
  <div className="lecanvas">
    <Canvas camera={{ position: [-20, 5,2] }}>
      {/* <Box position={[-2.5, 0, 0]} /> */}
    {/* <SpotLight  position={[10, 10, 10]} angle={1} focus={1} color={"red"} penumbra={0} intensity={500} target-position={[0, 0,0]} /> */}
    <directionalLight position={[3.3, 1.0, 4.4]} intensity={10} />
    <directionalLight position={[-3.3, 1.0, -4.4]} intensity={2} />

    <Modelhelico position={[helicox, helicoy, helicoz]} rotation={[x, y, z]} scale={0.005} />



    {/* <Box position={[-5, 0, 0]} />
    <Box position={[-2.5, 0, 0]} />
    <Box position={[0, 0, 0]} />
    <Box position={[2.5, 0, 0]} />
    <Box position={[5, 0, 0]} /> */}

    {/* <Environment preset="warehouse" background /> */}
  </Canvas>
  </div>
  <div className='texte-acceuil'>
        <h1>francais</h1>
<h1>MON PORTFOLIO</h1>
        <p>Bienvenue sur mon portfolio !</p>
        <p>Je suis actuellement en Bachelor Génie Électrique et Informatique Industrielle.</p>
        <p>En tant qu'alternant, je travaille en tant que technicien simulateur d'hélicoptère et administrateur informatique dans une entreprise école de pilotage d'hélicoptère depuis 1 an et demi.</p>
        <p>En dehors de mon parcours académique, je suis également un bricoleur passionné et un développeur web.</p>



<div className='contactdiv'>
      <a className='cvlien' href={cvfr} >afficher mon CV en français</a>

      <p></p>
      Calendreau Axel
      <p></p>
      06-16-75-16-50
      <p></p>
      cal.axel2@gmail.com
      <p></p>

      <a className="imggithubdiv" href="https://github.com/calaxo/geii-portfolio">
              <img className="imggithub" src={github} alt="github" />
            </a>
            <p></p>

            <a className="imglinkedindiv " href="https://www.linkedin.com/in/calendreau-axel">
              <img className="imglinkedin" src={linkedin} alt="linkedin" />
            </a>
            </div>


      <h1>english</h1>
<h1>MY PORTFOLIO</h1>
        <p>Bienvenue sur mon portfolio !</p>
        <p>Je suis actuellement en Bachelor Génie Électrique et Informatique Industrielle.</p>
        <p>En tant qu'alternant, je travaille en tant que technicien simulateur d'hélicoptère et administrateur informatique dans une entreprise école de pilotage d'hélicoptère depuis 1 an et demi.</p>
        <p>En dehors de mon parcours académique, je suis également un bricoleur passionné et un développeur web.</p>


      
      <div className='contactdiv'>
      <a className='cvlien' href={cven} >display my resumee in english</a>

      <p></p>
      Calendreau Axel
      <p></p>
      06-16-75-16-50
      <p></p>
      cal.axel2@gmail.com
      <p></p>

      <a className="imggithubdiv" href="https://github.com/calaxo/geii-portfolio">
              <img className="imggithub" src={github} alt="github" />
            </a>
            <p></p>

            <a className="imglinkedindiv " href="https://www.linkedin.com/in/calendreau-axel">
              <img className="imglinkedin" src={linkedin} alt="linkedin" />
            </a>
            </div>

     

  </div>
  </div>
  
)
  }
export default Accueil;