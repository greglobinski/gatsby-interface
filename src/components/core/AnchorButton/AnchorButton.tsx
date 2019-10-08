/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { BaseAnchor, BaseAnchorProps } from "../../skeletons/BaseAnchor"
import { ButtonStyleProps, getButtonStyles } from "../Button"

export type AnchorButtonProps = BaseAnchorProps & ButtonStyleProps

const AnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  (props, ref) => {
    const {
      children,
      size,
      tone,
      variant,
      leftIcon,
      rightIcon,
      ...rest
    } = props

    return (
      <BaseAnchor
        {...getButtonStyles({
          children,
          size,
          tone,
          variant,
          leftIcon,
          rightIcon,
        })}
        {...rest}
        ref={ref}
      />
    )
  }
)

export default AnchorButton
