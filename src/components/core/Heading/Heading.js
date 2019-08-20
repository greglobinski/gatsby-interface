/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import { BaseHeading } from "../../skeletons/BaseHeading"
import { styles, options } from "../../../theme/styles/heading"
import tones from "../../../theme/tones"

const { baseStyle, variantStyles } = styles
const { VARIANTS, TONES } = options

const asOptions = {
  h1: `h1`,
  h2: `h2`,
  h3: `h3`,
  h4: `h4`,
  h5: `h5`,
  h6: `h6`,
}

function Heading({
  children,
  css,
  tone = `NEUTRAL`,
  variant = `PRIMARY`,
  as = `h2`,
  ...rest
}) {
  return (
    <BaseHeading
      as={as}
      css={{
        ...baseStyle({ tone }),
        ...variantStyles[variant],
      }}
      {...rest}
    >
      {children}
    </BaseHeading>
  )
}

Heading.propTypes = {
  variant: PropTypes.oneOf(VARIANTS),
  tone: PropTypes.oneOf(TONES),
}

export default Heading
