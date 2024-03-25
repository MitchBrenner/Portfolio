import React from 'react'
import { SocialIcon } from 'react-social-icons'
import { motion } from 'framer-motion'

type Props = {}

export default function Header({}: Props) {
  return (
    <header className='sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center'>
        <motion.div 
            initial={{ // Initial state
                x: -500,
                opacity: 0,
                scale: 0.5
            }}    
            animate={{ // Final state
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                type: 'spring',
                duration: 1
            }}
            className='flex flex-row items-center'
        >
            {/* Social icons */}
            <SocialIcon url='https://www.instagram.com/mitchellbrenner7/' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://github.com/MitchBrenner' fgColor='gray' bgColor='transparent'/>
            <SocialIcon url='https://www.linkedin.com/in/mitchell-brenner-124240230/' fgColor='gray' bgColor='transparent'/>

        </motion.div>

        <motion.div 
            initial={{ // Initial state
                x: 500,
                opacity: 0,
                scale: 0.5
            }}    
            animate={{ // Final state
                x: 0,
                opacity: 1,
                scale: 1
            }}
            transition={{
                type: 'spring',
                duration: 1
            }}
            
            className='flex flex-row items-center cursor-pointer'
          >
            <SocialIcon className='cursor-pointer' network='email' fgColor='gray' bgColor='transparent'/>
            <p className='uppercase hidden md:inline-flex text-sm text-gray-400'>Get in Touch</p>
        </motion.div>

    </header>
  )
}
