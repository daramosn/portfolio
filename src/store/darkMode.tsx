'use client'
import React, { useState, createContext } from 'react'

const DarkContext = createContext({
  darkMode: true,
  onToggleMode: () => {},
})

export const DarkModeContextProvider = ({
  children,
}: React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLBodyElement>,
  HTMLBodyElement
>) => {
  const [darkMode, setDarkMode] = useState(true)

  const onToggleMode = () => setDarkMode((prevDarkMode) => !prevDarkMode)

  return (
    <DarkContext.Provider value={{ darkMode, onToggleMode }}>
      {children}
    </DarkContext.Provider>
  )
}

export default DarkContext
