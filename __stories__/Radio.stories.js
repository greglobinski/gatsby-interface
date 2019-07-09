import React, { Fragment, useState } from "react"
import styled from "react-emotion"

import { storiesOf } from "@storybook/react"
import { radios, boolean } from "@storybook/addon-knobs"

import { Radio, RadioSkeleton } from "../src/components/Radio"
import { fontFamilies, fontSizes, palette, spaces } from "../src/utils/presets"

const Form = styled(`form`)`
  min-width: 20rem;
`

const InnerLabelTemplate = styled(`div`)`
  strong {
    font-size: ${fontSizes.l};
    font-weight: 800;
    font-family: ${fontFamilies.headerFontFamily};
  }
  p {
    color: ${palette.grey[600]};
    font-size: ${fontSizes.xs};
    margin: 0;
    margin-top: ${spaces[`2xs`]};
  }
`

const selectionStyles = {
  standard: `standard`,
  emphasized: `emphasized`,
}

const innerLabelCompTemplate = label => props => (
  <InnerLabelTemplate>
    <strong>{label}</strong>
    <p>This is React component</p>
  </InnerLabelTemplate>
)

const options = [
  {
    value: 1,
    label: `First Option`,
  },
  {
    value: 2,
    label: `Second Option`,
  },
  {
    value: 3,
    label: `Third Option`,
  },
]

storiesOf(`Radio`, module)
  .add(
    `RadioSkeleton`,
    () =>
      React.createElement(() => {
        const [fieldValue, setFieldValue] = useState(1)

        return options.map(option => (
          <RadioSkeleton
            key={`field${option.value}`}
            fieldName="field"
            id={`field${option.value}`}
            label={option.label}
            value={option.value}
            optionValue={fieldValue}
            onChange={() => setFieldValue(option.value)}
          />
        ))
      }),
    {
      info: {
        text: `
          It's a functional unstyled building block, on which Radio components is built on. 
        `,
      },
    }
  )
  .add(`Radio`, () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <Radio
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={option.label}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle={radios(
                `selectionStyle`,
                selectionStyles,
                `standard`
              )}
            />
          ))}
        </Form>
      )
    })
  )

storiesOf(`Radio/in use`, module).add(
  `Radio with React component as a label content`,
  () =>
    React.createElement(() => {
      const [fieldValue, setFieldValue] = useState(1)

      return (
        <Form>
          {options.map(option => (
            <Radio
              key={`field${option.value}`}
              fieldName="field"
              id={`field${option.value}`}
              label={option.label}
              InnerLabelComponent={innerLabelCompTemplate(option.label)}
              value={option.value}
              optionValue={fieldValue}
              onChange={() => setFieldValue(option.value)}
              selectionStyle="emphasized"
            />
          ))}
        </Form>
      )
    })
)
