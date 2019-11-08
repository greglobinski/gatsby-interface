import React from "react"
import PropTypes from "prop-types"

const AS_OPTIONS = {
  p: `p`,
  span: `span`,
}

function BaseText(props) {
  const { children, as = `p`, ...rest } = props
  const Component = AS_OPTIONS[as]

  return <Component {...rest}>{children}</Component>
}

BaseText.propTypes = {
  children: PropTypes.node,
  as: PropTypes.oneOf(Object.values(AS_OPTIONS)),
}

export default BaseText
