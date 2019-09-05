import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean, radios } from "@storybook/addon-knobs"

import Radio from "./Radio"
import { StoryUtils } from "../../utils/storybook"

function ControlledRadio({ name = `radioExample`, options = [] }) {
  const [value, setValue] = React.useState()

  const selectionStyle = radios(
    `selectionStyle`,
    [`standard`, `emphasized`],
    `standard`
  )

  return (
    <div>
      {options.map(({ value: optionValue, label }) => (
        <Radio
          key={optionValue}
          label={label}
          selectionStyle={selectionStyle}
          fieldName={name}
          optionValue={optionValue}
          value={value}
          onChange={e => setValue(e.target.value)}
        />
      ))}
    </div>
  )
}

storiesOf(`Radio`, module).add(`Default`, () => (
  <StoryUtils.Container>
    <div>
      <ControlledRadio
        options={[
          { value: `1`, label: `Option 1` },
          { value: `2`, label: `Option 2` },
          { value: `3`, label: `Option 3` },
        ]}
      />
    </div>
  </StoryUtils.Container>
))
