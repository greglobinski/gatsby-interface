import { useEffect } from "react"

export const useEscapePress = (callback: () => void) => {
  useEffect(() => {
    const keydownHandler = (e: KeyboardEvent) => {
      if (e.key === `Escape`) {
        callback()
      }
    }
    document.addEventListener(`keydown`, keydownHandler)

    return () => document.removeEventListener(`keydown`, keydownHandler)
  }, [callback])
}
