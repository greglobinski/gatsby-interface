/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdRefresh } from "react-icons/md"

import { fontFamilies, radius, colors } from "../../utils/presets"

const loadingStyle = keyframes`
  0% {
    transform: translateX(0.2em) rotate(0);
  }
  100% {
    transform: translateX(0.2em) rotate(360deg);
  }
`

const pulse = keyframes`
  33% {
    transform: translateX(0.2em) scale(1.05);
    }
  66% {
    transform: translateX(0.2em) scale(0.85);
  }
`

const baseStyles = {
  alignItems: `center`,
  border: colors.grey[60],
  borderRadius: radius.default,
  boxSizing: `border-box`,
  cursor: `pointer`,
  display: `inline-flex`,
  fontFamily: fontFamilies.headerFontFamily,
  justifyContent: `center`,
  lineHeight: `1`,
  textDecoration: `none`,
  transition: `0.5s`,
  "&[disabled], &[disabled]:hover": {
    cursor: `not-allowed`,
    opacity: `0.5`,
  },
  svg: {
    flexShrink: `0`,
    transform: `translateX(0.2em) scale(1)`,
  },
  "&:hover:not([disabled])": {
    svg: {
      animation: `${pulse} 1s linear infinite`,
    },
  },
}

const sizes = {
  S: {
    fontSize: 0.875,
    height: 1.5,
    horizontalPadding: 0.5,
    verticalPadding: 0.3,
  },
  M: {
    fontSize: 1,
    height: 2,
    horizontalPadding: 0.75,
    verticalPadding: 0.45,
  },
  L: {
    fontSize: 1.125,
    height: 2.25,
    horizontalPadding: 1,
    verticalPadding: 0.55,
  },
  XL: {
    fontSize: 1.5,
    height: 3.25,
    horizontalPadding: 1.25,
    verticalPadding: 0.65,
  },
}

const variantStyles = {
  DEFAULT: {
    background: colors.white,
    border: `1px solid ${colors.grey[30]}`,
    color: colors.grey[60],
    ":focus, :hover": {
      border: `1px solid ${colors.grey[60]}`,
      color: colors.grey[90],
    },
  },
  PRIMARY: {
    background: colors.gatsby,
    border: `0`,
    color: colors.white,
    fontWeight: `bold`,
    ":focus,:hover": {
      background: colors.purple[70],
    },
  },
  SECONDARY: {
    background: colors.white,
    border: `1px solid ${colors.purple[20]}`,
    color: colors.purple[50],
    fontWeight: `bold`,
    ":focus, &:hover:not([disabled])": {
      border: `1px solid ${colors.purple[60]}`,
      color: colors.purple[60],
    },
  },
  SUCCESS: {
    background: colors.green[60],
    border: `1px solid ${colors.green[60]}`,
    color: colors.white,
    fontWeight: `bold`,
    ":focus, :hover": {
      background: `1px solid ${colors.green[70]}`,
      borderColor: colors.green[90],
    },
  },
  TEXT: {
    background: colors.white,
    border: `1px solid ${colors.white}`,
    color: colors.lilac,
    ":focus, :hover": {
      color: colors.gatsby,
    },
  },
  DANGER: {
    background: colors.red[60],
    border: `1px solid ${colors.red[60]}`,
    color: colors.white,
    fontWeight: `bold`,
    ":focus, :hover": {
      background: `1px solid ${colors.red[70]}`,
      borderColor: colors.red[90],
    },
  },
  SECONDARY_DANGER: {
    background: colors.white,
    border: `1px solid ${colors.red[20]}`,
    color: colors.red[50],
    ":focus, :hover": {
      borderColor: colors.red[60],
      color: colors.red[60],
    },
  },
}

const Button = ({
  children,
  disabled = false,
  href,
  loading = false,
  loadingLabel = `Loading`,
  to,
  size = `L`,
  variant = `DEFAULT`,
}) => {
  const baseButtonStyles = {
    ...baseStyles,
    fontSize: sizes[`${size}`].fontSize + `rem`,
    minHeight: sizes[`${size}`].height + `rem`,
    padding:
      sizes[`${size}`].verticalPadding +
      `rem ` +
      sizes[`${size}`].horizontalPadding +
      `rem`,
    svg: {
      animation: `${loading} && ${loadingStyle} 1s linear infinite`,
    },
  }

  if (href) {
    return (
      <a href={href} css={{ ...baseButtonStyles, ...variantStyles[variant] }}>
        {children}
      </a>
    )
  }

  if (to) {
    return (
      <Link to={to} css={{ ...baseButtonStyles, ...variantStyles[variant] }}>
        {children}
      </Link>
    )
  }

  return (
    <button
      disabled={disabled}
      css={{ ...baseButtonStyles, ...variantStyles[variant] }}
    >
      {loading ? (
        <Fragment>
          {loadingLabel} <MdRefresh />
        </Fragment>
      ) : (
        children
      )}
    </button>
  )
}

Button.propTypes = {
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loadingLabel: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
  to: PropTypes.string,
  variant: PropTypes.oneOf([
    `DEFAULT`,
    `PRIMARY`,
    `SECONDARY`,
    `DANGER`,
    `SECONDARY_DANGER`,
    `SUCCESS`,
    `TEXT`,
  ]),
}
export default Button
