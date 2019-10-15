import showDeprecationMessage from "./showDeprecationMessage"

export function showCustomCssDeprecationMessage(customCss) {
  if (customCss === undefined) {
    return
  }
  showDeprecationMessage(
    `Styling components via "customCss" prop is deprecated, please use Emotion "css" prop or pass a "className"`
  )
}
