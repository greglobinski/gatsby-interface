import React from "react"

import { storiesOf } from "@storybook/react"
import { text, boolean, radios } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README.md"
import { action } from "@storybook/addon-actions"
import InputField from "../components/InputField"
import SingleCheckboxField from "../components/SingleCheckboxField"
import TextAreaField from "../components/TextAreaField"
import CheckboxGroupField from "../components/CheckboxGroupField"
import RadioButtonField from "../components/RadioButtonField"
import SelectField from "../components/SelectField"

storiesOf(`form`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`Default`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const options = [
      `Assire var Anahid`,
      `Francesca Findabair`,
      `Fringilla Vigo`,
      `Ida Emean aep Sivney`,
      `Keira Metz`,
      `Margarita Laux-Antille`,
      `Philippa Eilhart`,
      `Sabrina Glevissig`,
      `Sheala de Tancarville`,
      `Triss Merigold`,
      `Yennefer of Vengerberg`,
    ].map(name => {
      return {
        label: name,
        value: name.toLowerCase().replace(/\s/g, `-`),
      }
    })

    return (
      <StoryUtils.Container>
        <div>
          <InputField id="input-example" hasError={!!error} hasHint={!!hint}>
            <div>
              <InputField.Label>Input</InputField.Label>
              <InputField.Control
                onChange={e => action(`Change`)(e.target.value)}
              />
              <InputField.Error>{error}</InputField.Error>
              <InputField.Hint>{hint}</InputField.Hint>
            </div>
          </InputField>
          <br />
          <TextAreaField
            id="textarea-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <div>
              <TextAreaField.Label>Text Area</TextAreaField.Label>
              <TextAreaField.Control
                onChange={e => action(`Change`)(e.target.value)}
              />
              <TextAreaField.Error>{error}</TextAreaField.Error>
              <TextAreaField.Hint>{hint}</TextAreaField.Hint>
            </div>
          </TextAreaField>
          <br />
          <SelectField id="select-example" hasError={!!error} hasHint={!!hint}>
            <div>
              <SelectField.Label>Select</SelectField.Label>
              <SelectField.Control
                options={options}
                onChange={e => action(`Change`)(e.target.value)}
              />
              <SelectField.Error>{error}</SelectField.Error>
              <SelectField.Hint>{hint}</SelectField.Hint>
            </div>
          </SelectField>
          <br />
          <SingleCheckboxField id="checkbox-example">
            <div>
              <SingleCheckboxField.Control
                onChange={e => action(`Change`)(e.target.value)}
              />
              <SingleCheckboxField.Label>
                Single checkbox
              </SingleCheckboxField.Label>
              <SingleCheckboxField.Error>{error}</SingleCheckboxField.Error>
              <SingleCheckboxField.Hint>{hint}</SingleCheckboxField.Hint>
            </div>
          </SingleCheckboxField>
          <br />
          <CheckboxGroupField
            id="checkbox-group-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <CheckboxGroupField.Label>Checkbox group</CheckboxGroupField.Label>
            {options.map(({ label, value }) => (
              <React.Fragment key={value}>
                <CheckboxGroupField.Option
                  value={value}
                  name="checkbox-group"
                />
                <CheckboxGroupField.OptionLabel optionValue={value}>
                  {label}
                </CheckboxGroupField.OptionLabel>
              </React.Fragment>
            ))}
            <CheckboxGroupField.Error>{error}</CheckboxGroupField.Error>
            <CheckboxGroupField.Hint>{hint}</CheckboxGroupField.Hint>
          </CheckboxGroupField>
          <br />
          <RadioButtonField
            id="radio-group-example"
            hasError={!!error}
            hasHint={!!hint}
          >
            <RadioButtonField.Label>Radio button</RadioButtonField.Label>
            {options.map(({ label, value }) => (
              <React.Fragment key={value}>
                <RadioButtonField.Option value={value} name="radio-button" />
                <RadioButtonField.OptionLabel optionValue={value}>
                  {label}
                </RadioButtonField.OptionLabel>
              </React.Fragment>
            ))}
            <RadioButtonField.Error>{error}</RadioButtonField.Error>
            <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
          </RadioButtonField>
        </div>
      </StoryUtils.Container>
    )
  })
