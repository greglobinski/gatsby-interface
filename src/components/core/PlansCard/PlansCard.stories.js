/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import PlansCard from "./PlansCard"

import freePlanPic from "./assets/freePlan.svg"

const plans = [
  {
    name: `Free`,
    picture: freePlanPic,
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
    picture: freePlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      monthly: 49,
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
    name: `Bussines`,
    picture: freePlanPic,
    intro: `For personal projects and single-purpose sites`,
    price: {
      monthly: 849,
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

storiesOf(`core/PlansCard`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`variants`, () => (
    <StoryUtils.Container>
      <PlansCard plans={plans} />
    </StoryUtils.Container>
  ))
