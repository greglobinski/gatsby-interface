import React from "react"
import ReactDOM from "react-dom"
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
    closeTopOfStack,
    modals,
  } = useModalActions(rootRef)

  useLockScroll(Boolean(modals.length))
  useEscapePress(closeTopOfStack)

  return (
    <ModalContext.Provider
      value={{ showModal, hideModal, isOpened, closeTopOfStack }}
    >
      {children}

      {modals.map(currentModal =>
        ReactDOM.createPortal(
          <currentModal.Component
            hideModal={hideModal}
            showModal={showModal}
            closeTopOfStack={closeTopOfStack}
            isOpened={isOpened}
            {...currentModal.opts}
          />,
          currentModal.el
        )
      )}

      <div ref={rootRef} />
    </ModalContext.Provider>
  )
}
