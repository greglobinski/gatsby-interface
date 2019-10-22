import { useLayoutEffect } from "react"

export const useLockScroll = (shouldLock: boolean) => {
  useLayoutEffect(() => {
    const htmlNode = document.querySelector(`html`)
    if (htmlNode) {
      htmlNode.style.overflow = shouldLock ? `hidden` : `auto`
    }
  }, [shouldLock])
}
