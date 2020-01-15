/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios, boolean } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_TEXTAREA_FIELD.md"
import { action } from "@storybook/addon-actions"
import TextAreaField from "../components/TextAreaField"
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
  .add(`TextAreaField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const placeholder = text(`Placeholder`, `This is a placeholder`)
    const size: FormFieldLabelSize = radios(
      `Label size`,
      LABEL_SIZE_OPTIONS,
      `M`
    )
    const disabled = boolean(`Disabled`, false)
    const required = boolean(`Required`, false)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <TextAreaField id="example-1a" hasError={!!error} hasHint={true}>
            <TextAreaField.Wrapper>
              <TextAreaField.Label size={size} isRequired={required}>
                Comment
              </TextAreaField.Label>
              <TextAreaField.Control
                onChange={e => action(`Change`)(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
              />
              <TextAreaField.Hint>
                {hint
                  ? hint
                  : `This field is built with 'TextAreaField' and subcomponents placed explicitly as its children`}
              </TextAreaField.Hint>
              <TextAreaField.Error>{error}</TextAreaField.Error>
            </TextAreaField.Wrapper>
          </TextAreaField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
