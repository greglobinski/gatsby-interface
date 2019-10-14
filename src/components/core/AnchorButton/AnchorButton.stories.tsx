/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf, addParameters } from "@storybook/react"

import README_MAIN from "./README_MAIN.md"
import README_ICONS from "../Button/README_ICONS.md"
import customStyling from "../Button/README_customStyling.md"
import AnchorButton, { AnchorButtonProps } from "./AnchorButton"
import {
  showcaseVariants,
  showcaseSizes,
  showcaseTones,
  showcaseCustomStyles,
  showcaseIcons,
} from "../Button/utils/storybook-styles"

storiesOf(`core/AnchorButton`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README_MAIN,
      includePropTables: [AnchorButton],
    },
  })
  .add(...showcaseVariants(AnchorButton, {}))
  .add(...showcaseSizes(AnchorButton, {}))
  .add(...showcaseTones(AnchorButton, {}))
  .add(...showcaseCustomStyles(AnchorButton, {}, customStyling))
  .add(...showcaseIcons(AnchorButton, {}, README_ICONS))
