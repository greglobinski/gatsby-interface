export default function copyToClipboard(content: string) {
  if (!window || !window.navigator) {
    return Promise.resolve(false)
  }
  const clipboard = window.navigator.clipboard
  /*
   * fallback to older browsers (including Safari)
   * if clipboard API not supported
   */
  if (!clipboard || typeof clipboard.writeText !== `function`) {
    const textarea = document.createElement(`textarea`)
    textarea.value = content
    textarea.setAttribute(`readonly`, `true`)
    textarea.setAttribute(`contenteditable`, `true`)
    textarea.style.position = `absolute`
    textarea.style.left = `-9999px`
    document.body.appendChild(textarea)
    textarea.select()
    const range = document.createRange()
    const sel = window.getSelection()

    if (!sel) {
      return Promise.resolve(false)
    }

    sel.removeAllRanges()
    sel.addRange(range)
    textarea.setSelectionRange(0, textarea.value.length)
    document.execCommand(`copy`)
    document.body.removeChild(textarea)

    return Promise.resolve(true)
  }

  return clipboard.writeText(content)
}
