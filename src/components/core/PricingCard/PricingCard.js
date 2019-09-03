/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment, useState, useRef, createRef } from "react"
import PropTypes from "prop-types"

import { MdInfo, MdAirlineSeatLegroomExtra } from "react-icons/md"

import cardStyles from "../../../theme/styles/card"
import colors from "../../../theme/colors"
import fonts from "../../../theme/fonts"
import fontSizes from "../../../theme/fontSizes"
import { spaces, breakpoints, radius } from "../../../utils/presets"
import { Heading } from "../Heading"
import { Button } from "../Button"
import toggleTipIcon from "./assets/toggleTipIcon.svg"
import { capitalizeString } from "../../../utils/helpers/"
import { CheckIcon } from "../../icons"
import { ToggleTip } from "../ToggleTip"
console.log(fonts)

const VARIANTS = [`PRIMARY`, `SECONDARY`]

function PricingCard({
  children,
  plans,
  interval = `MONTHLY`,
  cta,
  variant = `PRIMARY`,
  ...rest
}) {
  const [visibleOnMobile, setVisibleOnMobile] = useState(0)
  const itemsNumber = plans.length

  return (
    <PricingCard.Frame variant={variant} {...rest}>
      {plans && (
        <Fragment>
          {itemsNumber > 1 && <PricingCard.Nav plans={plans} />}
          <PricingCard.Plans>
            {plans.map((plan, idx) => (
              <PricingCard.Plan
                key={plan.name}
                idx={idx}
                plan={plan}
                itemsNumber={itemsNumber}
                visibleOnMobile={visibleOnMobile === idx}
              >
                <PricingCard.Icon plan={plan} />
                <PricingCard.Heading
                  title={plan.name}
                  color={plan.color}
                  variant={variant}
                />
                <PricingCard.Intro html={plan.intro} variant={variant} />
                <PricingCard.PriceTag
                  price={plan.price}
                  variant={variant}
                  interval={interval}
                />
                <PricingCard.Details details={plan.details} variant={variant} />
                <PricingCard.Cta cta={plan.cta} />
              </PricingCard.Plan>
            ))}
          </PricingCard.Plans>
        </Fragment>
      )}
      {cta && <PricingCard.UnifiedCta cta={cta} />}
      {children}
    </PricingCard.Frame>
  )
}

PricingCard.propTypes = {
  plans: PropTypes.array.isRequired,
  variant: PropTypes.oneOf(VARIANTS),
}

PricingCard.Frame = ({ variant, children, ...rest }) => (
  <div
    css={{
      boxShadow: `0px 2px 4px rgba(46, 41, 51, 0.08), 0px 4px 8px rgba(71, 63, 79, 0.16)`,
      backgroundColor:
        variant === `SECONDARY` ? colors.purple[90] : colors.white,
      display: `flex`,
      position: `relative`,
      width: `100%`,
      flexDirection: `column`,
      borderRadius: radius.large,

      [`@media(min-width: ${breakpoints.tablet}px)`]: {},
    }}
    {...rest}
  >
    {children}
  </div>
)

PricingCard.Nav = ({ plans, ...rest }) => (
  <nav
    css={{
      display: `flex`,
      width: `100%`,
      justifyContent: `space-around`,
      borderBottom: `1px solid ${colors.standardLine}`,

      [`@media(min-width: ${breakpoints.tablet}px)`]: {
        display: `none`,
      },
    }}
  >
    {plans.map((plan, idx) => (
        <button
          css={{
            background: `transparent`,
            border: `none`,
            fontFamily: fonts.header.join(`,`),
            fontSize: fontSizes[2],
            color: colors.grey[70],
            padding: `${spaces.m} ${spaces.s} ${spaces.s}`,
          }}
        >
          {capitalizeString({ str: plan.name })}
        </button>
      ))}
  </nav>
)

PricingCard.Plans = ({ children, ...rest }) => (
  <div
    css={{
      display: `flex`,
      position: `relative`,
      width: `100%`,
      overflow: `hidden`,
      height: `100%`,
    }}
    {...rest}
  >
    {children}
  </div>
)

PricingCard.Plan = ({
  idx,
  visibleOnMobile,
  children,
  plan,
  itemsNumber,
  ...rest
}) => (
  <div
    css={{
      padding: `${spaces.l} ${spaces.l} 0 `,
      display: visibleOnMobile ? `flex` : `none`,
      flexDirection: `column`,
      alignItems: `center`,
      flexShrink: 0,
      width: `100%`,

      [`&:not(:first-child)`]: {
        borderLeft: `1px solid ${colors.standardLine}`,
      },

      [`@media(min-width: ${breakpoints.tablet}px)`]: {
        flexShrink: 1,
        flexBasis: `calc(100% / ${itemsNumber})`,
      },
    }}
    {...rest}
  >
    {children}
  </div>
)

