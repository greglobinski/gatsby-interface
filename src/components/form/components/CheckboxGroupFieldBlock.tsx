/** @jsx jsx */
import { jsx } from "@emotion/core"
import React, { ReactNode } from "react"

import CheckboxGroupField, {
  CheckboxGroupFieldControlProps,
} from "./CheckboxGroupField"
import { FormFieldLabelSize } from "./FormField.helpers"
import { ErrorValidationMode } from "../../form-skeletons/components/FormFieldSkeleton"

export type CheckboxFieldBlockProps = {
  id: string;
  label: ReactNode;
  labelSize?: FormFieldLabelSize;
  options: { label: string; value: any }[];
  error?: ReactNode;
  hint?: ReactNode;
  validationMode?: ErrorValidationMode;
} & CheckboxGroupFieldControlProps

const CheckboxGroupFieldBlock = React.forwardRef<
  HTMLInputElement,
  CheckboxFieldBlockProps
>(props => {
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
          <React.Fragment key={value}>
            <CheckboxGroupField.Option
              value={value}
              checked={fieldValue.includes(value)}
              {...rest}
            />
            <CheckboxGroupField.OptionLabel optionValue={value}>
              {label}
            </CheckboxGroupField.OptionLabel>
          </React.Fragment>
        ))}
      </CheckboxGroupField.Options>
      <CheckboxGroupField.Hint>{hint}</CheckboxGroupField.Hint>
      <CheckboxGroupField.Error validationMode={validationMode}>
        {error}
      </CheckboxGroupField.Error>
    </CheckboxGroupField>
  )
})

export default CheckboxGroupFieldBlock
