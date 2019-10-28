import { useEffect } from "react"

export const useLockScroll = (shouldLock: boolean) => {
  useEffect(() => {
    const htmlNode = document.querySelector(`html`)
    if (htmlNode) {
      htmlNode.style.overflow = shouldLock ? `hidden` : `auto`
    }
  }, [shouldLock])
}
