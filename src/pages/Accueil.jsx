
import { useRef, useState, useEffect  } from 'react'
import { Canvas,useFrame } from '@react-three/fiber'

import cvfr from "@assets/cvfr.pdf";
import cven from "@assets/cvfr.pdf";
import ref_geii from "@assets/ref_geii.pdf";

import github from "@assets/github.png";
import linkedin from "@assets/linkedin.png";
import imgmoi from "@assets/imgmoi.jpg"

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


let x = 0;
let y = 0;
let z = 0;
let helicox = 0;
let helicoy = 0;
let helicoz = 0;
const LeCanvas = () => {

  return(
  <Canvas camera={{ position: [-20, 5,2] }}>
  {/* <Box position={[-2.5, 0, 0]} /> */}
{/* <SpotLight  position={[10, 10, 10]} angle={1} focus={1} color={"red"} penumbra={0} intensity={500} target-position={[0, 0,0]} /> */}
<directionalLight position={[3.3, 1.0, 4.4]} intensity={10} />
<directionalLight position={[-3.3, 1.0, -4.4]} intensity={2} />

<Modelhelico position={[helicox, helicoy, helicoz]} rotation={[x, y, z]} scale={0.5} />



{/* <Box position={[-5, 0, 0]} />
<Box position={[-2.5, 0, 0]} />
<Box position={[0, 0, 0]} />
<Box position={[2.5, 0, 0]} />
<Box position={[5, 0, 0]} /> */}

{/* <Environment preset="warehouse" background /> */}
</Canvas>
  )
}


const Accueil = () => {
  // const materials = useLoader(MTLLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.mtl");
  // const obj2 = useLoader(OBJLoader, "http://dev.axel-cal.fr/Lowpoly_Helicopter.obj", (loader) => {
  //   materials.preload();
  //   loader.setMaterials(materials);
  // });






  return (
    <div className="accueil">

        Fr
<h1>MON PORTFOLIO</h1>

<img className="imgmoi" src={imgmoi} alt="ma photo" />
  <div className="lecanvas">
<LeCanvas className="lecanvas" />
</div>
<div className='textfren'>

Un Portfolio est un receuil de documents et d'exemples pratiques  
         L'objectif de ce portfolio est de mettre en lumière des compétences,
        Il permet notamment de montrer a des recruteur ou des enseignant de prouver  ce dont je suis capable

        <br></br>
        <br></br>
        <br></br>

        Je m'appelle Axel Calendreau et je suis actuellement étudiant en Génie électrique et informatique industrielle à l'IUT d'Angoulême.
          Ce sont des études permettant de devevnir technicien dans de domaine en rapport avec l'electricité, l'electornique et les sience industrielle
          <a href={ref_geii}> lien vers le referentiel de compétence </a>
         Je suis en dernière année de mon cursus, me préparant à obtenir mon Bachelor Universitaire de Technologie.

Depuis ma deuxième année d'études, je suis également alternant au Heli Union Training Center, une école de pilotage d'hélicoptère située à l'aéroport de Champniers.
qui forme théoriquement et pratiquement des pilotes de monde entier d'armée ou de secteur publique trés varié

 Durant mes études, j'ai exploré de nombreuses facettes de l'électronique, et au cours de mon alternance,
  j'ai acquis et mis en pratique diverses connaissances liées à l'informatique, telles que le développement, la gestion de serveurs, les réseaux internet et la cybersécurité.

Mon amour initial pour l'électronique s'est élargi au fil du temps pour inclure une passion croissante pour l'informatique. Ce domaine me permet d'apprendre de manière autodidacte,
 ce que j'apprécie particulièrement.




En tant que projet concret réalisé au cours de mon alternance, j'ai développé un site web affichant des informations aéronautiques telles que la météo et le planning des vols.
 Cette expérience m'a introduit au développement web professionnel et m'a inspiré à créer ce portfolio, ainsi qu'un site pour un artisan, et divers petits sites de test.

pour mon futur professionnel je souahite etre embauché dans l'entreprise dans lequel je suis actuellement et recevori des formation professionnel sur la cybersécrutié,
je sais que si j'en ai l'envie et que je trouve des études passionante je pourrait les rejoindre grace a ma rigueur

En dehors de mes activités académiques et professionnelles, j'aime profiter de la vie en compagnie de mes amis, nourrir ma curiosité,
 explorer le monde et engager des conversations enrichissantes avec les personnes que je rencontre. Par ailleurs, démonter et réparer des objets pour mes amis est l'une de mes activités préférées dans ma vie personnelle.
</div>

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
            <div className='textfren'>

      En
<h1>MY PORTFOLIO</h1>

A Portfolio is a collection of documents and practical examples. The objective of this portfolio is to highlight skills, particularly to demonstrate to recruiters or educators what I am capable of.

<br></br>
<br></br>
<br></br>

My name is Axel Calendreau, and I am currently a student in Electrical Engineering and Industrial Computer Science at the IUT of Angoulême. These studies aim to become a technician in fields related to electricity, electronics, and industrial science.
<a href={ref_geii}> Link to the competency framework </a>
I am in the final year of my course, preparing to obtain my University Bachelor's degree in Technology.

Since my second year of studies, I have also been working as an apprentice at Heli Union Training Center, a helicopter pilot training school located at Champniers Airport. It trains pilots from around the world for various military and public sector roles.

During my studies, I explored many aspects of electronics, and during my apprenticeship, I gained and applied various knowledge related to computer science, such as development, server management, internet networks, and cybersecurity.

My initial love for electronics has expanded over time to include a growing passion for computer science. This field allows me to learn self-taught, which I particularly appreciate.

As a concrete project carried out during my apprenticeship, I developed a website displaying aeronautical information such as weather and flight schedules. This experience introduced me to professional web development and inspired me to create this portfolio, as well as a website for an artisan and various small test sites.

For my professional future, I aspire to be hired by the company I am currently in and receive professional training in cybersecurity. I know that if I have the desire and find exciting studies, I could join them thanks to my diligence.

Outside of my academic and professional activities, I enjoy life with my friends, nurture my curiosity, explore the world, and engage in enriching conversations with people I meet. Additionally, dismantling and repairing objects for my friends is one of my favorite activities in my personal life.
      </div>
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
  
)
  }
export default Accueil;