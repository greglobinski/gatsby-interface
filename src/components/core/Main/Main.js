/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import PropTypes from "prop-types"
import deepmerge from "deepmerge"

import fontSizes from "../../../theme/fontSizes"
import { breakpoints, spaces } from "../../../utils/presets"

function Main({ children, customCss = {}, ...rest }) {
  return (
    <main css={deepmerge({}, customCss)} {...rest}>
      {children}
    </main>
  )
}

Main.Positioner = ({
  children,
  variant = `STANDARD`,
  customCss = {},
  ...rest
}) => (
  <div
    css={deepmerge(
      {
        width: `100%`,
        position: `relative`,
      },
      customCss
    )}
    {...rest}
  >
    <div
      css={{
        margin: `0 auto`,
        maxWidth: `90rem`,
        padding: `0 ${spaces.xl}`,
        [`@media (min-width: ${breakpoints.phablet}px)`]: {
          width: `${variant === `BROADEN` ? `98%` : `90%`}`,
        },
      }}
    >
      {children}
    </div>
  </div>
)

Main.Positioner.propTypes = {
  variant: PropTypes.oneOf([`STANDARD`, `BROADEN`]),
}

export default Main
