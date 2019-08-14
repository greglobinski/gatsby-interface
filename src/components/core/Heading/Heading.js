/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import styles from "../../../theme/styles/heading"
import tones from "../../../theme/tones"

import { HEADING_TONES, HEADING_VARIANTS } from "../../../utils/options"

const asOptions = {
  h1: `h1`,
  h2: `h2`,
  h3: `h3`,
  h4: `h4`,
  h5: `h5`,
  h6: `h6`,
}

const Heading = ({
  children,
  css,
  // / size = `L`,
  tone = `NEUTRAL`,
  variant = `PRIMARY`,
  as = `h2`,
  ...rest
}) => {
  const Component = asOptions[as]

  return (
    <Component
      css={{
        ...styles.base,
        ...styles.variants[variant](tones[tone]),
      }}
      {...rest}
    >
      {children}
    </Component>
  )
}

Heading.propTypes = {
  // /size: PropTypes.oneOf([`L`, `M`, `XL`, `S`]),
  as: PropTypes.oneOf([`h1`, `h2`, `h3`, `h4`, `h5`]),
  variant: PropTypes.oneOf(HEADING_VARIANTS),
  tone: PropTypes.oneOf(HEADING_TONES),
}

export default Heading
