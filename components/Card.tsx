import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

type Props = {}

export default function Card({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-7 
    hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
            initial={{
                y: -100,
                opacity: 0
            }}
            whileInView={{
                y: 0,
                opacity: 1
            }}
            transition={{
                duration: 1.0
            }}
            viewport={{ once: true }}
            src='https://cdn.sanity.io/images/ltuexkre/production/3dd89cb2c4a16e85f5960e22a96261427d37da99-991x1801.png'
            className='w-32 h-32 object-cover object-center rounded-full xl:h-[150px] xl:w-[150px]'
        />

        <div className='px-0 md:px-10'>
            <h4 className='text-4xl font-light'>Netflix</h4>
            <p className='font-bold text-2xl mt-1'>Software Engineer Intern</p>
            <div className='flex space-x-2 my-2'>
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                    width={25}
                    height={25}
                    alt='Netflix Logo'
                />
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                    width={25}
                    height={25}
                    alt='Netflix Logo'
                />
                <img 
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png'
                    width={25}
                    height={25}
                    alt='Netflix Logo'
                />
            </div>
            <p className='uppercase py-3 text-gray-300 text-xs'>Summer 2021</p>
            <ul className='list-disc space-y-4 ml-5 text-md'>
                <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus eligendi reiciendis mollitia odit.</li>
                <li>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugiat!</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur culpa iste dolorem laborum.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci accusantium vero ullam.</li>
                <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
        </div>

    </article>
  )
}