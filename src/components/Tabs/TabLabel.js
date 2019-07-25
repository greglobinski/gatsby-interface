import React from "react"
import PropTypes from "prop-types"

import { breakpoints } from "../../utils/presets"

const NumberedTabLabel = ({ children }) => (
  <span
    css={{
      display: `none`,
      ".active &": {
        display: `inline`,
      },
      "&.desktop": {
        display: `none`,
      },
      [`@media (min-width: ${breakpoints.tablet}px)`]: {
        display: `inline`,
        "&.desktop": {
          display: `inline`,
        },
        "&.mobile": {
          display: `none`,
        },
      },
    }}
  >
    {children}
  </span>
)

NumberedTabLabel.propTypes = {
  children: PropTypes.node,
}

export default NumberedTabLabel
