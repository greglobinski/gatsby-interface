import React, { useMemo } from "react"
import ReactDOM from "react-dom"
import FocusLock from "react-focus-lock"
import { ModalContext } from "./ModalContext"
import { useLockScroll } from "./hooks/useLockScroll"
import { useEscapePress } from "./hooks/useEscapePress"
import { useDomElement } from "./hooks/useDomElement"
import { useModalActions } from "./hooks/useModalActions"

export interface ModalProviderProps {
  rootId: string
}
export const ModalProvider: React.FC<ModalProviderProps> = ({
  children,
  rootId,
}) => {
  const rootRef = useDomElement(rootId)

  const {
    showModal,
    hideModal,
    isOpened,
    hideCurrentModal,
    hideAll,
    modals,
  } = useModalActions(rootRef)

  useLockScroll(Boolean(modals.length))
  useEscapePress(hideCurrentModal)

  const modalActions = useMemo(
    () => {return { showModal, hideModal, isOpened, hideCurrentModal, hideAll }},
    [showModal, hideModal, isOpened, hideCurrentModal, hideAll]
  )

  return (
    <ModalContext.Provider value={modalActions}>
      {children}

      {modals.map(currentModal =>
        ReactDOM.createPortal(
          <FocusLock>
            <currentModal.Component
              hideModal={hideModal}
              showModal={showModal}
              hideCurrentModal={hideCurrentModal}
              hideAll={hideAll}
              isOpened={isOpened}
              {...currentModal.opts}
            />
          </FocusLock>,
          currentModal.el
        )
      )}
    </ModalContext.Provider>
  )
}
