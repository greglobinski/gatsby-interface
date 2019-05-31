import "unfetch/polyfill"

global.___loader = {
  enqueue: jest.fn(),
}

const warn = console.warn
console.warn = (message, ...args) => {
  if (
    /(@reach\/dialog styles not found.|@reach\/menu-button styles not found.)/gi.test(
      message
    )
  ) {
    return
  }

  warn.apply(console, [message, ...args])
}

const error = console.error
console.error = (message, ...args) => {
  if (/(Invalid prop|Failed prop type)/gi.test(message)) {
    throw new Error(message)
  }

  error.apply(console, [message, ...args])
}
