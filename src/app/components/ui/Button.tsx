"use client"
import {useSnapshot} from 'valtio'
import state from '@/app/store'
interface Button {
    type : string , 
    title: string , 
    handleClick : () => boolean, 
    customStyle : string
}



export default function Button(props : Button) {
  const snap = useSnapshot(state) ; 
  const generatedStyle  = (type: string) => {
      if(type==='filled')
      return {
        backgroundColor :  snap.color, 
        color : '#fff'
      
    }
  }

  return (
    <button className={`px-2 py-2 ${props.customStyle}`}
      style={generatedStyle(props.type)}
     onClick={props.handleClick}>
      {props.title}
    </button>
  )
}
