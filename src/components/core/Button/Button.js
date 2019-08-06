/** @jsx jsx */
import { jsx, keyframes } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { MdRefresh, MdArrowForward } from "react-icons/md"

import { BaseButton } from "../../skeletons/BaseButton"
import { styles } from "../../../utils/presets"
import {
  BUTTON_SIZES,
  BUTTON_TONES,
  BUTTON_VARIANTS,
} from "../../../utils/options"

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
      ...styles.button.base({ loading }),
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
