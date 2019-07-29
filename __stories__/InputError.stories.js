import React from "react"

import { storiesOf } from "@storybook/react"

import { InputError } from "../src/components/InputError"

storiesOf(`InputError`, module).add(
  `Default`,
  () => <InputError>Error text</InputError>,
  {
    info: {
      text: `
            InputError components is used to show an error message for any input.
        `,
    },
  }
)
