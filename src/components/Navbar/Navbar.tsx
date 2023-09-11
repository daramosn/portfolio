'use client'
import { useState } from 'react'
import Link from 'next/link'

import { Logo } from '@/assets/icons/Logo'
import DarkModeButton from '../UI/DarkModeButton/DarkModeButton'

import './Navbar.scss'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const showMenuHandler = () => setIsOpen((prevIsOpen) => !prevIsOpen)

  const linksComponents = (
    <>
      <li>
        <Link className="navbar__links--no-format" href="#projects">
          Projects
        </Link>
      </li>
      <li>
        <Link className="navbar__links--no-format" href="#about-me">
          About me
        </Link>
      </li>
      <li>
        <Link className="navbar__links--no-format" href="#contact">
          Contact
        </Link>
      </li>
    </>
  )

  return (
    <nav className="navbar">
      <Link href="#home">
        <Logo className="navbar__logo" />
      </Link>

      <ul className="navbar__links">{linksComponents}</ul>

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
              {linksComponents}
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
