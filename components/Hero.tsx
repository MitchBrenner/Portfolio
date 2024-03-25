import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'

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
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        <img 
            src='https://media.licdn.com/dms/image/D5603AQHUnYzZYhu-sg/profile-displayphoto-shrink_400_400/0/1690873058919?e=1717027200&v=beta&t=P_C5n4lkgnjdXxPtXRaEgt8oBuV1XpiB7vcBeOWLtdA' 
            className='relative rounded-full h-32 w-32 mx-auto object-cover '
        />
        <div>
            <h2
                className='text-sm text-gray-500 tracking-[15px] uppercase pb-5'
            >
                Software Engineer
            </h2>
            <h1 className='text-4xl sm:text-5xl font-semibold px-10'>
                <span className='mr-1'>{text}</span>
                <Cursor cursorColor='#f7Ab0a'/>
            </h1>
        </div>
    </div>
  )
}