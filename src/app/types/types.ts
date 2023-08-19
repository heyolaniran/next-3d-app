import { type } from "os";
import { Material } from "three";
import { GLTF } from "three/examples/jsm/loaders/GLTFLoader";

export type Snap = {
    intro : boolean , 
    color : string , 
    isLogoTexture: boolean, 
    isFullTexture: boolean, 
    logoDecal: string, 
    fullDecal: string
}

export type Button = { 
    type : string , 
    title: string , 
    handClick : () => boolean, 
    customStyle : string
}

export type GLTFResult = GLTF & { 
    nodes :{
        Scene : object , 
        T_Shirt_male : {
            geometry : boolean
        }
    } , 
    materials :  {
       ['default'] : THREE.MeshBasicMaterial , 
       lambert1 : Material
    }
}