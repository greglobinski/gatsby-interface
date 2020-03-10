/** @jsx jsx */
import { jsx } from "@emotion/core"
import React from "react"

import {
  RadioButtonField,
  RadioButtonFieldLabel,
  RadioButtonFieldOptions,
  RadioButtonFieldOptionWrapper,
  RadioButtonFieldOption,
  RadioButtonFieldOptionLabel,
  RadioButtonFieldHint,
  RadioButtonFieldError,
  RadioButtonFieldOptionProps,
} from "./RadioButtonField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type RadioButtonFieldBlockProps = {
  id: string
  label: React.ReactNode
  labelSize?: FormFieldLabelSize
  options: { label: string; value: any }[]
  error?: React.ReactNode
  hint?: React.ReactNode
  validationMode?: ErrorValidationMode
} & RadioButtonFieldOptionProps

export const RadioButtonFieldBlock = (props: RadioButtonFieldBlockProps) => {
  const {
    id,
    label,
    labelSize,
    error,
    hint,
    className,
    validationMode,
    value: fieldValue,
    options,
    ...rest
  } = props

  return (
    <RadioButtonField
      id={id}
      hasError={!!error}
      hasHint={!!hint}
      className={className}
    >
      <RadioButtonFieldLabel size={labelSize} isRequired={!!rest.required}>
        {label}
      </RadioButtonFieldLabel>
      <RadioButtonFieldOptions>
        {options.map(({ label, value }) => (
          <RadioButtonFieldOptionWrapper key={value}>
            <RadioButtonFieldOption
              value={value}
              checked={value === fieldValue}
              {...rest}
            />
            <RadioButtonFieldOptionLabel optionValue={value}>
              {label}
            </RadioButtonFieldOptionLabel>
          </RadioButtonFieldOptionWrapper>
        ))}
      </RadioButtonFieldOptions>
      <RadioButtonFieldHint>{hint}</RadioButtonFieldHint>
      <RadioButtonFieldError validationMode={validationMode}>
        {error}
      </RadioButtonFieldError>
    </RadioButtonField>
  )
}
