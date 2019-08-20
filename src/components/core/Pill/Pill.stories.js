/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../../utils/storybook"
import { Pill } from "./"

storiesOf(`core/Pill`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`variants`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Pill label="New" />
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
