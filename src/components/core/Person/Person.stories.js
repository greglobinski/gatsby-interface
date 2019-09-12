/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import Person from "./Person"
import person from "./assets/20190908_164140.jpg"

storiesOf(`core/Person`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`variants`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Person
          photo={{ src: person }}
          name="Greg Lobinski"
          position="front-end developer at Gatsby"
        />
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
