'use client'
import React, { useState } from 'react'

import './DarkModeButton.scss'

const DarkModeButton = () => {
  const [darkMode, setDarkMode] = useState(true)

  const darkModeHandler = () => setDarkMode((prev) => !prev)

  return (
    <button onClick={darkModeHandler} className="toggle">
      <span
        className={`toggle__circle ${darkMode && 'toggle__circle--left'}`}
      />
      <span>☀️</span>
      <span>🌑</span>
    </button>
  )
}

export default DarkModeButton
