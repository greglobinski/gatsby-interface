import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean, radios } from "@storybook/addon-knobs"

import Radio from "./Radio"
import { StoryUtils } from "../../utils/storybook"

storiesOf(`Radio`, module).add(`Default`, () => (
  <StoryUtils.Container>
    <Radio label="lorem ipsum" selectionStyle="emphasized" />
  </StoryUtils.Container>
))
