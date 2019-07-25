import React from "react"
import PropTypes from "prop-types"

import {
  palette,
  fontFamilies,
  fontSizes,
  breakpoints,
  spaces,
} from "../../utils/presets"

const TabFigure = ({ children }) => (
  <span
    css={{
      alignItems: `center`,
      background: palette.grey[300],
      borderRadius: `50%`,
      color: palette.white,
      display: `flex`,
      fontFamily: fontFamilies.bodyFontFamily,
      fontSize: fontSizes[`3xs`],
      fontWeight: `bold`,
      height: `20px`,
      justifyContent: `center`,
      lineHeight: `1`,
      width: `20px`,
      ".active &": {
        background: palette.purple[400],
        marginRight: spaces.s,
      },
      ".done &": {
        background: palette.purple[300],
      },
      [`@media (min-width: ${breakpoints.tablet}px)`]: {
        marginRight: spaces.s,
      },
    }}
  >
    {children}
  </span>
)

TabFigure.propTypes = {
  children: PropTypes.node,
}

export default TabFigure
