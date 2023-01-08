import React from 'react'
import '../assets/styles/index.scss'

export default function AnimatedLetters({ letterClass, strArray, index }) {
  return (
    <span>
      {strArray.map((char, i) => (
        <span
          key={char + i}
          className={`${letterClass} _${i + index} responsive-text`}
        >
          {char}
        </span>
      ))}
    </span>
  )
}
