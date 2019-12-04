/** @jsx jsx */
import { jsx } from "@emotion/core"
import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../utils/storybook"
import README from "./README.md"
import { Tooltip, TooltipPosition } from "."

const LONG_TEXT = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo officia recusandae nisi magni, dolore laboriosam maiores suscipit perspiciatis. Perspiciatis quod ipsum corporis officia necessitatibus, doloribus fuga culpa. Unde, molestiae repellendus.`

storiesOf(`Tooltip`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Default`, () => {
    const position: TooltipPosition = radios(
      "position",
      { top: "top", bottom: "bottom" },
      "top"
    )
    return (
      <StoryUtils.Container>
        <div>
          <Tooltip label="Lorem ipsum!" position={position}>
            {triggerProps => {
              return <button {...triggerProps}>Hover on me!</button>
            }}
          </Tooltip>
          {` `}
          <Tooltip label="This is a link to Google" position={position}>
            {triggerProps => {
              return (
                <a
                  {...triggerProps}
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  a link with a tooltip
                </a>
              )
            }}
          </Tooltip>
          {` `}
          <Tooltip label={LONG_TEXT} position={position}>
            {triggerProps => {
              return (
                <input
                  {...triggerProps}
                  type="text"
                  placeholder="An input with a really long tooltip"
                  size={30}
                />
              )
            }}
          </Tooltip>
        </div>
      </StoryUtils.Container>
    )
  })
