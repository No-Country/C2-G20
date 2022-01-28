import { useState, createContext } from "react"

export const PrefContext = createContext()

export default function PrefContextProvider({ children }) {
  const [theme, setTheme] = useState(false)
  return (
    <PrefContext.Provider value={{ theme, setTheme }}>
      {children}
    </PrefContext.Provider>
  )
}
