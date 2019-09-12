/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import Carousel from "./Carousel"
import README from "./README.md"

const Item = ({ children }) => (
  <div
    css={{
      textAlign: `center`,
    }}
  >
    {children}
  </div>
)

storiesOf(`core/Carousel`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`default shape`, () => (
    <StoryUtils.Container>
      <Carousel>
        <Item>Content A</Item>
        <Item>Content B</Item>
        <Item>Content C</Item>
      </Carousel>
    </StoryUtils.Container>
  ))
  .add(`with buttons`, () => (
    <StoryUtils.Container>
      <Carousel hideButtons={false}>
        <Item>Content A</Item>
        <Item>Content B</Item>
        <Item>Content C</Item>
      </Carousel>
    </StoryUtils.Container>
  ))
  .add(`without nav`, () => (
    <StoryUtils.Container>
      <Carousel hideButtons={false} hideNav={true}>
        <Item>Content A</Item>
        <Item>Content B</Item>
        <Item>Content C</Item>
      </Carousel>
    </StoryUtils.Container>
  ))
