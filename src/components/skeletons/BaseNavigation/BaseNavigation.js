/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState, useRef, useEffect, Fragment } from "react"
import { Link } from "gatsby"
import { LinkButton } from "../../core/LinkButton"
import { visuallyHidden } from "../../../utils/helpers"
import { MdArrowForward } from "react-icons/md"

import baseStyles from "./BaseNavigationStyles"

// Used to close dropdown on an outside click
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

const BaseNavigationContext = React.createContext()

const BaseNavigation = ({
  items = [],
  children,
  isInverted = false,
  mobileNavMediaQuery = `@media (max-width: 1065px)`,
  isMobileNavOpen: defaultIsMobileNavOpen = false,
  updateMobileNavState: defaultUpdateMobileNavState = false,
  // override base components
  Hamburger = BaseNavigation.Hamburger,
  HamburgerIcon = BaseNavigation.HamburgerIcon,
  Nav = BaseNavigation.Nav,
  List = BaseNavigation.List,
  Item = BaseNavigation.Item,
  ItemLink = BaseNavigation.ItemLink,
  Dropdown = BaseNavigation.Dropdown,
  DropdownItem = BaseNavigation.DropdownItem,
  DropdownToggle = BaseNavigation.DropdownToggle,
  Button = BaseNavigation.Button,
  ...rest
}) => {
  const [isMobileNavOpen, updateMobileNavState] = defaultUpdateMobileNavState
    ? { defaultIsMobileNavOpen, defaultUpdateMobileNavState }
    : useState(false)

  const value = {
    items,
    rootChildren: children,
    isInverted,
    mobileNavMediaQuery,
    isMobileNavOpen,
    updateMobileNavState,
    components: {
      Hamburger,
      HamburgerIcon,
      Nav,
      List,
      Item,
      ItemLink,
      Dropdown,
      DropdownItem,
      DropdownToggle,
      Button,
    },
  }

  return (
    <BaseNavigationContext.Provider value={value}>
      <div
        css={{
          ...baseStyles.navigation.default,
        }}
        {...rest}
      >
        <Hamburger />
        <Nav />
      </div>
    </BaseNavigationContext.Provider>
  )
}

BaseNavigation.Hamburger = ({ ...rest }) => {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
    updateMobileNavState,

    components: { HamburgerIcon },
  } = BaseNavigation.useNavigationContext()

  return (
    <button
      onClick={() => {
        updateMobileNavState(!isMobileNavOpen)
      }}
      aria-expanded={isMobileNavOpen ? `active` : ``}
      css={{
        ...baseStyles.hamburger.default,
        [mobileNavMediaQuery]: {
          ...baseStyles.hamburger.mobile,
        },
      }}
      {...rest}
    >
      <HamburgerIcon />
    </button>
  )
}

BaseNavigation.HamburgerIcon = ({ ...rest }) => {
  const { isInverted, isMobileNavOpen } = BaseNavigation.useNavigationContext()

  return (
    <div
      className={isMobileNavOpen ? `active` : ``}
      css={{ ...baseStyles.hamburgerIcon(isInverted) }}
      {...rest}
    ></div>
  )
}

BaseNavigation.Nav = ({ ...rest }) => {
  const {
    mobileNavMediaQuery,
    isMobileNavOpen,
    components: { List },
  } = BaseNavigation.useNavigationContext()

  return (
    <nav
      css={{
        [mobileNavMediaQuery]: {
          ...baseStyles.nav.mobile(isMobileNavOpen),
        },
      }}
      {...rest}
    >
      <List />
    </nav>
  )
}

BaseNavigation.List = ({ ...rest }) => {
  const {
    items,
    rootChildren,
    components: { Item },
  } = BaseNavigation.useNavigationContext()

  return (
    <ul
      css={{
        ...baseStyles.list.default,
      }}
      {...rest}
    >
      {items.length > 0 && items.map((item, i) => <Item item={item} />)}
      {rootChildren && rootChildren}
    </ul>
  )
}

