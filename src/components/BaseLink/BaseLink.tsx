import React from "react"
import { Link, GatsbyLinkProps } from "gatsby"

export type BaseLinkProps<TState> = Omit<GatsbyLinkProps<TState>, "ref">

export function BaseLink({ to, role, children, ...rest }: BaseLinkProps<any>) {
  const isExternal = to.match(/(^http|^mailto)/i)

  if (isExternal) {
    return (
      <a href={to} role={role} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <Link to={to} role={role} {...rest}>
      {children}
    </Link>
  )
}
