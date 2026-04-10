import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../assets/styles/index.scss'

export default function Topbar() {
  return (
    <header id="top-nav">
      <div className="top-nav__inner">
        <Link className="top-nav__brand none" to="/" aria-label="Go to homepage">
        </Link>

        <nav aria-label="Primary navigation">
          <ul id="primary">
            <li>
              <NavLink className="none" to="/">
                Home
              </NavLink>
            </li>


            <li>
              <NavLink className="none" to="/projects">
                Design
              </NavLink>
            </li>

            <li>
              <NavLink className="none" to="/projects">
                Development
              </NavLink>
            </li>

                        {/* <li>
              <NavLink className="none" to="/direction">
                Direction
              </NavLink>
            </li> */}

            <li>
              <NavLink className="none" to="/contact">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}