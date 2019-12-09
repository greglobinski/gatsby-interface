/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import RadioButtonField, {
  RadioButtonFieldControlProps,
} from "./RadioButtonField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type RadioButtonFieldBlockProps = {
  id: string;
  label: ReactNode;
  labelSize?: FormFieldLabelSize;
  options: { label: string; value: any }[];
  error?: ReactNode;
  hint?: ReactNode;
  validationMode?: ErrorValidationMode;
} & RadioButtonFieldControlProps

const RadioButtonFieldBlock = React.forwardRef<
  HTMLTextAreaElement,
  RadioButtonFieldBlockProps
>(props => {
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

  const isRequired = rest.required ? rest.required : false

  return (
    <RadioButtonField
      id={id}
      hasError={!!error}
      hasHint={!!hint}
      className={className}
    >
      <RadioButtonField.Label size={labelSize} isRequired={isRequired}>
        {label}
      </RadioButtonField.Label>
      <RadioButtonField.Options>
        {options.map(({ label, value }) => (
          <React.Fragment key={value}>
            <RadioButtonField.Option
              value={value}
              checked={value === fieldValue}
              {...rest}
            />
            <RadioButtonField.OptionLabel optionValue={value}>
              {label}
            </RadioButtonField.OptionLabel>
          </React.Fragment>
        ))}
      </RadioButtonField.Options>
      <RadioButtonField.Hint>{hint}</RadioButtonField.Hint>
      <RadioButtonField.Error validationMode={validationMode}>
        {error}
      </RadioButtonField.Error>
    </RadioButtonField>
  )
})

export default RadioButtonFieldBlock
