import { useRef, useLayoutEffect } from "react"

export const useCreateDOMElement = (id: string) => {
  const domElRef = useRef<HTMLDivElement>(document.createElement(`div`))

  domElRef.current.id = id

  useLayoutEffect(() => {
    document.body.appendChild(domElRef.current)
  }, [])

  return domElRef
}
