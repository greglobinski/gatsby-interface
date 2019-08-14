/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

// import {
//   BUTTON_SIZES,
//   BUTTON_TONES,
//   BUTTON_VARIANTS,
// } from "../../../utils/options"
import Heading from "./Heading"

// import README_MAIN from "./README_MAIN.md"
// import README_ICONS from "./README_ICONS.md"
// import README_CUSTOM_STYLING from "./README_CUSTOM_STYLING.md"
// import README_MANUAL_STYLING from "./README_MANUAL_STYLING.md"
// import README_LEGACY from "./README_LEGACY.md"
// import colors from "../../../theme/colors"
// import styles from "../../../theme/styles/button"
// import tones from "../../../theme/tones"

storiesOf(`Heading`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
  })
  .add(`variants`, () => (
    <div
      css={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        "& > button": { margin: `20px` },
      }}
    >
      <Heading>That's a Heading h2</Heading>
      <Heading as={`h1`}>That's a Heading h1</Heading>
    </div>
  ))
