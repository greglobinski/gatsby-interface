/** @jsx jsx */
import { jsx, css } from "@emotion/core"
import React, { useState } from "react"

import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../../utils/storybook"

import BaseNavigation from "./BaseNavigation"

const navItems = [
  {
    name: `About`,
    linkTo: `/about`,
    subItems: [
      {
        name: `Resume`,
        linkTo: `/about/resume`,
      },
      {
        name: `History`,
        linkTo: `/about/history`,
      },
    ],
  },
  {
    name: `Contact`,
    linkTo: `/Contact`,
  },
]

storiesOf(`BaseNavigation`, module).add(`usage example`, () => (
  <StoryUtils.Container>
    <BaseNavigation navItems={navItems} />
    {/* <BaseNavigation /> */}
  </StoryUtils.Container>
))
