import React, { useState, useRef, useCallback } from "react"
import { useToastContext } from "./ToastContext"
import { MessageWithLink } from "./MessageWithLink"
import { ToastTones, DEFAULT_TIMEOUT, DEFAULT_TONE } from "./constants"

export const useShowToast = () => {
  const { showToast } = useToastContext()

  return showToast
}

export const useShowSuccessToast = () => {
  const showToast = useShowToast()

  return useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, tone: `SUCCESS` })
    },
    [showToast]
  )
}

export const useShowErrorToast = () => {
  const showToast = useShowToast()

  return useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, tone: `DANGER`, timeout: 0 })
    },
    [showToast]
  )
}

export const useShowErrorAlert = () => {
  const showToast = useShowErrorToast()

  return useCallback(
    (message, linkProps, options = {}) => {
      showToast(
        <MessageWithLink {...linkProps}>{message}</MessageWithLink>,
        options
      )
    },
    [showToast]
  )
}

export interface IToast {
  id: number
  message: string
  tone: ToastTones
}

export type ToastInterval = {
  [key: number]: NodeJS.Timeout
}

// Side effect to generate a unique toast id and not relying on Math.random
let TOAST_ID = 0

export const useToastActions = () => {
  const [toasts, setToasts] = useState<IToast[]>([])
  const timeoutsRef = useRef<ToastInterval>({})

  const removeToast = useCallback((toastId: number) => {
    setToasts(prevToasts => prevToasts.filter(({ id }) => id !== toastId))

    clearTimeout(timeoutsRef.current[toastId])

    delete timeoutsRef.current[toastId]
  }, [])

  const showToast = useCallback(
    (message, { tone = DEFAULT_TONE, timeout = DEFAULT_TIMEOUT } = {}) => {
      const toastId = TOAST_ID++

      setToasts(prevToasts => [...prevToasts, { id: toastId, message, tone }])

      if (timeout > 0) {
        timeoutsRef.current[toastId] = setTimeout(() => {
          removeToast(toastId)
        }, timeout)
      }
    },
    []
  )

  return { toasts, showToast, removeToast }
}
