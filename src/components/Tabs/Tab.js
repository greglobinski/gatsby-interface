/** @jsx jsx */
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import {
  colors,
  palette,
  radius,
  spaces,
  breakpoints,
  fontFamilies,
  fontSizes,
} from "../../utils/presets"

export const baseStyles = {
  alignItems: `center`,
  borderRadius: `${radius.default} ${radius.default} 0 0`,
  color: palette.purple[500],
  display: `inline-flex`,
  fontFamily: fontFamilies.headerFontFamily,
  fontSize: fontSizes.m,
  fontWeight: `bold`,
  height: `3.5rem`,
  margin: `0 ${spaces[`2xs`]}`,
  padding: `${spaces[`3xs`]} ${spaces.m} 0`,
  position: `relative`,
  zIndex: `0`,
  a: {
    alignItems: `center`,
    display: `flex`,
    textDecoration: `none`,
    "&:active": {
      color: `inherit`,
    },
  },
  "&.active": {
    zIndex: `2`,
    ":before, :after": {
      border: `1px solid ${colors.standardLine}`,
      bottom: `-1px`,
      content: `""`,
      height: `6px`,
      position: `absolute`,
      width: `6px`,
    },
    ":before": {
      borderBottomRightRadius: `6px`,
      borderWidth: `0 1px 1px 0`,
      boxShadow: `2px 2px 0 #fff`,
      left: `-6px`,
    },
    ":after": {
      borderBottomLeftRadius: `6px`,
      borderWidth: `0 0 1px 1px`,
      boxShadow: `-2px 2px 0 #fff`,
      right: `-6px`,
    },
  },
  [`@media (min-width: ${breakpoints.phablet}px)`]: {
    padding: `${spaces[`3xs`]} ${spaces.l} 0`,
  },
}

const Tab = ({ className, to, onClick, children, variant = `DEFAULT` }) => {
  const tabStyles = {
    DEFAULT: {
      border: `1px solid ${colors.standardLine}`,
      color: palette.purple[500],
      "&.active": {
        background: colors.secondaryBackground,
        borderBottomColor: colors.secondaryBackground,
        color: palette.grey[900],
      },
    },
    NUMBERED: {
      background: colors.secondaryBackground,
      border: `1px solid ${colors.standardLine}`,
      color: palette.grey[400],
      a: {
        color: palette.purple[400],
      },
      "&.active": {
        background: colors.primaryBackground,
        borderBottomColor: colors.secondaryBackground,
        color: palette.grey[900],
      },
    },
  }
  return (
    <li
      className={className}
      css={{
        ...baseStyles,
        ...tabStyles[variant],
      }}
    >
      {to ? (
        <Link to={to} onClick={onClick}>
          {children}
        </Link>
      ) : (
        children
      )}
    </li>
  )
}

Tab.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func,
  children: PropTypes.node,
  variant: PropTypes.oneOf([`DEFAULT`, `NUMBERED`]),
}

export default Tab
