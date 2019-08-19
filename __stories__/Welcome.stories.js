import React, { Fragment } from "react"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import Welcome from "../src/utils/storybook/Welcome"
import Readme from "./README.md"

storiesOf(`Introduction/`, module)
  .addParameters({
    options: {
      showPanel: false,
    },
    readme: {
      content: Readme,
    },
  })
  .add(`Welcome to Gatsby Inteface`, () => null)
