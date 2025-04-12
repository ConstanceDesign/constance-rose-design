import React from 'react'
import '../assets/styles/index.scss'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/rose-logo.png'
import resume from '../Constance Mitchell Resume 2025.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faFileArrowDown,
} from '@fortawesome/free-solid-svg-icons'

export default function Leftbar() {
  return (
    <div className="left-bar">
      <Link className="logo" to="/react-portfolio/">
        <img src={Logo} alt="constance.design logo" />
      </Link>
      <ul className="leftbar">
        <li>
          <a className="resume" target="_blank" rel="noreferrer" href={resume}>
            <FontAwesomeIcon icon={faFileArrowDown} color="#465366" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/constance-design/"
            alt="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#465366" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/ConstanceDesign"
            alt="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} color="#465366" />
          </a>
        </li>
        </ul>
    </div>
  )
}
