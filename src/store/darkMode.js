'use client'
import { useState, createContext } from 'react'

const DarkContext = createContext({
  darkMode: true,
  onToggleMode: () => {},
})

export const DarkModeContextProvider = (props) => {
  const [darkMode, setDarkMode] = useState(true)

  const onToggleMode = () => setDarkMode((prevDarkMode) => !prevDarkMode)

  return (
    <DarkContext.Provider value={{ darkMode, onToggleMode }}>
      {props.children}
    </DarkContext.Provider>
  )
}

export default DarkContext
