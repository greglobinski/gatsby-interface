/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

export type StacktProps = {
  children: React.ReactNode;
  as?: `div` | `span` | `ul` | `ol` | `form` | `fieldset`;
  gap?: string | number;
}

function Stack({ children, as = `div`, gap = `1.5rem` }: StacktProps) {
  const Component = as

  return (
    <Component
      css={{
        "& > * + *": {
          marginTop: gap,
        },
      }}
    >
      {children}
    </Component>
  )
}

export default Stack
