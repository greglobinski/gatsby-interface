import React from "react"
import FormField, { FormFieldProps } from "./FormField"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

function InputField(props: FormFieldProps) {
  return <FormField {...props} />
}

export type InputFieldControlProps = OmitControlProps<
  JSX.IntrinsicElements["input"]
>

InputField.Control = React.forwardRef<HTMLInputElement, InputFieldControlProps>(
  (props, ref) => {
    const { id, hasError, meta } = FormField.useFormField()

    return (
      <input
        id={id}
        {...props}
        aria-describedby={getFinalAriaDescribedBy(
          meta.controlDescribedBy,
          props[`aria-describedby`]
        )}
        aria-invalid={hasError}
        ref={ref}
      />
    )
  }
)
InputField.Control.displayName = `InputField.Control`

InputField.Label = FormField.Label
InputField.Label.displayName = `InputField.Label`
InputField.Hint = FormField.Hint
InputField.Hint.displayName = `InputField.Hint`
InputField.Error = FormField.Error
InputField.Error.displayName = `InputField.Hint`

export default InputField
