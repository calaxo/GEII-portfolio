/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 circuitboard.glb --transform 
Files: circuitboard.glb [1.25MB] > C:\Users\axelc\Desktop\portfolio\geii\front\geii-portfolio\src\circuitboard-transformed.glb [54.82KB] (96%)
*/

import { useFrame } from "@react-three/fiber";

// https://bv.univ-poitiers.fr/access/content/user/acalen01/portfolio/circuitboard-transformed.glb

// /src/circuitboard-transformed.glb

import React, { useRef, useState, useLayoutEffect } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";

export function PCB(props) {
  const { nodes, materials } = useGLTF("/src/circuitboard-transformed.glb");

  const mesh = useRef();

  useFrame((state, dt) => {
    mesh.current.lookAt(state.pointer.x, state.pointer.y, 2);
  });

  return (
    <group ref={mesh} {...props} dispose={null}>
      <mesh
        geometry={nodes.screw003.geometry}
        material={materials.PaletteMaterial001}
        position={[-2.167, 0.061, -4.283]}
        scale={0.179}
      />

      <instancedMesh
        args={[nodes.Cylinder024.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Cylinder024.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder024_1.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Cylinder024_1.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder024_2.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Cylinder024_2.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder024_3.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Cylinder024_3.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder024_4.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Cylinder024_4.instanceMatrix}
      />
      <instancedMesh
        args={[nodes.Cylinder024_5.geometry, materials.PaletteMaterial001, 6]}
        instanceMatrix={nodes.Cylinder024_5.instanceMatrix}
      />
    </group>
  );
}

useGLTF.preload("/src/circuitboard-transformed.glb");
