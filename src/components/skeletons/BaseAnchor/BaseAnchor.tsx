import React from "react"
import BaseElementContent, {
  BaseElementContentProps,
} from "../BaseElementContent/BaseElementContent"
import secureTargetBlankLink from "../../../utils/helpers/secureTargetBlankLink"

export type BaseAnchorProps = Omit<JSX.IntrinsicElements["a"], "ref"> &
  BaseElementContentProps & {}

const BaseAnchor = React.forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (
    { role, target = `_blank`, rel, children, ...rest }: BaseAnchorProps,
    ref
  ) => (
    <a
      target={target}
      role={role}
      rel={secureTargetBlankLink({ rel, target })}
      {...rest}
      ref={ref}
    >
      <BaseElementContent>{children}</BaseElementContent>
    </a>
  )
)

export default BaseAnchor
