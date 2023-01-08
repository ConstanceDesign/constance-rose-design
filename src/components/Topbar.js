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
        href="https://indd.adobe.com/view/b18b46e7-2f3b-4162-b00e-79d04550e0be"
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