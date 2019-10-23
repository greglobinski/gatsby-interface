/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React from "react"

import { BaseNavigation } from "../skeletons/BaseNavigation"
// import styles from "../../../theme/styles/button"

import {
  BaseNavigationStyles,
  BaseNavigationListStyles,
  BaseNavigationItemStyles,
  BaseNavigationDropdownOpenStyles,
  BaseNavigationDropdownClosedStyles,
} from "../skeletons/BaseNavigation"

const Navigation = ({ navItems, ...rest }) => (
  <BaseNavigation
    navItems={navItems}
    Item={Navigation.Item}
    Dropdown={Navigation.Dropdown}
    css={{
      border: `5px solid red`,
    }}
    {...rest}
  />
)

Navigation.Item = ({ ...rest }) => (
  <BaseNavigation.Item
    css={{
      border: `5px solid green`,
      button: {
        background: `orange`,
        color: `white`,
      },
    }}
    {...rest}
  ></BaseNavigation.Item>
)

Navigation.Dropdown = ({ ...rest }) => (
  <BaseNavigation.Dropdown
    css={{ border: `5px solid orange` }}
    {...rest}
  ></BaseNavigation.Dropdown>
)

Navigation.DropdownItem = ({ ...rest }) => (
  <BaseNavigation.DropdownItem {...rest}></BaseNavigation.DropdownItem>
)

export default Navigation