PricingCard.Heading = ({ title, variant, color, ...rest }) => (
  <Heading
    css={{
      color: color
        ? color
        : variant === `SECONDARY`
        ? colors.white
        : colors.purple[40],
      fontSize: fontSizes[4],
    }}
  >
    {capitalizeString({ str: title })}
  </Heading>
)

PricingCard.Icon = ({ plan, ...rest }) => (
  <div
    css={{
      alignItems: `center`,
      display: `flex`,
      height: `50px`,
      justifyContent: `center`,
      marginBottom: spaces.xs,
      width: `50px`,
    }}
    {...rest}
  >
    <img src={plan.icon} alt={plan.name} css={{ margin: 0 }} />
  </div>
)

PricingCard.Intro = ({ html, variant, ...rest }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    css={{
      textAlign: `center`,
      fontFamily: fonts.system.join(`,`),
      marginTop: spaces.m,
      fontSize: fontSizes[1],
      color: variant === `SECONDARY` ? colors.purple[30] : colors.grey[60],
      lineHeight: 1.4,

      p: {
        margin: 0,
      },
    }}
  />
)

PricingCard.PriceTag = ({ children, price, interval }) => {
  if (!price) {
    return null
  }

  return (
    <div
      css={{
        fontFamily: fonts.header.join(`,`),
        marginTop: spaces.l,
        lineHeight: 1,
      }}
    >
      <span
        css={{
          color: colors.grey[50],
          fontSize: fontSizes[2],
          display: `inline-block`,
          transform: `translate(-.1rem, -.7rem)`,
        }}
      >
        $
      </span>
      <strong
        css={{
          fontSize: fontSizes[8],
        }}
      >
        {price[interval]}
      </strong>

      <span
        css={{
          fontFamily: fonts.system.join(`,`),
          color: colors.grey[50],
          fontSize: fontSizes[0],
          display: `inline-block`,
          transform: `translateX(.2rem)`,
        }}
      >
        / month
      </span>
    </div>
  )
}

PricingCard.Details = ({ details, variant, ...rest }) => {
  const [tipVisible, setTipVisible] = useState(false)
  // const detailsRef = useRef(details.map(() => createRef()))

  const showTip = e => {
    if (
      e.type === `click` ||
      (e.type === `keydown` && (e.keyCode === 32 || e.keyCode === 13))
    )
      setTipVisible(true)
  }
  return (
    details && (
      <div
        css={{
          fontSize: fontSizes[1],
          color: variant === `SECONDARY` ? colors.purple[30] : colors.grey[50],
          width: `100%`,
          marginTop: spaces.l,
          display: `flex`,
          flexDirection: `column`,
          alignItems: `center`,
        }}
      >
        <ul
          css={{
            listStyle: `none`,
            padding: 0,
            margin: 0,
            width: `auto`,
          }}
        >
          {details.map((item, idx) => (
            <li
              key={`detail${idx}`}
              css={{
                display: `flex`,
                margin: `${spaces.xs} 0`,
                position: `relative`,
                lineHeight: 1.3,
              }}
            >
              <CheckIcon
                css={{
                  width: `1.5em`,
                  height: `1.5em`,
                  fill:
                    variant === `SECONDARY`
                      ? colors.purple[50]
                      : colors.grey[30],
                  marginRight: spaces.xs,
                  flexShrink: 0,
                  flexGrow: 0,
                  transform: `translateY(-.2em)`,
                }}
              />
              <div
                dangerouslySetInnerHTML={{ __html: item.text }}
                css={{
                  position: `relative`,
                  outline: `none`,
                  p: {
                    display: `inline`,
                  },
                }}
              />
              {item.tip && (
                <ToggleTip
                  tip={item.tip}
                  customCss={{ marginLeft: spaces.xs }}
                />
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  )
}

PricingCard.Cta = ({ children, cta, ...rest }) => {
  if (!cta) {
    return null
  }

  const { label, to, comment } = cta

  return (
    <div
      css={{
        width: `100%`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `flex-end`,
        marginTop: spaces[`2xl`],
        flexGrow: 1,
        paddingBottom: spaces[`4xl`],
      }}
      {...rest}
    >
      {label && to && (
        <Button to={to} css={{ width: `100%`, background: colors.purple[50] }}>
          {label}
        </Button>
      )}
      {children}
    </div>
  )
}

PricingCard.UnifiedCta = ({ cta, children, ...rest }) => {
  if (!cta) {
    return null
  }

  const { label, to, comment } = cta

  return (
    <div
      css={{
        flexDirection: `column`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        padding: `${spaces.xl} ${spaces.l} ${spaces.l}`,
      }}
      {...rest}
    >
      {label && to && (
        <Button to={to} tone={`SUCCESS`} css={{ minWidth: `45%` }}>
          {label}
        </Button>
      )}
      {comment && (
        <p
          css={{
            fontFamily: fonts.header.join(`,`),
            color: colors.grey[50],
            fontSize: fontSizes[2],
            margin: 0,
            marginTop: spaces.xs,
            textAlign: `center`,
          }}
        >
          {comment}
        </p>
      )}
      {children}
    </div>
  )
}

export default PricingCard
