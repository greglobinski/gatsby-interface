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

/*


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

 <CheckboxGroupField
                  id="tagsField"
                  hasError={!!(touched.tags && errors.tags)}
                  hasHint={true}
                  layout="horizontal"
                >
                  <CheckboxGroupField.Label isRequired={true}>
                    Tags
                  </CheckboxGroupField.Label>
                  <CheckboxGroupField.Options>
                    {tags.map(({ label, value }) => (
                      <React.Fragment key={value}>
                        <CheckboxGroupField.Option
                          value={value}
                          name="tags"
                          onChange={e => {
                            const target = e.currentTarget
                            let valueArray = [...values.tags] || []

                            if (target.checked) {
                              valueArray.push(value)
                            } else {
                              valueArray.splice(valueArray.indexOf(value), 1)
                            }

                            setFieldValue(`tags`, valueArray)
                          }}
                          onBlur={handleBlur}
                        />

                        <CheckboxGroupField.OptionLabel optionValue={value}>
                          {label}
                        </CheckboxGroupField.OptionLabel>
                      </React.Fragment>
                    ))}
                  </CheckboxGroupField.Options>
                  <CheckboxGroupField.Hint>
                    Check at least {TAGS_MIN_LENGTH} tags
                  </CheckboxGroupField.Hint>
                  <CheckboxGroupField.Error>
                    {touched.tags && errors.tags ? errors.tags : ``}
                  </CheckboxGroupField.Error>
                </CheckboxGroupField>
  */
