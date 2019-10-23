/** @jsx jsx */
import { jsx, css } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { StoryUtils } from "../../utils/storybook"

import Navigation from "./Navigation"

const navItems = [
  {
    name: `Alpha`,
    linkTo: `/alpha`,
    subItems: [
      {
        name: `Delta`,
        linkTo: `/alpha/delta`,
      },
      {
        name: `Echo`,
        linkTo: `/alpha/echo`,
      },
    ],
  },
  {
    name: `Bravo`,
    linkTo: `/bravo`,
  },
  {
    name: `Charlie`,
    linkTo: `/charlie`,
  },
]

storiesOf(`Navigation`, module).add(`usage example`, () => (
  <StoryUtils.Container>
    <Navigation navItems={navItems} />
  </StoryUtils.Container>
))
