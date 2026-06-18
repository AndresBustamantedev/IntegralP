import { Center, useGLTF } from '@react-three/drei'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Group } from 'three'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

const BASE_ROTATION_X = Math.PI / 9
const BASE_ROTATION_Y = Math.PI + Math.PI / 6

function WallModel() {
  const groupRef = useRef<Group | null>(null)
  const { pointer } = useThree()
  const { scene } = useGLTF('/pared.glb')
  const model = useMemo(() => scene.clone(), [scene])

  useFrame(({ clock }) => {
    const g = groupRef.current
    if (!g) return

    const t = clock.getElapsedTime()
    const rx = pointer.y * 0.18
    const ry = pointer.x * 0.32

    g.rotation.x += (BASE_ROTATION_X + rx - g.rotation.x) * 0.06
    g.rotation.y += (BASE_ROTATION_Y + ry - g.rotation.y) * 0.06
    g.position.y = Math.sin(t * 0.9) * 0.05
  })

  return (
    <group
      ref={groupRef}
      position={[0, -0.08, 0]}
      rotation={[BASE_ROTATION_X, BASE_ROTATION_Y, 0]}
    >
      <Center>
        <primitive object={model} scale={1.7} />
      </Center>
    </group>
  )
}

export function Sate3DModel() {
  const reducedMotion = usePrefersReducedMotion()

  if (reducedMotion) return null

  return (
    <Canvas
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 3], fov: 37 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#F8FAF8']} />
      <ambientLight intensity={0.9} />
      <directionalLight position={[4, 4, 5]} intensity={1.25} />
      <directionalLight position={[-3, 2, 3]} intensity={0.55} />
      <WallModel />
    </Canvas>
  )
}

useGLTF.preload('/pared.glb')
