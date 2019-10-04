/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"
import { MdRefresh, MdArrowForward } from "react-icons/md"

import { BaseButton, BaseButtonProps } from "../../skeletons/BaseButton"
import styles from "../../../theme/styles/button"
import { BaseElementContentProps } from "../../skeletons/BaseElementContent/BaseElementContent"

export type ButtonSize = "XL" | "L" | "M" | "S"
export type ButtonTone = "BRAND" | "SUCCESS" | "DANGER" | "NEUTRAL"
export type ButtonVariant = "PRIMARY" | "SECONDARY" | "GHOST"

export type ButtonStyleProps = {
  size?: ButtonSize
  tone?: ButtonTone
  variant?: ButtonVariant
}

export type ButtonProps = BaseButtonProps & ButtonStyleProps

export function getButtonStyles({
  loading,
  size = `L`,
  tone = `BRAND`,
  variant = `PRIMARY`,
}: {
  loading?: boolean
  size?: ButtonSize
  tone?: ButtonTone
  variant?: ButtonVariant
}): {
  css: ReturnType<typeof css>
} {
  return {
    css: {
      ...styles.base({ loading }),
      ...styles.sizes[size],
      ...styles.variants[variant]({ tone }),
    },
  }
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      children,
      loading,
      LoadingIcon = MdRefresh,
      size,
      tone,
      variant,
      ...rest
    } = props

    return (
      <BaseButton
        {...getButtonStyles({
          loading,
          size,
          tone,
          variant,
        })}
        loading={loading}
        LoadingIcon={LoadingIcon}
        {...rest}
        ref={ref}
      >
        {children}
      </BaseButton>
    )
  }
)

export default Button
