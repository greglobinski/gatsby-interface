import React from "react"
import { GatsbyLinkProps, Link } from "gatsby"

export type BaseLinkProps<TState> = Omit<GatsbyLinkProps<TState>, "ref">

export default function BaseLink({
  to,
  role,
  children,
  ...rest
}: BaseLinkProps<any>) {
  return (
    <Link to={to} role={role} {...rest}>
      {children}
    </Link>
  )
}
