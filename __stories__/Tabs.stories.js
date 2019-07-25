import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import { Tabs, Tab, TabFigure, TabLabel } from "../src/components/Tabs"

storiesOf(`Tabs`, module)
  .add(
    `Tabs`,
    () => (
      <Tabs>
        <Tab className="active" onClick={action(`Tab 1 was clicked`)}>
          ActiveTab
        </Tab>
        <Tab to={`/`} onClick={action(`Tab 2 was clicked`)}>
          InactiveTab
        </Tab>
      </Tabs>
    ),
    {
      info: {
        text: `
      Tabs are used to navigate between views of the same context.  Tab components are for each item in the Tabs list.
    `,
      },
    }
  )
  .add(`Numbered tabs`, () => (
    <Tabs variant="NUMBERED">
      <Tab
        variant="NUMBERED"
        className="done"
        onClick={action(`NumberedTab 1 was clicked`)}
      >
        <TabFigure>1</TabFigure>
        <TabLabel>NumberedDoneTab</TabLabel>
      </Tab>
      <Tab
        variant="NUMBERED"
        className="active"
        onClick={action(`NumberedTab 2 was clicked`)}
      >
        <TabFigure>2</TabFigure>
        <TabLabel>NumberedActiveTab</TabLabel>
      </Tab>
    </Tabs>
  ))
