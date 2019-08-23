/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdRefresh, MdArrowForward } from "react-icons/md"

import { BaseButton } from "../../skeletons/BaseButton"
import styles from "../../../theme/styles/button"

import {
  BUTTON_SIZES,
  BUTTON_TONES,
  BUTTON_VARIANTS,
} from "../../../utils/options"

const Button = ({
  children,
  styles: cssStyles,
  loading,
  LoadingIcon = MdRefresh,
  size = `L`,
  tone = `BRAND`,
  variant = `PRIMARY`,
  ...rest
}) => {
  const DefaultIcon = variant === `PRIMARY` && MdArrowForward

  return (
    <BaseButton
      css={{
        ...styles.base({ loading }),
        ...styles.sizes[size],
        ...styles.variants[variant]({ tone }),
        ...cssStyles,
      }}
      DefaultIcon={DefaultIcon}
      loading={loading}
      LoadingIcon={LoadingIcon}
      {...rest}
    >
      {children}
    </BaseButton>
  )
}

Button.propTypes = {
  size: PropTypes.oneOf([`L`, `M`, `XL`, `S`]),
}

export default Button
