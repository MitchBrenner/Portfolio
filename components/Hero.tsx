import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Link from 'next/link'

type Props = {}

export default function Hero({}: Props) {

    const [text, count] = useTypewriter({
        words: [
            "Hi, The name's Mitch",
            "I have a beautiful girlfriend",
            "But she farts a lot",
            "I mean a lot..."
        ],
        loop: true,
        delaySpeed: 1000,
    })

  return (
    <div className='h-screen flex flex-col items-center space-y-8 justify-center text-center'>
        <BackgroundCircles />
        <img 
            src='https://media.licdn.com/dms/image/D5603AQHUnYzZYhu-sg/profile-displayphoto-shrink_400_400/0/1690873058919?e=1717027200&v=beta&t=P_C5n4lkgnjdXxPtXRaEgt8oBuV1XpiB7vcBeOWLtdA' 
            className='relative rounded-full h-32 w-32 object-cover hover:animate-pulse cursor-pointer z-10 transition ease-in-out duration-100'
        />
        <div className='z-20'>
            <h2
                className='text-sm text-gray-500 tracking-[15px] uppercase pb-5'
            >
                Software Engineer
            </h2>
            <h1 className='text-4xl sm:text-5xl font-semibold px-10'>
                <span className='mr-1'>{text}</span>
                <Cursor cursorColor='#9370DB'/>
            </h1>
            <div className='pt-5'>
                <Link href="#about">
                    <button className="heroButton">About</button>
                </Link>
                <Link href="#experience">
                    <button className="heroButton">Experience</button>
                </Link>
                <Link href="#skills">
                    <button className="heroButton">Skills</button>
                </Link>
                <Link href="#projects">
                    <button className="heroButton">Projects</button>
                </Link>
            </div>
        </div>
    </div>
  )
}