import { useContext } from "react"
import { ModalContext } from "./ModalContext"
import { ModalProps } from "./sharedTypes"

export const useModal = () => useContext<ModalProps>(ModalContext)
