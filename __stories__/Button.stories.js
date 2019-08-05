import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { radios, boolean } from "@storybook/addon-knobs"

import { Button } from "../src/components/Button"

const sizes = {
  S: `S`,
  M: `M`,
  L: `L`,
  XL: `XL`,
}

const variants = {
  Default: `DEFAULT`,
  Primary: `PRIMARY`,
  Secondary: `SECONDARY`,
  Danger: `DANGER`,
  Danger_secondary: `SECONDARY_DANGER`,
  Success: `SUCCESS`,
  Text: `TEXT`,
}

storiesOf(`Button`, module).add(
  `Button`,
  () => (
    <Button
      onClick={action(`Button was clicked`)}
      size={radios(`size`, sizes, `L`)}
      variant={radios(`variant`, variants, `DEFAULT`)}
    >
      Button@@
    </Button>
  ),
  {
    info: {
      text: `
      Buttons are used to initialize an action.

      There are several kinds of buttons.

      Primary buttons should be used as a call to action on a page.

      Secondary buttons should be used for secondary actions on a page.

      Danger buttons should be used for a negative action.

      Success buttons should be for a positive action. 
    `,
    },
  }
)

storiesOf(`Button/in use`, module)
  .add(`Button as an external link`, () => (
    <Button
      variant={`PRIMARY`}
      href="https://gatsbyjs.com"
      onClick={action(`Button was clicked`)}
    >
      Button as &lt;a&gt; tag
    </Button>
  ))
  .add(`Button as a Gatsby Link`, () => (
    <Button variant={`PRIMARY`} to="/" onClick={action(`Button was clicked`)}>
      Button as &lt;Link&gt;
    </Button>
  ))
  .add(`Button with icon`, () => (
    <Button variant={`PRIMARY`} onClick={action(`Button was clicked`)}>
      ButtonWithIcon <MdArrowForward />
    </Button>
  ))
  .add(`Button in loading state`, () => (
    <Button
      variant={`PRIMARY`}
      onClick={action(`Button was clicked`)}
      loading={boolean(`loading`, true)}
    >
      Button
    </Button>
  ))
