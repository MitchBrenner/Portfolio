import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function BackgroundCircles({}: Props) {
  return (
    <motion.div 
        initial={{ opacity: 0 }}
        animate={{
            scale: [1,3,4,1],
            opacity: [0.1,0.4, 0.8, 0.1, 0.8],
            borderRadius: ["20%", "20%", "50%", "80%", "20%"]
        }}
        transition={{
            duration: 1.5,
        }}
        
        className='relative flex justify-center items-center -z-1 pb-2'
    >
        <div className='absolute border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping'/>
        <div className='rounded-full border border-[#333333] h-[300px] w-[300px] absolute mt-52'/>
        <div className='rounded-full border border-[#333333] h-[400px] w-[400px] absolute mt-52'/>
        <div className='rounded-full border border-[#f7ab0a] opacity-20 h-[525px] w-[525px] absolute mt-52 animate-pulse'/>
        <div className='rounded-full border border-[#333333] h-[600px] w-[600px] absolute mt-52'/>
    </motion.div>
  )
}