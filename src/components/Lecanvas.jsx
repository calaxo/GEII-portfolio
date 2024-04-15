import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { NavLink } from "react-router-dom";
import React from "react";
import { Modelhelico } from "@components/Modelhelico";
import { PCB } from "@components/PCB";
import { Server } from "@components/Server";

const LeCanvas = () => {
  return (
    <Canvas
      className="hidden h-full lg:block "
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
      <Server position={[-7, 0, 11]} scale={1} />
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

export default LeCanvas;
