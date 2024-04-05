import React from 'react'
import { motion } from 'framer-motion'
import { Project } from '@/typings'
import { urlFor } from '@/sanity';

type Props = {
    projects: Project[];
}

export default function Projects({ projects }: Props) {

  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        whileInView={{
            opacity: 1,
        }}
        transition={{
            duration: 1.5
        }}
        className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full 
        justify-evenly mx-auto items-center z-0'
    >
        <h3 className='subTitle'>Projects</h3>
       
        <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20
        scrollbar-thin scrollbar-thumb-[#9370DB]/40'>
            {
                projects.map((project, i) => (
                    <div key={i} className='w-screen flex-shrink-0 snap-center flex flex-col space-y-0 sm:space-y-4 items-center justify-center p-20'>
                        <motion.img
                            initial={{
                                y: -300,
                                opacity: 0
                            }} 
                            whileInView={{
                                y: 0,
                                opacity: 1
                            }}
                            transition={{
                                duration: 1.2
                            }}
                            viewport={{ once: true }}
                            src={urlFor(project.image).url()}
                            className='w-64 object-cover h-64 sm:h-[300px] sm:w-[300px]'
                        />
                        <div className='space-y-10 px-0 md:px-10 max-w-6xl'>
                            <h4 className='text-4xl font-semibold text-center'>
                                <span className='underline decoration-[#9370DB] text-2xl'>Project {i + 1} of {projects.length}</span> 
                                : {project?.name}
                            </h4>

                            <div className='flex space-x-5 items-center justify-center'>
                                {
                                    project.technologies.map((tech, i) => (
                                        <img 
                                            key={i}
                                            src={urlFor(tech.image).url()}
                                            className='h-8 w-8 object-contain -my-5'
                                        />
                                    ))
                                }
                            </div>
                            <p className='text-sm text-center md:text-left sm:text-lg'>
                                {project?.summary}
                            </p>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='w-full absolute top-[30%] bg-[#9370DB]/10 h-[400px] left-0 -skew-y-12'/>
    </motion.div>
  )
}