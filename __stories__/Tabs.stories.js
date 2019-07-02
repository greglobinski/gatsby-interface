import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"

import {
  TabsSkeleton,
  BaseTabs,
  Tabs,
  TabSkeleton,
  BaseTab,
  Tab,
  NumberedTab,
  NumberedTabs,
  NumberedTabFigure,
  NumberedTabLabel,
} from "../src/components/Tabs"

storiesOf(`Tabs`, module)
  .add(`TabsSkeleton`, () => <TabsSkeleton>TabsSkeleton</TabsSkeleton>, {
    info: {
      text: `
          It's a functional building block, on which all other Tabs components are built on. 
          **Never used directly** in the codebase.
        `,
    },
  })
  .add(`TabSkeleton`, () => <TabSkeleton>TabSkeleton</TabSkeleton>, {
    info: {
      text: `
          It's a functional building block, on which all other Tab components are built on. 
          **Never used directly** in the codebase.
        `,
    },
  })
  .add(`BaseTabs`, () => <BaseTabs>BaseTabs</BaseTabs>)
  .add(`BaseTab`, () => <BaseTab>BaseTab</BaseTab>)
  .add(`Tabs`, () => <Tabs>Tabs</Tabs>)
  .add(`Tab`, () => <Tab>Tab</Tab>)
  .add(`NumberedTabs`, () => <NumberedTabs>NumberedTabs</NumberedTabs>)
  .add(`NumberedTab`, () => <NumberedTab>NumberedTab</NumberedTab>)

storiesOf(`Tabs/in use`, module)
  .add(`Tabs with the tabs and tab component`, () => (
    <Tabs>
      <Tab className="active" onClick={action(`Tab 1 was clicked`)}>
        ActiveTab
      </Tab>
      <Tab to={`/`} onClick={action(`Tab 2 was clicked`)}>
        InactiveTab
      </Tab>
    </Tabs>
  ))
  .add(`Numbered tabs with the tabs and tab component`, () => (
    <NumberedTabs>
      <NumberedTab
        className="done"
        onClick={action(`NumberedTab 1 was clicked`)}
      >
        <NumberedTabFigure>1</NumberedTabFigure>
        <NumberedTabLabel>NumberedDoneTab</NumberedTabLabel>
      </NumberedTab>
      <NumberedTab
        className="active"
        onClick={action(`NumberedTab 2 was clicked`)}
      >
        <NumberedTabFigure>2</NumberedTabFigure>
        <NumberedTabLabel>NumberedActiveTab</NumberedTabLabel>
      </NumberedTab>
    </NumberedTabs>
  ))
