import { useRef, useEffect } from "react"

export const useDomElement = (id: string) => {
  const domElRef = useRef<HTMLDivElement | undefined>(undefined)

  useEffect(() => {
    domElRef.current = document.createElement(`div`)
    domElRef.current.id = id
    document.body.appendChild(domElRef.current)

    return () => {
      domElRef.current && document.body.removeChild(domElRef.current)
    }
  }, [id])

  return domElRef
}
