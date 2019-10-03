import React from "react"
import { GatsbyLinkProps, Link } from "gatsby"
import BaseElementContent, {
  BaseElementContentProps,
} from "../BaseElementContent/BaseElementContent"

export type BaseLinkProps<TState> = Omit<GatsbyLinkProps<TState>, "ref"> &
  BaseElementContentProps

export default function BaseLink({
  to,
  // role = `button`,
  role,
  children,
  label,
  DefaultIcon,
  ...rest
}: BaseLinkProps<any>) {
  return (
    <Link to={to} role={role} {...rest}>
      <BaseElementContent label={label} DefaultIcon={DefaultIcon}>
        {children}
      </BaseElementContent>
    </Link>
  )
}
