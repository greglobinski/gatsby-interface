import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../utils/storybook"
import CopyButton from "./CopyButton"

storiesOf(`CopyButton`, module).add(`Default`, () => (
  <StoryUtils.Container>
    <CopyButton content="Hello world!" />
  </StoryUtils.Container>
))
