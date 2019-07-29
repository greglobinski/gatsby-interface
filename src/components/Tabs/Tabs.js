/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"

import { colors, dimensions, breakpoints, spaces } from "../../utils/presets"

const baseStyles = {
  listStyle: `none`,
  margin: `0`,
  padding: `0`,
  position: `relative`,
  display: `flex`,
  justifyContent: `center`,
}

const Tabs = ({ children, variant = `DEFAULT` }) => {
  const tabStyles = {
    DEFAULT: {},
    NUMBERED: {
      textAlign: `center`,
      paddingTop: spaces[`2xl`],
      ":after": {
        borderBottom: `1px solid ${colors.standardLine}`,
        bottom: `0`,
        content: `""`,
        left: `0`,
        position: `absolute`,
        width: `calc(100% + (2 * ${dimensions.pagePadding.mobile}))`,
        marginLeft: `-${dimensions.pagePadding.mobile}`,
        zIndex: `1`,
        [`@media (min-width: ${breakpoints.tablet}px)`]: {
          width: `calc(100% + (2 * ${dimensions.pagePadding.tablet}))`,
          marginLeft: `-${dimensions.pagePadding.tablet}`,
        },
      },
    },
  }
  return (
    <ul
      css={{
        ...baseStyles,
        ...tabStyles[variant],
      }}
    >
      {children}
    </ul>
  )
}

Tabs.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf([`DEFAULT`, `NUMBERED`]),
}

export default Tabs
