/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState } from "react"
import { Link } from "gatsby"
// import { visuallyHidden } from "../../../utils/helpers"

const BaseNavigationStyles = {}

const BaseNavigationListStyles = {
  listStyle: `none`,
  margin: 0,
  padding: 0,
}

const BaseNavigation = ({ navItems }) => (
  <nav
    css={{
      ...BaseNavigationStyles,
    }}
  >
    <ul
      css={{
        ...BaseNavigationListStyles,
      }}
    >
      {navItems.map((navItem, i) => (
        <BaseNavigation.Item navItem={navItem}>
          {navItem.name}
        </BaseNavigation.Item>
      ))}
    </ul>
  </nav>
)

const DropdownListStyles = {
  display: `inline-block`,
  position: `absolute`,
  top: `95%`,
  right: 0,
  left: 0,
  margin: 0,
  padding: `0.5rem 0`,
}

const BaseNavigationItemStyles = {
  display: `inline-block`,
  position: `relative`,
  // Show dropdown menu on hover, if exists
  "&:hover > ul": {
    ...DropdownListStyles,
  },
  // ":focus-within > ul": {
  //   ...DropdownListStyles,
  // },
}

BaseNavigation.Item = ({ children, navItem: { linkTo, subItems = [] } }) => {
  const [isDropdownOpen, toggleDropdown] = useState(false)
  console.log({ isDropdownOpen })
  return (
    <li css={{ ...BaseNavigationItemStyles }}>
      <Link to={linkTo}>{children}</Link>
      {subItems.length > 0 && (
        <button onClick={() => toggleDropdown(!isDropdownOpen)}>&or;</button>
      )}
      {subItems.length > 0 && isDropdownOpen && (
        <BaseNavigation.Dropdown items={subItems} />
      )}
    </li>
  )
}

const BaseNavigationDropdownStyles = {
  listStyle: `none`,
  margin: 0,
  padding: 0,
  display: `none`,
}

BaseNavigation.Dropdown = ({ items }) => (
    <ul css={{ ...BaseNavigationDropdownStyles }}>
      {items.map(item => (
        <BaseNavigation.DropdownItem item={item}>
          {item.name}
        </BaseNavigation.DropdownItem>
      ))}
    </ul>
  )

BaseNavigation.DropdownItem = ({ children, item: { linkTo } }) => (
  <li>
    <Link to={linkTo}>{children}</Link>
  </li>
)

export default BaseNavigation
