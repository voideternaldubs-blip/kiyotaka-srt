'use client'

import { useRef } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Environment, Float } from '@react-three/drei'
import * as THREE from 'three'

function Geometry() {
  const meshRef = useRef<THREE.Mesh>(null)
  const { mouse } = useThree()

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = THREE.MathUtils.lerp(
      meshRef.current.rotation.x,
      mouse.y * 0.3,
      0.05
    )
    meshRef.current.rotation.y += 0.004
    meshRef.current.rotation.y = THREE.MathUtils.lerp(
      meshRef.current.rotation.y,
      meshRef.current.rotation.y + mouse.x * 0.02,
      0.05
    )
  })

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <torusKnotGeometry args={[1.1, 0.35, 256, 64]} />
        <meshStandardMaterial
          color="#111111"
          roughness={0.05}
          metalness={0.9}
          envMapIntensity={1.5}
        />
      </mesh>
    </Float>
  )
}

function Particles() {
  const count = 120
  const positions = new Float32Array(count * 3)
  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 12
    positions[i * 3 + 1] = (Math.random() - 0.5) * 12
    positions[i * 3 + 2] = (Math.random() - 0.5) * 8
  }
  const ref = useRef<THREE.Points>(null)
  useFrame(() => {
    if (ref.current) ref.current.rotation.y += 0.0005
  })
  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.018} color="#555555" sizeAttenuation />
    </points>
  )
}

export default function Scene() {
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        left: '40%',
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 5], fov: 40 }}
        dpr={[1, 2]}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 5, 5]} intensity={0.8} />
        <pointLight position={[-4, 2, 3]} intensity={0.5} color="#ffffff" />
        <Environment preset="studio" />
        <Geometry />
        <Particles />
      </Canvas>
    </div>
  )
}
