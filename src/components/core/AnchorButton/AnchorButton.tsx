/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import BaseAnchor, {
  BaseAnchorProps,
} from "../../skeletons/BaseAnchor/BaseAnchor"
import { ButtonStyleProps, getButtonStyles } from "../Button"

export type AnchorButtonProps = BaseAnchorProps & ButtonStyleProps

const AnchorButton = React.forwardRef<HTMLAnchorElement, AnchorButtonProps>(
  (props, ref) => {
    const { children, size, tone, variant, ...rest } = props

    return (
      <BaseAnchor
        {...getButtonStyles({
          size,
          tone,
          variant,
        })}
        {...rest}
        ref={ref}
      >
        {children}
      </BaseAnchor>
    )
  }
)

export default AnchorButton
