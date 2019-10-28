import { useRef, useEffect } from "react"

export const useCreateDOMElement = (id: string) => {
  const domElRef = useRef<HTMLDivElement>(document.createElement(`div`))

  domElRef.current.id = id

  useEffect(() => {
    document.body.appendChild(domElRef.current)
  }, [])

  return domElRef
}
