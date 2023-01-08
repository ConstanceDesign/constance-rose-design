import React from 'react'
import '../assets/styles/index.scss'

export default function AnimatedLetters2({ letterClass, strArray, index }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + index} responsive-text-2`}
        >
          {char}
        </span>
      ))}
    </span>
  )
}