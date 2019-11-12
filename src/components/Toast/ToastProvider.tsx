/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import React from "react"
import { Toast } from "./Toast"
import { ToastContext } from "./ToastContext"
import { useToastActions } from "./hooks"

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

export interface ToastProviderProps {
  closeButtonLabel?: string
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  closeButtonLabel = `Close`,
}) => {
  const { toasts, showToast, removeToast } = useToastActions()

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
