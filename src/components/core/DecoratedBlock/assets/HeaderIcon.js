import React from "react"

export default props => (
  <svg
    width="32"
    height="32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx="13.333" cy="24" r="5.333" fill="#B17ACC" />
    <path stroke="#639" strokeWidth="1.333" d="M9.652 6.081l14.667 8" />
    <path
      stroke="#B17ACC"
      strokeWidth="1.333"
      d="M12.684 24.15l-4-17.333M12.951 23.454l13.333-9.334"
    />
    <circle
      cx="9.333"
      cy="6.667"
      r="3.333"
      fill="#639"
      stroke="#639"
      strokeWidth="1.333"
      {...props}
    />
    <circle cx="25.333" cy="14.667" r="2.667" fill="#8954A8" />
  </svg>
)
