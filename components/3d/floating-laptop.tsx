"use client";

import { useRef, MutableRefObject } from "react";
import { Canvas } from "@react-three/fiber";
import { Box, Environment, PresentationControls, ContactShadows } from "@react-three/drei";
import * as THREE from "three";

function Model() {
  const ref = useRef<THREE.Mesh>(null);

  return (
    <Box 
      ref={ref}
      args={[3, 0.2, 2]} 
      position={[0, 0, 0]}
    >
      <meshStandardMaterial 
        color="#3b82f6"
        metalness={0.8}
        roughness={0.2}
      />
    </Box>
  );
}

export function FloatingLaptop() {
  return (
    <div className="h-[400px] w-full max-w-3xl mx-auto">
      <Canvas
        camera={{ position: [0, 2, 5], fov: 45 }}
        dpr={[1, 2]}
      >
        <Environment preset="city" />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <spotLight 
          position={[-10, 10, 10]} 
          angle={0.15} 
          penumbra={1} 
          intensity={0.5}
          castShadow
        />
        
        <PresentationControls
          global
          rotation={[0.13, 0.1, 0]}
          polar={[-0.4, 0.2]}
          azimuth={[-0.5, 0.5]}
          config={{ mass: 2, tension: 400 }}
          snap={{ mass: 4, tension: 400 }}
        >
          <group rotation={[-Math.PI / 4, 0, 0]}>
            <Model />
            <Box 
              args={[3, 2, 0.2]} 
              position={[0, 1, -1]}
              rotation={[0.8, 0, 0]}
            >
              <meshStandardMaterial 
                color="#3b82f6"
                metalness={0.8}
                roughness={0.2}
              />
            </Box>
          </group>
        </PresentationControls>
        
        <ContactShadows
          position={[0, -2, 0]}
          opacity={0.4}
          scale={20}
          blur={2}
          far={4}
        />
      </Canvas>
    </div>
  );
}