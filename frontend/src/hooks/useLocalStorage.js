import { useState } from "react";

export function useLocalStorage(key, initialValue) {
  const [ storedValue, serStoredValue ] = useState(()=>{
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      return initialValue
    }
  })
  
  const setValue = value => {
    try {
      serStoredValue(value)
      window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error){
      console.error(error)
    }
  }
  return [storedValue, setValue]
}