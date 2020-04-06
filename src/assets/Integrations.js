import React from "react"

export default props => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle
      r="2.125"
      transform="matrix(1 0 0 -1 5.5 5.5)"
      stroke="currentColor"
      stroke-width="1.75"
    />
    <circle
      r="2.125"
      transform="matrix(1 0 0 -1 12 12)"
      stroke="currentColor"
      stroke-width="1.75"
    />
    <circle
      r="2.75"
      transform="matrix(1 0 0 -1 18.75 18.5)"
      fill="currentColor"
    />
    <path
      d="M7.5 5.5H17.25C19.0449 5.5 20.5 6.95507 20.5 8.75V8.75C20.5 10.5449 19.0449 12 17.25 12H14"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M14 18.5L6.75 18.5C4.95508 18.5 3.5 17.0449 3.5 15.25V15.25C3.5 13.4551 4.95507 12 6.75 12L10.5 12"
      stroke="currentColor"
      stroke-width="2"
    />
    <path
      d="M11.1517 15.8483L13.8033 18.5L11.1517 21.1517"
      stroke="currentColor"
      stroke-width="2"
    />
  </svg>
)
