"use client";

import { Float, PerspectiveCamera } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useLayoutEffect, useMemo, useRef } from "react";
import * as THREE from "three";

gsap.registerPlugin(ScrollTrigger);

function CrystallizingObj() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const count = 1000;
  
  // Target geometry (Icosahedron)
  const targetGeo = useMemo(() => new THREE.IcosahedronGeometry(4, 2), []);
  const targetPos = targetGeo.attributes.position;
  const countTarget = targetPos.count;

  // Data for particles
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        // Random start position
        const x = (Math.random() - 0.5) * 30;
        const y = (Math.random() - 0.5) * 30;
        const z = (Math.random() - 0.5) * 30;
        
        // Target position (map to icosahedron vertices)
        // If we have more particles than vertices, loop around
        const targetIndex = i % countTarget;
        const tx = targetPos.getX(targetIndex);
        const ty = targetPos.getY(targetIndex);
        const tz = targetPos.getZ(targetIndex);

        temp.push({ 
            x, y, z, 
            tx, ty, tz,
            currentX: x, currentY: y, currentZ: z
        });
    }
    return temp;
  }, [count, countTarget, targetPos]);

  // Animation progress ref
  const progress = useRef({ value: 0 });

  useLayoutEffect(() => {
    // We need to find the trigger element (the section)
    // Since this is inside Canvas, we look up the DOM
    // For simplicity, let's assume the parent section is the trigger. 
    // In R3F, accessing DOM outside is tricky without refs.
    
    const ctx = gsap.context(() => {
        ScrollTrigger.create({
            trigger: "[class*='Signature_section']", // selector for the module class
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            onUpdate: (self) => {
                progress.current.value = self.progress;
            }
        });
    });
    
    return () => ctx.revert();
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);

  useFrame(() => {
    if (!meshRef.current) return;
    
    const p = progress.current.value; // 0 to 1
    
    particles.forEach((particle, i) => {
        // Lerp between random (x,y,z) and target (tx,ty,tz)
        // Add some noise based on progress
        
        const lerpX = THREE.MathUtils.lerp(particle.x, particle.tx, p);
        const lerpY = THREE.MathUtils.lerp(particle.y, particle.ty, p);
        const lerpZ = THREE.MathUtils.lerp(particle.z, particle.tz, p);
        
        // Add some rotation/swirl during transition
        const swirl = Math.sin(p * Math.PI) * 5;
        
        dummy.position.set(lerpX, lerpY, lerpZ);
        
        // Scale up as it crystallizes
        const s = 0.1 + p * 0.1; 
        dummy.scale.set(s, s, s);
        
        dummy.updateMatrix();
        meshRef.current?.setMatrixAt(i, dummy.matrix);
    });
    meshRef.current.instanceMatrix.needsUpdate = true;
    
    // Rotate the whole mesh slowly
    meshRef.current.rotation.y += 0.002;
    meshRef.current.rotation.x += 0.001;
  });

  return (
    <instancedMesh ref={meshRef} args={[undefined, undefined, count]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial 
        color="#3b82f6" 
        emissive="#000" 
        roughness={0.1} 
        metalness={0.8} 
      />
    </instancedMesh>
  );
}

export default function SignatureVisual() {
  return (
    <Canvas>
      <PerspectiveCamera makeDefault position={[0, 0, 15]} fov={50} />
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} intensity={2} color="#ffffff" />
      <pointLight position={[-10, -5, -10]} intensity={1} color="#10b981" />
      
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
         <CrystallizingObj />
      </Float>
    </Canvas>
  );
}
