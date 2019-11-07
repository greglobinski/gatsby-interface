import React from "react"
import FormField, { FormFieldProps } from "./FormField"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

function TextAreaField(props: FormFieldProps) {
  return <FormField {...props} />
}

type TextAreaFieldControlProps = OmitControlProps<
  JSX.IntrinsicElements["textarea"]
>

TextAreaField.Control = React.forwardRef<
  HTMLTextAreaElement,
  TextAreaFieldControlProps
>((props, ref) => {
  const { id, hasError, meta } = FormField.useFormField()

  return (
    <textarea
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
})
TextAreaField.Control.displayName = `TextAreaField.Control`

TextAreaField.Label = FormField.Label
TextAreaField.Label.displayName = `TextAreaField.Label`
TextAreaField.Hint = FormField.Hint
TextAreaField.Hint.displayName = `TextAreaField.Hint`
TextAreaField.Error = FormField.Error
TextAreaField.Error.displayName = `TextAreaField.Hint`

export default TextAreaField
