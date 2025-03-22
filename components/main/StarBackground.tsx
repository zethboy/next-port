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
    <div>StarBackground</div>
  )
}

export default StarBackground