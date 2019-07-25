import React from "react"
import PropTypes from "prop-types"
import { Link as GatsbyLink } from "gatsby"

import { palette } from "../../utils/presets"

const Link = ({ children, href, target, to, variant = `DEFAULT` }) => {
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
      rel={target === `_blank` ? `noopener noreferrer` : ``}
      css={{
        ...baseStyles,
        ...styles[variant],
      }}
    >
      {children}
    </a>
  ) : (
    <GatsbyLink
      to={to}
      css={{
        ...baseStyles,
        ...styles[variant],
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
  variant: PropTypes.oneOf([`DEFAULT`, `SIMPLE`]),
}

export default Link
