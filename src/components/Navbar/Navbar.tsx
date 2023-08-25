'use client'
import { useState } from 'react'
import { Logo } from '@/assets/icons/Logo'
import DarkModeButton from '../UI/DarkModeButton/DarkModeButton'

import './Navbar.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showMenuHandler = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />

      <ul className="navbar__links">
        <li>About me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <DarkModeButton className="navbar__dark-button" />

      <div className="navbar__hamburger">
        <div
          onClick={showMenuHandler}
          className={`navbar__hamburger-button ${
            isOpen && 'navbar__hamburger-button-active'
          }`}
        >
          <span className="navbar__hamburger-button-bar" />
          <span className="navbar__hamburger-button-bar" />
          <span className="navbar__hamburger-button-bar" />
        </div>
        {isOpen && (
          <>
            <ul className="navbar__hamburger-menu">
              <li>About me</li>
              <li>Projects</li>
              <li>Contact</li>
              <li>
                <DarkModeButton />
              </li>
            </ul>
          </>
        )}
      </div>
    </nav>
  )
}

export default Navbar
