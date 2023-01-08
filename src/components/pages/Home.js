import React, { useState } from 'react'
import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/cmoney-600x600.gif'
import AnimatedLetters from '../AnimatedLetters'
import '../../assets/styles/index.scss'

export default function Home() {
  const [letterClass] = useState('text-animate-hover')
  const unicornArray = [
    'U','N','I','C','O','R','N','?'
  ]

  return (
    <div className="home-page responsive-cont">
      <div>
        <div>
        {/* <img
              className="logo-img responsive-logo"
              src={LogoTitle}
              alt="Rose"
            /> */}
        <h5>Looking for a</h5>
          <h1>
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={unicornArray}
              index={2}
              className="unicorn-text"
            />
          </h1>
          <h4>You found one!</h4>
          <h2>My first name is Constance, middle name is Rose. I make digital magic with eighteen years of combined experience as a registered graphic designer and full-stack developer hybrid, with a twist of illustrator, a sparkle of copywriter, and enchanting marketing management expertise.</h2>
          <Link
            to="/react-portfolio/contact"
            className="btnn-hover color-8"
          >
            LET'S SYNERGIZE CREATIVE VIBES
          </Link>
        </div>
      </div>
    </div>
  )
}