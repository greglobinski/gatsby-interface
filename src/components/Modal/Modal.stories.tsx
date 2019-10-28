import React, { useState } from "react"
import { storiesOf } from "@storybook/react"
import {
  ModalProvider,
  useModal,
  ModalCard,
  ModalFullScreen,
  ModalProps,
  ModalPanel,
} from "./"
import { ModalType, ModalPosition } from "./sharedTypes"

const ExampleFullScreenModal: React.FC<ModalProps> = ({
  hideCurrentModal,
  showModal,
}) => (
  <ModalFullScreen>
    <h2>This is a fullstack modal</h2>
    <button onClick={() => showModal(`test`, ExampleModal)}>
      Open a nested one
    </button>
    <button onClick={hideCurrentModal}>
      Close the <strong>"fullscreen"</strong> modal
    </button>
  </ModalFullScreen>
)

const ExampleModal: React.FC<ModalProps> = ({ hideAll, type }) => (
  <ModalCard type={type}>
    <div>This is an example modal</div>
    <button>Hello world</button>
    <button onClick={hideAll}>Close everything</button>
  </ModalCard>
)

const ExamplePanelModal: React.FC<ModalProps> = ({ hideModal, position }) => (
  <ModalPanel position={position}>
    <div>
      This is a <strong>Panel modal</strong>
    </div>

    <button onClick={() => hideModal(`panel`)}>Close me</button>
  </ModalPanel>
)

const ModalStory = () => {
  const { showModal } = useModal()
  const [type, setType] = useState<ModalType>(`success`)
  const [position, setPosition] = useState<ModalPosition>(`left`)

  const handleChange = (ev: React.ChangeEvent<HTMLSelectElement>) =>
    setType(ev.target.value as ModalType)

  return (
    <div style={{ height: `1000px` }}>
      <div>
        <button onClick={() => showModal(`test`, ExampleModal, { type })}>
          Open the <strong>"test"</strong> modal
        </button>

        <select value={type} onChange={handleChange}>
          <option value="success">Success</option>
          <option value="error">Error</option>
          <option value="info">Info</option>
          <option value="warn">Warning</option>
        </select>
      </div>
      <hr />

      <button onClick={() => showModal(`fullscreen`, ExampleFullScreenModal)}>
        Open the <strong>"fullscreen"</strong> modal
      </button>

      <hr />

      <div>
        <button
          onClick={() => setPosition(position === `left` ? `right` : `left`)}
        >
          Switch to {position === `left` ? `right` : `left`}
        </button>
        <button
          onClick={() => showModal(`panel`, ExamplePanelModal, { position })}
        >
          Open the <strong>"panel"</strong> modal
        </button>
      </div>
    </div>
  )
}

storiesOf(`Modal`, module)
  .addDecorator(story => (
    <ModalProvider rootId="modal-root">{story()}</ModalProvider>
  ))
  .add(`Default`, () => <ModalStory />)
