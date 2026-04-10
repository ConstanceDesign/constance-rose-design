import React, { useEffect, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Leftbar from './Leftbar'
import Topbar from './Topbar'
import Footer from './Footer'
import Hamburger from 'hamburger-react'
import BurgerMenu from './BurgerMenu'
import CursorHand from './CursorHand'
import '../assets/styles/index.scss'

export default function Layout() {
  const [isOpen, setOpen] = useState(false)
  const [isHandCursor, setIsHandCursor] = useState(true)
   const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [isDarkTheme, setIsDarkTheme] = useState(true)


  useEffect(() => {
    document.body.classList.toggle('theme-light', !isDarkTheme)
    document.body.classList.toggle('theme-dark', isDarkTheme)
  }, [isDarkTheme])

  useEffect(() => {
    document.body.classList.toggle('hand-cursor-enabled', isHandCursor)
  }, [isHandCursor])
  
    useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])


  return (
    <div className="App">
      <Topbar />

      <Leftbar
        isHandCursor={isHandCursor}
        onToggleHandCursor={() => setIsHandCursor((prev) => !prev)}
        isDarkTheme={isDarkTheme}
        onToggleTheme={() => setIsDarkTheme((prev) => !prev)}
      />

      <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
      <Hamburger toggled={isOpen} toggle={setOpen} />

        <CursorHand
        x={cursorPos.x}
        y={cursorPos.y}
        enabled={isHandCursor}
      />

      <div className="page">
        <Outlet />
      </div>

       <Footer />
    </div>
  )
}
