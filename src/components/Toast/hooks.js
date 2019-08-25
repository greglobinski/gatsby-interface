import React from "react"
import { ToastType } from "./constants"
import { useToastContext } from "./ToastContext"

export function useShowToast() {
  const { showToast } = useToastContext()
  return showToast
}

export function useShowSuccessToast() {
  const showToast = useShowToast()
  return React.useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, type: ToastType.SUCCESS })
    },
    [showToast]
  )
}

export function useShowErrorToast() {
  const showToast = useShowToast()
  return React.useCallback(
    (message, options = {}) => {
      showToast(message, { ...options, type: ToastType.ERROR, timeout: 0 })
    },
    [showToast]
  )
}
