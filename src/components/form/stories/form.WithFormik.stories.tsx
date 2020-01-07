/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import { storiesOf } from "@storybook/react"
import README from "../README_FORMIK.md"
import { StoryUtils } from "../../../utils/storybook"
import InputField from "../components/InputField"
import TextAreaField from "../components/TextAreaField"
import InputFieldBlock from "../components/InputFieldBlock"
import InputConnectedField from "../components/InputConnectedField"
import TextAreaFieldBlock from "../components/TextAreaFieldBlock"
import TextAreaConnectedField from "../components/TextAreaConnectedField"
import SelectField from "../components/SelectField"
import SelectFieldBlock from "../components/SelectFieldBlock"
import SelectConnectedField from "../components/SelectConnectedField"
import CheckboxField from "../components/CheckboxField"
import CheckboxFieldBlock from "../components/CheckboxFieldBlock"
import CheckboxConnectedField from "../components/CheckboxConnectedField"
import CheckboxGroupField from "../components/CheckboxGroupField"
import CheckboxGroupFieldBlock from "../components/CheckboxGroupFieldBlock"
import CheckboxGroupConnectedField from "../components/CheckboxGroupConnectedField"
import RadioButtonField from "../components/RadioButtonField"
import RadioButtonFieldBlock from "../components/RadioButtonFieldBlock"
import RadioButtonConnectedField from "../components/RadioButtonConnectedField"
import { Formik, Form, FormikProps } from "formik"
import { getStackStyle } from "../../Stack"
import * as Yup from "yup"
import Debug from "../../../utils/formik/Debug"
import { Button } from "../../Button"
import { MdArrowForward } from "react-icons/md"
import space from "../../../theme/space"
import { Wrapper } from "./stories.utils"

