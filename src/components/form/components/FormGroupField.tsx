import React from "react"
import FormField, { FormFieldProps, FormFieldLabelProps } from "./FormField"
import { getFinalAriaDescribedBy } from "../utils"
import { OmitControlProps } from "../sharedTypes"

export type FormGroupFieldProps = FormFieldProps &
  Pick<JSX.IntrinsicElements["fieldset"], "className" | "style">

function FormGroupField({
  id,
  hasError,
  hasHint,
  children,
  className,
  style,
}: FormGroupFieldProps) {
  return (
    <FormField id={id} hasError={hasError} hasHint={hasHint}>
      <fieldset id={id} className={className} style={style}>
        {children}
      </fieldset>
    </FormField>
  )
}

export type FormGroupFieldLabelProps = Omit<
  JSX.IntrinsicElements["legend"],
  "ref"
>

const FormGroupFieldLabel: React.FC<FormGroupFieldLabelProps> = props => (
  <legend {...props} />
)

export type FormGroupOptionProps = Omit<
  OmitControlProps<JSX.IntrinsicElements["input"]>,
  "value" | "name"
> & {
  name: string // Force require "name" attribute
  value: string // Force require "value" attribute
}

const GroupFieldOption = React.forwardRef<
  HTMLInputElement,
  FormGroupOptionProps
>((props, ref) => {
  const { id, hasError, meta } = FormField.useFormField()

  // We have to set aria-describedby for EACH option (see https://russmaxdesign.github.io/accessible-error-fieldset/)
  return (
    <input
      id={getGroupOptionId(id, props.value)}
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

type GroupFieldOptionLabelProps = FormFieldLabelProps & { optionValue: string }

const GroupFieldOptionLabel: React.FC<GroupFieldOptionLabelProps> = ({
  optionValue,
  ...rest
}) => {
  const { id } = FormField.useFormField()

  return <label htmlFor={getGroupOptionId(id, optionValue)} {...rest} />
}

FormGroupField.Label = FormGroupFieldLabel
FormGroupField.Label.displayName = `FormGroupField.Label`
FormGroupField.Option = GroupFieldOption
FormGroupField.Option.displayName = `FormGroupField.Option`
FormGroupField.OptionLabel = GroupFieldOptionLabel
FormGroupField.OptionLabel.displayName = `FormGroupField.OptionLabel`

export default FormGroupField

function getGroupOptionId(fieldId: string, optionValue: string) {
  return `${fieldId}__option--${optionValue}`
}
