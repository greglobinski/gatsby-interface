/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import Heading from "./Heading"

storiesOf(`core/Heading`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`redered 'as'`, () => (
    <StoryUtils.Stack>
      <Heading as={`h1`}>Heading rendered as &lt;h1&gt; tag</Heading>
      <Heading>
        Heading rendered as &lt;h2&gt; tag <StoryUtils.Default />
      </Heading>
      <Heading as={`h3`}>Heading rendered as &lt;h3&gt; tag</Heading>
      <Heading as={`h4`}>Heading rendered as &lt;h4&gt; tag</Heading>
      <Heading as={`h5`}>Heading rendered as &lt;h5&gt; tag</Heading>
    </StoryUtils.Stack>
  ))
  .add(`variants`, () => (
    <StoryUtils.Stack>
      <Heading>
        Heading variant - PRIMARY <StoryUtils.Default />
      </Heading>
      <Heading variant={`EMPHASIZED`}>Heading variant - EMPHESIZED</Heading>
      <Heading variant={`LIGHT`}>Heading variant - LIGHT</Heading>
    </StoryUtils.Stack>
  ))
  .add(`tones`, () => (
    <StoryUtils.Stack>
      <Heading tone={`NEUTRAL`}>
        Heading tone - NEUTRAL <StoryUtils.Default />
      </Heading>
      <Heading tone={`BRAND`}>Heading variant - BRAND</Heading>
      <Heading tone={`DANGER`}>Heading variant - DANGER</Heading>
      <Heading tone={`SUCCESS`}>Heading variant - SUCCESS</Heading>
    </StoryUtils.Stack>
  ))
