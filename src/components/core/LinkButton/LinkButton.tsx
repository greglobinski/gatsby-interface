/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { ButtonStyleProps, getButtonStyles } from "../Button"
import { BaseLink, BaseLinkProps } from "../../skeletons/BaseLink"

export type LinkButtonProps<TState = any> = BaseLinkProps<TState> &
  ButtonStyleProps

function LinkButton<TState>(props: LinkButtonProps<TState>) {
  const { children, size, tone, variant, leftIcon, rightIcon, ...rest } = props

  return (
    <BaseLink
      {...getButtonStyles({
        children,
        size,
        tone,
        variant,
        leftIcon,
        rightIcon,
      })}
      {...rest}
    />
  )
}

export default LinkButton
