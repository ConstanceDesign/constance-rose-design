import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../assets/styles/index.scss'

export default function Topbar() {
  return (
    <header id="top-nav">
      <div className="top-nav__inner">
        <Link
          className="top-nav__brand"
          to="/"
          aria-label="Go to homepage"
          title="Back to homepage"
        >
          <span className="sr-only">Constance Rose Zonta homepage</span>
        </Link>

        <nav className="top-nav__nav" aria-label="Primary navigation">
          <ul id="primary">
            <li>
              <NavLink className="none" end to="/">
                Home
              </NavLink>
            </li>

            <li>
              <NavLink className="none" to="/projects">
                Work
              </NavLink>
            </li>

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