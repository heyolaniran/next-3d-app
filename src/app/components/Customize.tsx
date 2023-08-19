"use client"
import { useState, useEffect } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useSnapshot } from "valtio"

import config from "@/app/config/config" 
import state from "@/app/store"
import {download} from "@/app/assets"
import { EditorTabs , FilterTabs , DecalTypes } from "@/app/config/constants"

import { downloadCanvasToImage , reader} from "@/app/config/helpers"
import { fadeAnimation , slideAnimation } from "../config/motion"

import { Tab } from "@/app/components"
import Button from "./ui/Button"
export default function Customize() {

    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
       {!snap.intro && (
           <>
             <motion.div
                key="custom"
                className="absolute top-0 left-0 z-10"
                {...slideAnimation('left')}
             >  
             <div className="flex items-center min-h-screen">
                 <div className="editortabs-container tabs">
                    
                        {EditorTabs.map((tab) => (
                            <Tab key={tab.name} 
                            tab={tab} handleClick={() =>{}} 
                            />
                        ))}
                    
                 </div>
                
             </div>
             </motion.div>
             <motion.div className="absolute z-10 top-5 right-5 " {...slideAnimation("right")}>
                <Button type="filled" title="Go Back" 
                    handleClick={() => state.intro = true} 
                    customStyle="w-fit px-4 rounded-lg py-2.5 font-bold text-sm" />
             </motion.div>

             <motion.div className="filtertabs-container" {...slideAnimation('up')}>
                {
                    FilterTabs.map((tab) => (
                        <Tab key={tab.name} 
                            isFilterTab 
                            isActiveTab=""
                            tab={tab} handleClick={() =>{}} 
                            />
                    ))
                }
             </motion.div>
           </>
       )}
    </AnimatePresence>
  )
}
