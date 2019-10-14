/** @jsx jsx */
import React, { useState } from "react"
import { jsx } from "@emotion/core"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Button } from "../core/Button"

import { Dropdown, DropdownItem } from "./Dropdown"
import { getLink } from "../../utils/helpers"
import {
  transition,
  dimensions,
  fontSizes,
  fontFamilies,
  colors,
  palette,
  spaces,
} from "../../utils/presets"

const navItemStyles = {
  textDecoration: `none`,
  color: colors.white,
  fontFamily: fontFamilies.headerFontFamily,
  fontWeight: `normal`,
  transition: `opacity ${transition.speed.default}`,
  WebkitFontSmoothing: `antialiased`,
  fontSize: fontSizes[`2xl`],
  "&.nav-item-active": {
    color: colors.accent,
    "&.is-inverted": {
      color: colors.accent,
      "& span:after": {
        background: `linear-gradient(45deg, ${colors.accent}, ${colors.accent})`,
      },
    },
  },
  "&:hover": {
    opacity: 0.8,
  },
}

const NavItem = ({
  sections,
  isInverted,
  linkTo,
  children,
  isLast,
  bpToggleNavigation,
  updateParentState,
}) => {
  const [isMobileNavOpen] = useState(false)

  return (
    <li
      data-cy={children}
      css={{
        [bpToggleNavigation]: {
          alignItems: isLast ? `center` : ``,
          textAlign: `left`,
          display: isLast ? `flex` : `inline-block`,
          margin: 0,
          padding: `0 ${spaces[`s`]}`,
          paddingRight: isLast ? 0 : false,
          color: isInverted ? `rgba(255,255,255,0.8)` : false,
          position: `relative`,
          WebkitFontSmoothing: isInverted ? `antialiased` : false,
          ":hover .child": {
            display: `inline-block`,
          },
        },
      }}
    >
      {isLast &&
      (linkTo.includes(`start-project`) || linkTo.includes(`get-started`)) ? (
        <Button
          to={linkTo}
          size={`M`}
          css={{
            background: isInverted ? palette.white : colors.gatsby,
            border: isInverted ? `1px solid ${palette.purple[200]}` : `0`,
            color: isInverted ? palette.purple[500] : palette.white,
            fontSize: `1rem`,
            fontWeight: `bold`,
            ":focus": {
              background: isInverted ? palette.white : palette.purple[700],
              border: isInverted ? `1px solid ${palette.purple[600]}` : `0`,
              color: isInverted ? palette.purple[600] : palette.white,
            },
            "&:hover:not([disabled])": {
              background: isInverted ? palette.white : palette.purple[700],
              border: isInverted ? `1px solid ${palette.purple[600]}` : `0`,
              color: isInverted ? palette.purple[600] : palette.white,
            },
          }}
        >
          {children}
        </Button>
      ) : (
        <Link
          to={linkTo}
          css={{
            ...navItemStyles,
            [bpToggleNavigation]: {
              fontSize: fontSizes[`xs`],
              display: `block`,
              fontFamily: fontFamilies.bodyFontFamily,
              fontWeight: `normal`,
              color: `inherit`,
              textDecoration: `none`,
              lineHeight: `calc(2 * ${dimensions.siteHeader.heightLarge} / 3)`,
              position: `relative`,
              "& span": {
                position: `relative`,
              },
              "&.nav-item-active": {
                color: colors.gatsby,
              },
              "&.nav-item-active span:after": {
                width: `100%`,
              },
              "& span:after": {
                position: `absolute`,
                content: `" "`,
                display: `block`,
                width: 0,
                height: 1,
                bottom: -4,
                opacity: 0.2,
                background: `linear-gradient(45deg, ${colors.lilac}, ${colors.gatsby})`,
                transition: `all ${transition.speed.default}`,
              },
            },
          }}
          className={isInverted ? `nav-item is-inverted` : `nav-item`}
          activeClassName="nav-item-active"
          onClick={() => updateParentState(!isMobileNavOpen)}
        >
          <span>{children}</span>
        </Link>
      )}
      {sections && sections.length > 0 && (
        <Dropdown bpToggleNavigation={bpToggleNavigation}>
          {sections.map(section => (
            <DropdownItem
              key={`subnav-${section.name}`}
              bpToggleNavigation={bpToggleNavigation}
            >
              <Link to={getLink(section)} className="nav-link-sub">
                {section.name}
              </Link>
            </DropdownItem>
          ))}
        </Dropdown>
      )}
    </li>
  )
}

NavItem.propTypes = {
  isInverted: PropTypes.bool,
  sections: PropTypes.array,
  linkTo: PropTypes.string.isRequired,
  updateParentState: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
  bpToggleNavigation: PropTypes.string,
}

export default NavItem
