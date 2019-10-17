/** @jsx jsx */
import { jsx } from "@emotion/core"
import hex2rgba from "hex2rgba"
import {
  radius,
  transition,
  colors,
  fontSizes,
  shadows,
  spaces,
  palette,
} from "../../utils/presets"

import { Link } from "gatsby"
import { getLink } from "../../utils/helpers"

const dropdownStyles = {
  mobile: {
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
    background: colors.white,
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
      background: colors.white,
      boxShadow: `-3px -3px 10px ${hex2rgba(colors.lilac, 0.1)}`,
      willChange: `transform`,
      transitionProperty: `transform`,
      transitionDuration: transition.speed.default,
    },
  },
}

const Dropdown = ({ mobileNavMediaQuery, items }) => (
  <ul
    // @TODO: Rm className.
    className="child"
    css={{
      [mobileNavMediaQuery]: {
        ...dropdownStyles.mobile,
      },
    }}
  >
    {items.map(item => (
      <Dropdown.Item
        key={`subnav-${item.name}`}
        mobileNavMediaQuery={mobileNavMediaQuery}
      >
        {/* // @TODO: Rm className. */}
        <Link to={getLink(item)} className="nav-link-sub">
          {item.name}
        </Link>
      </Dropdown.Item>
    ))}
  </ul>
)

const dropdownItemStyles = {
  default: {
    margin: 0,
    position: `relative`,
    zIndex: 1,
    listStyle: `none`,
    // @TODO: Rm class. This targets the `Link` in a Dropdown.Item
    "& .nav-link-sub": {
      color: colors.white,
      textDecoration: `none`,
    },
  },
  mobile: {
    // @TODO: Rm class. This targets the `Link` in a Dropdown.Item
    "& .nav-link-sub": {
      color: palette.grey.copy,
      textDecoration: `none`,
      padding: `${spaces.s} ${spaces.l}`,
      display: `block`,
      transition: `all ${transition.speed.default}`,
      "&:hover": {
        color: palette.grey.dark,
        background: hex2rgba(colors.accent, 0.1),
      },
    },
  },
}

Dropdown.Item = ({ children, mobileNavMediaQuery }) => (
  <li
    css={{
      ...dropdownItemStyles.default,
      [mobileNavMediaQuery]: {
        ...dropdownItemStyles.mobile,
      },
    }}
  >
    {children}
  </li>
)

export default Dropdown
