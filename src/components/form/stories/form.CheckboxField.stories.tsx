/** @jsx jsx */
import { jsx } from "@emotion/core"

import { storiesOf } from "@storybook/react"
import { text, radios, boolean } from "@storybook/addon-knobs"

import { StoryUtils } from "../../../utils/storybook"
import README from "../README_CHECKBOX_FIELD.md"
import { action } from "@storybook/addon-actions"
import CheckboxField from "../components/CheckboxField"
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
  .add(`CheckboxField`, () => {
    const hint = text(`Hint`, ``)
    const error = text(`Error`, ``)
    const size: FormFieldLabelSize = radios(`size`, LABEL_SIZE_OPTIONS, `L`)
    const required = boolean(`Required`, false)

    return (
      <StoryUtils.Container>
        <Wrapper>
          <CheckboxField
            id="input-example-1a"
            hasError={!!error}
            hasHint={true}
          >
            <CheckboxField.Wrapper>
              <CheckboxField.Control
                onChange={e => action(`Change`)(e.target.value)}
                required={required}
              />
              <CheckboxField.Label size={size} isRequired={required}>
                Builds enabled
              </CheckboxField.Label>
              <CheckboxField.Hint>
                {hint
                  ? hint
                  : `This field is built with 'CheckboxField' and subcomponents placed explicitly as its children`}
              </CheckboxField.Hint>
              <CheckboxField.Error>{error}</CheckboxField.Error>
            </CheckboxField.Wrapper>
          </CheckboxField>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
