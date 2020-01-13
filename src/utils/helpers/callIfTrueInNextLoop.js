export function callIfTrueInNextLoop(condition, callback) {
  setTimeout(() => {
    if (condition()) {
      callback()
    }
  }, 0)
}
