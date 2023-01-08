import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// import LogoTitle from '../../assets/images/rose-logo.png'
// import Avatar from '../../assets/images/avatar.png'
import AnimatedLetters from '../AnimatedLetters'
import '../../assets/styles/index.scss'

export default function Home() {
  const [letterClass] = useState('text-animate')
  const lookingArray = [

  ]

  return (
    <div className="container home-page responsive-cont">
      <div className="text-zone">
        <div className="flex-wrapper">
          <h1>
            <span className={`${letterClass} _13 responsive-text`}>11 Fun Facts About Me</span>
            <br />
            {/* <span className={`${letterClass} _14 responsive-text`}>I'm</span>
            <span className={`${letterClass} _15 responsive-text`}></span>
            <span className={`${letterClass} _16 responsive-text`}></span>
            <span className={`${letterClass} _17 responsive-text`}>C</span>
            <span className={`${letterClass} _18 responsive-text`}>o</span>
            <span className={`${letterClass} _19 responsive-text`}>n</span>
            <span className={`${letterClass} _20 responsive-text`}>s</span>
            <span className={`${letterClass} _21 responsive-text`}>t</span>
            <span className={`${letterClass} _22 responsive-text`}>a</span>
            <span className={`${letterClass} _23 responsive-text`}>n</span>
            <span className={`${letterClass} _24 responsive-text`}>c</span>
            <span className={`${letterClass} _25 responsive-text`}>e</span>
            <span className={`${letterClass} _26 responsive-text`}></span>
            <span className={`${letterClass} _26 responsive-text`}></span>
            <span className={`${letterClass} _22 responsive-text`}>R</span>
            <span className={`${letterClass} _23 responsive-text`}>o</span>
            <span className={`${letterClass} _24 responsive-text`}>s</span>
            <span className={`${letterClass} _25 responsive-text`}>e</span>
            <span className={`${letterClass} _26 responsive-text`}>,</span>
            <span className={`${letterClass} _26 responsive-text`}></span> */}
            

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={lookingArray}
              index={1}
              className="responsive-text"
            />
          </h1>
          <h2>
          <ul>

<li>1. My proudest achievement is my son!</li>
<li>2. I was known for painting the Mona Lisa on a fingernail when I was an Esthetician. </li>
<li>3. My first job was for Greenpeace. </li>
<li>4. One time I was kicked out of a carnival game because I figured out how to win and kept winning.</li>
<li>5. A previous employer noted I had an impressive score on a visual-spatial test.</li>
<li>6. I've survived the impossible on several occasions and have some good stories about it.</li>
<li>7. In college, I was voted president of the Graphic Design Club by my peers, not because I ran for it.</li>
<li>8. Volunteering is essential; I learned this early, did it extensively as a Girl Guide and was awarded the "All Around Cord."</li>
<li>9. The furthest I have been in the world is Hawaii; I flew in a helicopter over Kauai.</li>
<li>10. I have an art palette and an adventurous "foodie" palate! Got any oysters?!</li>
</ul>
</h2>
          {/* <Link
            to="/react-portfolio/contact"
            className="responsive-button responsive-button"
          >
            LET'S SYNERGIZE CREATIVE VIBES
          </Link> */}
        </div>
      </div>
    </div>
  )
}