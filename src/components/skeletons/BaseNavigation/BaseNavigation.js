/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
// import { visuallyHidden } from "../../../utils/helpers"

const useOnClickOutside = (ref, handler) => {
  useEffect(() => {
    const listener = event => {
      // Do nothing if clicking ref's element or descendent elements
      if (!ref.current || ref.current.contains(event.target)) {
        return
      }

      handler(event)
    }
    if (document) {
      document.addEventListener(`mousedown`, listener)
      document.addEventListener(`touchstart`, listener)

      return () => {
        document.removeEventListener(`mousedown`, listener)
        document.removeEventListener(`touchstart`, listener)
      }
    }
  }, [ref, handler])
}

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
  // "&:hover > ul": {
  //   ...DropdownListStyles,
  // },
  // ":focus-within > ul": {
  //   ...DropdownListStyles,
  // },
}

BaseNavigation.Item = ({ children, navItem: { linkTo, subItems = [] } }) => {
  const [isDropdownOpen, toggleDropdown] = useState(false)
  console.log({ isDropdownOpen })

  const itemHasDropdown = subItems.length > 0
  let ref
  if (itemHasDropdown) {
    ref = useRef()
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => {
      console.log(`running click outside`)
      toggleDropdown(false)
    })
  }

  return (
    <li
      ref={ref}
      css={{
        ...BaseNavigationItemStyles,
      }}
    >
      <Link to={linkTo}>{children}</Link>
      {itemHasDropdown && (
        <button
          onClick={() => {
            console.log(`running onClick`)
            toggleDropdown(!isDropdownOpen)
          }}
        >
          &or;
        </button>
      )}
      {itemHasDropdown && isDropdownOpen && (
        <BaseNavigation.Dropdown
          isDropdownOpen={isDropdownOpen}
          items={subItems}
        />
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

BaseNavigation.Dropdown = ({ items, isDropdownOpen }) => (
  <ul
    css={{
      ...BaseNavigationDropdownStyles,
      ...(isDropdownOpen && DropdownListStyles),
    }}
  >
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
