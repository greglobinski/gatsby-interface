## Toast

A set of tools to display toast messages.

```javascript
import {
  ToastProvider,
  useShowSuccessToast,
  useShowErrorToast,
} from "gatsby-interface"

// Somewehere at the top of your React app tree
function App({ children }) {
  return <ToastProvider>{children}</ToastProvider>
}

function Component() {
  const showSuccessToast = useShowSuccessToast()
  const showErrorToast = useShowErrorToast()

  return (
    <>
      <button onClick={() => showSuccessToast("Your action was successful!")}>
        Show success toast
      </button>
      <button
        onClick={() =>
          showSuccessToast("This message will stay on screen until closed", {
            timeout: 0,
          })
        }
      >
        Show and persist success toast
      </button>
      <button onClick={() => showErrorToast("An error occured!")}>
        Show error toast
      </button>
    </>
  )
}
```

### Components

#### ToastProvider

This component is required to display toasts. Render it somewhere at the top of your React app tree.

```javascript
import { ToastProvider } from "gatsby-interface"

// Somewehere at the top of your React app tree
function App({ children }) {
  return <ToastProvider>{children}</ToastProvider>
}
```

#### ToastConsumer

Use this component to get access to `showToast` function if you can't use hooks for some reason.

```javascript
import { ToastConsumer, ToastType } from "gatsby-interface"

function Component() {
  return (
    <ToastConsumer>
      {({ showToast }) => (
        <button
          onClick={() => showToast(`Your action was successful`, { type: ToastType.SUCCESS })}
        >
          Show toast
        </Button>
      )}
    </ToastConsumer>
  );
}
```

### Hooks

#### useShowSuccessToast

Should be used to show a toast that indicates that some action has been successful. The toast will disappear automatically after 5 seconds.

```javascript
import { useShowSuccessToast } from "gatsby-interface"

function Component() {
  const showSuccessToast = useShowSuccessToast()
  const showErrorToast = useShowErrorToast()

  return (
    <button onClick={() => showSuccessToast("Your action was successful!")}>
      Show success toast
    </button>
  )
}
```

#### useShowErrorToast

Should be used to show a toast that indicates that some action has failed. The toast WILL NOT disappear automatically.

```javascript
import { useShowErrorToast } from "gatsby-interface"

function Component() {
  const showErrorToast = useShowErrorToast()

  return (
    <button onClick={() => showErrorToast("An error occured!")}>
      Show error toast
    </button>
  )
}
```

#### useShowToast

This is a low-level hook and generally should not be used if you can use one of the previous hooks.

```javascript
import { useShowToast, ToastType } from "gatsby-interface"

function Component() {
  const showToast = useShowToast()

  return (
    <>
      <button
        onClick={() =>
          showToast("Your action was successful!", { type: ToastType.SUCCESS })
        }
      >
        Show success toast
      </button>
      <button
        onClick={() =>
          showToast("An error occured!", { type: ToastType.ERROR, timeout: 0 })
        }
      >
        Show error toast
      </button>
    </>
  )
}
```
