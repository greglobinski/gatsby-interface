import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import { Textarea } from "../src/components/Textarea"

storiesOf(`Textarea`, module).add(
  `Default`,
  () => (
    <Textarea
      placeholder={text(`Placeholder`, `Placeholder text`)}
      disabled={boolean(`Disabled`, false)}
    />
  ),
  {
    info: {
      text: `
          Text area allow the user to input data that exceeds a text input.
        `,
    },
  }
)
