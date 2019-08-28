/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import cardStyles from "../../../theme/styles/card"
import colors from "../../../theme/colors"
import fonts from "../../../theme/fonts"
import fontSizes from "../../../theme/fontSizes"
import { spaces, breakpoints, radius } from "../../../utils/presets"
import { Heading } from "../Heading"
import { Button } from "../Button"
import checkIconGray from "./assets/checkIconGray.svg"
import checkIconPurple from "./assets/checkIconPurple.svg"

const VARIANTS = [`PRIMARY`, `SECONDARY`]

function PricingCard({ children, plans, cta, variant = `PRIMARY`, ...rest }) {
  const itemsNumber = plans.length

  return (
    <PricingCard.Frame variant={variant} {...rest}>
      {plans && (
        <PricingCard.Plans>
          {plans.map((plan, idx) => (
            <PricingCard.Plan
              key={plan.name}
              idx={idx}
              plan={plan}
              itemsNumber={itemsNumber}
            >
              <PricingCard.Icon plan={plan} />
              <PricingCard.Heading
                title={plan.name}
                idx={idx}
                variant={variant}
              />
              <PricingCard.Intro html={plan.intro} variant={variant} />
              <PricingCard.PriceTag price={plan.price} variant={variant} />
              <PricingCard.Details html={plan.details} variant={variant} />
              <PricingCard.Cta cta={plan.cta} />
            </PricingCard.Plan>
          ))}
        </PricingCard.Plans>
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
      paddingBottom: spaces.l,
      borderRadius: radius.large,

      [`@media(min-width: ${breakpoints.tablet}px)`]: {},
    }}
    {...rest}
  >
    {children}
  </div>
)

PricingCard.Plans = ({ children, ...rest }) => (
  <div
    css={{
      display: `flex`,
      position: `relative`,
      width: `100%`,
      overflow: `hidden`,
    }}
    {...rest}
  >
    {children}
  </div>
)

PricingCard.Plan = ({ idx, children, plan, itemsNumber, ...rest }) => (
  <div
    css={{
      padding: `${spaces.l} ${spaces.xl} 0`,
      display: `flex`,
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

PricingCard.Heading = ({ title, variant, idx, ...rest }) => (
  <Heading
    css={{
      color:
        variant === `SECONDARY` ? colors.white : colors.purple[40 + idx * 10],
      fontSize: fontSizes[4],
    }}
  >
    {title}
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
    }}
  />
)

PricingCard.PriceTag = ({ children, price }) => {
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
        {price.monthly}
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
        /month
      </span>
    </div>
  )
}

PricingCard.Details = ({ html, variant, ...rest }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    css={{
      fontSize: fontSizes[1],
      color: variant === `SECONDARY` ? colors.purple[30] : colors.grey[50],
      width: `100%`,
      marginTop: spaces.l,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,

      ul: {
        listStyle: `none`,
        padding: 0,
        margin: 0,
        width: `auto`,
      },

      li: {
        margin: `${spaces.xs} 0`,
        position: `relative`,
        paddingLeft: spaces.l,
        lineHeight: 1.3,

        [`&:before`]: {
          content: `""`,
          display: `inline-block`,
          position: `absolute`,
          width: `1.5em`,
          height: `1.5em`,
          marginRight: spaces.xs,
          background: `url("${
            variant === `SECONDARY` ? checkIconPurple : checkIconGray
          }")  center center no-repeat`,
          transform: `translate(-2em, -0.1em)`,
        },
      },
    }}
  />
)

PricingCard.Cta = ({ children, cta, ...rest }) => {
  if (!cta) {
    return null
  }

  const { label, to, comment } = cta

  return (
    <div
      css={{
        width: `100%`,
        marginTop: spaces[`2xl`],
        marginBottom: spaces.l,
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
        padding: `${spaces.l} ${spaces.l} ${spaces.xs}`,
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
