import { createContext } from "react"
import { useLocalStorage } from "../hooks/useLocalStorage"

export const PrefContext = createContext()

export default function PrefContextProvider({ children }) {
  const [theme, setTheme] = useLocalStorage("theme", "")

  return (
    <PrefContext.Provider value={{ theme, setTheme }}>
      {children}
    </PrefContext.Provider>
  )
}