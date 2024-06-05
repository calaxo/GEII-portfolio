
import { Canvas} from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


import { Modelhelico } from "@3d/Modelhelico";
import { PCB } from "@3d/PCB";
import { Server } from "@3d/Server";

const LeCanvas = () => {
  return (
    <Canvas
      className="hidden h-full lg:block "
      style={{
        height: "30em",

        top: "5em",
        zIndex: "1",
      }}
      camera={{ position: [2, 3, 15] }}
    >

      <directionalLight position={[3.3, 1.0, 4.4]} intensity={5} />
      <directionalLight position={[-3.3, 1.0, -4.4]} intensity={2} />

      <Modelhelico position={[0, 0, 0]} scale={0.5} />
      <PCB position={[7, 0, 6]} scale={0.7} />
      <Server position={[-7, 0, 11]} scale={1} />
      <OrbitControls enableZoom={false} />


    </Canvas>
  );
};

export default LeCanvas;
