import React from 'react'
import { motion } from 'framer-motion'

type Props = {}

export default function About({}: Props) {
    return (
        <div className='h-screen flex flex-col relative text-center 
        md:text-left md:flex-row max-w-6xl px-10 justify-evenly mx-auto 
        items-center'>
                <motion.h3 
                    initial={{
                        opacity: 0,
                    }}
                    whileInView={{
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.3
                    }}
                    className='subTitle'>About</motion.h3>

                <motion.img 
                    initial={{
                        x: -300,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    // viewport={{ once: true }}
                    src='/aboutpic.JPG' 
                    className='-mb-[100px] md:mb-0 flex-shrink-0 w-56 h-56 rounded-full 
                    object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px] 
                    xl:object-cover'
                />
                <motion.div 
                    initial={{
                        x: 300,
                        opacity: 0
                    }}
                    transition={{
                        duration: 1.0
                    }}
                    whileInView={{
                        x: 0,
                        opacity: 1
                    }}
                    className='space-y-6 px-0 md:px-10'
                >
                    <h4 className='text-4xl font-semibold'>
                        Here is a <span className='underline decoration-[#9370DB]/50'>little</span> background
                    </h4>
                    <p className='text-sm'>
                        I am a senior at the University of Wisconsin - Madison studying Computer Science and Data Science.  
                        My coursework has covered a wide range of topics, including Algorithms, Data Structures, Machine Organization, 
                        Data Modeling, Databases, User Interfaces, Virtual Reality, and AI. I have experience with a variety of programming
                        languages, including Python, Java, C, C++, JavaScript, TypeScript, and SQL. I have also worked with react, next.js, 
                        react native, and node.js.
                    </p>
                </motion.div>
        </div>
    )
}