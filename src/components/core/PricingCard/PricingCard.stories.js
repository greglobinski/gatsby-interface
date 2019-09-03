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
import enterprisePlanPic from "./assets/enterprisePlan.svg"

const plansA = [
  {
    name: `Free`,
    icon: freePlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 0,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      { text: `10 real-time edits/day` },
      { text: `nline documentation` },
    ],
  },
]

const plansB = [
  {
    name: `Enterprise`,
    icon: enterprisePlanPic,
    intro: `Custom packages designed for your company`,
    details: [
      { text: `Builds and Preview` },
      { text: `1000 real-time edits/day` },
      { text: `Online documentation` },
      { text: `Dedicated account manager` },
    ],
    cta: {
      to: `/`,
      label: `Contact sales`,
    },
  },
]

const plansC = [
  {
    name: `Free`,
    icon: freePlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 0,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `10 real-time edits/day`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
  },
  {
    name: `Professional`,
    icon: professionalPlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 42,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `100 real-time edits/day`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
  },
  {
    name: `Bussines`,
    icon: businessPlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      MONTHLY: 722,
      YEARLY: 0,
    },
    details: [
      { text: `Builds and Preview` },
      {
        text: `1000 real-time edits/day`,
        tip: `<p>Definition of real time edit</p>`,
      },
      { text: `Online documentation` },
    ],
  },
]

storiesOf(`core/PricingCard`, module)
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
  .add(`multiplan card`, () => (
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
