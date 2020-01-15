/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios, boolean } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_INPUT_FIELD.md"
import { action } from "@storybook/addon-actions"
import InputField from "../components/InputField"
import { FormFieldLabelSize } from "../components/FormField.helpers"
import { enumToOptions } from "../../../utils/helpers"
import { Wrapper } from "./stories.utils"

const LABEL_SIZES: FormFieldLabelSize[] = [`L`, `M`, `S`]
const LABEL_SIZE_OPTIONS = LABEL_SIZES.reduce(enumToOptions, {})

storiesOf(`form`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })
  .add(`InputField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const placeholder = text(`Placeholder`, `This is a placeholder`)
    const size: FormFieldLabelSize = radios(
      `label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )
    const required = boolean(`Required`, false)
    const disabled = boolean(`Disabled`, false)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <InputField id="example-1a" hasError={!!error} hasHint={true}>
            <InputField.Wrapper>
              <InputField.Label size={size} isRequired={required}>
                First name
              </InputField.Label>
              <InputField.Control
                onChange={e => action(`Change`)(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
              />
              <InputField.Hint>
                {hint
                  ? hint
                  : ` This field is built with 'InputField' and subcomponents placed  explicitly as its children`}
              </InputField.Hint>
              <InputField.Error>{error}</InputField.Error>
            </InputField.Wrapper>
          </InputField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
