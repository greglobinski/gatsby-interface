/** @jsx jsx */
import { jsx } from "@emotion/core"
import { connect, getIn } from "formik"
import InputFieldBlock from "./InputFieldBlock"
import Case from "case"

const InputConnectedField = props => {
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

/*

different approach, using Formik Field to render FieldBlock

const InputConnectedField = props => {
  return (
    <Field name="firstName">
      {({ field, form }) => {
        const id = `${props.name}Field`
        const label = Case.sentence(props.name)
        const error = form.touched[props.name] && form.errors[props.name]

        return (
          <InputFieldBlock
            id={id}
            label={label}
            error={error}
            {...field}
            {...props}
          />
        )
      }}
    </Field>
  )
}

export default connect(InputConnectedField)

*/
