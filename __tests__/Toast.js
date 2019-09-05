import React from "react"
import { render, fireEvent, act } from "react-testing-library"

import {
  ToastProvider,
  ToastConsumer,
  useShowSuccessToast,
  useShowErrorToast,
  useShowErrorAlert,
} from "../src"
import Toast from "../src/components/Toast/Toast"

describe(`Toast`, () => {
  const baseProps = {
    id: 0,
    message: `Lorem ipsum`,
    tone: `SUCCESS`,
    onRemove: () => {},
    closeButtonLabel: `close`,
  }

  it(`renders unchanged`, async () => {
    const { container } = render(
      <React.Fragment>
        <Toast {...baseProps} />
        <Toast {...baseProps} id={1} tone="DANGER" />
      </React.Fragment>
    )

    expect(container).toMatchSnapshot()
  })

  it(`displays the toast message`, async () => {
    const { queryByText } = render(<Toast {...baseProps} />)

    expect(queryByText(`Lorem ipsum`)).toBeTruthy()
  })

  it(`has accessible label for the close button`, async () => {
    const { container } = render(<Toast {...baseProps} />)

    expect(container.querySelector(`button`)).toHaveAttribute(
      `aria-label`,
      `close`
    )
  })

  it(`calls onRemove callback when clicking the close button`, async () => {
    const removeFn = jest.fn()
    const { getByLabelText } = render(
      <Toast {...baseProps} id={123} onRemove={removeFn} />
    )

    fireEvent.click(getByLabelText(`close`))

    expect(removeFn).toHaveBeenCalledWith(123)
  })
})

describe(`ToastProvider`, () => {
  it(`exposes toast tools via context`, () => {
    const renderFn = jest.fn()

    render(
      <ToastProvider>
        <ToastConsumer>{renderFn}</ToastConsumer>
      </ToastProvider>
    )

    expect(renderFn).toHaveBeenCalledWith(
      expect.objectContaining({
        showToast: expect.any(Function),
      })
    )
  })

  function TestComponent({ toastOptions = {} }) {
    return (
      <ToastConsumer>
        {({ showToast }) => (
          <button onClick={() => showToast(`Lorem ipsum`, toastOptions)}>
            Show toast
          </button>
        )}
      </ToastConsumer>
    )
  }

  it(`allows to specify custom label for the toast close button`, () => {
    const { getByText, getByTestId } = render(
      <ToastProvider closeButtonLabel="Zamknąć">
        <TestComponent toastOptions={{ timeout: 0 }} />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(getByTestId(`toast`).querySelector(`button`)).toHaveAttribute(
      `aria-label`,
      `Zamknąć`
    )
  })

  it(`removes a toast on timeout`, () => {
    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent toastOptions={{ timeout: 500 }} />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()

    setTimeout(() => expect(queryByTestId(`toast`)).toBeFalsy(), 500)
  })

  it(`persists a toast if the provided timeout is 0`, () => {
    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent toastOptions={{ timeout: 0 }} />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()

    setTimeout(() => expect(queryByTestId(`toast`)).toBeTruthy(), 600)
  })
})

describe(`useShowSuccessToast hook`, () => {
  it(`returns a method to show success toast`, () => {
    function TestComponent() {
      const showSuccessToast = useShowSuccessToast()

      return (
        <button onClick={() => showSuccessToast(`Lorem ipsum`)}>
          Show toast
        </button>
      )
    }

    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()
  })
})

describe(`useShowErrorToast hook`, () => {
  it(`returns a method to show error toast`, () => {
    function TestComponent() {
      const showErrorToast = useShowErrorToast()

      return (
        <button onClick={() => showErrorToast(`Lorem ipsum`)}>
          Show toast
        </button>
      )
    }

    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()
    setTimeout(() => expect(queryByTestId(`toast`)).toBeTruthy(), 600)
  })
})

describe(`useShowErrorAlert hook`, () => {
  it(`returns a method to show error alert`, () => {
    function TestComponent() {
      const showErrorAlert = useShowErrorAlert()

      return (
        <button
          onClick={() =>
            showErrorAlert(`Lorem ipsum`, {
              linkLabel: `See details`,
              href: `https://google.com`,
              target: `_blank`,
            })
          }
        >
          Show toast
        </button>
      )
    }

    const { getByText, queryByTestId } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    expect(queryByTestId(`toast`)).toBeTruthy()
    setTimeout(() => expect(queryByTestId(`toast`)).toBeTruthy(), 600)

    const link = getByText(`See details`)
    expect(link).toHaveAttribute(`href`, `https://google.com`)
    expect(link).toHaveAttribute(`target`, `_blank`)
  })

  it(`allows to show error alert with an internal link`, () => {
    function TestComponent() {
      const showErrorAlert = useShowErrorAlert()

      return (
        <button
          onClick={() =>
            showErrorAlert(`Lorem ipsum`, {
              linkLabel: `See details`,
              to: `/local`,
              target: `_blank`,
            })
          }
        >
          Show toast
        </button>
      )
    }

    const { getByText, debug } = render(
      <ToastProvider>
        <TestComponent />
      </ToastProvider>
    )

    act(() => {
      fireEvent.click(getByText(`Show toast`))
    })

    const link = getByText(`See details`)
    expect(link).toHaveAttribute(`href`, `/local`)
    expect(link).not.toHaveAttribute(`target`)
  })
})