BaseNavigation.Item = ({ item, children, ...rest }) => {
  const [isDropdownOpen, toggleDropdown] = useState(false)
  const dropdownItems = item.items || []
  const dropdownChildren = children || false
  const itemHasDropdown = dropdownItems.length > 0 || dropdownChildren

  let ref
  if (itemHasDropdown) {
    ref = useRef()
    // Call hook passing in the ref and a function to call on outside click
    useOnClickOutside(ref, () => {
      toggleDropdown(false)
    })
  }

  const {
    isInverted,
    components: { ItemLink, DropdownToggle, Dropdown },
  } = BaseNavigation.useNavigationContext()

  return (
    <li
      ref={ref}
      css={{
        ...baseStyles.item(isInverted),
      }}
      {...rest}
    >
      <ItemLink item={item} />
      {itemHasDropdown && (
        <Fragment>
          <DropdownToggle
            item={item}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
          />
          <Dropdown
            item={item}
            isDropdownOpen={isDropdownOpen}
            toggleDropdown={toggleDropdown}
            dropdownItems={item.items}
            dropdownChildren={dropdownChildren}
          />
        </Fragment>
      )}
    </li>
  )
}

BaseNavigation.ItemLink = ({ item, ...rest }) => (
  <Link activeClassName="nav-item-active" to={item.linkTo} {...rest}>
    <span>{item.name}</span>
  </Link>
)

BaseNavigation.DropdownToggle = ({
  item,
  isDropdownOpen,
  toggleDropdown,
  ...rest
}) => {
  const { isInverted } = BaseNavigation.useNavigationContext()

  return (
    <button
      aria-expanded={!!isDropdownOpen}
      aria-controls={`${item.name}-dropdown`}
      onClick={() => {
        toggleDropdown(!isDropdownOpen)
      }}
      css={{
        ...baseStyles.dropdownToggle(isInverted),
      }}
      {...rest}
    >
      <span aria-hidden="true">&or;</span>
      <span css={{ ...visuallyHidden }}>{`${item.name} Menu`}</span>
    </button>
  )
}

BaseNavigation.Dropdown = ({
  item,
  isDropdownOpen,
  toggleDropdown,
  dropdownItems = [],
  dropdownChildren = false,
  ...rest
}) => {
  const {
    components: { DropdownItem },
  } = BaseNavigation.useNavigationContext()

  return (
    <ul
      css={{
        ...baseStyles.dropdown(isDropdownOpen),
      }}
      // id to associate with aria-controls on BaseNavigation.Item
      id={`${item.name}-dropdown`}
      onKeyDown={e => {
        // handle closing dropdown on `esc`
        if (e.keyCode === 27) {
          toggleDropdown(false)
        }
        return
      }}
      {...rest}
    >
      {dropdownItems.length > 0 &&
        dropdownItems.map(item => <DropdownItem item={item} />)}
      {dropdownChildren && dropdownChildren}
    </ul>
  )
}

BaseNavigation.DropdownItem = ({ item: { name, linkTo }, ...rest }) => (
  <li {...rest}>
    <Link activeClassName="nav-item-active" to={linkTo}>
      {name}
    </Link>
  </li>
)

BaseNavigation.Button = ({
  linkTo,
  icon = true,
  size = `M`,
  children,
  ...rest
}) => {
  const { isInverted } = BaseNavigation.useNavigationContext()

  return (
    <LinkButton
      to={linkTo}
      size={size}
      css={{
        ...baseStyles.button(isInverted),
      }}
      {...rest}
    >
      {children} {icon && <MdArrowForward />}
    </LinkButton>
  )
}

BaseNavigation.useNavigationContext = () => {
  const context = React.useContext(BaseNavigationContext)
  if (!context) {
    throw new Error(
      `BaseNavigation compound components cannot be rendered outside the BaseNavigation component`
    )
  }
  return context
}

export default BaseNavigation
