/** @jsx jsx */
import { jsx } from "@emotion/core"
import { getIn, useFormikContext } from "formik"
import Case from "case"
import {
  RadioButtonFieldBlock,
  RadioButtonFieldBlockProps,
} from "./RadioButtonFieldBlock"

export type RadioButtonConnectedFieldProps = {
  name: string
  id?: string
  label?: React.ReactNode
} & Omit<RadioButtonFieldBlockProps, "id" | "label" | "value">

export const RadioButtonConnectedField: React.FC<
  RadioButtonConnectedFieldProps
> = props => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
  } = useFormikContext()
  const error = getIn(errors, props.name)
  const isTouched = getIn(touched, props.name)
  const value = getIn(values, props.name)

  return (
    <RadioButtonFieldBlock
      id={id}
      label={label}
      error={isTouched && error}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      {...props}
    />
  )
}
