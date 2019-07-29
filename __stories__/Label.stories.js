import React from "react"

import { storiesOf } from "@storybook/react"
import { radios } from "@storybook/addon-knobs"

import { Label } from "../src/components/Label"

const variants = {
  Default: `DEFAULT`,
  Small: `SMALL`,
  Big: `BIG`,
}

storiesOf(`Label`, module).add(
  `Default`,
  () => (
    <Label variant={radios(`variant`, variants, `DEFAULT`)}>Label text</Label>
  ),
  {
    info: {
      text: `
          Labels describe and are associated with an input.
        `,
    },
  }
)
