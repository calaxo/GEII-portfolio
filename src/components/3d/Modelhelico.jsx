/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 src\components\Lowpoly_Helicopter.gltf --transform 
Files: src\components\Lowpoly_Helicopter.gltf [239.86KB] > C:\Users\axelc\Desktop\portfolio\geii\front\geii-portfolio\Lowpoly_Helicopter-transformed.glb [20.22KB] (92%)
*/
// /src/Lowpoly_Helicopter-transformed.glb

// https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/Lowpoly_Helicopter-transformed.glb

import { useFrame } from "@react-three/fiber";

import React, { useRef, useState, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function Modelhelico(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    "https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/Lowpoly_Helicopter-transformed.glb",
  );
  const { actions, names } = useAnimations(animations, group);

  useLayoutEffect(() => {
    names.forEach((animation) => {
      actions?.[animation]?.play();
    });
  }, [actions, names]);

  const mesh = useRef();

  useFrame((state, dt) => {
    mesh.current.lookAt(state.pointer.x, state.pointer.y, 2);
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group ref={mesh} name="Scene">
        <group
          name="Helicopter"
          position={[0.299, -0.504, 0.135]}
          rotation={[1.568, 0, 0]}
          scale={0.01}
        >
          <group
            name="Copter_Body"
            position={[-0.161, -229.122, 213.899]}
            rotation={[0, 0, -Math.PI / 2]}
          >
            <mesh
              name="Copter"
              geometry={nodes.Copter.geometry}
              material={materials["Palette.001"]}
              position={[237.969, -71.454, -717.517]}
              rotation={[0, -1.571, 0]}
            />
            <mesh
              name="Cylinder"
              geometry={nodes.Cylinder.geometry}
              material={materials.Palette}
              position={[2446.425, 0, -767.203]}
              rotation={[Math.PI / 2, 0, 0]}
            />
          </group>
          <mesh
            name="Propeller"
            geometry={nodes.Propeller.geometry}
            material={materials.Palette}
            position={[-2.332, -2670.83, -559.667]}
            rotation={[0, 0, -Math.PI / 2]}
          />
          <mesh
            name="Propeller_2"
            geometry={nodes.Propeller_2.geometry}
            material={materials["Palette.003"]}
            position={[3.292, -219.394, -603.522]}
          />
          <mesh
            name="Legs"
            geometry={nodes.Legs.geometry}
            material={materials["Palette.002"]}
            position={[-331.968, -417.255, 405.852]}
            rotation={[-Math.PI / 2, 0, 0.615]}
          />
          <mesh
            name="Tail_part"
            geometry={nodes.Tail_part.geometry}
            material={materials.Palette}
            position={[-0.161, -2674.077, -560.914]}
            rotation={[-Math.PI / 2, Math.PI / 2, 0]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(
  "https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/Lowpoly_Helicopter-transformed.glb",
);
