import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import '../assets/styles/index.scss'
import { Link } from 'react-router-dom'
import Logo from '../assets/images/rose-logo.png'
import resume from '../Constance_Zonta_Resume_2026.pdf'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faFileArrowDown,
  faHandPointer,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons'

function TooltipPortal({ text, position }) {
  if (!text || !position) return null

  return createPortal(
    <div
      className="leftbar-tooltip-portal"
      aria-hidden="true"
      style={{
        top: `${position.top}px`,
        left: `${position.left}px`,
      }}
    >
      {text}
    </div>,
    document.body
  )
}

export default function Leftbar({
  isHandCursor = false,
  onToggleHandCursor,
  isDarkTheme = true,
  onToggleTheme,
}) {
  const [tooltip, setTooltip] = useState({
    text: '',
    position: null,
  })

  const showTooltip = (event, text) => {
    const rect = event.currentTarget.getBoundingClientRect()

    setTooltip({
      text,
      position: {
        top: rect.top + rect.height / 2,
        left: rect.right + 12,
      },
    })
  }

  const hideTooltip = () => {
    setTooltip({
      text: '',
      position: null,
    })
  }

  return (
    <>
      <aside className="left-bar" aria-label="Quick links and controls">
        <Link className="logo" to="/" aria-label="Go to homepage">
          <img src={Logo} alt="Constance Zonta logo" />
        </Link>

        <ul className="leftbar">
          <li>
            <a
              className="leftbar__link resume"
              target="_blank"
              rel="noreferrer"
              href={resume}
              aria-label="Open resume"
              onMouseEnter={(e) => showTooltip(e, 'Resume')}
              onMouseLeave={hideTooltip}
              onFocus={(e) => showTooltip(e, 'Resume')}
              onBlur={hideTooltip}
            >
              <FontAwesomeIcon icon={faFileArrowDown} />
            </a>
          </li>

          <li>
            <a
              className="leftbar__link"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/constancezonta/"
              aria-label="Open LinkedIn profile"
              onMouseEnter={(e) => showTooltip(e, 'LinkedIn')}
              onMouseLeave={hideTooltip}
              onFocus={(e) => showTooltip(e, 'LinkedIn')}
              onBlur={hideTooltip}
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
          </li>

          <li>
            <a
              className="leftbar__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/ConstanceDesign"
              aria-label="Open GitHub profile"
              onMouseEnter={(e) => showTooltip(e, 'GitHub')}
              onMouseLeave={hideTooltip}
              onFocus={(e) => showTooltip(e, 'GitHub')}
              onBlur={hideTooltip}
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>

          <li>
            <button
              type="button"
              className={`leftbar__link leftbar__button ${isHandCursor ? 'is-active' : ''}`}
              onClick={onToggleHandCursor}
              aria-label={isHandCursor ? 'Disable hand cursor' : 'Enable hand cursor'}
              onMouseEnter={(e) =>
                showTooltip(
                  e,
                  isHandCursor ? 'Disable Hand Cursor' : 'Enable Hand Cursor'
                )
              }
              onMouseLeave={hideTooltip}
              onFocus={(e) =>
                showTooltip(
                  e,
                  isHandCursor ? 'Disable Hand Cursor' : 'Enable Hand Cursor'
                )
              }
              onBlur={hideTooltip}
            >
              <FontAwesomeIcon icon={faHandPointer} />
            </button>
          </li>

          <li>
            <button
              type="button"
              className={`leftbar__link leftbar__button ${!isDarkTheme ? 'is-active' : ''}`}
              onClick={onToggleTheme}
              aria-label={isDarkTheme ? 'Switch to light mode' : 'Switch to dark mode'}
              onMouseEnter={(e) =>
                showTooltip(
                  e,
                  isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                )
              }
              onMouseLeave={hideTooltip}
              onFocus={(e) =>
                showTooltip(
                  e,
                  isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode'
                )
              }
              onBlur={hideTooltip}
            >
              <FontAwesomeIcon icon={isDarkTheme ? faSun : faMoon} />
            </button>
          </li>
        </ul>
      </aside>

      <TooltipPortal text={tooltip.text} position={tooltip.position} />
    </>
  )
}