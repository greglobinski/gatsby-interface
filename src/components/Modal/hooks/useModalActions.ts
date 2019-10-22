import { useState } from "react"
import { ModalProps, ModalOptions } from ".."

interface IModal {
  name: string
  Component: React.FC<ModalProps>
  el: HTMLElement
  opts?: ModalOptions
}

export const useModalActions = (
  rootRef: React.MutableRefObject<HTMLDivElement>
) => {
  const [modals, setModals] = useState<IModal[]>([])

  const showModal = (
    name: string,
    Component: React.FC<ModalProps>,
    opts?: ModalOptions
  ) => {
    if (rootRef.current) {
      const alreadyExists = modals.find(
        currentModal => currentModal.name === name
      )

      if (alreadyExists) {
        console.warn(`The modal name already exists!`)
      } else {
        const nextModal = createModalElement(
          name,
          rootRef.current,
          Component,
          opts
        )

        setModals(openedModals => openedModals.concat(nextModal))
      }
    }
  }
  const hideModal = (name: string) => {
    const indexToRemove = modals.findIndex(
      currentModal => currentModal.name === name
    )

    if (indexToRemove >= 0 && rootRef.current) {
      rootRef.current.removeChild(modals[indexToRemove].el)

      setModals([
        ...modals.slice(0, indexToRemove),
        ...modals.slice(indexToRemove + 1),
      ])
    }
  }

  const isOpened = (name: string) => {
    const modal = modals.find(currentModal => currentModal.name === name)

    return Boolean(modal)
  }

  const closeTopOfStack = () => {
    const lastModal = modals[modals.length - 1]

    if (lastModal) {
      hideModal(lastModal.name)
    }
  }

  return { showModal, hideModal, isOpened, closeTopOfStack, modals }
}

const createModalElement = (
  name: string,
  parentElement: HTMLDivElement,
  Component: React.FC<ModalProps>,
  opts?: ModalOptions
): IModal => {
  const domElement = document.createElement(`div`)

  parentElement.appendChild(domElement)

  return { name, el: domElement, Component, opts }
}
