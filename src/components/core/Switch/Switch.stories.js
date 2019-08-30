/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { useState } from "react"

import { storiesOf } from "@storybook/react"

import { StoryUtils } from "../../../utils/storybook"
import Switch from "./Switch"

storiesOf(`core/Switch`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`variants`, () => {
    const [interval, setInterval] = useState(`MONTHLY`)

    return (
      <StoryUtils.Container>
        <Switch
          fieldName="interval"
          fieldValue={interval}
          onChange={e => setInterval(e.target.value)}
          options={[
            { value: `MONTHLY`, label: `MONTHLY`, checked: true },
            { value: `YEARLY`, label: `YEARLY` },
          ]}
        />
      </StoryUtils.Container>
    )
  })
