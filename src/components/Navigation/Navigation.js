/** @jsx jsx */
import { jsx } from "@emotion/core"
import { Fragment, useState } from "react"
import PropTypes from "prop-types"
import hex2rgba from "hex2rgba"
import { Global, css } from "@emotion/core"

import { Link } from "gatsby"
import { Button } from "../core/Button"
import { MdArrowForward } from "react-icons/md"

import Dropdown from "./Dropdown"
import { getNavItems, getLink } from "../../utils/helpers"
import {
  dimensions,
  colors,
  palette,
  spaces,
  fontSizes,
  fontFamilies,
  transition,
  mediaQueries,
} from "../../utils/presets"
import {
  newLandingPagesEnabled,
  newOnboardingEnabled,
} from "../../modules/env/constants"

const navStyles = {
  default: {
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
  },
  mobile: {
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
}

const navListStyles = {
  default: {
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
  },
  mobile: {
    width: `auto`,
    padding: 0,
    display: `flex`,
    position: `static`,
    flexGrow: 0,
  },
}

const Navigation = ({
  isInverted,
  isMobileNavOpen,
  mobileNavMediaQuery,
  navItems: rawNavItems,
}) => {
  const updateStateFromNav = props => {
    this.setState({
      ...props,
    })
  }

  const navItems = getNavItems(rawNavItems)

  // @TODO: rm hacky global CSS for animation
  // const slideFade = keyframes`
  // `

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

      <nav
        css={{
          display: isMobileNavOpen ? `block` : `none`,
          ...navStyles.default,
          [mobileNavMediaQuery]: {
            ...navStyles.mobile,
          },
        }}
      >
        <ul
          data-cy="gatsby-nav"
          id="gatsby-nav"
          css={{
            ...navListStyles.default,
            [mobileNavMediaQuery]: {
              ...navListStyles.mobile,
            },
          }}
        >
          {/* @TODO This logic shouldnt live here */}
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
                linkTo = newOnboardingEnabled ? `get-started` : `start-project/`
                anchorText = `Start Builing a Site`
              }

              return (
                <Navigation.Item
                  linkTo={linkTo}
                  isInverted={isInverted}
                  sections={navItem.sections}
                  updateParentState={updateStateFromNav.bind(this)}
                  key={i}
                  isLast={true}
                  mobileNavMediaQuery={mobileNavMediaQuery}
                >
                  {anchorText} {icon && <MdArrowForward />}
                </Navigation.Item>
              )
            }

            return (
              <Navigation.Item
                linkTo={getLink(navItem)}
                isInverted={isInverted}
                sections={navItem.sections}
                updateParentState={updateStateFromNav.bind(this)}
                key={i}
                mobileNavMediaQuery={mobileNavMediaQuery}
              >
                {navItem.name}
              </Navigation.Item>
            )
          })}
        </ul>
      </nav>
    </Fragment>
  )
}

Navigation.propTypes = {
  mobileNavMediaQuery: PropTypes.string,
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
}

const navItemStyles = {
  default: {},
  mobile: ({ isLast, isInverted }) => {
    return {
      alignItems: isLast ? `center` : ``,
      textAlign: `left`,
      display: isLast ? `flex` : `inline-block`,
      margin: 0,
      padding: `0 ${spaces[`s`]}`,
      paddingRight: isLast ? 0 : false,
      color: isInverted ? `rgba(255,255,255,0.8)` : false,
      position: `relative`,
      WebkitFontSmoothing: isInverted ? `antialiased` : false,
      // @TODO: Rm class. This targets the `Dropdown` <ul>
      ":hover .child": {
        display: `inline-block`,
      },
    }
  },
}
const navItemLinkStyles = {
  default: {
    textDecoration: `none`,
    color: colors.white,
    fontFamily: fontFamilies.headerFontFamily,
    fontWeight: `normal`,
    transition: `opacity ${transition.speed.default}`,
    WebkitFontSmoothing: `antialiased`,
    fontSize: fontSizes[`2xl`],
    // @TODO: Rm class. This targets...
    "&.nav-item-active": {
      color: colors.accent,
      // @TODO: Rm class. This targets
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
  },
  mobile: {
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
    // @TODO: Rm class. This targets...
    "&.nav-item-active": {
      color: colors.gatsby,
    },
    // @TODO: Rm class. This targets...
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
}

const navItemButtonStyles = {
  default: ({ isInverted }) => {
    return {
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
    }
  },
}

Navigation.Item = ({
  sections,
  isInverted,
  linkTo,
  children,
  isLast,
  mobileNavMediaQuery,
  updateParentState,
}) => {
  const [isMobileNavOpen] = useState(false)

  return (
    <li
      data-cy={children}
      css={{
        [mobileNavMediaQuery]: {
          ...navItemStyles.mobile({ isLast, isInverted }),
        },
      }}
    >
      {isLast &&
      (linkTo.includes(`start-project`) || linkTo.includes(`get-started`)) ? (
        <Button
          to={linkTo}
          size={`M`}
          css={{
            ...navItemButtonStyles.default({ isInverted }),
          }}
        >
          {children}
        </Button>
      ) : (
        <Link
          to={linkTo}
          css={{
            ...navItemLinkStyles.default,
            [mobileNavMediaQuery]: {
              ...navItemLinkStyles.mobile,
            },
          }}
          // @TODO: Rm className.
          className={isInverted ? `nav-item is-inverted` : `nav-item`}
          // @TODO: Rm className.
          activeClassName="nav-item-active"
          onClick={() => updateParentState(!isMobileNavOpen)}
        >
          <span>{children}</span>
        </Link>
      )}
      {sections && sections.length > 0 && (
        <Dropdown mobileNavMediaQuery={mobileNavMediaQuery} items={sections} />
      )}
    </li>
  )
}

Navigation.Item.propTypes = {
  isInverted: PropTypes.bool,
  sections: PropTypes.array,
  linkTo: PropTypes.string.isRequired,
  updateParentState: PropTypes.func.isRequired,
  isLast: PropTypes.bool,
  mobileNavMediaQuery: PropTypes.string,
}

export default Navigation
