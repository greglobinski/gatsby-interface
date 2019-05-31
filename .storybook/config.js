import React from "react"
import { configure, addDecorator } from "@storybook/react"
import { withInfo } from "@storybook/addon-info"
import { withKnobs } from "@storybook/addon-knobs"
import { withConsole } from "@storybook/addon-console"
import { withA11y } from "@storybook/addon-a11y"
import "@storybook/addon-console"

if (process.env.NODE_ENV === "test") {
  require(`babel-plugin-require-context-hook/register`)()
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ""

// add decorators
addDecorator(
  withInfo({
    inline: false,
    header: true,
  })
)

addDecorator(withKnobs)

const Space = storyFn => (
  <div
    style={{
      margin: "30px 0",
      display: "flex",
      minHeight: "68vh",
      justifyContent: "center",
      alignItems: "center",
      padding: "10vh 20vh",
    }}
  >
    {storyFn()}
  </div>
)
addDecorator(Space)

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

addDecorator(withA11y)

const req = require.context("../__stories__", true, /\.stories\.js$/)

require("../__stories__/Welcome.stories")

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