const authors = [
  ``,
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

const categories = [`article`, `essay`, `memories`].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

const tags = [`one`, `two`, `three`, `four`, `five`].map(name => {
  return {
    label: name,
    value: name.toLowerCase().replace(/\s/g, `-`),
  }
})

const Actions: React.FC<{ isSubmitting: boolean }> = ({ isSubmitting }) => {
  const [showDebug, setShowDebug] = React.useState(false)
  return (
    <React.Fragment>
      <div
        css={{
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <Button type="reset" variant="SECONDARY" tone="NEUTRAL">
          Reset
        </Button>
        <Button
          type="submit"
          loading={isSubmitting}
          rightIcon={<MdArrowForward />}
        >
          Submit
        </Button>
      </div>
      <Button
        css={{
          marginTop: space[8],
          width: `100%`,
        }}
        tone="NEUTRAL"
        size="S"
        variant="GHOST"
        onClick={() => setShowDebug(prevState => !prevState)}
      >
        {showDebug ? `Hide` : `Show`} debuger
      </Button>
      {showDebug && <Debug />}
    </React.Fragment>
  )
}

const TITLE_MIN_LENGTH = 3
const TITLE_MAX_LENGTH = 15
const DESCRIPTION_MAX_LENGTH = 50
const TAGS_MIN_LENGTH = 3

export const validationSchema = Yup.object().shape({
  title: Yup.string()
    .required(`The Title field is required.`)
    .min(
      TITLE_MIN_LENGTH,
      `Title must be at least ${TITLE_MIN_LENGTH} character long.`
    )
    .max(
      TITLE_MAX_LENGTH,
      `Title can't be longer that ${TITLE_MAX_LENGTH} characters.`
    ),
  description: Yup.string().max(
    DESCRIPTION_MAX_LENGTH,
    `Description can't be longer than ${DESCRIPTION_MAX_LENGTH} characters.`
  ),
  author: Yup.string().required(`The Author field is required.`),
  category: Yup.string().required(`The Category field is required.`),
  tags: Yup.array()
    .required("The Tags field is required")
    .min(TAGS_MIN_LENGTH, `You have to mark at least ${TAGS_MIN_LENGTH} tags`),
  agreement: Yup.bool().oneOf(
    [true],
    "You must agre with Terms and Privacy Policy"
  ),
})

interface MyFormValues {
  title: string;
  description: string;
  author: string;
  category: string;
  tags: string[];
  agreement: boolean;
}

const initailValues = {
  title: ``,
  description: ``,
  author: ``,
  category: ``,
  tags: [],
  agreement: false,
}

storiesOf(`form/Formik usage examples`, module)
  .addParameters({
    options: {
      showPanel: true,
    },
    readme: {
      sidebar: README,
    },
  })

  .add(`with explicit children`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <Formik
            validationSchema={validationSchema}
            initialValues={initailValues}
            onSubmit={() => {
              setTimeout(() => {
                alert("Form submitted")
              }, 1000)
            }}
          >
            {({
              values,
              touched,
              handleChange,
              setFieldValue,
              handleBlur,
              isSubmitting,
              errors,
            }: FormikProps<MyFormValues>) => (
              <Form noValidate css={[getStackStyle({ gap: 8 })]}>
                <InputField
                  id="titleField"
                  hasError={!!(touched.title && errors.title)}
                  hasHint={true}
                >
                  <InputField.Wrapper>
                    <InputField.Label isRequired={true}>Title</InputField.Label>
                    <InputField.Control
                      name="title"
                      value={values.title}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      required
                    />
                    <InputField.Hint>
                      At least {TITLE_MIN_LENGTH} and not more than{" "}
                      {TITLE_MAX_LENGTH} characters
                    </InputField.Hint>
                    <InputField.Error>
                      {touched.title && errors.title ? errors.title : ``}
                    </InputField.Error>
                  </InputField.Wrapper>
                </InputField>

                <TextAreaField
                  id="descriptionField"
                  hasError={!!(touched.description && errors.description)}
                  hasHint={true}
                >
                  <TextAreaField.Wrapper>
                    <TextAreaField.Label>Description</TextAreaField.Label>
                    <TextAreaField.Control
                      name="description"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.description}
                    />
                    <TextAreaField.Hint>{`Be concise, the field can't be longer than ${DESCRIPTION_MAX_LENGTH} characters`}</TextAreaField.Hint>
                    <TextAreaField.Error>
                      {touched.description && errors.description
                        ? errors.description
                        : ``}
                    </TextAreaField.Error>
                  </TextAreaField.Wrapper>
                </TextAreaField>

                <SelectField
                  id="authorField"
                  hasError={!!(touched.author && errors.author)}
                >
                  <SelectField.Wrapper>
                    <SelectField.Label isRequired={true}>
                      Author
                    </SelectField.Label>
                    <SelectField.Control
                      name="author"
                      options={authors}
                      value={values.author}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <SelectField.Error>
                      {touched.author && errors.author ? errors.author : ``}
                    </SelectField.Error>
                  </SelectField.Wrapper>
                </SelectField>

                <RadioButtonField
                  id="categoryField"
                  hasError={!!(touched.category && errors.category)}
                >
                  <RadioButtonField.Label isRequired={true}>
                    Category
                  </RadioButtonField.Label>
                  <RadioButtonField.Options>
                    {categories.map(({ label, value }) => (
                      <RadioButtonField.OptionWrapper key={value}>
                        <RadioButtonField.Option
                          value={value}
                          name="category"
                          onChange={handleChange}
                          onBlur={handleBlur}
                          checked={values.category === value}
                        />
                        <RadioButtonField.OptionLabel optionValue={value}>
                          {label}
                        </RadioButtonField.OptionLabel>
                      </RadioButtonField.OptionWrapper>
                    ))}
                  </RadioButtonField.Options>
                  <RadioButtonField.Error>
                    {touched.category && errors.category ? errors.category : ``}
                  </RadioButtonField.Error>
                </RadioButtonField>

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
                      <CheckboxGroupField.OptionWrapper key={value}>
                        <CheckboxGroupField.Option
                          value={value}
                          name="tags"
                          onChange={e => {
                            const target = e.currentTarget
                            const valueArray = [...values.tags] || []

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
                      </CheckboxGroupField.OptionWrapper>
                    ))}
                  </CheckboxGroupField.Options>
                  <CheckboxGroupField.Hint>
                    Check at least {TAGS_MIN_LENGTH} tags
                  </CheckboxGroupField.Hint>
                  <CheckboxGroupField.Error>
                    {touched.tags && errors.tags ? errors.tags : ``}
                  </CheckboxGroupField.Error>
                </CheckboxGroupField>

                <CheckboxField
                  id="agreementField"
                  hasError={!!(touched.agreement && errors.agreement)}
                >
                  <CheckboxField.Wrapper>
                    <CheckboxField.Control
                      name="agreement"
                      value={+values.agreement}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <CheckboxField.Label size={`S`}>
                      I have read and agree with the <a href="/">Terms</a> and{" "}
                      <a href="/">Privacy Policy</a>. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry.
                    </CheckboxField.Label>

                    <CheckboxField.Error>
                      {touched.agreement && errors.agreement
                        ? errors.agreement
                        : ``}
                    </CheckboxField.Error>
                  </CheckboxField.Wrapper>
                </CheckboxField>

                <Actions isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`with field blocks`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <Formik
            validationSchema={validationSchema}
            initialValues={initailValues}
            onSubmit={() => {
              setTimeout(() => {
                alert("Form submitted")
              }, 1000)
            }}
          >
            {({
              values,
              touched,
              handleChange,
              setFieldValue,
              handleBlur,
              setFieldTouched,
              isSubmitting,
              errors,
            }: FormikProps<MyFormValues>) => (
              <Form noValidate css={[getStackStyle({ gap: 8 })]}>
                <InputFieldBlock
                  id="titleField"
                  label="Title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.title && errors.title ? errors.title : ``}
                  hint={`At least ${TITLE_MIN_LENGTH} and not more than ${TITLE_MAX_LENGTH} characters`}
                  required
                />

                <TextAreaFieldBlock
                  id="descriptionField"
                  label="Description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.description && errors.description
                      ? errors.description
                      : ``
                  }
                  hint={`Be concise, the field can't be longer than ${DESCRIPTION_MAX_LENGTH} characters`}
                />

                <SelectFieldBlock
                  id="authorField"
                  label="Author"
                  name="author"
                  options={authors}
                  value={values.author}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={touched.author && errors.author ? errors.author : ``}
                  required
                />

                <RadioButtonFieldBlock
                  id="categoryField"
                  label="Category"
                  name="category"
                  value={values.category}
                  options={categories}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.category && errors.category ? errors.category : ``
                  }
                  required
                />

                <CheckboxGroupFieldBlock
                  id="tagsField"
                  layout="horizontal"
                  label="Tags"
                  name="tags"
                  value={values.tags}
                  options={tags}
                  onChange={e => {
                    const target = e.currentTarget
                    const valueArray = [...values.tags] || []

                    if (target.checked) {
                      valueArray.push(target.value)
                    } else {
                      valueArray.splice(valueArray.indexOf(target.value), 1)
                    }

                    setFieldValue(`tags`, valueArray)
                  }}
                  onBlur={() => {
                    setFieldTouched(`tags`, true)
                  }}
                  error={touched.tags && errors.tags ? errors.tags : ``}
                  hint={`Check at least ${TAGS_MIN_LENGTH} tags`}
                  required
                />

                <CheckboxFieldBlock
                  id="agreementField"
                  label={
                    <React.Fragment>
                      I have read and agree with the <a href="/">Terms</a> and{" "}
                      <a href="/">Privacy Policy</a>. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry.
                    </React.Fragment>
                  }
                  labelSize="S"
                  name="agreement"
                  value={+values.agreement}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  error={
                    touched.agreement && errors.agreement
                      ? errors.agreement
                      : ``
                  }
                />

                <Actions isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
        </Wrapper>
      </StoryUtils.Container>
    )
  })

  .add(`with connected fields`, () => {
    return (
      <StoryUtils.Container>
        <Wrapper>
          <Formik
            validationSchema={validationSchema}
            initialValues={initailValues}
            onSubmit={() => {
              setTimeout(() => {
                alert("Form submitted")
              }, 1000)
            }}
          >
            {({ isSubmitting }) => (
              <Form noValidate css={[getStackStyle({ gap: 8 })]}>
                <InputConnectedField
                  name="title"
                  hint={`At least ${TITLE_MIN_LENGTH} and not more than ${TITLE_MAX_LENGTH} characters`}
                  required
                />

                <TextAreaConnectedField
                  name="description"
                  hint={`Be concise, the field can't be longer than ${DESCRIPTION_MAX_LENGTH} characters`}
                />

                <SelectConnectedField
                  name="author"
                  options={authors}
                  required
                />

                <RadioButtonConnectedField
                  name="category"
                  options={categories}
                  required
                />

                <CheckboxGroupConnectedField
                  name="tags"
                  options={tags}
                  layout="horizontal"
                  hint={`Check at least ${TAGS_MIN_LENGTH} tags`}
                  required
                />

                <CheckboxConnectedField
                  name="agreement"
                  label={
                    <React.Fragment>
                      I have read and agree with the <a href="/">Terms</a> and{" "}
                      <a href="/">Privacy Policy</a>. Lorem Ipsum is simply
                      dummy text of the printing and typesetting industry.
                    </React.Fragment>
                  }
                  labelSize="S"
                />

                <Actions isSubmitting={isSubmitting} />
              </Form>
            )}
          </Formik>
        </Wrapper>
      </StoryUtils.Container>
    )
  })
