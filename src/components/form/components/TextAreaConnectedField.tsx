/** @jsx jsx */
import { jsx } from "@emotion/core"
import { connect, getIn, FormikContext } from "formik"
import TextAreaFieldBlock from "./TextAreaFieldBlock"
import Case from "case"
import { TextAreaFieldBlockProps } from "./TextAreaFieldBlock"

export type InputConnectedFieldProps = {
  name: string;
} & TextAreaFieldBlockProps & {
    formik: FormikContext<{}>;
  }

const TextAreaConnectedField = (props: InputConnectedFieldProps) => {
  const id = `${props.name}Field`
  const label = Case.sentence(props.name)
  const error = getIn(props.formik.errors, props.name)
  const handleBlur = props.formik.handleBlur
  const handleChange = props.formik.handleChange
  const touched = getIn(props.formik.touched, props.name)
  const value = getIn(props.formik.values, props.name)

  return (
    <TextAreaFieldBlock
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

export default connect(TextAreaConnectedField)
