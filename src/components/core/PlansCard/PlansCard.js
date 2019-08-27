/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { Fragment } from "react"
import PropTypes from "prop-types"

import cardStyles from "../../../theme/styles/card"
import { spaces } from "../../../utils/presets"
import { Heading } from "../Heading"

function PlansCard({ children, plans, ...rest }) {
  return (
    <div
      css={{
        display: `flex`,
      }}
      {...rest}
    >
      {plans.map(plan => (
          <div
            css={{
              ...cardStyles.frame,
              padding: `${spaces.xl}`,
              display: `flex`,
              flexDirection: `column`,
              alignItems: `center`,
              position: `relative`,

              [`&:not(:first-child)`]: {
                "&:before": {
                  content: `""`,
                  position: `absolute`,
                  width: `1px`,
                  height: `100%`,
                  background: `red`,
                  left: 0,
                  bottom: 0,
                },
              },
            }}
          >
            <img src={plan.picture} alt="" />
            <Heading>{plan.name}</Heading>
            <p css={{ textAlign: `center` }}>{plan.intro}</p>
            <div>
              <span>$</span>
              <strong>{plan.price.monthly}</strong>
              <span>/month</span>
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: plan.details }}
              css={{
                width: `100%`,
                ul: {
                  margin: 0,
                  padding: 0,
                },
              }}
            />
          </div>
        ))}
    </div>
  )
}

PlansCard.propTypes = {
  plans: PropTypes.array.isRequired,
}

export default PlansCard
