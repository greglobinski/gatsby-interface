/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import CheckboxGroupField from "./CheckboxGroupField"
import { FormGroupFieldOptionProps } from "./FormGroupField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type CheckboxFieldBlockProps = {
  id: string;
  label: React.ReactNode;
  labelSize?: FormFieldLabelSize;
  options: { label: string; value: any }[];
  layout: `horizontal` | `vertical`;
  error?: React.ReactNode;
  hint?: React.ReactNode;
  validationMode?: ErrorValidationMode;
  value: any[];
} & Omit<FormGroupFieldOptionProps, "value">

const CheckboxGroupFieldBlock = (props: CheckboxFieldBlockProps) => {
  const {
    id,
    label,
    layout,
    labelSize,
    options,
    error,
    hint,
    className,
    validationMode,
    value: fieldValue,
    ...rest
  } = props

  const isRequired = rest.required ? rest.required : false

  return (
    <CheckboxGroupField
      id={id}
      hasError={!!error}
      hasHint={!!hint}
      layout={layout}
      className={className}
    >
      <CheckboxGroupField.Label size={labelSize} isRequired={isRequired}>
        {label}
      </CheckboxGroupField.Label>
      <CheckboxGroupField.Options>
        {options.map(({ label, value }) => (
          <CheckboxGroupField.OptionWrapper key={value}>
            <CheckboxGroupField.Option
              value={value}
              checked={fieldValue.includes(value)}
              {...rest}
            />
            <CheckboxGroupField.OptionLabel optionValue={value}>
              {label}
            </CheckboxGroupField.OptionLabel>
          </CheckboxGroupField.OptionWrapper>
        ))}
      </CheckboxGroupField.Options>
      <CheckboxGroupField.Hint>{hint}</CheckboxGroupField.Hint>
      <CheckboxGroupField.Error validationMode={validationMode}>
        {error}
      </CheckboxGroupField.Error>
    </CheckboxGroupField>
  )
}

export default CheckboxGroupFieldBlock
