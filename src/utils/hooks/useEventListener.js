import { useEffect, useRef } from "react"

function useEventListener(eventName, handler, ref) {
  const savedHandler = useRef()

  useEffect(() => {
    savedHandler.current = handler
  }, [handler])

  useEffect(() => {
    const element = !ref ? window : ref.current

    const isSupported = element && element.addEventListener

    if (!isSupported) return

    const eventListener = event => savedHandler.current(event)

    element.addEventListener(eventName, eventListener)

    return () => {
      element.removeEventListener(eventName, eventListener)
    }
  }, [eventName, ref])
}

export default useEventListener
