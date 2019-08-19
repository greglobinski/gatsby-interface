/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdRefresh, MdArrowForward } from "react-icons/md"

import { BaseButton } from "../../skeletons/BaseButton"
import styles from "../../../theme/styles/button"
import tones from "../../../theme/tones"

import {
  BUTTON_SIZES,
  BUTTON_TONES,
  BUTTON_VARIANTS,
} from "../../../utils/options"

const Button = ({
  children,
  css,
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
        ...styles.variants[variant](tones[tone]),
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
}

Button.propTypes = {
  size: PropTypes.oneOf([`L`, `M`, `XL`, `S`]),
}

export default Button
