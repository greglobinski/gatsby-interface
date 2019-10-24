import React from "react"
import FormField from "./FormField"
import FormGroupField, {
  FormGroupFieldProps,
  FormGroupOptionProps,
} from "./FormGroupField"

function RadioButtonField(props: FormGroupFieldProps) {
  return <FormGroupField {...props} />
}

RadioButtonField.Label = FormGroupField.Label
RadioButtonField.Label.displayName = `RadioButtonField.Label`

export type RadioButtonFieldOptionProps = Omit<
  FormGroupOptionProps,
  "type" | "ref"
>

RadioButtonField.Option = React.forwardRef<
  HTMLInputElement,
  RadioButtonFieldOptionProps
>((props, ref) => <FormGroupField.Option ref={ref} type="radio" {...props} />)

RadioButtonField.OptionLabel = FormGroupField.OptionLabel
RadioButtonField.OptionLabel.displayName = `RadioButtonField.OptionLabel`
RadioButtonField.Hint = FormField.Hint
RadioButtonField.Hint.displayName = `RadioButtonField.Hint`
RadioButtonField.Error = FormField.Error
RadioButtonField.Error.displayName = `RadioButtonField.Error`

export default RadioButtonField
