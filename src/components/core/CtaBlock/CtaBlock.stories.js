/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import CtaBlock from "./CtaBlock"
import README from "./README.md"

storiesOf(`core/CtaBlock`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`variants`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <CtaBlock
          title="This is a CtaBlock component"
          cta={{
            label: `Click me!`,
            to: `/`,
          }}
          note="And this is a CtaBlock' component's note"
        />
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
