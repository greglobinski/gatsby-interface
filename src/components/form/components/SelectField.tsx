import React from "react"
import FormField, { FormFieldProps } from "./FormField"
import { getFinalAriaDescribedBy } from "../utils"

function SelectField(props: FormFieldProps) {
  return <FormField {...props} />
}

export type SelectFieldControlOption = {
  value: string
  label: string
}

export type SelectFieldControlProps = Omit<
  JSX.IntrinsicElements["select"],
  "id" | "aria-invalid"
> & {
  options: SelectFieldControlOption[]
}

SelectField.Control = React.forwardRef<
  HTMLSelectElement,
  SelectFieldControlProps
>(({ options, ...rest }, ref) => {
  const { id, hasError, meta } = FormField.useFormField()

  return (
    <select
      id={id}
      {...rest}
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        rest[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    >
      {options.map(renderOption)}
    </select>
  )
})
SelectField.Control.displayName = `SelectField.Control`

SelectField.Label = FormField.Label
SelectField.Label.displayName = `SelectField.Label`
SelectField.Hint = FormField.Hint
SelectField.Hint.displayName = `SelectField.Hint`
SelectField.Error = FormField.Error
SelectField.Error.displayName = `SelectField.Hint`

export default SelectField

function renderOption({ label, value }: SelectFieldControlOption) {
  return (
    <option key={value} value={value}>
      {label}
    </option>
  )
}
