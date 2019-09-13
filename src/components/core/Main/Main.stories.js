/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { MdArrowForward } from "react-icons/md"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import Main from "./Main"
import README from "./README.md"

storiesOf(`core/Main`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`variants`, () => (
    <Main>
      <Main.Positioner>
        <StoryUtils.Content
          hint=" content inside PageMain.Positioner  variant=`STANDARD` "
          css={{ background: `#eee`, height: `8rem` }}
        />
      </Main.Positioner>
      <Main.Positioner variant="BROADEN">
        <StoryUtils.Content
          hint="content inside PageMain.Positioner  variant=`BROADEN` "
          css={{ background: `#eee`, height: `16rem` }}
        />
      </Main.Positioner>
      <Main.Positioner>
        <StoryUtils.Content
          hint=" content inside PageMain.Positioner  variant=`STANDARD` "
          css={{ background: `#eee`, height: `18rem` }}
        />
      </Main.Positioner>
    </Main>
  ))
