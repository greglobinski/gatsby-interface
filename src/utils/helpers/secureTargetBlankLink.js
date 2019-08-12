export default function secureTargetBlankLink({ rel = ``, target }) {
  const NOOPENER_NOREFERRER = `noopener noreferrer`

  if (
    target &&
    target.includes(`_blank`) &&
    !rel.includes(NOOPENER_NOREFERRER)
  ) {
    return `${rel} ${NOOPENER_NOREFERRER}`
  }

  return rel
}
