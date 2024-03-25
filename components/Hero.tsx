import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

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
    <div>
        <h1>
            <span>{text}</span>
            <Cursor cursorColor='#f7Ab0a'/>
        </h1>
    </div>
  )
}