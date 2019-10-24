import React from "react"
import FormField from "./FormField"
import FormGroupField, {
  FormGroupFieldProps,
  FormGroupOptionProps,
} from "./FormGroupField"

function CheckboxGroupField(props: FormGroupFieldProps) {
  return <FormGroupField {...props} />
}

CheckboxGroupField.Label = FormGroupField.Label
CheckboxGroupField.Label.displayName = `CheckboxGroupField.Label`

export type CheckboxGroupFieldOptionProps = Omit<
  FormGroupOptionProps,
  "type" | "ref"
>

CheckboxGroupField.Option = React.forwardRef<
  HTMLInputElement,
  CheckboxGroupFieldOptionProps
>((props, ref) => <FormGroupField.Option ref={ref} type="checkbox" {...props} />)

CheckboxGroupField.OptionLabel = FormGroupField.OptionLabel
CheckboxGroupField.OptionLabel.displayName = `CheckboxGroupField.OptionLabel`
CheckboxGroupField.Hint = FormField.Hint
CheckboxGroupField.Hint.displayName = `CheckboxGroupField.Hint`
CheckboxGroupField.Error = FormField.Error
CheckboxGroupField.Error.displayName = `CheckboxGroupField.Error`

export default CheckboxGroupField
