/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import Avatar from "./Avatar"
import avatar from "./assets/20190908_164140.jpg"

storiesOf(`core/Avatar`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`sizes`, () => (
    <StoryUtils.Container>
      <StoryUtils.Stack>
        <Avatar src={avatar} size="L" />
        <Avatar src={avatar} size="M" />
        <Avatar src={avatar} size="S" />
      </StoryUtils.Stack>
    </StoryUtils.Container>
  ))
