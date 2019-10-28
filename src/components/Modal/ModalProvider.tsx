import React from "react"
import ReactDOM from "react-dom"
import FocusLock from "react-focus-lock"
import { ModalContext } from "./ModalContext"
import { useLockScroll } from "./hooks/useLockScroll"
import { useEscapePress } from "./hooks/useEscapePress"
import { useCreateDOMElement } from "./hooks/useCreateDOMElement"
import { useModalActions } from "./hooks/useModalActions"

export interface ModalProviderProps {
  rootId: string
}
export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  rootId,
}) => {
  const rootRef = useCreateDOMElement(rootId)

  const {
    showModal,
    hideModal,
    isOpened,
    hideTopOfStack,
    clearStack,
    modals,
  } = useModalActions(rootRef)

  useLockScroll(Boolean(modals.length))
  useEscapePress(hideTopOfStack)

  return (
    <ModalContext.Provider
      value={{ showModal, hideModal, isOpened, hideTopOfStack }}
    >
      {children}

      {modals.map(currentModal =>
        ReactDOM.createPortal(
          <FocusLock>
            <currentModal.Component
              hideModal={hideModal}
              showModal={showModal}
              hideTopOfStack={hideTopOfStack}
              clearStack={clearStack}
              isOpened={isOpened}
              {...currentModal.opts}
            />
          </FocusLock>,
          currentModal.el
        )
      )}

      <div ref={rootRef} />
    </ModalContext.Provider>
  )
}
