import React from "react"
import { ToastTones } from "./constants"

export interface ShowToastArg {
  tone?: ToastTones
  timeout: NodeJS.Timeout
}

export interface ToastContextDefinition {
  showToast: (message: string, toastArg?: ShowToastArg) => void
}

export const ToastContext = React.createContext<ToastContextDefinition>({
  showToast: () => undefined,
})

export function useToastContext() {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error(
      `Toast hooks cannot be used outside the ToastProvider component`
    )
  }

  return context
}
