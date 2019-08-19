import React, { Fragment } from "react"
import { jsx, keyframes } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { secureTargetBlankLink } from "../../../utils/helpers"

const AS_OPTIONS = {
  h1: `h1`,
  h2: `h2`,
  h3: `h3`,
  h4: `h4`,
  h5: `h5`,
  h6: `h6`,
}

function BaseHeading(props) {
  const { children, as = `h1`, ...rest } = props
  const Component = AS_OPTIONS[as]

  return <Component {...rest}>{children}</Component>
}

BaseHeading.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(Object.values(AS_OPTIONS)),
}

export default BaseHeading
