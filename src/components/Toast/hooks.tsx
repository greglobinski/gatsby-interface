import React from "react"
import { useToastContext } from "./ToastContext"
import { MessageWithLink } from "./MessageWithLink"

export function useShowToast() {
  const { showToast } = useToastContext()
  return showToast
}

export function useShowSuccessToast() {
  const showToast = useShowToast()
  return React.useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, tone: `SUCCESS` })
    },
    [showToast]
  )
}

export function useShowErrorToast() {
  const showToast = useShowToast()
  return React.useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, tone: `DANGER`, timeout: 0 })
    },
    [showToast]
  )
}

export function useShowErrorAlert() {
  const showToast = useShowErrorToast()

  return React.useCallback(
    (message, linkProps, options = {}) => {
      showToast(
        <MessageWithLink {...linkProps}>{message}</MessageWithLink>,
        options
      )
    },
    [showToast]
  )
}
