/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { spaces, radius } from "../../../utils/presets"
import fontSizes from "../../../theme/fontSizes"
import fonts from "../../../theme/fonts"
import colors from "../../../theme/colors"

console.log(`fonts`, fonts)

function Pill({ label, ...rest }) {
  return (
    <span
      css={{
        background: colors.green[50],
        borderRadius: radius.default,
        color: colors.white,
        fontFamily: fonts.header.join(`,`),
        fontSize: `13px`,
        fontWeight: `bold`,
        letterSpacing: `0.05em`,
        lineHeight: 1,
        padding: `4px 5px 2px`,
        textTransform: `uppercase`,
      }}
    >
      {label}
    </span>
  )
}

Pill.propTypes = {
  children: PropTypes.node,
}

export default Pill
