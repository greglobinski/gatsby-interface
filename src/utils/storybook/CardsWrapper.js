/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { colors } from "../presets"

const CardsWrapper = ({ children, width = `25rem` }) => (
  <div
    css={{
      alignItems: `center`,
      background: colors.secondaryBackground,
      display: `flex`,
      height: `100vh`,
      justifyContent: `center`,
      width: `100vw`,
    }}
  >
    <div
      css={{
        maxWidth: `70%`,
        width: width,
      }}
    >
      {children}
    </div>
  </div>
)

export default CardsWrapper
