import React from "react"
import FormField, { FormFieldProps } from "./FormField"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

function SingleCheckboxField(props: FormFieldProps) {
  return <FormField {...props} />
}

export type SingleCheckboxFieldControlProps = Omit<
  OmitControlProps<JSX.IntrinsicElements["input"]>,
  "type"
>

SingleCheckboxField.Control = React.forwardRef<
  HTMLInputElement,
  SingleCheckboxFieldControlProps
>((props, ref) => {
  const { id, hasError, meta } = FormField.useFormField()

  return (
    <input
      id={id}
      {...props}
      type="checkbox"
      aria-describedby={getFinalAriaDescribedBy(
        meta.controlDescribedBy,
        props[`aria-describedby`]
      )}
      aria-invalid={hasError}
      ref={ref}
    />
  )
})
SingleCheckboxField.Control.displayName = `SingleCheckboxField.Control`

SingleCheckboxField.Label = FormField.Label
SingleCheckboxField.Label.displayName = `SingleCheckboxField.Label`
SingleCheckboxField.Hint = FormField.Hint
SingleCheckboxField.Hint.displayName = `SingleCheckboxField.Hint`
SingleCheckboxField.Error = FormField.Error
SingleCheckboxField.Error.displayName = `SingleCheckboxField.Hint`

export default SingleCheckboxField
