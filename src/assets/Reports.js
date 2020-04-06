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
    <circle cx="12" cy="12" r="5" stroke="currentColor" strokeWidth="2" />
    <rect x="17" y="4" width="4.5" height="2" fill="currentColor" />
    <rect x="4.5" y="6" width="2" height="2" fill="currentColor" />
    <rect x="15.5" y="18" width="4.5" height="2" fill="currentColor" />
    <path d="M3.5 11.5V20.5H12.5" stroke="currentColor" strokeWidth="2" />
  </svg>
)
