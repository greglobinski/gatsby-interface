/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Link } from "gatsby"

const BaseNavigationStyles = {}

const BaseNavigationListStyles = {
  listStyle: `none`,
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

const BaseNavigationItemStyles = {
  display: `inline-block`,
}

BaseNavigation.Item = ({ children, navItem: { linkTo, subItems = [] } }) => {
  console.log({ subItems })
  return (
    <li css={{ ...BaseNavigationItemStyles }}>
      <Link to={linkTo}>{children}</Link>
      {subItems.length > 0 && <BaseNavigation.Dropdown items={subItems} />}
    </li>
  )
}

BaseNavigation.Dropdown = ({ items }) => {
  console.log({ items })
  return (
    <ul>
      {items.map(item => (
          <BaseNavigation.DropdownItem item={item}>
            {item.name}
          </BaseNavigation.DropdownItem>
        ))}
    </ul>
  )
}

BaseNavigation.DropdownItem = ({ children, item: { linkTo } }) => (
    <li>
      <Link to={linkTo}>{children}</Link>
    </li>
  )

export default BaseNavigation
