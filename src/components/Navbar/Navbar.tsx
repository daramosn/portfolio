import { Logo } from '@/assets/Logo'
import DarkModeButton from '../UI/DarkModeButton/DarkModeButton'

import './Navbar.scss'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Logo className="navbar__logo" />

      <ul className="navbar__links">
        <li>About me</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>

      <DarkModeButton />
    </nav>
  )
}

export default Navbar
