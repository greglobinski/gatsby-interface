/** @jsx jsx */
import { jsx } from "@emotion/core"
import { useState, useRef, useEffect } from "react"
import { Link } from "gatsby"
import { visuallyHidden } from "../../../utils/helpers"

// The idea here is to use the minimum possible styling for a
// recognizeable, functional, horizontal dropdown nav.
// This is why this skeleton contains styles

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

export const BaseNavigationStyles = {}

export const BaseNavigationListStyles = {
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

export const BaseNavigationDropdownOpenStyles = {
  display: `inline-block`,
  position: `absolute`,
  top: `95%`,
  right: 0,
  left: 0,
  margin: 0,
  padding: `0.5rem 0`,
}

export const BaseNavigationDropdownClosedStyles = {
  listStyle: `none`,
  margin: 0,
  padding: 0,
  display: `none`,
}

export const BaseNavigationItemStyles = {
  display: `inline-block`,
  position: `relative`,
  // Show dropdown menu on hover, if exists
  "&:hover > ul": {
    ...BaseNavigationDropdownOpenStyles,
  },
}

BaseNavigation.Item = ({
  children: itemContent,
  navItem: { linkTo, subItems = [] },
}) => {
  const [isDropdownOpen, toggleDropdown] = useState(false)

  const itemHasDropdown = subItems.length > 0
  let ref
  if (itemHasDropdown) {
    ref = useRef()
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => {
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
      <Link to={linkTo}>{itemContent}</Link>
      {itemHasDropdown && (
        <button
          aria-expanded={!!isDropdownOpen}
          aria-controls={`${itemContent}-dropdown`}
          onClick={() => toggleDropdown(!isDropdownOpen)}
        >
          <span aria-hidden="true">&or;</span>
          <span css={{ ...visuallyHidden }}>{`${itemContent}`}</span>
        </button>
      )}
      {itemHasDropdown && (
        <BaseNavigation.Dropdown
          isDropdownOpen={isDropdownOpen}
          toggleDropdown={toggleDropdown}
          itemContent={itemContent}
          items={subItems}
        />
      )}
    </li>
  )
}

BaseNavigation.Dropdown = ({
  isDropdownOpen,
  toggleDropdown,
  itemContent,
  items,
}) => (
  <ul
    css={{
      ...BaseNavigationDropdownClosedStyles,
      ...(isDropdownOpen && BaseNavigationDropdownOpenStyles),
    }}
    // id to associate with aria-controls on BaseNavigation.Item
    id={`${itemContent}-dropdown`}
    onKeyDown={e => {
      // handle closing dropdown on `esc`
      if (e.keyCode === 27) {
        toggleDropdown(false)
      }
      return
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
