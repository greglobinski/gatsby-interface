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
  .add(`usage`, () => {
    const [subInterval, setSubInterval] = useState(`MONTHLY`)

    return (
      <StoryUtils.Container>
        <Switch
          fieldName="interval"
          fieldValue={subInterval}
          onChange={e => {
            setSubInterval(e.target.value)
          }}
          options={{
            primary: {
              value: `YEARLY`,
              label: `YEARLY`,
              ariaLabel: `YEARLY PAYMENT`,
            },
            secondary: { value: `MONTHLY`, label: `MONTHLY` },
          }}
        />
      </StoryUtils.Container>
    )
  })
