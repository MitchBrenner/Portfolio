import React from 'react'
import { motion } from 'framer-motion'

type Props = {
    directionLeft?: boolean;
}

export default function Skill({ directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img 
            initial={{
                opacity: 0,
                x: directionLeft ? -300 : 300
            }}
            transition={{
                duration: .5
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
            className='rounded-full border border-gray-500 object-contain 
            w-24 h-24 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out p-1'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 flex justify-center text-center'>
            <div className='flex items-center just-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>100%</p>
            </div>
        </div>
    </div>
  )
}