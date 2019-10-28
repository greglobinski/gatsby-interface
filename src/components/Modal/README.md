_This is an imperative way to create modals. Some DOM mutations are involved because of portals._

## API

```jsx
import { ModalCard, ModalProvider } from "gatsby-interface"

const ExamplePanelModal: React.FC<ModalProps> = ({ hideModal }) => (
  <ModalPanel position="right">
    <div> This is a panel modal</div>
    <button onClick={() => hideModal(`card`)}>
      Close another modal than me
    </button>
  </ModalPanel>
)

const ExampleModal: React.FC<ModalProps> = ({ hideTopOfStack }) => (
  <ModalCard>
    <div>This is an example modal</div>
    <button onClick={() => showModal("panel", ExamplePanelModal)}>
      Open a panel modal
    </button>
    <button onClick={hideTopOfStack}>Close me</button>
  </ModalCard>
)

const App = () => (
  <ModalProvider rootId="modal-root">
    <button onClick={() => showModal(`card`, ExampleModal)}>
      Open a Card modal
    </button>
  </ModalProvider>
)
```

## How it works?

At mounting time, the `ModalProvider` will create a DOM root element at the end of the `<body></body>` tag where all of the modals will be rendered. In the previous example, it will create a `<div id="modal-root"></div>` thanks to the `rootId` prop.

Then, the `ModalProvider` will provide methods to all of its consumers to manage the different modals of the application:

```tsx
export interface ModalActions {
  /** Create a modal with a unique name, a Component to render in the modal and some adition options */
  showModal: (
    modalName: string,
    Component: React.FC<ModalProps & ModalOptions>,
    options?: ModalOptions
  ) => void
  /** Hide a modal based on its unique name */
  hideModal: (modalName: string) => void
  /** Check if a specific modal is opened */
  isOpened: (modalName: string) => boolean
  /** Close the last element in the stack */
  hideTopOfStack: () => void
}
```

_These functions are passed as props to the `Component` in the `showModal` calls but are also accessible through the `useModal` hook._

By default, the module exposes three modal wrapper or shapes: `ModalCard`, `ModalPanel` and `ModalFullScreen`. You can also create your own one if they don't fit your need.

## TODO

- [] Close modal on navigation
- [] Animation on closing things (can be tricky :x)
- [] (Applying custom animations)
- [] Animate from/to the origin on open/close
