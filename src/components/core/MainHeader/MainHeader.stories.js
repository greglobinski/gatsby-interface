/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { MdArrowForward } from "react-icons/md"
import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import MainHeader from "./MainHeader"
import README from "./README.md"
import OrnamentA from "./assets/OrnamentA"
import OrnamentB from "./assets/OrnamentB"
import { breakpoints } from "../../../utils/presets"

storiesOf(`core/MainHeader`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`a heading alone`, () => (
    <StoryUtils.Container>
      <MainHeader heading="Celery quandong swiss chard chicory earthnut pea potato" />
    </StoryUtils.Container>
  ))
  .add(`with a subheading`, () => (
    <StoryUtils.Container>
      <MainHeader
        subheading="Veggies es bonus vobis"
        heading="Celery quandong swiss chard chicory earthnut pea potato."
      />
    </StoryUtils.Container>
  ))
  .add(`with a lede`, () => (
    <StoryUtils.Container>
      <MainHeader
        subheading="Veggies es bonus vobis"
        heading="Celery quandong swiss chard chicory earthnut pea potato."
        lede="Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. "
      />
    </StoryUtils.Container>
  ))
  .add(`with an action`, () => (
    <StoryUtils.Container>
      <MainHeader
        subheading="Veggies es bonus vobis"
        heading="Celery quandong swiss chard chicory earthnut pea potato."
        lede="Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. "
        actions={[{ label: `Click me`, to: `/`, icon: MdArrowForward }]}
      />
    </StoryUtils.Container>
  ))
  .add(`with two actions`, () => (
    <StoryUtils.Container>
      <MainHeader
        subheading="Veggies es bonus vobis"
        heading="Celery quandong swiss chard chicory earthnut pea potato."
        lede="Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. "
        actions={[
          { label: `Click me`, to: `/` },
          { label: `Me too!`, to: `/`, variant: `GHOST` },
        ]}
      />
    </StoryUtils.Container>
  ))
  .add(`with a note`, () => (
    <StoryUtils.Container>
      <MainHeader
        subheading="Veggies es bonus vobis"
        heading="Celery quandong swiss chard chicory earthnut pea potato."
        lede="Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. "
        actions={[{ label: `Click me`, to: `/`, icon: MdArrowForward }]}
        note="Sea lettuce water spinach gram fava bean leek  silver eggplant."
      />
    </StoryUtils.Container>
  ))
  .add(`with an ornament`, () => (
    <StoryUtils.Container>
      <MainHeader
        subheading="Veggies es bonus vobis"
        heading="Celery quandong swiss chard chicory earthnut pea potato."
        lede="Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. "
        actions={[{ label: `Click me`, to: `/`, icon: MdArrowForward }]}
        ornaments={[
          <OrnamentA
            key="ornamentA"
            css={{
              position: `absolute`,
              top: `60%`,
              right: 0,
              width: `50%`,
              height: `auto`,

              [`@media (min-width: ${breakpoints.desktop}px)`]: {
                top: `10%`,
                width: `40%`,
              },
            }}
          />,
        ]}
      />
    </StoryUtils.Container>
  ))
  .add(`with more ornaments`, () => (
    <StoryUtils.Container>
      <MainHeader
        subheading="Veggies es bonus vobis"
        heading="Celery quandong swiss chard chicory earthnut pea potato."
        lede="Soko radicchio bunya nuts gram dulse silver beet parsnip napa cabbage lotus root sea lettuce brussels sprout cabbage. "
        actions={[{ label: `Click me`, to: `/`, icon: MdArrowForward }]}
        ornaments={[
          <OrnamentA
            key="ornamentA"
            css={{
              position: `absolute`,
              top: `60%`,
              right: 0,
              width: `50%`,
              height: `auto`,

              [`@media (min-width: ${breakpoints.desktop}px)`]: {
                top: `10%`,
                width: `40%`,
              },
            }}
          />,
          <OrnamentB
            key="ornamentB"
            css={{
              bottom: `3rem`,
              display: `none`,
              left: 0,
              position: `absolute`,

              [`@media (min-width: ${breakpoints.desktop}px)`]: {
                display: `block`,
              },
            }}
          />,
        ]}
      />
    </StoryUtils.Container>
  ))
