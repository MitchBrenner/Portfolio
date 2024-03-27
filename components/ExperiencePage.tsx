import React from 'react'
import { motion } from 'framer-motion'
import Card from './Card'
import { Experience } from '@/typings'

type Props = {
    experiences: Experience[];
}

export default function ExperiencePage({ experiences }: Props) {
  return (

    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.3
        }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >
        <h3 className='subTitle'>Experience</h3>
 
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory mt-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#9370DB]/40'>
            {
                experiences?.map(experience => (
                    <Card key={experience._id} experience={experience}/>
                ))
            }
        </div>

    </motion.div>
  )
}