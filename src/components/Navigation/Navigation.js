// Navigation
// navigation item
// navigation sub items
// navigation sub item

/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"

import {
  colors,
  radius,
  spaces,
  breakpoints,
  fontFamilies,
  fontSizes,
} from "../../utils/presets"

function Navigation({ children }) {
  return (
    <nav
      css={{
        height: `100%`,
        width: `100%`,
      }}
    >
      {children}
    </nav>
  )
}

Navigation.propTypes = {
  children: PropTypes.node,
}

Navigation.Item = ({ active, onClick, to, children }) => (
  <li
    css={{
      fontFamily: fontFamilies.bodyFontFamily,
      fontSize: `1rem`,
      color: active ? colors.purple[60] : colors.grey[60],
      lineHeight: `22px`,
      listStyle: `none`,
      padding: `1rem 0`,
      "first-of-type": {
        paddingTop: `0`,
      },
      "last-of-type": {
        paddingBottom: `0`,
      },
      svg: {
        verticalAlign: `middle`,
        position: `absolute`,
        left: `16%`,
      },
    }}
  >
    {to ? (
      <Link
        to={to}
        onClick={onClick}
        css={{
          fontFamily: fontFamilies.bodyFontFamily,
          fontSize: `16px`,
          color: active ? colors.purple[60] : colors.grey[60],
          lineHeight: `22px`,
          textDecoration: `none`,
        }}
      >
        {children}
      </Link>
    ) : (
      children
    )}
  </li>
)

Navigation.List = ({ children }) => (
  <ul
    css={{
      paddingInlineStart: `0`,
    }}
  >
    {children}
  </ul>
)

Navigation.SubItem = ({ active, onClick, to, children }) => (
  <li
    css={{
      fontFamily: fontFamilies.bodyFontFamily,
      fontSize: `16px`,
      color: active ? colors.purple[50] : colors.grey[60],
      lineHeight: `32px`,
      listStyle: `none`,
      padding: `0 1rem`,
      borderLeft: active
        ? `1px solid ${colors.purple[50]}`
        : `1px solid ${colors.grey[30]}`,
    }}
  >
    {to ? (
      <Link
        to={to}
        onClick={onClick}
        css={{
          fontFamily: fontFamilies.bodyFontFamily,
          fontSize: `16px`,
          color: active ? colors.purple[60] : colors.grey[60],
          lineHeight: `22px`,
          textDecoration: `none`,
          listStyle: `none`,
        }}
      >
        {children}
      </Link>
    ) : (
      children
    )}
  </li>
)

export default Navigation
