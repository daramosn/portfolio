'use client'
import React, { useContext } from 'react'
import DarkContext from '@/components/store/darkMode'

import './DarkModeButton.scss'

const DarkModeButton = () => {
  const { darkMode, onToggleMode } = useContext(DarkContext)

  return (
    <button onClick={onToggleMode} className="toggle">
      {/* <span
        className={`toggle__circle ${darkMode && 'toggle__circle--left'}`}
      />
      <span>🌑</span>
      <span>☀️</span> */}

      {darkMode && <span>🌙</span>}
      {!darkMode && <span>☀️</span>}
    </button>
  )
}

export default DarkModeButton
