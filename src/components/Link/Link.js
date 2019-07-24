import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

import { palette } from "../../utils/presets"

const Link = ({ children, href, target, to, simple = false }) => {
  const styleIndicator = simple ? `SIMPLE` : `DEFAULT`
  const baseStyles = {
    alignItems: `center`,
    color: palette.purple[600],
    display: `inline-flex`,
  }

  const styles = {
    SIMPLE: {
      textDecoration: `none`,
      ":focus, :hover": {
        color: palette.purple[400],
        textDecoration: `underline`,
      },
    },
    DEFAULT: {
      textDecoration: `underline`,
      ":focus, :hover": {
        color: palette.purple[600],
        textDecoration: `underline`,
      },
    },
  }

  return href ? (
    <a
      href={href}
      target={target}
      css={{
        ...baseStyles,
        ...styles[styleIndicator],
      }}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink
      to={to}
      css={{
        ...baseStyles,
        ...styles[styleIndicator],
      }}
    >
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  href: PropTypes.string,
  target: PropTypes.string,
  to: PropTypes.string,
}

export default Link
