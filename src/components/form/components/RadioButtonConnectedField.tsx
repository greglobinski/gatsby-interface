/** @jsx jsx */
import { jsx } from "@emotion/core"
import { connect, getIn } from "formik"
import RadioButtonFieldBlock from "./RadioButtonFieldBlock"
import Case from "case"
import { RadioButtonFieldBlockProps } from "./RadioButtonFieldBlock"

export type RadioButtonConnectedFieldProps = {
  name: string;
  formik?: any;
  id?: string;
  label?: React.ReactNode;
  value?: string;
} & Omit<RadioButtonFieldBlockProps, "id" | "label" | "value">

const RadioButtonConnectedField: React.FC<
  RadioButtonConnectedFieldProps
> = props => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const error = getIn(props.formik.errors, props.name)
  const handleBlur = props.formik.handleBlur
  const handleChange = props.formik.handleChange
  const touched = getIn(props.formik.touched, props.name)
  const value = getIn(props.formik.values, props.name)

  return (
    <RadioButtonFieldBlock
      id={id}
      label={label}
      error={touched && error && error}
      value={value}
      onBlur={handleBlur}
      onChange={handleChange}
      {...props}
    />
  )
}

export default connect(RadioButtonConnectedField)
