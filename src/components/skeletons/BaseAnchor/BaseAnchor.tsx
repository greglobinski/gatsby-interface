import React from "react"
import BaseElementContent, {
  BaseElementContentProps,
} from "../BaseElementContent/BaseElementContent"
import secureTargetBlankLink from "../../../utils/helpers/secureTargetBlankLink"

export type BaseAnchorProps = Omit<JSX.IntrinsicElements["a"], "ref"> &
  BaseElementContentProps & {}

const BaseAnchor = React.forwardRef<HTMLAnchorElement, BaseAnchorProps>(
  (
    {
      label,
      // role = `button`,
      role,
      target = `_blank`,
      rel,
      DefaultIcon,
      children,
      ...rest
    }: BaseAnchorProps,
    ref
  ) => (
    <a
      target={target}
      role={role}
      rel={secureTargetBlankLink({ rel, target })}
      {...rest}
      ref={ref}
    >
      <BaseElementContent label={label} DefaultIcon={DefaultIcon}>
        {children}
      </BaseElementContent>
    </a>
  )
)

export default BaseAnchor
