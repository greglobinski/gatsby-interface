/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"
import hex2rgba from "hex2rgba"
import { Global, css } from "@emotion/core"

import { MdArrowForward } from "react-icons/md"

import NavItem from "./Item"
import { getNavItems, getLink } from "../../utils/helpers"
import { dimensions, palette, spaces, mediaQueries } from "../../utils/presets"
import {
  newLandingPagesEnabled,
  newOnboardingEnabled,
} from "../../modules/env/constants"

class Navigation extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isMobileNavOpen: false,
    }
  }

  updateStateFromNav = props => {
    this.setState({
      ...props,
    })
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      isMobileNavOpen: nextProps.isMobileNavOpen,
    })
  }

  render() {
    const { isInverted, bpToggleNavigation } = this.props
    const navItems = getNavItems(this.props.navItems)

    return (
      <Fragment>
        <Global
          styles={css`
            @keyframes slideFade {
              0% {
                opacity: 0;
                transform: translate(-${spaces[`2m`]});
              }
              50% {
                opacity: 1;
              }
              100% {
                opacity: 1;
                transform: translate(0);
              }
            }
            .nav-open li {
              opacity: 0;
            }
            ${navItems
              .map(
                (navItem, i) =>
                  `.nav-open li:nth-child(${i + 1}) {
            animation: slideFade .2s .${1 + i * 10}s 1 forwards;
          }`
              )
              .join(``)}
          `}
        />

        <div
          css={{
            display: this.state.isMobileNavOpen ? `block` : `none`,
            position: `fixed`,
            overflowY: `auto`,
            WebkitOverflowScrolling: `touch`,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            margin: 0,
            background: hex2rgba(palette.purple[900], 0.975),
            padding: `${dimensions.siteHeader.heightLarge} ${spaces[`3xl`]} ${
              dimensions.siteHeader.heightLarge
            }`,
            alignItems: `center`,
            textAlign: `right`,
            [bpToggleNavigation]: {
              textAlign: `left`,
              display: `flex`,
              background: `none`,
              position: `static`,
              top: `auto`,
              left: `auto`,
              right: `auto`,
              bottom: `auto`,
              margin: 0,
              padding: 0,
              flexGrow: 0,
              marginLeft: `auto`,
              overflow: `visible`,
            },
          }}
        >
          <ul
            data-cy="gatsby-nav"
            id="gatsby-nav"
            css={{
              listStyle: `none`,
              margin: `0 0 0 auto`,
              padding: `0 ${spaces[`m`]}`,
              position: `relative`,
              zIndex: 1,
              margin: `0 auto`,
              width: `100%`,
              maxWidth: `${dimensions.layout.width}rem`,
              paddingLeft: spaces[`xl`],
              paddingRight: spaces[`xl`],
              [mediaQueries.tablet]: {
                paddingLeft: spaces[`xl`],
                paddingRight: spaces[`xl`],
              },
              [mediaQueries.phablet]: {
                width: `90%`,
              },
              [bpToggleNavigation]: {
                width: `auto`,
                padding: 0,
                display: `flex`,
                position: `static`,
                flexGrow: 0,
              },
            }}
          >
            {navItems.map((navItem, i) => {
              if (i + 1 >= navItems.length) {
                let linkTo
                let anchorText
                let icon

                if (newLandingPagesEnabled) {
                  linkTo = `get-started/`
                  anchorText = `Get Started for free`
                  icon = true
                } else {
                  linkTo = newOnboardingEnabled
                    ? `get-started`
                    : `start-project/`
                  anchorText = `Start Builing a Site`
                }

                return (
                  <NavItem
                    linkTo={linkTo}
                    isInverted={isInverted}
                    sections={navItem.sections}
                    updateParentState={this.updateStateFromNav.bind(this)}
                    key={i}
                    isLast={true}
                    bpToggleNavigation={bpToggleNavigation}
                  >
                    {anchorText} {icon && <MdArrowForward />}
                  </NavItem>
                )
              }

              return (
                <NavItem
                  linkTo={getLink(navItem)}
                  isInverted={isInverted}
                  sections={navItem.sections}
                  updateParentState={this.updateStateFromNav.bind(this)}
                  key={i}
                  bpToggleNavigation={bpToggleNavigation}
                >
                  {navItem.name}
                </NavItem>
              )
            })}
          </ul>
        </div>
      </Fragment>
    )
  }
}

Navigation.propTypes = {
  bpToggleNavigation: PropTypes.string,
  navItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      slug: PropTypes.string,
      parentPage: PropTypes.shape({
        name: PropTypes.string,
        slug: PropTypes.string,
      }),
    })
  ).isRequired,
  isMobileNavOpen: PropTypes.bool.isRequired,
  isInverted: PropTypes.bool,
  updateParentState: PropTypes.func,
}

export default Navigation
