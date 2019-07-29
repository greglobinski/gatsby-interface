/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdRefresh } from "react-icons/md"

import { fontFamilies, radius, palette, colors } from "../../utils/presets"

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
  border: palette.grey[600],
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
    background: palette.white,
    border: `1px solid ${palette.grey[300]}`,
    color: palette.grey[600],
    ":focus, :hover": {
      border: `1px solid ${palette.grey[600]}`,
      color: palette.grey[900],
    },
  },
  PRIMARY: {
    background: colors.gatsby,
    border: `0`,
    color: palette.white,
    fontWeight: `bold`,
    ":focus,:hover": {
      background: palette.purple[700],
    },
  },
  SECONDARY: {
    background: palette.white,
    border: `1px solid ${palette.purple[200]}`,
    color: palette.purple[500],
    fontWeight: `bold`,
    ":focus, &:hover:not([disabled])": {
      border: `1px solid ${palette.purple[600]}`,
      color: palette.purple[600],
    },
  },
  SUCCESS: {
    background: palette.green[600],
    border: `1px solid ${palette.green[600]}`,
    color: palette.white,
    fontWeight: `bold`,
    ":focus, :hover": {
      background: `1px solid ${palette.green[700]}`,
      borderColor: palette.green[900],
    },
  },
  TEXT: {
    background: palette.white,
    border: `1px solid ${palette.white}`,
    color: colors.lilac,
    ":focus, :hover": {
      color: colors.gatsby,
    },
  },
  DANGER: {
    background: palette.red[600],
    border: `1px solid ${palette.red[600]}`,
    color: palette.white,
    fontWeight: `bold`,
    ":focus, :hover": {
      background: `1px solid ${palette.red[700]}`,
      borderColor: palette.red[900],
    },
  },
  SECONDARY_DANGER: {
    background: palette.white,
    border: `1px solid ${palette.red[200]}`,
    color: palette.red[500],
    ":focus, :hover": {
      borderColor: palette.red[600],
      color: palette.red[600],
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
