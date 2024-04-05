import React from 'react'
import { motion } from 'framer-motion'
import { Technology } from '@/typings';
import { urlFor } from '@/sanity';

type Props = {
    directionLeft?: boolean;
    skill: Technology;
}

export default function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer '>
        <motion.img 
            initial={{
                opacity: 0,
                x: directionLeft ? -200 : 200
            }}
            transition={{
                duration: .5
            }}
            whileInView={{
                opacity: 1,
                x: 0
            }}
            
            src={urlFor(skill?.image).url()}
            className='rounded-full border border-gray-500 object-contain 
            w-24 h-24 xl:w-32 xl:h-32 md:w-28 md:h-28 filter group-hover:grayscale transition duration-300 ease-in-out p-1'
        />
        <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
        ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-32 xl:h-32 rounded-full z-0 flex justify-center text-center'>
            <div className='flex items-center just-center h-full'>
                <p className='text-3xl font-bold text-black opacity-100'>{skill?.progress}%</p>
            </div>
        </div>
    </div>
  )
}