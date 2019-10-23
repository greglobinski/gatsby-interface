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
      css={
        {
          //   real styles
        }
      }
      {...rest}
    ></BaseNavigation>
  )

Navigation.Item = ({ ...rest }) => <BaseNavigation.Item {...rest}></BaseNavigation.Item>

Navigation.Dropdown = ({ ...rest }) => <BaseNavigation.Dropdown {...rest}></BaseNavigation.Dropdown>

Navigation.DropdownItem = ({ ...rest }) => <BaseNavigation.DropdownItem {...rest}></BaseNavigation.DropdownItem>

export default Navigation
