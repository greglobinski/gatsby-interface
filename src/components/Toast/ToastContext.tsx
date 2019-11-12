import { css } from "@emotion/core"
import React, { useState, useRef } from "react"
import { Toast } from "./Toast"
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

export const ToastConsumer = ToastContext.Consumer

const containerCss = css`
  align-items: center;
  bottom: 0;
  display: flex;
  flex-direction: column-reverse;
  left: 50%;
  position: fixed;
  transform: translate(-50%, 0);
  width: 100%;
  z-index: 1;
`

const DEFAULT_TIMEOUT = 5000
const DEFAULT_TONE = `SUCCESS`

export interface ToastProviderProps {
  closeButtonLabel?: string
}

export interface ToastI {
  id: number
  message: string
  tone: ToastTones
}

export type ToastInterval = {
  [key: number]: NodeJS.Timeout
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  closeButtonLabel = `Close`,
}) => {
  const [toasts, setToasts] = useState<ToastI[]>([])
  const timeoutsRef = useRef<ToastInterval>({})

  const removeToast = React.useCallback((toastId: number) => {
    setToasts(prevToasts => prevToasts.filter(({ id }) => id !== toastId))
    clearTimeout(timeoutsRef.current[toastId])
    delete timeoutsRef.current[toastId]
  }, [])

  const showToast = React.useCallback(
    (message, { tone = DEFAULT_TONE, timeout = DEFAULT_TIMEOUT } = {}) => {
      const toastId = Math.random()
      setToasts(prevToasts => [...prevToasts, { id: toastId, message, tone }])

      if (timeout > 0) {
        timeoutsRef.current[toastId] = setTimeout(() => {
          removeToast(toastId)
        }, timeout)
      }
    },
    []
  )

  const contextValue = React.useMemo(() => {
    return {
      showToast,
    }
  }, [showToast])

  return (
    <ToastContext.Provider value={contextValue}>
      {children}
      <div css={containerCss}>
        {toasts.map(toast => (
          <Toast
            key={toast.id}
            {...toast}
            onRemove={removeToast}
            closeButtonLabel={closeButtonLabel}
          />
        ))}
      </div>
    </ToastContext.Provider>
  )
}

export function useToastContext() {
  const context = React.useContext(ToastContext)

  if (!context) {
    throw new Error(
      `Toast hooks cannot be used outside the ToastProvider component`
    )
  }

  return context
}
