import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean } from "@storybook/addon-knobs"

import { TextInput } from "../src/components/TextInput"
import { radios } from "@storybook/addon-knobs"

const variants = {
  Default: `DEFAULT`,
  Search: `SEARCH`,
}

storiesOf(`TextInput`, module).add(
  `Default`,
  () => (
    <TextInput
      variant={radios(`variant`, variants, `DEFAULT`)}
      placeholder={text(`Placeholder`, `Placeholder text`)}
      type="input"
      disabled={boolean(`Disabled`, false)}
    />
  ),
  {
    info: {
      text: `
          Text inputs allow the user to input data.
        `,
    },
  }
)
