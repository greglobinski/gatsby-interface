/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import cardStyles from "../../../theme/styles/card"
import colors from "../../../theme/colors"
import fonts from "../../../theme/fonts"
import fontSizes from "../../../theme/fontSizes"
import { spaces, breakpoints } from "../../../utils/presets"
import { Heading } from "../Heading"
import { Button } from "../Button"
import checkIcon from "./assets/checkIcon.svg"

function PlansCard({ children, plans, cta, ...rest }) {
  const itemsNumber = plans.length

  return (
    <PlansCard.Frame {...rest}>
      {plans && (
        <PlansCard.Plans>
          {plans.map((plan, idx) => (
            <PlansCard.Plan
              key={plan.name}
              idx={idx}
              plan={plan}
              itemsNumber={itemsNumber}
            >
              <PlansCard.Icon plan={plan} />
              <PlansCard.Heading title={plan.name} idx={idx} />
              <PlansCard.Intro html={plan.intro} />
              <PlansCard.PriceTag price={plan.price} />
              <PlansCard.Details html={plan.details} />
            </PlansCard.Plan>
          ))}
        </PlansCard.Plans>
      )}
      {cta && (
        <PlansCard.UnifiedCta
          label={cta.label}
          to={cta.to}
          comment={cta.comment}
        />
      )}
      {children}
    </PlansCard.Frame>
  )
}

PlansCard.propTypes = {
  plans: PropTypes.array.isRequired,
}

PlansCard.Frame = ({ children, ...rest }) => (
  <div
    css={{
      boxShadow: `0px 2px 4px rgba(46, 41, 51, 0.08), 0px 4px 8px rgba(71, 63, 79, 0.16)`,
      display: `flex`,
      position: `relative`,
      width: `100%`,
      flexDirection: `column`,
      paddingBottom: spaces.l,

      [`@media(min-width: ${breakpoints.tablet}px)`]: {},
    }}
    {...rest}
  >
    {children}
  </div>
)

PlansCard.Plans = ({ children, ...rest }) => (
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

PlansCard.Plan = ({ idx, children, plan, itemsNumber, ...rest }) => (
  <div
    css={{
      backgroundColor: colors.white,
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

PlansCard.Heading = ({ title, idx, ...rest }) => (
  <Heading
    css={{
      color: colors.purple[40 + idx * 10],
      fontSize: fontSizes[4],
    }}
  >
    {title}
  </Heading>
)

PlansCard.Icon = ({ plan, ...rest }) => (
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

PlansCard.Intro = ({ html, ...rest }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    css={{
      textAlign: `center`,
      fontFamily: fonts.system.join(`,`),
      marginTop: spaces.m,
      fontSize: fontSizes[1],
      color: colors.grey[60],
      lineHeight: 1.4,
    }}
  />
)

PlansCard.PriceTag = ({ children, price }) => {
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

PlansCard.Details = ({ html, ...rest }) => (
  <div
    dangerouslySetInnerHTML={{ __html: html }}
    css={{
      fontSize: fontSizes[1],
      color: colors.grey[50],
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
          background: `url("${checkIcon}")  center center no-repeat`,
          transform: `translateX(-2em)`,
        },
      },
    }}
  />
)

PlansCard.UnifiedCta = ({ to, label, comment, children, ...rest }) => (
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

export default PlansCard
