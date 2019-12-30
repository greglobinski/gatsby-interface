/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../utils/storybook"
import README from "./README.md"
import Stack from "./Stack"

const Item: React.FC<{}> = ({ children }) => (
  <div
    css={{
      border: `1px solid #ddd`,
      padding: `0.5rem 1rem`,
    }}
  >
    {children}
  </div>
)

storiesOf(`Stack`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`CheckboxGroupField`, () => {
    return (
      <StoryUtils.Container>
        <Stack gap={0}>
          <Item>What is Lorem Ipsum?</Item>
          <Item>
            {" "}
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged.
          </Item>
          <Item>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </Item>
        </Stack>
      </StoryUtils.Container>
    )
  })
