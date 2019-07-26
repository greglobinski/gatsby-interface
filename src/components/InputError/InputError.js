import React from "react"
import PropTypes from "prop-types"

import { spaces, palette, fontSizes } from "../../utils/presets"

const InputError = ({ children }) => (
    <p
      css={{
        color: palette.red[600],
        fontSize: fontSizes.xs,
        lineHeight: `1`,
        padding: `0`,
        margin: `${spaces.xs} ${spaces[`2xs`]} 0`,
        svg: {
          color: `current-color`,
          marginRight: spaces[`2xs`],
          verticalAlign: `text-top`,
        },
      }}
    >
      {children}
    </p>
  )

InputError.propTypes = {
  children: PropTypes.node,
}

export default InputError
