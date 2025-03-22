"use client"

import { useState, useRef, Suspense } from "react"
import React from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import { Points, PointMaterial, Preload } from "@react-three/drei"
// @ts-ignore
import * as random from "maath/random/dist/maath-random.esm"

const StarBackground = (props: any) => {
  const ref: any = useRef(null);
  const [sphere] = useState(()=>
  random.inSphere(new Float32Array(5000), {radius: 1.2 })
  )

  useFrame((staate, delta)=> {
    ref.current.rotaion.x -= delta/10;
    ref.current.rotaion.y -= delta/15;
  })
  return (
    <group rotation={[0, 0, Math.PI /4]}>
      <Points 
      ref={ref}
      positions={sphere}
      stride={3}
      frustumCulled 
      {...props}>
        <PointMaterial
         transparent
         color="$fff" 
         size={0.002}
         sizeAttenuation={true}
         depthWrite={false}/>
      </Points>
    </group>
  )
}

const StartCanvas = () => (
  <div className="w-full h-auto fixed inset-0 z-[20]">
    <Canvas>
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>
  </div>

)

export default StarBackground