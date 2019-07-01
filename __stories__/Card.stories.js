import React from "react"

import { storiesOf } from "@storybook/react"

import {
  CardSkeleton,
  BaseCard,
  Card,
  CardHeader,
  CardTitle,
  CardText,
} from "../src/components/Card"

storiesOf(`Card`, module)
  .add(`CardSkeleton`, () => <CardSkeleton>CardSkeleton</CardSkeleton>, {
    info: {
      text: `
          It's a functional building block, on which all other Card components are built on. 
          **Never used directly** in the codebase.
        `,
    },
  })
  .add(`BaseCard`, () => <BaseCard>BaseCard</BaseCard>)

storiesOf(`Card/in use`, module).add(`Card with header, title and text`, () => (
  <Card>
    <CardHeader>
      <CardTitle>Title of card</CardTitle>
    </CardHeader>
    <CardText>Description of card</CardText>
  </Card>
))
