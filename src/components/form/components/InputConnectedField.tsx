/** @jsx jsx */
import { jsx } from "@emotion/core"
import { connect, getIn } from "formik"
import InputFieldBlock from "./InputFieldBlock"
import Case from "case"
import { InputFieldBlockProps } from "./InputFieldBlock"

export type InputConnectedFieldProps = {
  name: string;
  formik?: any; // find better type for this
  id?: string;
  label?: React.ReactNode;
} & Omit<InputFieldBlockProps, "id" | "label">

const InputConnectedField: React.FC<InputConnectedFieldProps> = props => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const error = getIn(props.formik.errors, props.name)
  const handleBlur = props.formik.handleBlur
  const handleChange = props.formik.handleChange
  const touched = getIn(props.formik.touched, props.name)
  const value = getIn(props.formik.values, props.name)

  return (
    <InputFieldBlock
      id={id}
      label={label}
      error={touched && error && error}
      onChange={handleChange}
      onBlur={handleBlur}
      value={value}
      {...props}
    />
  )
}

export default connect(InputConnectedField)
