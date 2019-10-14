/** @jsx jsx */
import React from "react"
import { jsx } from "@emotion/core"
import hex2rgba from "hex2rgba"
import {
  radius,
  transition,
  colors,
  palette,
  fontSizes,
  shadows,
  spaces,
} from "../../utils/presets"

export const Dropdown = ({ children, bpToggleNavigation }) => (
  <ul
    className="child"
    css={{
      [bpToggleNavigation]: {
        fontSize: fontSizes[`xs`],
        display: `none`,
        position: `absolute`,
        left: `auto`,
        right: 0,
        boxShadow: shadows.dialog,
        top: `95%`,
        listStyle: `none`,
        margin: 0,
        padding: `${spaces.s} 0`,
        background: palette.white,
        width: 260,
        borderRadius: radius.small,
        color: palette.grey.copy,
        ":after": {
          position: `absolute`,
          top: -6,
          right: 36,
          margin: `0 0 0 -6px`,
          width: 12,
          height: 12,
          content: `" "`,
          transform: `rotate(45deg)`,
          borderRadius: `${radius.small} 0 0 0`,
          background: palette.white,
          boxShadow: `-3px -3px 10px ${hex2rgba(colors.lilac, 0.1)}`,
          willChange: `transform`,
          transitionProperty: `transform`,
          transitionDuration: transition.speed.default,
        },
      },
    }}
  >
    {children}
  </ul>
)

export const DropdownItem = ({ children, bpToggleNavigation }) => (
  <li
    css={{
      margin: 0,
      position: `relative`,
      zIndex: 1,
      listStyle: `none`,
      "& .nav-link-sub": {
        color: palette.white,
        textDecoration: `none`,
      },
      [bpToggleNavigation]: {
        "& .nav-link-sub": {
          color: palette.grey.copy,
          textDecoration: `none`,
          padding: `${spaces[`s`]} ${spaces[`l`]}`,
          display: `block`,
          transition: `all ${transition.speed.default}`,
          "&:hover": {
            color: palette.grey.dark,
            background: hex2rgba(colors.accent, 0.1),
          },
        },
      },
    }}
  >
    {children}
  </li>
)
