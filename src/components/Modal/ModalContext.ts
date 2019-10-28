import React from "react"
import { ModalOptions, ModalProps } from "./sharedTypes"

export const ModalContext = React.createContext<ModalProps>({
  showModal: (
    modalName: string,
    Component: React.FC<ModalProps>,
    options?: ModalOptions
  ) => undefined,
  hideModal: (modalName: string) => undefined,
  isOpened: (modalName: string) => false,
  hideCurrentModal: () => undefined,
  hideAll: () => undefined,
})
