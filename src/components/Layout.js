import { React, useState } from 'react'
import { Outlet } from 'react-router-dom'
import Leftbar from './Leftbar'
// import Rightbar from './Rightbar'
import Topbar from './Topbar'
import Hamburger from 'hamburger-react'
import BurgerMenu from './BurgerMenu'
import '../assets/styles/index.scss'

export default function Layout() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="App">
      <Topbar />
      <Leftbar />
      {/* <Rightbar /> */}
      <BurgerMenu isOpen={isOpen} setOpen={setOpen} />
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}
