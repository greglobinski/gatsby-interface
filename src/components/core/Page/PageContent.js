/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import deepmerge from "deepmerge"

import fontSizes from "../../../theme/fontSizes"
import { breakpoints, spaces } from "../../../utils/presets"

function PageContent({ children, customCss = {}, ...rest }) {
  return (
    <main css={deepmerge({}, customCss)} {...rest}>
      {children}
    </main>
  )
}

PageContent.Positioner = ({ children, customCss = {}, ...rest }) => (
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
          width: `90%`,
        },
      }}
    >
      {children}
    </div>
  </div>
)

export default PageContent
