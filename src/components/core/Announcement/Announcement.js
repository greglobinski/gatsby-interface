/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { spaces } from "../../../utils/presets"
import fontSizes from "../../../theme/fontSizes"
import colors from "../../../theme/colors"
import background from "./background.svg"

function Announcement({ children, ...rest }) {
  return (
    <div
      css={{
        alignItems: `center`,
        background: colors.teal[5],
        color: colors.teal[90],
        display: `flex`,
        fontSize: fontSizes[1],
        padding: `${spaces.m} ${spaces.l}`,
        backgroundImage: `url(${background})`,
        backgroundPosition: `right center`,
        backgroundRepeat: `no-repeat`,

        [`&:not(:first-child)`]: {
          borderTop: `1px solid ${colors.teal[10]}`,
        },
      }}
    >
      {children}
    </div>
  )
}

Announcement.propTypes = {
  children: PropTypes.node,
}

export default Announcement
