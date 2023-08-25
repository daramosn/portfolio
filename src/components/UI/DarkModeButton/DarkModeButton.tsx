'use client'
import React, { ButtonHTMLAttributes, FC, useContext } from 'react'
import DarkContext from '@/store/darkMode'

import './DarkModeButton.scss'

type DarkModeButtonType = ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

const DarkModeButton: FC<DarkModeButtonType> = ({ className }) => {
  const { darkMode, onToggleMode } = useContext(DarkContext)

  return (
    <button onClick={onToggleMode} className={`toggle ${className}`}>
      <span
        className={`toggle__circle ${darkMode && 'toggle__circle--left'}`}
      />
      <span>☀️</span>
      <span>🌙</span>

      {/* {darkMode && <span>🌙</span>}
      {!darkMode && <span>☀️</span>} */}
    </button>
  )
}

export default DarkModeButton
