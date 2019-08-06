/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { action } from "@storybook/addon-actions"
import { MdArrowForward } from "react-icons/md"
import { boolean, radios } from "@storybook/addon-knobs"

import {
  BUTTON_SIZES,
  BUTTON_TONES,
  BUTTON_VARIANTS,
} from "../../../utils/options"
import Button from "./Button"
import {
  PrimaryButton,
  SecondaryButton,
  CancelButton,
  SuccessButton,
  TextButton,
  PrimaryDeleteButton,
  SecondaryDeleteButton,
} from "./Buttons"
import README_MAIN from "./README_MAIN.md"
import README_ICONS from "./README_ICONS.md"
import README_CUSTOM_STYLING from "./README_CUSTOM_STYLING.md"
import README_MANUAL_STYLING from "./README_MANUAL_STYLING.md"
import README_LEGACY from "./README_LEGACY.md"
import { colors, styles } from "../../../utils/presets"

storiesOf(`Button`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README_MAIN,
      includePropTables: [Button],
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
      <Button
        onClick={action(`Button was clicked`)}
        size={radios(`size`, BUTTON_SIZES, `L`)}
        tone={radios(`tone`, BUTTON_TONES, `STANDARD`)}
      >
        Button variant 'PRIMARY'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        variant={`SECONDARY`}
        size={radios(`size`, BUTTON_SIZES, `L`)}
        tone={radios(`tone`, BUTTON_TONES, `STANDARD`)}
      >
        Button variant 'SECONDARY'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        variant={`GHOST`}
        size={radios(`size`, BUTTON_SIZES, `L`)}
        tone={radios(`tone`, BUTTON_TONES, `STANDARD`)}
      >
        Button variant 'GHOST'
      </Button>
    </div>
  ))
  .add(`sizes`, () => (
    <div
      css={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        "& > button": { margin: `20px` },
      }}
    >
      <Button
        onClick={action(`Button was clicked`)}
        size={`XL`}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        tone={radios(`tone`, BUTTON_TONES, `STANDARD`)}
      >
        Button size 'XL'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        tone={radios(`tone`, BUTTON_TONES, `STANDARD`)}
      >
        Button size 'L'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        size={`M`}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        tone={radios(`tone`, BUTTON_TONES, `STANDARD`)}
      >
        Button size 'M'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        size={`S`}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        tone={radios(`tone`, BUTTON_TONES, `STANDARD`)}
      >
        Button size 'S'
      </Button>
    </div>
  ))
  .add(`tones`, () => (
    <div
      css={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        "& > button": { margin: `20px` },
      }}
    >
      <Button
        onClick={action(`Button was clicked`)}
        tone={`STANDARD`}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        size={radios(`size`, BUTTON_SIZES, `L`)}
      >
        Button tone 'STANDARD'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        tone={`SUCCESS`}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        size={radios(`size`, BUTTON_SIZES, `L`)}
      >
        Button tone 'SUCCESS'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        tone={`DANGER`}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        size={radios(`size`, BUTTON_SIZES, `L`)}
      >
        Button tone 'DANGER'
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        tone={`NEUTRAL`}
        variant={radios(`variant`, BUTTON_VARIANTS, `PRIMARY`)}
        size={radios(`size`, BUTTON_SIZES, `L`)}
      >
        Button tone 'NEUTRAL'
      </Button>
    </div>
  ))
  .add(`in 'loading' state`, () => (
    <div
      css={{
        display: `flex`,
        flexDirection: `column`,
        alignItems: `flex-start`,
        "& > button": { margin: `20px` },
      }}
    >
      <Button onClick={action(`Button was clicked`)} loading={true}>
        Button in loading state
      </Button>
      <Button
        onClick={action(`Button was clicked`)}
        loading={true}
        loadingLabel={`Custom loading label`}
      >
        Button in loading state
      </Button>
    </div>
  ))
  .add(
    `with icons`,
    () => (
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          "& > button": { margin: `20px` },
        }}
      >
        <Button onClick={action(`Button was clicked`)}>
          On the right
          <MdArrowForward />
        </Button>
        <Button onClick={action(`Button was clicked`)}>
          <MdArrowForward /> On the left
        </Button>

        <Button
          onClick={action(`Button was clicked`)}
          label="With default icon"
        />
      </div>
    ),
    {
      readme: {
        sidebar: README_ICONS,
      },
    }
  )
  .add(
    `override/extend styles`,
    () => (
      <Button
        onClick={action(`Button was clicked`)}
        label={`Button with custom style`}
        css={{
          color: colors.purple[60],
          background: colors.yellow[60],
          borderColor: colors.yellow[60],

          "&:hover:not([disabled])": {
            color: colors.white,
          },
        }}
      />
    ),
    {
      readme: {
        sidebar: README_CUSTOM_STYLING,
      },
    }
  )
  .add(
    `manually applied styles`,
    () => (
      <button
        css={{
          ...styles.button.base(),
          ...styles.button.sizes[`L`],
          ...styles.button.variants[`PRIMARY`](styles.tones[`STANDARD`]),
        }}
      >
        I'm a &lt;button&gt; but I look like the &lt;Button&gt;
      </button>
    ),
    {
      readme: {
        sidebar: README_MANUAL_STYLING,
      },
    }
  )
  .add(
    `legacy Buttons`,
    () => (
      <div
        css={{
          display: `flex`,
          flexDirection: `column`,
          alignItems: `flex-start`,
          "& > button": { margin: `20px` },
        }}
      >
        <PrimaryButton>PrimaryButton</PrimaryButton>
        <SecondaryButton>SecondaryButton</SecondaryButton>
        <CancelButton>CancelButton</CancelButton>
        <SuccessButton>SuccessButton</SuccessButton>
        <TextButton>TextButton</TextButton>
        <PrimaryDeleteButton>PrimaryDeleteButton</PrimaryDeleteButton>
        <SecondaryDeleteButton>SecondaryDeleteButton</SecondaryDeleteButton>
      </div>
    ),
    {
      readme: {
        sidebar: README_LEGACY,
      },
    }
  )
