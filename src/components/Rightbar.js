import React from 'react'
import '../assets/styles/index.scss'
import whatisRGD from '../WhatisanRGD.pdf'
import RGD from '../assets/images/RGD-off.png'
import Women from '../assets/images/Women-in-Tech-off.png'

export default function Rightbar() {
  return (
    <div className="right-bar">
    <ul className="rightbar-list">
      <li>
        <a className="resume" target="_blank" rel="noreferrer" href={whatisRGD}>
           <img src={RGD} classname ="rgd" alt="RGD" />
          </a>
        </li>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://women-in-tech.org/"
          >
            <img src={Women} classname ="women" alt="Women in Tech" />
          </a>
        </li>
        </ul>
    </div>
  )
}
