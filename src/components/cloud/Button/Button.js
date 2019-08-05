/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdRefresh, MdArrowForward } from "react-icons/md"

import { BaseButton } from "../../skeletons/BaseButton"
import {
  fontFamilies,
  radius,
  colors,
  spaces,
  styles,
} from "../../../utils/presets"
import {
  BUTTON_SIZES,
  BUTTON_TONES,
  BUTTON_VARIANTS,
} from "../../../utils/options"

const iconLoadingAnim = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`

const iconHoverAnim = keyframes`
  33% {
    transform:  scale(1);
    }
  66% {
    transform: scale(0.8);
  }
`

const baseStyles = props => {return {
  alignItems: `center`,
  border: colors.grey[60],
  borderRadius: radius.default,
  boxSizing: `border-box`,
  cursor: !props.loading ? `pointer` : `not-allowed`,
  display: `inline-flex`,
  fontFamily: fontFamilies.headerFontFamily,
  justifyContent: `center`,
  transition: `background 0.5s, border 0.5s, color 0.5s`,
  lineHeight: `1`,
  textDecoration: `none`,

  "&[disabled], &[disabled]:hover": {
    cursor: `not-allowed`,
    opacity: `0.5`,
  },
  svg: {
    animation: props.loading ? `${iconLoadingAnim} 1s linear infinite` : ``,
    flexShrink: `0`,
    margin: `0 ${spaces[`2xs`]}`,
    transform: `scale(1)`,

    "&:last-child": {
      marginRight: `-0.25em`,
    },
    "&:first-child": {
      marginLeft: `-0.30em`,
    },
  },
  "&:hover:not([disabled])": {
    svg: {
      animation: !props.loading ? `${iconHoverAnim} 1s linear infinite` : ``,
    },
  },
}}

const Button = ({
  children,
  css,
  DefaultIcon = MdArrowForward,
  loading,
  LoadingIcon = MdRefresh,
  size = `L`,
  tone = `STANDARD`,
  variant = `PRIMARY`,
  ...rest
}) => (
    <BaseButton
      css={{
        ...baseStyles({ loading }),
        ...styles.button.sizes[size],
        ...styles.button.variants[variant](styles.tones[tone]),
        ...css,
      }}
      DefaultIcon={DefaultIcon}
      loading={loading}
      LoadingIcon={LoadingIcon}
      {...rest}
    >
      {children}
    </BaseButton>
  )

Button.propTypes = {
  size: PropTypes.oneOf([`L`, `M`, `XL`, `S`]),
}

export default Button
