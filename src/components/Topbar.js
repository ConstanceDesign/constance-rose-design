import React from 'react'
import '../assets/styles/index.scss'
import { NavLink } from 'react-router-dom'


export default function Topbar() {
  return (
  <div id="top-nav">
    <nav><ul id="primary">
      
    <li><NavLink
        exact="true"
        className="none"
        to="/contact"
      >CONTACT
      </NavLink>
      </li>
      
      <li><NavLink
        exact="true"
        className="none"
        to="/projects"
        >DEVELOPMENT
        </NavLink></li>

        <li><a
        exact="true"
        target="_blank"
        rel="noreferrer"
        href="https://assets.adobe.com/id/urn:aaid:sc:US:8b71c99c-246c-42d3-8d7a-19e49f42e001?view=published"
        >DESIGN
        </a></li>
      
      <li>
      <NavLink
        exact="true"
        className="none"
        to="/"
        >HOME
        </NavLink></li>

      </ul>
      </nav>
      </div> )}
