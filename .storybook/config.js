import React, { Fragment } from "react"
import { Global, css } from "@emotion/core"
import {
  configure,
  addDecorator,
  addParameters,
  setAddon,
} from "@storybook/react"
import { addReadme } from "storybook-readme"

import { withKnobs } from "@storybook/addon-knobs"
import { withConsole } from "@storybook/addon-console"
import { withA11y } from "@storybook/addon-a11y"
import { action } from "@storybook/addon-actions"

import { fontFamilies } from "../src/utils/presets"
import "@storybook/addon-console"
import "storybook-chromatic"

if (process.env.NODE_ENV === "test") {
  require(`babel-plugin-require-context-hook/register`)()
}

global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

addParameters({
  options: {
    addonPanelInRight: true,
  },
  readme: {},
})

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""

// add decorators

addDecorator(addReadme)

addDecorator(withKnobs)

const withGlobal = storyFn => (
  <Fragment>
    <Global
      styles={css`
        *,
        *:before,
        *:after {
          box-sizing: border-box;
        }
        html {
          font-size: 1rem;
        }
        body {
          align-items: center;
          display: flex;
          font-family: ${fontFamilies.bodyFontFamily};
          height: 100vh;
          justify-content: center;
          margin: 0;
          width: 100%;
        }

        @media (min-width: 1200px) {
          html {
            font-size: 1.125rem;
          }
        }
      `}
    />
    {storyFn()}
  </Fragment>
)

addDecorator(withGlobal)

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addDecorator(withA11y)

//const req = require.context("../__stories__", true, /\.stories\.js$/)
const req = require.context("../src/components/../", true, /\.stories\.js$/)

require("../__stories__/Welcome.stories")

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

configure(loadStories, module)
