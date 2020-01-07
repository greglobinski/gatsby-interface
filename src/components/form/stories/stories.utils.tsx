/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Stack } from "../../Stack"

export const Wrapper: React.FC<{}> = ({ children }) => (
  <Stack
    gap={8}
    css={{
      maxWidth: `80%`,
      width: `25rem`,
    }}
  >
    {children}
  </Stack>
)
