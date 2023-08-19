import { type } from "os";

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