/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"
import { connect, getIn } from "formik"
import CheckboxGroupFieldBlock from "./CheckboxGroupFieldBlock"
import Case from "case"
import { CheckboxFieldBlockProps } from "./CheckboxGroupFieldBlock"

export type CheckboxGroupConnectedFieldProps = {
  name: string;
  formik?: any;
  id?: string;
  label?: React.ReactNode;
  value?: string;
} & Omit<CheckboxFieldBlockProps, "id" | "label" | "value">

const CheckboxGroupConnectedField: React.FC<
  CheckboxGroupConnectedFieldProps
> = props => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const error = getIn(props.formik.errors, props.name)
  const setFieldTouched = props.formik.setFieldTouched
  const setFieldValue = props.formik.setFieldValue
  const touched = getIn(props.formik.touched, props.name)
  const value = getIn(props.formik.values, props.name)

  return (
    <CheckboxGroupFieldBlock
      id={id}
      label={label}
      error={touched && error && error}
      value={value}
      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        const target = e.currentTarget
        const valueArray = [...value] || []

        if (target.checked) {
          valueArray.push(target.value)
        } else {
          valueArray.splice(valueArray.indexOf(target.value), 1)
        }

        setFieldValue(props.name, valueArray)
      }}
      onBlur={() => {
        setFieldTouched(props.name, true)
      }}
      {...props}
    />
  )
}

export default connect(CheckboxGroupConnectedField)
