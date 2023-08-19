"use client"
import { motion, AnimatePresence } from 'framer-motion'
import { headContainerAnimation , headContentAnimation, headTextAnimation, slideAnimation } from '../config/motion'
import Image from 'next/image'
import { Snap } from '../types/types'
import { useSnapshot } from 'valtio'
import state from '../store'
import Button from './ui/Button'
export default function HomeAnimation( ) {
    const snap = useSnapshot(state)
  return (
    <AnimatePresence>
        {snap.intro && (
             <motion.section className='home' {...slideAnimation('left')}>

             <motion.header {...slideAnimation("down")}>
                 <Image src={"/threejs.png"} alt="threeJS" 
                 width={200}
                 height={200}
                 className='w-[50px] h-[50px] object-contain' />

             </motion.header>
            <motion.div {...headContainerAnimation}>
                <motion.div className='home-content' {...headTextAnimation}>
                        <h1 className='head-text'>
                            LET'S <br className='xl:block hidden' /> DO IT.
                        </h1>
                </motion.div>
                <motion.div {...headContentAnimation} className='flex flex-col gap-5 mb-5'>
                    <p className='max-w-md text-gray-600 text-base font-normal'>
                        Create your unique and exclusive shirt with our brand new 3D customization
                        tool. <strong>Unleash your imagination</strong> {" "} 
                        and define your own style.
                    </p>

                    <Button type="filled" 
                    handleClick={() => state.intro = false } title="Customize It"
                     customStyle='w-fit px-4 py-2 rounded-md font-bold text-sm' />
                </motion.div>
            </motion.div>
            

         </motion.section>
        )}
    </AnimatePresence>
  )
}
