/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { Link } from "gatsby"
import { MdArrowForward } from "react-icons/md"

import { LinkButton } from "../../LinkButton"
import { visuallyHidden } from "../../../utils/helpers"
import { useOnClickOutside } from "../../../utils/hooks"
import { useEventListener } from "../../../utils/hooks"
import { callIfTrueInNextLoop } from "../../../utils/helpers"

import baseStyles from "./BaseNavigationStyles"

const BaseNavigationContext = React.createContext()

const BaseNavigation = ({
  items = [],
  secondaryItems = [],
  children,
  isInverted = false,
  mobileNavMediaQuery = `@media (max-width: 1065px)`,
  isMobileNavOpen: customIsMobileNavOpen,
  setIsMobileNavOpen: customSetIsMobileNavOpen,
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
  Button = BaseNavigation.LinkButton,
  ...rest
}) => {
  const [internalIsMobileNavOpen, internalSetIsMobileNavOpen] = React.useState(
    false
  )

  const [dropdowns, setDropdowns] = React.useState({})

  const shouldManageMobileNavState =
    typeof customIsMobileNavOpen === `undefined` &&
    typeof customSetIsMobileNavOpen === `undefined`

  const isMobileNavOpen = shouldManageMobileNavState
    ? internalIsMobileNavOpen
    : customIsMobileNavOpen
  const setIsMobileNavOpen = shouldManageMobileNavState
    ? internalSetIsMobileNavOpen
    : customSetIsMobileNavOpen

  const value = {
    items,
    secondaryItems,
    rootChildren: children,
    isInverted,
    mobileNavMediaQuery,
    isMobileNavOpen,
    setIsMobileNavOpen,
    dropdowns,
    setDropdowns,
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
      <div css={baseStyles.navigation.default} {...rest}>
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
    setIsMobileNavOpen,

    components: { HamburgerIcon },
  } = BaseNavigation.useNavigationContext()

  return (
    <button
      onClick={() => {
        setIsMobileNavOpen(!isMobileNavOpen)
      }}
      aria-expanded={isMobileNavOpen ? `active` : ``}
      css={{
        ...baseStyles.hamburger.default,
        [mobileNavMediaQuery]: baseStyles.hamburger.mobile,
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
      css={baseStyles.hamburgerIcon(isInverted)}
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
        [mobileNavMediaQuery]: baseStyles.nav.mobile(isMobileNavOpen),
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
    secondaryItems,
    rootChildren,
    components: { Item },
  } = BaseNavigation.useNavigationContext()

  return (
    <div css={baseStyles.list.wrapper}>
      <ul css={[baseStyles.list.side, baseStyles.list.leftSide]} {...rest}>
        {items.length > 0 &&
          items.map(item => <Item key={item.name} item={item} />)}
        <div css={baseStyles.list.spacer} />
        {secondaryItems.length > 0 &&
          secondaryItems.map(item => <Item key={item.name} item={item} />)}
        {rootChildren && rootChildren}
      </ul>
    </div>
  )
}

BaseNavigation.Item = ({ item, children, ...rest }) => {
  const [isDropdownOpen, toggleDropdown] = React.useState(false)
  const dropdownItems = item.items || []
  const dropdownChildren = children || false
  const itemHasDropdown = dropdownItems.length > 0 || dropdownChildren

  const itemRef = React.useRef()

  useEventListener(`mouseenter`, () => toggleDropdown(true), itemRef)
  useEventListener(`mouseleave`, () => toggleDropdown(false), itemRef)

  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(itemRef, () => {
    if (itemHasDropdown) {
      toggleDropdown(false)
    }
  })

  const {
    isInverted,
    components: { ItemLink, DropdownToggle, Dropdown },
  } = BaseNavigation.useNavigationContext()

  return (
    <li ref={itemRef} css={baseStyles.item(isInverted)} {...rest}>
      <ItemLink item={item} />
      {itemHasDropdown && (
        <>
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
        </>
      )}
    </li>
  )
}

BaseNavigation.ItemLink = ({ item, ...rest }) => (
  <Link activeClassName="nav-item-active" to={item.linkTo} {...rest}>
    {/* 
      This span is needed for the styles applied in theme/styles/navigation 
    */}
    <span>{item.name}</span>
  </Link>
)

BaseNavigation.DropdownToggle = ({
  item,
  isDropdownOpen,
  toggleDropdown,
  ...rest
}) => {
  const toggleRef = React.useRef()
  const { isInverted } = BaseNavigation.useNavigationContext()

  useEventListener(`blur`, () => onToggleBlur(false), toggleRef)

  function onToggleBlur() {
    // close Dropdown if next activeElement is ItemLink
    callIfTrueInNextLoop(
      () =>
        toggleRef.current.parentElement ===
        document.activeElement.parentElement,
      () => toggleDropdown(false)
    )
  }

  return (
    <button
      ref={toggleRef}
      aria-expanded={!!isDropdownOpen}
      aria-controls={`${item.name}-dropdown`}
      onClick={() => {
        toggleDropdown(!isDropdownOpen)
      }}
      css={baseStyles.dropdownToggle(isInverted, isDropdownOpen)}
      {...rest}
    >
      <span aria-hidden="true">&or;</span>
      <span css={visuallyHidden}>{`${item.name} Menu`}</span>
    </button>
  )
}

BaseNavigation.Dropdown = React.memo(
  ({
    item,
    isDropdownOpen,
    toggleDropdown,
    dropdownItems = [],
    dropdownChildren = false,
    ...rest
  }) => {
    const dropdownRef = React.useRef()
    const { setDropdowns } = BaseNavigation.useNavigationContext()
    const VIEWPORT_FIT_MARGIN = 20

    React.useEffect(() => {
      if (dropdownRef.current) {
        const windowWidth =
          window.innerWidth || document.documentElement.clientWidth

        dropdownRef.current.style.visibility = `hidden`
        dropdownRef.current.style.display = `block`
        const { left, right } = dropdownRef.current.getBoundingClientRect()
        dropdownRef.current.style.visibility = `visible`
        dropdownRef.current.style.display = `none`

        const leftFit = left >= VIEWPORT_FIT_MARGIN
        const rightFit = right <= windowWidth - VIEWPORT_FIT_MARGIN
        const offset = !leftFit
          ? (left - VIEWPORT_FIT_MARGIN) * -1
          : !rightFit
          ? windowWidth - (right + VIEWPORT_FIT_MARGIN)
          : 0

        setDropdowns(prev => ({
          ...prev,
          [item.name]: {
            offset: offset,
          },
        }))
      }
    }, [])

    React.useEffect(() => {
      if (dropdownRef.current) {
        dropdownRef.current.style.display = isDropdownOpen ? `block` : `none`
      }
    }, [isDropdownOpen])

    const {
      components: { DropdownItem },
    } = BaseNavigation.useNavigationContext()

    function onLastItemBlur() {
      // close Dropdown if next activeElement is outside Dropdown
      callIfTrueInNextLoop(
        () =>
          dropdownRef.current !==
          document.activeElement.parentElement.parentElement.parentElement,
        () => toggleDropdown(false)
      )
    }

    return (
      <div ref={dropdownRef} css={baseStyles.dropdown} {...rest}>
        <ul
          // id to associate with aria-controls on BaseNavigation.Item
          id={`${item.name}-dropdown`}
          onKeyDown={e => {
            // handle closing dropdown on `esc`
            if (e.keyCode === 27) {
              toggleDropdown(false)
            }
            return
          }}
        >
          {dropdownItems.length > 0 &&
            dropdownItems.map((item, index) => (
              <DropdownItem
                key={`${index}-${item.name}`}
                item={item}
                isLast={index + 1 === dropdownItems.length}
                onLastItemBlur={onLastItemBlur}
              />
            ))}
          {dropdownChildren && dropdownChildren}
        </ul>
      </div>
    )
  }
)

BaseNavigation.DropdownItem = ({
  item: { name, linkTo },
  isLast,
  onLastItemBlur,
  ...rest
}) => {
  const linkRef = React.useRef()

  if (isLast) {
    useEventListener(`blur`, onLastItemBlur, linkRef)
  }

  return (
    <li {...rest}>
      <Link ref={linkRef} activeClassName="nav-item-active" to={linkTo}>
        {name}
      </Link>
    </li>
  )
}

BaseNavigation.LinkButton = ({
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
      css={baseStyles.button(isInverted)}
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
