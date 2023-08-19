import { easing } from "maath"
import { useSnapshot } from "valtio"
import { Decal, useTexture , useGLTF  } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { GLTFResult } from "../types/types"
import state from "../store"
export default function Shirt() {

  const snap = useSnapshot(state) 

  const { nodes   , materials   }   = useGLTF("/shirt_baked.glb") as GLTFResult ;
  console.log({nodes , materials})
  const logoTexture = useTexture(snap.logoDecal)
  const fullTexture = useTexture(snap.fullDecal)
  
  return (
    <group>
        <mesh
          castShadow={nodes.T_Shirt_male.geometry}
          material={materials.lambert1}
          material-roughness={1}
          dispose={null}
        >

        </mesh>
    </group>
  )
}
