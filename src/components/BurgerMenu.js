import React from 'react'
import '../assets/styles/index.scss'
import resume from '../Constance Mitchell Resume 2025.pdf'
import { NavLink } from 'react-router-dom'
import Logo from '../assets/images/rose-logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import {
  faLinkedin,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'

export default function BurgerMenu({ isOpen, setOpen }) {
  console.log(`still open? ${isOpen}`)

  return (
    <div>
      {isOpen ? (
        <div className="burgerMenu">
          <div className="btnWrapper">
            <nav>
            <img src={Logo} alt="constance.design logo" />
            <h3 className="name">Constance Rose</h3>
              <NavLink
                exact="true"
                onClick={() => setOpen(!isOpen)}
                className="btn-hover color-8"
                to="/"
              >HOME
              </NavLink>
                <a
                  className="about-link btn-hover color-8"
                  onClick={() => setOpen(!isOpen)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://assets.adobe.com/id/urn:aaid:sc:US:8b71c99c-246c-42d3-8d7a-19e49f42e001?view=published"
                >DESIGN
                </a>
              <NavLink
                exact="true"
                onClick={() => setOpen(!isOpen)}
                className="projects-link btn-hover color-8"
                to="/projects"
              >DEVELOPMENT
              </NavLink>
              <NavLink
                exact="true"
                onClick={() => setOpen(!isOpen)}
                className="contact-link btn-hover color-8"
                to="/contact"
              >CONTACT
              </NavLink>
            </nav>
            <ul className="burgerList">
              <li>
              <a className="svgLink" target="_blank" rel="noreferrer" href={resume}>
            <FontAwesomeIcon icon={faFileArrowDown} color="#465366" />
          </a>
              </li>
              <li>
                <a
                  className="svgLink"
                  onClick={() => setOpen(!isOpen)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/constance-design/"
                >
                  <FontAwesomeIcon icon={faLinkedin} color="#465366" />
                </a>
              </li>
              <li>
                <a
                  className="svgLink"
                  onClick={() => setOpen(!isOpen)}
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/ConstanceDesign"
                >
                  <FontAwesomeIcon icon={faGithub} color="#465366" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      ) : null}
    </div>
  )
}
