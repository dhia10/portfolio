import React, { useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF, Environment, Float } from '@react-three/drei';
import * as THREE from 'three';

function BlackHoleModel() {
  const modelRef = useRef();
  const { scene } = useGLTF('/black_hole.glb');

  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.002;
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <primitive 
        ref={modelRef} 
        object={scene} 
        scale={2.5}
        position={[0, 0, 0]}
      />
    </Float>
  );
}

function Particles() {
  const particlesRef = useRef();
  const particleCount = 1000;
  
  const positions = new Float32Array(particleCount * 3);
  const colors = new Float32Array(particleCount * 3);
  
  for (let i = 0; i < particleCount; i++) {
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(Math.random() * 2 - 1);
    const radius = 5 + Math.random() * 15;
    
    positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = radius * Math.cos(phi);
    
    // Purple/blue/cyan color palette
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      colors[i * 3] = 0.4;
      colors[i * 3 + 1] = 0.4;
      colors[i * 3 + 2] = 0.95;
    } else if (colorChoice < 0.66) {
      colors[i * 3] = 0.23;
      colors[i * 3 + 1] = 0.51;
      colors[i * 3 + 2] = 0.96;
    } else {
      colors[i * 3] = 0.02;
      colors[i * 3 + 1] = 0.71;
      colors[i * 3 + 2] = 0.83;
    }
  }
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0005;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.05;
    }
  });
  
  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particleCount}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={particleCount}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function BlackHoleScene() {
  return (
    <div className="w-full h-screen fixed top-0 left-0 z-0">
      <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#6366f1" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#3b82f6" />
          <spotLight
            position={[0, 15, 0]}
            angle={0.3}
            penumbra={1}
            intensity={1}
            color="#06b6d4"
          />
          
          <BlackHoleModel />
          <Particles />
          
          <Environment preset="night" />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
            maxPolarAngle={Math.PI / 1.5}
            minPolarAngle={Math.PI / 3}
          />
        </Suspense>
      </Canvas>
      
      {/* Gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70 pointer-events-none" />
    </div>
  );
}

export default BlackHoleScene;
