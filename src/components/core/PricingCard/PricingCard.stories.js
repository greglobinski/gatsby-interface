/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { addDecorator } from "@storybook/react"
import { withA11y } from "@storybook/addon-a11y"
import { storiesOf } from "@storybook/react"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import PricingCard from "./PricingCard"

import freePlanPic from "./assets/freePlan.svg"
import professionalPlanPic from "./assets/professionalPlan.svg"
import businessPlanPic from "./assets/businessPlan.svg"

const plansA = [
  {
    name: `Free`,
    icon: freePlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      monthly: 0,
      yearly: 0,
    },
    details: `
                <ul>
              <li>Builds and Preview</li>
              <li>10 real-time edits/day</li>
              <li>Online documentation</li>
            </ul>
            `,
  },
]

const plansB = [
  {
    name: `Enterprice`,
    icon: freePlanPic,
    intro: `Custom packages designed for your company`,
    details: `
                <ul>
              <li>Builds and Preview</li>
              <li>10 real-time edits/day</li>
              <li>Online documentation</li>
              <li>Dedicated Slack channel</li>
              <li>Uptime and response SLA</li>
              <li>Onboarding traning</li>
            </ul>
            `,
  },
]

const plansC = [
  {
    name: `Free`,
    icon: freePlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      monthly: 0,
      yearly: 0,
    },
    details: `
                <ul>
              <li>Builds and Preview</li>
              <li>10 real-time edits/day</li>
              <li>Online documentation</li>
            </ul>
            `,
  },
  {
    name: `Professional`,
    icon: professionalPlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      monthly: 42,
      yearly: 0,
    },
    details: `
                <ul>
              <li>Builds and Preview</li>
              <li>20 real-time edits/day</li>
              <li>Online documentation</li>
            </ul>
            `,
  },
  {
    name: `Bussines`,
    icon: businessPlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      monthly: 722,
      yearly: 0,
    },
    details: `
                <ul>
              <li>Builds and Preview</li>
              <li>100 real-time edits/day</li>
              <li>Online documentation</li>
               <li>Dedicated account manager</li>
            </ul>
            `,
  },
]

// addDecorator(withA11y({ disable: true }))

storiesOf(`core/PlansCard`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    a11y: {
      disable: true,
    },
  })
  .add(`variants`, () => (
    <div
      css={{
        width: `660px`,
        maxWidth: `94%`,
        margin: `0 auto`,
      }}
    >
      <StoryUtils.Container>
        <div
          css={{
            display: `grid`,
            gridGap: `2rem`,
            gridTemplateColumns: `1fr 1fr`,
          }}
        >
          <PricingCard plans={plansA} />
          <PricingCard plans={plansB} variant={`SECONDARY`} />
        </div>
      </StoryUtils.Container>
    </div>
  ))
  .add(`multi plans card`, () => (
    <div
      css={{
        width: `880px`,
        maxWidth: `94%`,
        margin: `0 auto`,
      }}
    >
      <StoryUtils.Container>
        <PricingCard
          plans={plansC}
          cta={{
            to: `/`,
            label: `Get started for free`,
            comment: `No commitment, no credit card required. All you need is a Github account.`,
          }}
        />
      </StoryUtils.Container>
    </div>
  ))
