/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import { text } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_CHECKBOX_GROUP_FIELD.md"
import CheckboxGroupField from "../components/CheckboxGroupField"

const Wrapper: React.FC<{}> = ({ children }) => (
  <div
    css={{
      display: `flex`,
      flexDirection: `column`,
      maxWidth: `80%`,
      width: `25rem`,
    }}
  >
    {children}
  </div>
)

storiesOf(`form`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`CheckboxGroupField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const options = [
      `Assire var Anahid`,
      `Francesca Findabair`,
      `Fringilla Vigo`,
      `Ida Emean aep Sivney`,
      `Keira Metz`,
      `Margarita Laux-Antille`,
      `Philippa Eilhart`,
      `Sabrina Glevissig`,
      `Sheala de Tancarville`,
      `Triss Merigold`,
      `Yennefer of Vengerberg`,
    ].map(name => {
      return {
        label: name,
        value: name.toLowerCase().replace(/\s/g, `-`),
      }
    })

    return (
      <StoryUtils.Container>
        <Wrapper>
          <CheckboxGroupField
            id="tagsField"
            hasError={!!error}
            hasHint={!!hint}
            layout="horizontal"
          >
            <CheckboxGroupField.Label isRequired={true}>
              Tags
            </CheckboxGroupField.Label>
            <CheckboxGroupField.Options>
              {options.map(({ label, value }) => (
                <React.Fragment key={value}>
                  <CheckboxGroupField.Option value={value} name="tags" />
                  <CheckboxGroupField.OptionLabel optionValue={value}>
                    {label}
                  </CheckboxGroupField.OptionLabel>
                </React.Fragment>
              ))}
            </CheckboxGroupField.Options>
            <CheckboxGroupField.Hint>{hint}</CheckboxGroupField.Hint>
            <CheckboxGroupField.Error>{error}</CheckboxGroupField.Error>
          </CheckboxGroupField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
